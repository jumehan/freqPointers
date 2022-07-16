//input an array of non-zero numbers, any length
//go through array from the left if the number is positive keep it,
//if the numer is negative push it to the end
//output: array with positive values grouped left and negative grouped right;
//  the same array that was entered

//j needed because we're activily modifing array so we need to decrease
// the amount of array we're looking through

/**
 * sorts array so positives go to the left and negatives to the right
 * @param {*} nums
 * @returns original array
 */

function separatePositive(nums) {
  let j = nums.length;
  for (let i = 0; i < j; i++) {
    if (nums[i] < 0) {
      nums.push(nums[i]);
      nums.splice(i, 1);
      i--;
      j--;
    }
  }
  return nums;
}
