// Problem: Contains Duplicate (#217) - https://leetcode.com/problems/contains-duplicate/description/

var containsDuplicate = function(nums) {
    let duplicate = new Set(nums)
    return duplicate.size !== nums.length
};