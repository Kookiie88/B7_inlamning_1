import { algoritmB, words } from "./algoritmB";

describe("Tests for algoritmB", () => {
  test("returns a word of length 4 when desiredLength is 4", () => {
    const word = algoritmB(words, 4, false);
    expect(word.length).toBe(4);
  });

  test("returns a word of length 5 when desiredLength is 5", () => {
    const word = algoritmB(words, 5, false);
    expect(word.length).toBe(5);
  });

  test("returns a word of length 6 when desiredLength is 6", () => {
    const word = algoritmB(words, 6, false);
    expect(word.length).toBe(6);
  });

  test("never returns 'natt' when called with parameters (words, 4, true)", () => {
    for (let i = 0; i < 100; i++) {
      const word = algoritmB(words, 4, true);
      expect(word).not.toBe("natt");
    }
  });

  test("can return 'natt' when called with parameters (words, 4, false)", () => {
    let foundNatt = false;
    for (let i = 0; i < 100; i++) {
      const word = algoritmB(words, 4, false);
      if (word === "natt") {
        foundNatt = true;
        break;
      }
    }
    expect(foundNatt).toBe(true);
  });

  test("never returns 'mamma' when called with parameters (words, 5, true)", () => {
    for (let i = 0; i < 100; i++) {
      const word = algoritmB(words, 5, true);
      expect(word).not.toBe("mamma");
    }
  });

  test("can return 'mamma' when called with parameters (words, 5, false)", () => {
    let foundMamma = false;
    for (let i = 0; i < 100; i++) {
      const word = algoritmB(words, 5, false);
      if (word === "mamma") {
        foundMamma = true;
        break;
      }
    }
    expect(foundMamma).toBe(true);
  });

  test("never returns 'skugga' when called with parameters (words, 6, true)", () => {
    for (let i = 0; i < 100; i++) {
      const word = algoritmB(words, 6, true);
      expect(word).not.toBe("skugga");
    }
  });

  test("can return 'skugga' when called with parameters (words, 6, false)", () => {
    let foundSkugga = false;
    for (let i = 0; i < 100; i++) {
      const word = algoritmB(words, 6, false);
      if (word === "skugga") {
        foundSkugga = true;
        break;
      }
    }
    expect(foundSkugga).toBe(true);
  });
});
