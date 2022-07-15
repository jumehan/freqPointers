"use strict";

//input sorted ARRAY nums, number targetAvg
//take num(from left) and num(from right)
//calculate the average of 2 nums in ARRAY
//compare if average of 2nums = targetAvg
//if yes, return TRUE (stop), else
//move pointers, if > targetAvg (move right pointer), else opposite
//return boolean TRUE or FLASE

/**
 * finds IF there is a pair of num in sorted array nums that average of = targetAvg
 * @param {*} nums
 * @param {*} targetAvg
 * @returns true or false
 */

function averagePair(nums, targetAvg) {
  let left = 0;
  let right = nums.length - 1;

  while (left < right) {
    const average = (nums[left] + nums[right]) / 2;

    if (average === targetAvg) {
      return true;
    } else if (average > targetAvg) {
      right--;
    } else {
      left++;
    }
  }
  return false;
}

