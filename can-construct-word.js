"use strict";

//input: 2 strings (words and letters)
//look for characters in word, and count number for times each characters are in word
//compare count of characters in words vs letters
//if characters not found in letters or count of characters of words > count in letters
//then false, else true
//output: boolean (T or F)

function frequencyCounter(iterable) {
  let counts = {};
  for (let item of iterable) {
    counts[item] ? counts[item]++ : counts[item] = 1;
  }
  return counts;
}

function canConstructWord(words, letters) {
  if (words.length > letters.length) {
    return false;
  }
  let wordsCount = frequencyCounter(words);
  let lettersCount = frequencyCounter(letters);

  for (let letter in wordsCount) {
    if (!lettersCount[letter]) {
      return false;
    }
    if (wordsCount[letter] > lettersCount[letter]) {
      return false;
    }
  }
  return true;
}
