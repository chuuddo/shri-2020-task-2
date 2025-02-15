import { getProperty } from "../helpers/ast";
import error from "../helpers/error";

const code = "TEXT.INVALID_H3_POSITION";
const text = "Заголовок третьего уровня не может находиться перед заголовком второго уровня.";

export default report => {
  const scopes = [{ root: undefined, headers: [] }];
  return {
    enter: node => {
      const blockName = getProperty(node, "block");
      if (blockName === "text") {
        const type = getProperty(node, "mods", "type");
        const { headers } = scopes[scopes.length - 1];
        if (type === "h3") {
          headers.push(node);
        } else if (type === "h2") {
          headers.forEach(x => {
            report(error(code, text, x.loc));
          });
          headers.length = 0;
        }
      } else if (blockName && !getProperty(node, "elem")) {
        scopes.push({ root: node, headers: [] });
      }
    },
    leave: node => {
      if (scopes.length) {
        const { root } = scopes[scopes.length - 1];
        if (node === root) {
          scopes.pop();
        }
      }
    }
  };
};
