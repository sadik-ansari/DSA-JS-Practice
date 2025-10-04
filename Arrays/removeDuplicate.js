// Problem: Remove Duplicates from Sorted Array (#26) - https://leetcode.com/problems/remove-duplicates-from-sorted-array/description/

var removeDuplicates = function (nums) {
    for (let i = 0; i < nums.length; i++) {
        for (let j = 0; j <= nums.length; j++) {
            if(nums[i] === nums[j] && i !== j){
                nums.splice(j,1)
                j--
            }   
        }
    }
    return nums.length
};