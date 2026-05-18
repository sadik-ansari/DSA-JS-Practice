// Problem: Contains Duplicate (#217) - https://leetcode.com/problems/contains-duplicate/description/

var containsDuplicate = function (nums) {
    let set = new Set();

    for (const element of nums) {
        if(set.has(element)){
            return true
        }

        set.add(element)
    }

    return false
};