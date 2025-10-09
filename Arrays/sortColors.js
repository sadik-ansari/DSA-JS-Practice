// Problem: Sort Colors (#75) - https://leetcode.com/problems/sort-colors/description/

var sortColors = function (nums) {
    let low = 0;
    let mid = 0;
    let high = nums.length - 1;

  while(mid  <= high){
      if (nums[mid] === 0) {
        let temp = nums[mid];
        nums[mid] = nums[low];
        nums[low] = temp;
        mid++
        low++
    }
    else if (nums[mid] === 1) {
        mid++
    }
    else if (nums[mid] === 2) {
        let temp = nums[mid];
        nums[mid] = nums[high];
        nums[high] = temp;
        high--
    }
  }

};