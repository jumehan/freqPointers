"use strict";

//input : two positive integers
//compare if integers have amount of numbers
//count the freq of each number and compare the counts
//out : t or f

/**
 * Compares the numbers making up two integers and checks if
 * same frequency of numbers occur
 * @param {*} num1
 * @param {*} num2
 * @returns true or false
 */
function sameFrequency(num1, num2) {
  const num1String = num1.toString();
  const num2String = num2.toString();

  if (num1String.length !== num2String.length) {
    return false;
  }

  const num1Count = frequencyCounter(num1String);
  const num2Count = frequencyCounter(num2String);

  for (let number in num1Count) {
    if (!num2Count[number]) {
      return false;
    }
    if (num1Count[number] !== num2Count[number]) {
      return false;
    }
  }
  return true;
}

/**
 * Frequency counter function
 * @param {*} iterable
 * @returns object with letters and count of letters in iterable
 */
function frequencyCounter(iterable) {
  let counts = {};
  for (let item of iterable) {
    counts[item] = (counts[item] || 0) + 1;
  }
  return counts;
}