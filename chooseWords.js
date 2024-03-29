// The list of words grouped by their lengths.
export const words = [
  ['natt', 'kram', 'flod', 'rost', 'berg'],
  ['mamma', 'viten', 'hjälp', 'plats', 'räven'],
  ['diskar', 'smocka', 'skugga', 'snövit', 'läkare'],
];

// The function takes a list of words, a desired length, and a boolean indicating whether the word should have unique letters.
export function chooseWords(wordList, desiredLength, uniqueLetters) {
  // Filters the list of words based on the desired length and whether the word should have unique letters.
  // If uniqueLetters is true, it uses a Set to remove any duplicate letters from the word before comparing its length.
  // If uniqueLetters is false, it doesn't use Set and includes all words regardless of whether they have duplicate letters or not.
  const filteredList = wordList[desiredLength - 4].filter((word) => !uniqueLetters || new Set(word).size === word.length);

  // If the filtered list is empty, it throws an error.
  if (!filteredList.length) {
    throw new Error('Inget passande ord finns.');
  }

  // Selects a random word from the filtered list.
  const randomWord = filteredList[Math.floor(Math.random() * filteredList.length)];

  // Returns the selected word.
  return randomWord;
}

/*
This code demonstrates the usage of the chooseWords function. 
An array of words and parameters are passed to the function. 
If the array is empty or lacks a suitable word, the function throws an error. 
This error is caught and its message is logged to the console.

try {
  result = chooseWords(wordList, desiredLength, uniqueLetters);
} catch (error) {
  console.error(error.message); 
} 
*/
