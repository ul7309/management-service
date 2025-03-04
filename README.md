# ManagementService

This project was generated using [Angular CLI](https://github.com/angular/angular-cli) version 19.1.1.

## Development server

To start a local development server, run:

```bash
ng serve
```

Once the server is running, open your browser and navigate to `http://localhost:4200/`. The application will automatically reload whenever you modify any of the source files.

## Code scaffolding

Angular CLI includes powerful code scaffolding tools. To generate a new component, run:

```bash
ng generate component component-name
```

For a complete list of available schematics (such as `components`, `directives`, or `pipes`), run:

```bash
ng generate --help
```

## Building

To build the project run:

```bash
ng build
```

This will compile your project and store the build artifacts in the `dist/` directory. By default, the production build optimizes your application for performance and speed.

## Running unit tests

To execute unit tests with the [Karma](https://karma-runner.github.io) test runner, use the following command:

```bash
ng test
```

## Running end-to-end tests

For end-to-end (e2e) testing, run:

```bash
ng e2e
```

Angular CLI does not come with an end-to-end testing framework by default. You can choose one that suits your needs.

## Additional Resources

For more information on using the Angular CLI, including detailed command references, visit the [Angular CLI Overview and Command Reference](https://angular.dev/tools/cli) page.

# Структура проекта

Проект построен по модульной структуре, что обеспечивает разделение ответственности и упрощает поддержку и масштабирование. Основными принципами являются:

* **Разделение по функциональности:** Код организован в отдельные модули, каждый из которых отвечает за конкретную часть приложения (например, сотрудники, департаменты).
* **Re-usability через `shared`:** Общие компоненты, страницы, сервисы и модели, используемые несколькими модулями, находятся в папке `shared`.
* **Модульная организация:** Каждый модуль (например, `employees` или `departments`) имеет свою собственную структуру `components`, `pages`, `services`, `models` и файлы роутинга.

**Обзор структуры:**

* **`app`:** Корневая директория приложения.
* **`layout`:** Содержит общие элементы layout приложения.
* **`shared`:** Содержит компоненты, страницы, сервисы и модели, которые используются в нескольких модулях. Эта директория помогает избежать дублирования кода. Импортируется **по требованию** только тогда, когда это необходимо.
* **`employees`:** Модуль, отвечающий за управление сотрудниками. Содержит:
    * **`components`:** UI компоненты, специфичные для отображения и взаимодействия с данными о сотрудниках.
    * **`pages`:** Страницы для отображения списков сотрудников, деталей отдельных сотрудников, а также страницы для создания и редактирования информации о сотрудниках.
    * **`services`:** Сервисы для работы с API сотрудников (получение данных, отправка изменений и т.д.).
    * **`models`:** Определения типов данных и интерфейсов, связанных с сотрудниками.
    * **`employees.routes.ts`:** Файл, определяющий маршруты, относящиеся к модулю сотрудников.
* **`departaments`:** Модуль, отвечающий за управление департаментами. Имеет аналогичную структуру с модулем `employees`. Содержит:
    * **`components`:** UI компоненты, специфичные для отображения и взаимодействия с данными о департаментах.
    * **`pages`:** Страницы для отображения списков департаментов, деталей отдельных департаментов, а также страницы для создания и редактирования информации о департаментах.
    * **`services`:** Сервисы для работы с API департаментов (получение данных, отправка изменений и т.д.).
    * **`models`:** Определения типов данных и интерфейсов, связанных с департаментами.
    * **`departaments.routes.ts`:** Файл, определяющий маршруты, относящиеся к модулю департаментов.

**Принципы работы:**

* Каждый модуль (например, `employees`, `departments`) имеет собственный набор компонентов, страниц, сервисов и моделей, что обеспечивает инкапсуляцию и разделение ответственности.
* Общие компоненты, сервисы и модели выносятся в директорию `shared`, чтобы избежать дублирования кода и упростить поддержку.
* Файлы `*.routes.ts` определяют маршруты для каждого модуля, что упрощает навигацию и обеспечивает четкую структуру URL-адресов.