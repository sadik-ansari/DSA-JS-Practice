// Problem: Rotate Array (#189) - https://leetcode.com/problems/rotate-array/description/

var rotate = function (nums, k) {
   k = k % nums.length

   function rotation(array, start, end) {
      while (start < end) {
         let temp = array[start];
         array[start] = array[end]
         array[end] = temp
         start++
         end--
      }
   }

   rotation(nums, 0, nums.length - 1)
   rotation(nums, 0, k - 1)
   rotation(nums, k, nums.length - 1)

   return nums
};

