# Инструкция по установке, настройке и запуску проекта
## 1. Установка node.js
* Скачиваем node.js по ссылке https://nodejs.org/en/download/
* Проверяем установка, вводим в терминале  `node -v`
## 2. Инициализация проекта
* Запускаем мастер создания проекта с помощью команды `npm init` или `yarn init`. В мастере заполняем необходимые поля. Получаем файл `package.json`.
## 3. Установка фреймворка Jest
* Установим пакет npm: `npm install --save-dev jest`
* Редактируем package.json для запуска из командной строки:
 ```javascript
 "scripts": {
    "test": "jest"
  }
```
## 4. Создание тестового файла
* Создаем функцию которую будем тестировать
* Экспортируем ее, указав в файле с функцией 
```javascript
module.exports = function;
```
* Создаем первый базовый тест с расширением `.test.js` или .`spec.js`
* Импортируем a функцию в тесты
```javascript
const sum = require("./function.js");
```
* Синтаксис тестов
```javascript
describe('Name of test suite', () => {
    it('Name of test', () => {
        expect(function(arguments)).toBe(expected);
    });
});
```
## 5. Сопоставления в JEST
* Jest содержит большую коллекцию сравнений — matchers.
* Ссылка для ознакомления:  https://jestjs.io/docs/using-matchers
## 6. Запуск тестов
* Запуск тестов производится в консоле командой `npm run test` или `yarn test `
