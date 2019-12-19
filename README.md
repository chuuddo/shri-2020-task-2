## Технологии, фреймворки и библиотеки

### [Rollup](https://github.com/rollup/rollup)
Собирает весь проект в один файл и с помощью параметров 
`format: "umd", name: "lint", extend: true` добавляет возможность использовать 
этот файл и в браузере, и в NodeJS. 

Подсмотрел чем собирается библиотека `json-to-ast`.
Настроил, все заработало и код бандла показался очень читабельным, решил оставить.

### [ESLint](https://github.com/eslint/eslint)
Анализирует код и выводит все несоответствия исходного кода заданным правилам
как синтаксическим, так и стилистическим. Помогает поддерживать единый стиль кода во всем проекте.

### [Husky](https://github.com/typicode/husky) + [lint-staged](https://github.com/okonet/lint-staged)
Настроен `pre-commit git hook` запускающий линтинг JS кода и прогон тестов перед каждым коммитом. 
Необходим для того, чтобы в репозиторий не попадал код с ошибками и красными тестами.

### [Jest](https://github.com/facebook/jest)
Тестовый фреймворк. Выбрал самый популярный по npm.

### [json-to-ast](https://github.com/vtrushin/json-to-ast)
Парсер, который преобразует JSON строку в абстрактное синтаксическое дерево (AST).
С помощью AST можно перемещаться по дереву без необходимости знать конкретную структуру и проводить различные анализы элементов.
Кроме того AST дерево содержит информацию о позиции каждого элемента.

Выбрал благодаря подсказке в 3 задании. Поиски альтернативных JSON парсеров в npm не увенчались успехом.
