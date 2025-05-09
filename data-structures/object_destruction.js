"use strict";

/*
1. Базовая деструктуризация
У объекта
const user = { name: 'Alice', age: 30, city: 'Rome' };
извлеки `name` и `city` в одноимённые переменные.
*/

const safeObject = (obj) => {
  const isPlainObject = (value) =>
    typeof value === "object" && value !== null && !Array.isArray(value);
  if (!isPlainObject(obj)) {
    console.warn("Expected a plain object");
    return {};
  }
  return obj;
};

(() => {
  console.log("--------- TASK 1 ---------");
  const user = { name: "Alice", age: 30, city: "Rome" };
  const { name, city } = safeObject(user);
  console.log(name);
  console.log(city);
})();
/**
 * 2. Переименование и значения по умолчанию
   Из объекта
   const opts = { timeout: 100, verbose: true };
   деструктуризируй в `{ time: timeout, log = false }`.
 */

(() => {
  console.log("--------- TASK 2 ---------");
  const opts = { timeout: 100, verbose: true };
  const { timeout: time, verbose: log = false } = safeObject(opts);
  console.log(time); // tiem - местная переменная
  console.log(log); // log - тоже местная переменная
})();
