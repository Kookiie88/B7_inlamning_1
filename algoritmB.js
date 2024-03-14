export const words = [
  ["natt", "kram", "flod", "rost", "berg"],
  ["mamma", "viten", "hjälp", "plats", "räven"],
  ["diskar", "smocka", "skugga", "snövit", "läkare"],
];

export function algoritmB(wordList, desiredLength, uniqueLetters) {
  const filteredList = wordList[desiredLength - 4].filter((word) => !uniqueLetters || new Set(word).size === word.length);

  if (!filteredList.length) {
    throw new Error("Inget passande ord finns.");
  }

  const randomWord = filteredList[Math.floor(Math.random() * filteredList.length)];
  return randomWord;
}
