"use strict";

// Helper function
const safeObject = (obj) => {
  const isPlainObject = (value) =>
    typeof value === "object" && value !== null && !Array.isArray(value);
  if (!isPlainObject(obj)) {
    console.warn("Expected a plain object");
    return {};
  }
  return obj;
};

// Tasks
const task1 = () => {
  const user = { name: "Alice", age: 30, city: "Rome" };
  const { name, city } = safeObject(user);
  console.log("Task 1:", name, city);
};
task1();

const task2 = () => {
  const opts = { timeout: 100, verbose: true };
  const { timeout: time, verbose: log = false } = safeObject(opts);
  console.log("Task 2:", time, log);
};
task2();

const task3 = () => {
  const settings = {
    layout: { width: 100, height: 200 },
    theme: { dark: true },
  };
  const { layout: { width: w } = {}, theme: { dark: isDark } = {} } =
    safeObject(settings);
  console.log("Task 3:", w, isDark);
};
task3();
