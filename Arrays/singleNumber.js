// Problem: Single Number (#136) - https://leetcode.com/problems/single-number/description/

var singleNumber = function (nums) {
    let result = 0
    for (let i = 0; i < nums.length; i++) {
        let isValue = true
        for (let j = 0; j < nums.length; j++) {
            if (i !== j) {
                if (nums[i] === nums[j]) {
                    isValue = false
                    break;
                }
            }
        }
        if (isValue === true) {
            result = nums[i]
        }
    }
    return result

};