import { algoritmA } from "./algoritmA";

test("algoritmA function is defined and is a function", () => {
  expect(typeof algoritmA).toEqual("function");
});

test('algoritmA correctly identifies, correct, misplaced and incorrect letters for "hallå" and "cykla"', () => {
  const result = algoritmA("hallå", "cykla");
  expect(result).toEqual([
    { letter: "H", result: "incorrect" },
    { letter: "A", result: "misplaced" },
    { letter: "L", result: "incorrect" },
    { letter: "L", result: "correct" },
    { letter: "Å", result: "incorrect" },
  ]);
});

test('algoritmA correctly identifies all letters as correct for identical words "apple" and "apple"', () => {
  const result = algoritmA("apple", "apple");
  expect(result).toEqual([
    { letter: "A", result: "correct" },
    { letter: "P", result: "correct" },
    { letter: "P", result: "correct" },
    { letter: "L", result: "correct" },
    { letter: "E", result: "correct" },
  ]);
});

test('algoritmA correctly identifies all letters as misplaced for "apple" and "pleap" with all letters in different positions', () => {
  const result = algoritmA("apple", "pleap");
  expect(result).toEqual([
    { letter: "A", result: "misplaced" },
    { letter: "P", result: "misplaced" },
    { letter: "P", result: "misplaced" },
    { letter: "L", result: "misplaced" },
    { letter: "E", result: "misplaced" },
  ]);
});

test('algoritmA correctly identifies all letters as incorrect for "apple" and "yummy" with no common letters', () => {
  const result = algoritmA("apple", "yummy");
  expect(result).toEqual([
    { letter: "A", result: "incorrect" },
    { letter: "P", result: "incorrect" },
    { letter: "P", result: "incorrect" },
    { letter: "L", result: "incorrect" },
    { letter: "E", result: "incorrect" },
  ]);
});

test('algoritmA is case-insensitive and correctly identifies all letters as correct for "Apple" and "apple"', () => {
  const result = algoritmA("Apple", "apple");
  expect(result).toEqual([
    { letter: "A", result: "correct" },
    { letter: "P", result: "correct" },
    { letter: "P", result: "correct" },
    { letter: "L", result: "correct" },
    { letter: "E", result: "correct" },
  ]);
});

test('algoritmA correctly handles multiple instances of the same letter for "aaaaa" and "abbbb" with only one correct letter', () => {
  const result = algoritmA("aaaaa", "abbbb");
  expect(result).toEqual([
    { letter: "A", result: "correct" },
    { letter: "A", result: "incorrect" },
    { letter: "A", result: "incorrect" },
    { letter: "A", result: "incorrect" },
    { letter: "A", result: "incorrect" },
  ]);
});

test('algoritmA correctly handles multiple instances of the same letter for "aaaaa" and "abbba" with two correct letters', () => {
  const result = algoritmA("aaaaa", "abbba");
  expect(result).toEqual([
    { letter: "A", result: "correct" },
    { letter: "A", result: "incorrect" },
    { letter: "A", result: "incorrect" },
    { letter: "A", result: "incorrect" },
    { letter: "A", result: "correct" },
  ]);
});

test('algoritmA correctly handles two instances of the same letter when both are misplaced for "apple" and "paple"', () => {
  const result = algoritmA("apple", "paple");
  expect(result).toEqual([
    { letter: "A", result: "misplaced" },
    { letter: "P", result: "misplaced" },
    { letter: "P", result: "correct" },
    { letter: "L", result: "correct" },
    { letter: "E", result: "correct" },
  ]);
});

test('algoritmA correctly identifies all letters as correct for "car" and "car"', () => {
  const result = algoritmA("car", "car");
  expect(result).toEqual([
    { letter: "C", result: "correct" },
    { letter: "A", result: "correct" },
    { letter: "R", result: "correct" },
  ]);
});

test('algoritmA correctly identifies all letters as correct for "test" and "test"', () => {
  const result = algoritmA("test", "test");
  expect(result).toEqual([
    { letter: "T", result: "correct" },
    { letter: "E", result: "correct" },
    { letter: "S", result: "correct" },
    { letter: "T", result: "correct" },
  ]);
});

test('algoritmA correctly identifies all letters as correct for "banana" and "banana"', () => {
  const result = algoritmA("banana", "banana");
  expect(result).toEqual([
    { letter: "B", result: "correct" },
    { letter: "A", result: "correct" },
    { letter: "N", result: "correct" },
    { letter: "A", result: "correct" },
    { letter: "N", result: "correct" },
    { letter: "A", result: "correct" },
  ]);
});
