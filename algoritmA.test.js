import { algoritmA } from "./algoritmA";

describe("Tests for algoritmA", () => {
  // Ensures that the algoritmA function is properly implemented.
  // Without this, all other tests would be meaningless.
  test("algoritmA function is defined and is a function", () => {
    expect(typeof algoritmA).toEqual("function");
  });

  // Verifies the basic functionality of the algoritmA function -
  // it should be able to identify correct, misplaced and incorrect letters.
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

  // Checks the ideal scenario where all guessed letters are correct.
  // This helps confirm that the function can recognize a perfect match.
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

  // Verifies that the function can handle a scenario where all letters
  // are present but none are in the correct position.
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

  // Tests the function's ability to identify when no letters are correct.
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

  // Ensures that the function is not case-sensitive
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

  // Checks the function's ability to handle words with multiple
  // instances of the same letter.
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

  // Verifies that the function can correctly handle a scenario where a word
  // has multiple instances of the same letter and multiple are correct.
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

  // Tests the function's ability to handle a scenario where a word has
  // two instances of the same letter and both are misplaced.
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

  // This test verifies that the algoritmA function correctly identifies
  // all letters as correct when the guess and the answer are both 3-letter words.
  test('algoritmA correctly identifies all letters as correct for "car" and "car"', () => {
    const result = algoritmA("car", "car");
    expect(result).toEqual([
      { letter: "C", result: "correct" },
      { letter: "A", result: "correct" },
      { letter: "R", result: "correct" },
    ]);
  });

  // This test verifies that the algoritmA function correctly identifies
  // all letters as correct when the guess and the answer are both 4-letter words.
  test('algoritmA correctly identifies all letters as correct for "test" and "test"', () => {
    const result = algoritmA("test", "test");
    expect(result).toEqual([
      { letter: "T", result: "correct" },
      { letter: "E", result: "correct" },
      { letter: "S", result: "correct" },
      { letter: "T", result: "correct" },
    ]);
  });

  // This test verifies that the algoritmA function correctly identifies
  // all letters as correct when the guess and the answer are both 6-letter words.
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
});
