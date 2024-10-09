import { steps } from '../config/data'

export const getLevelWords = (currentLevel, levels) => {
  const fileName = steps[currentLevel];
  const words = levels.filter((level) => level.name === fileName)[0].content.words;
  return words;
};

export const getMinimalLetterSet = (words) => {
  const letterCount = {};

  words.forEach(word => {
    const wordLetterCount = {};

    for (const letter of word) {
      wordLetterCount[letter] = (wordLetterCount[letter] || 0) + 1;
    }

    for (const [letter, count] of Object.entries(wordLetterCount)) {
      letterCount[letter] = Math.max(letterCount[letter] || 0, count);
    }
  });

  const result = [];
  for (const [letter, count] of Object.entries(letterCount)) {
    for (let i = 0; i < count; i++) {
      result.push(letter);
    }
  }

  return result;
}

export const removeWord = (array, wordToRemove) => {
  return array.filter(word => word !== wordToRemove);
}