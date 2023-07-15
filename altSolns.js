const searchIns = function (nums, target) {
  let start = 0,
    end = nums.length - 1;
  let ans = nums.length; // Default answer when target is greater than all elements
  console.log("ans", ans);

  while (start <= end) {
    let mid = Math.floor((start + end) / 2);
    console.log("mid", mid);

    if (nums[mid] === target) {
      return mid;
    } else if (nums[mid] < target) {
      start = mid + 1;
    } else {
      ans = mid; // Update the answer to the current index
      end = mid - 1;
    }
    console.log("st", start);
    console.log("en", end);
  }

  return ans;
};

let nums = [1, 3, 5, 6];
let target = 0;
console.log(searchIns(nums, target));

var searchInsert = function (nums, target) {
  let lo = 0,
    hi = nums.length; // we might need to inseart at the end
  while (lo < hi) {
    // breaks if lo == hi
    let mid = lo + Math.floor((hi - lo) / 2); // always gives the lower mid
    if (target > nums[mid]) {
      lo = mid + 1; // no way mid is a valid option
    } else {
      hi = mid; // it might be possibe to inseart @ mid
    }
  }
  return lo;
};
