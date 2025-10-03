// Problem: Binary Search (#704) - https://leetcode.com/problems/binary-search/description/

var search = function(nums, target) {
    let result = 0
    for(let i = 0; i <= nums.length; i++){
        if(target === nums[i]){
            return i
        }
    }
        return -1
};