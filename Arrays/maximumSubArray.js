// Problem: Maximum SubArray (#53) - https://leetcode.com/problems/maximum-subarray/description/

var maxSubArray = function (nums) {
    if(nums.length <= 1) return nums[0]
    let mid = Math.floor(nums.length / 2)
    let sum = null
    let i = 0
    let j = mid - 1
    let finalSum = -Infinity;
    for(let i = 0; i < nums.length; i++){
        sum += nums[i]
        if(finalSum < sum){
            finalSum = sum
        }
        if(sum < 0){
            sum = 0
        }
    }
    return finalSum
};
