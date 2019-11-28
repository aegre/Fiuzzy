import { isObject } from 'util';
import { removeCharAt } from 'utils';

/**
 * Checks that all the characters in search are presented in the target, no matter the order
 * @param {string} target
 * @param {string} search
 */
const searchString = (target, search) => {
  const searchCharacters = search.replace(' ', '').toLowerCase().split('');
  let currentTarget = target.toLowerCase();
  const missingChar = searchCharacters.find((currentCharacter) => {
    // Get the index of the current search character
    const characterIndex = currentTarget.indexOf(currentCharacter);
    if (characterIndex > -1) {
      // Remove the current character from the string to avoid duplicates
      currentTarget = removeCharAt(currentTarget, characterIndex);
    }
    // Return the first character that is in the search but not in the target
    return characterIndex === -1;
  });
  return !missingChar;
};

/**
 * Executes the fuzzy search, if target is an object it will search on each value of the object else
 * it will only search in the target as string
 * @param {*} target
 * @param {string} search
 */
const fuzzySearch = (target, search) => {
  if (isObject(target)) {
    // Find any value that matches the search
    const hasAMatch = Object.values(target).find((value) => fuzzySearch(value, search));
    return Boolean(hasAMatch);
  }
  return searchString(target.toString(), search);
};

export default fuzzySearch;
