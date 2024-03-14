import { wordle } from './wordle';

describe('Tests for wordle', () => {
  // Ensures that the wordle function is properly implemented.
  // Without this, all other tests would be meaningless.
  test('wordle function is defined and is a function', () => {
    expect(typeof wordle).toEqual('function');
  });

  // Verifies the basic functionality of the wordle function -
  // it should be able to identify correct, misplaced and incorrect letters.
  test('wordle correctly identifies, correct, misplaced and incorrect letters for "hallå" and "cykla"', () => {
    const result = wordle('hallå', 'cykla');
    expect(result).toEqual([
      { letter: 'H', result: 'incorrect' },
      { letter: 'A', result: 'misplaced' },
      { letter: 'L', result: 'incorrect' },
      { letter: 'L', result: 'correct' },
      { letter: 'Å', result: 'incorrect' },
    ]);
  });

  // Checks the ideal scenario where all guessed letters are correct.
  // This helps confirm that the function can recognize a perfect match.
  test('wordle correctly identifies all letters as correct for identical words "apple" and "apple"', () => {
    const result = wordle('apple', 'apple');
    expect(result).toEqual([
      { letter: 'A', result: 'correct' },
      { letter: 'P', result: 'correct' },
      { letter: 'P', result: 'correct' },
      { letter: 'L', result: 'correct' },
      { letter: 'E', result: 'correct' },
    ]);
  });

  // Verifies that the function can handle a scenario where all letters
  // are present but none are in the correct position.
  test('wordle correctly identifies all letters as misplaced for "apple" and "pleap" with all letters in different positions', () => {
    const result = wordle('apple', 'pleap');
    expect(result).toEqual([
      { letter: 'A', result: 'misplaced' },
      { letter: 'P', result: 'misplaced' },
      { letter: 'P', result: 'misplaced' },
      { letter: 'L', result: 'misplaced' },
      { letter: 'E', result: 'misplaced' },
    ]);
  });

  // Tests the function's ability to identify when no letters are correct.
  test('wordle correctly identifies all letters as incorrect for "apple" and "yummy" with no common letters', () => {
    const result = wordle('apple', 'yummy');
    expect(result).toEqual([
      { letter: 'A', result: 'incorrect' },
      { letter: 'P', result: 'incorrect' },
      { letter: 'P', result: 'incorrect' },
      { letter: 'L', result: 'incorrect' },
      { letter: 'E', result: 'incorrect' },
    ]);
  });

  // Ensures that the function is not case-sensitive
  test('wordle is case-insensitive and correctly identifies all letters as correct for "Apple" and "apple"', () => {
    const result = wordle('Apple', 'apple');
    expect(result).toEqual([
      { letter: 'A', result: 'correct' },
      { letter: 'P', result: 'correct' },
      { letter: 'P', result: 'correct' },
      { letter: 'L', result: 'correct' },
      { letter: 'E', result: 'correct' },
    ]);
  });

  // Checks the function's ability to handle words with multiple
  // instances of the same letter.
  test('wordle correctly handles multiple instances of the same letter for "aaaaa" and "abbbb" with only one correct letter', () => {
    const result = wordle('aaaaa', 'abbbb');
    expect(result).toEqual([
      { letter: 'A', result: 'correct' },
      { letter: 'A', result: 'incorrect' },
      { letter: 'A', result: 'incorrect' },
      { letter: 'A', result: 'incorrect' },
      { letter: 'A', result: 'incorrect' },
    ]);
  });

  // Verifies that the function can correctly handle a scenario where a word
  // has multiple instances of the same letter and multiple are correct.
  test('wordle correctly handles multiple instances of the same letter for "aaaaa" and "abbba" with two correct letters', () => {
    const result = wordle('aaaaa', 'abbba');
    expect(result).toEqual([
      { letter: 'A', result: 'correct' },
      { letter: 'A', result: 'incorrect' },
      { letter: 'A', result: 'incorrect' },
      { letter: 'A', result: 'incorrect' },
      { letter: 'A', result: 'correct' },
    ]);
  });

  // Tests the function's ability to handle a scenario where a word has
  // two instances of the same letter and both are misplaced.
  test('wordle correctly handles two instances of the same letter when both are misplaced for "apple" and "paple"', () => {
    const result = wordle('apple', 'paple');
    expect(result).toEqual([
      { letter: 'A', result: 'misplaced' },
      { letter: 'P', result: 'misplaced' },
      { letter: 'P', result: 'correct' },
      { letter: 'L', result: 'correct' },
      { letter: 'E', result: 'correct' },
    ]);
  });

  // This test verifies that the wordle function correctly identifies
  // all letters as correct when the guess and the answer are both 3-letter words.
  test('wordle correctly identifies all letters as correct for "car" and "car"', () => {
    const result = wordle('car', 'car');
    expect(result).toEqual([
      { letter: 'C', result: 'correct' },
      { letter: 'A', result: 'correct' },
      { letter: 'R', result: 'correct' },
    ]);
  });

  // This test verifies that the wordle function correctly identifies
  // all letters as correct when the guess and the answer are both 4-letter words.
  test('wordle correctly identifies all letters as correct for "test" and "test"', () => {
    const result = wordle('test', 'test');
    expect(result).toEqual([
      { letter: 'T', result: 'correct' },
      { letter: 'E', result: 'correct' },
      { letter: 'S', result: 'correct' },
      { letter: 'T', result: 'correct' },
    ]);
  });

  // This test verifies that the wordle function correctly identifies
  // all letters as correct when the guess and the answer are both 6-letter words.
  test('wordle correctly identifies all letters as correct for "banana" and "banana"', () => {
    const result = wordle('banana', 'banana');
    expect(result).toEqual([
      { letter: 'B', result: 'correct' },
      { letter: 'A', result: 'correct' },
      { letter: 'N', result: 'correct' },
      { letter: 'A', result: 'correct' },
      { letter: 'N', result: 'correct' },
      { letter: 'A', result: 'correct' },
    ]);
  });
});
