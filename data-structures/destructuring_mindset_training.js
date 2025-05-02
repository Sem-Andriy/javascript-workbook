// 📘 TRAINING SET: DESTRUCTURING MINDSET — from foundational to abstract engineering

"use strict";

/*
LEVEL 1 — STRUCTURE & SYNTAX
Purpose: Build comfort with basic patterns and edge behavior
*/

// 🟢 Задача 1. Готово.
// 1. Напиши функцию `getFirstAndSecond(arr)`, которая возвращает `{ first, second }` из первых двух элементов массива. Если массив пустой или не массив — вернуть нули.
/**
 *
 * @param {number[]} [arr = []] - входной массив
 * @returns {{first: number, second: number}}
 */

const getFirstAndSecond = function (arr) {
  const src = Array.isArray(arr) ? arr : [];
  const [first = 0, second = 0] = src;
  return { first, second };
};

console.log(getFirstAndSecond([1, 2])); // { first: 1, second: 2 }
console.log(getFirstAndSecond([1, 2, 3])); // { first: 1, second: 2 }
console.log(getFirstAndSecond(1, 2, 3)); // { first: 0, second: 0 }
console.log(getFirstAndSecond(null)); // { first: 0, second: 0 }
console.log(getFirstAndSecond(undefined)); // { first: 0, second: 0 }
console.log(getFirstAndSecond("")); // { first: 0, second: 0 }
console.log(getFirstAndSecond("Hi there!")); // { first: 0, second: 0 }
console.log(getFirstAndSecond(0)); // { first: 0, second: 0 }

// 🟢 Задача 2. Готово

// 2. Напиши `splitFirstSafe(arr)`, которая возвращает `{ first, rest }`. `rest` должен быть массивом. Если вход — не массив, защити от ошибки.
/**
 *
 * @param {number[]} [arr = []] - входной массив
 * @returns {{first: number|null, rest: number[]}} - число и массив
 */

const splitFirstSafe = (arr) => {
  if (!Array.isArray(arr)) {
    // throw new Error("Invalid input structure");
  }
  // first = null -> если параметром окажется пустой массив
  const [first = null, ...rest] = arr;
  return { first, rest };
};

// Сохранение полученных значений
const { first, rest } = splitFirstSafe([1, 2, 3, 4, 5]);
console.log(first, rest);

// Примеры вызовов
console.log(splitFirstSafe([1, 2, 3, 4, 5])); // { first: 1, rest: [ 2, 3, 4, 5 ] }
console.log(splitFirstSafe([1])); // { first: 1, rest: [] }
console.log(splitFirstSafe([])); // { first: null, rest: [] }
console.log(splitFirstSafe("")); // жёсткий выброс ошибки

/*
 function splitFirstSafe(arr, strict = true) {
  if (!Array.isArray(arr)) {
    if (strict) {
      throw new Error("Invalid input structure");
    } else {
      arr = []; // мягкая подстановка
    }
  }

  const [first = null, ...rest] = arr;
  return { first, rest };
}
 */

// НУЖЕН АНАЛИЗ
// 3. Деструктуризируй массив `[1, , [ , 5 ], 7]` так, чтобы получить `x = 1`, `y = 0`, `z = 5`, `t = 7`. Значения `y` и первый элемент вложенного массива должны быть по умолчанию = 0.

const someArr = [1, , [, 5], 7];
const destructNested = function (arr) {};

/*
LEVEL 2 — TYPE SAFETY & VALIDATION
Purpose: Think like a defensive engineer, not just coder
*/

// 4. Напиши функцию `safeUnpackFirstThree(arr)`, которая возвращает `{ a, b, c }` с дефолтами 0. Вход может быть не массивом.

// 5. Напиши функцию `deepDestruct(arr)`, в которой `arr` должен быть массивом вида `[id, , [score], isActive]`. Защити от невалидных входов. Верни `{ id, score, isActive }`, при отсутствии значений — дефолты.

/*
LEVEL 3 — ABSTRACTION & PATTERN RECOGNITION
Purpose: Formulate mental models of data flows
*/

// 6. Реализуй функцию `processTuple([a, b, c = 100])`, которая возвращает `{ a, b, c }` и выводит сумму элементов.

// 7. Напиши функцию `reverseHeadAndRest(arr)`, которая меняет местами первые два элемента и возвращает объект с `first`, `second`, `rest`.

// 8. Деструктуризируй массив `["Alex", 42, [95], true]` в переменные `name`, `age`, `score`, `isAdmin`. Используй значения по умолчанию, если чего-то нет.

/*
LEVEL 4 — ARCHITECTURAL USE & COMPOSITION
Purpose: Combine techniques in functional wrappers
*/

// 9. Напиши функцию `normalizeUserData(input)`, которая принимает массив вида `[name, age, ...tags]`. Верни объект `{ name, age, tags }`. Защити от не-массивов.

// 10. Напиши `tupleRouter(tuple)`, которая разбирает массив `[type, payload, ...meta]` и возвращает объект вида:
// - `{ user: payload, meta }`, если `type === 'user'`
// - `{ log: payload, meta }`, если `type === 'log'`
// - `{ unknown: payload, meta }`, иначе.

// 11. Реализуй `destructAndTransform([name, age, [score], role])`, которая возвращает объект:
// `{ username: name.toUpperCase(), years: age, rating: score * 1.2, admin: role === true }`

/*
Каждое задание — шаг в сторону инженерного мышления: понимание структур, безопасное извлечение, шаблоны работы с данными.
*/
