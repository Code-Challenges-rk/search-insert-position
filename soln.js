/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
const searchInsert = function (nums, target) {
  let left = 0;
  let right = nums.length - 1;

  while (left <= right) {
    let mid = Math.floor((left + right) / 2);
    console.log("mid", mid);

    if (nums[mid] === target) {
      return mid;
    } else if (nums[mid] < target) {
      left = mid + 1;
    } else {
      right = mid - 1;
    }

    console.log("left", left);
    console.log("right",right);
  }

  return left;
};

// Let's go through the code:

// * Initialize left to 0, which represents the left end of the search range, and right to nums.length - 1, which represents the right end of the search range.
// * Enter a while loop that continues as long as left is less than or equal to right. This means there are still elements to search.
// * Calculate the middle index of the current search range using Math.floor((left + right) / 2) and store it in the mid variable.
// * Check if the element at the middle index, nums[mid], is equal to the target. If it is, we have found the target and return the middle index.
// * If nums[mid] is less than the target, it means the target should be on the right side of mid. Update left = mid + 1 to search in the right half of the remaining range.
// * If nums[mid] is greater than the target, it means the target should be on the left side of mid. Update right = mid - 1 to search in the left half of the remaining range.
// * If the while loop finishes without finding the target, it means the target is not present in the array. In this case, we return left, which represents the index where the target should be inserted to maintain the sorted order.

let nums = [1, 3, 5, 6, 4];
let target = 0;
console.log(searchInsert(nums, target));
