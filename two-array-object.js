"use strict";

//input: array of keys + array of values
//iterate array of keys and add keys to new object
//add values to keys, null if no values
//output: object made of arrays

/**
 * Creates an object from 2 arrays,
 * if key does not exist for value, ignore value,
 * if no value for key exists, value = null
 * @param {*} keys
 * @param {*} values
 * @returns object of keys and values
 */
function twoArrayObject(keys, values) {
  let object = new Object();

  for (let i = 0; i < keys.length; i++) {
    object[keys[i]] = values[i] ? values[i] : null;
  }
  return object;
}

