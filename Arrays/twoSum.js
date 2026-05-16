// Problem: Two Sum (#1) - https://leetcode.com/problems/two-sum/description/

var twoSum = function (nums, target) {
    let hasMap = new Map();

    for (let i = 0; i < nums.length; i++) {
        let complement = target - nums[i]

        if(hasMap.has(complement)){
            return [hasMap.get(complement), i]
        }

        hasMap.set(nums[i], i)
    }

}; 

console.log(twoSum([2, 7, 11, 15], 22))