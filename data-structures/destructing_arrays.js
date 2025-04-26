"use strict";

/* 1. Базовое извлечение.
   Напиши функцию `getFirstTwo(arr)`, которая принимает массив и возвращает первые два элемента в виде объекта `{ first, second }` через деструктуризацию.
*/
const array = [1, 2, 3, 4, 5];
const getFirstTwo = function ([1, 2, 3, 4, 5]) {
const [first, second] = arr;
return { first, second };
};

const getFirstTwo = ([first = null, second = null] = []) => ({ first, second });
*/
// Я выбрал этот способ решения потому что он самый очевидный и простой. Если нам нужно будет сохранить возвращеемое значение в переменную, достаточно задекларировать переменную и присвоить ей значение функции с нужным нам параметром. Это можно сделать из любой "точки" кода, так как функция доступна глобально и сделана с помощью FE что позволяет ей "не всплывать" во избежание разного рода ошибок.

/* 2. Пропуск элементов.
   Из массива чисел `[10, 20, 30, 40, 50]` извлеки первый и третий элементы (пропусти второй), запиши их в переменные `a` и `b`.
*/
const arr = [10, 20, 30, 40, 50];
const [a, , b] = arr;
console.log(a, b);

/* 3. Значения по умолчанию.
   Деструктуризируй массив длины 2 в три переменные `[x = 1, y = 1, z = 1]`. Проверь результат для входов `[]`, `[5]`, `[5, 6]`.
*/
// Первый вариант:
const [a = 1, b = 1, c = 1] = [];
const [d = 1, e = 1, f = 1] = [5];
const [g = 1, o = 1, p = 1] = [5, 6];

// Второй вариант:
function extractWithDefaults(arr) {
  const [x = 1, y = 1, z = 1] = arr;
  return { x, y, z };
}

// Третий вариант:
/**
 *
 * @param {number[]} [arr = []] - входной массив
 * @returns {{first: number, second: number, third: number}}
 */

function extractWithDefaults2(arr = []) {
  const src = Array.isArray(arr) ? arr : [];
  const [first = 1, second = 1, third = 1] = src;
  return { first, second, third };
}

console.log(extractWithDefaults2([1, 2, 3])); // { first: 1, second: 2, third: 3 }
console.log(extractWithDefaults2([3])); // { first: 3, second: 1, third: 1 }
console.log(extractWithDefaults2("Hi there!")); // { first: 1, second: 1, third: 1 }
