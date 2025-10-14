// Problem: Top K Frequent Element (#347) - https://leetcode.com/problems/top-k-frequent-elements/description/


// Brute Force Method
var topKFrequent = function(nums, k) {
    let count = 0
    let arr = new Array(k - 1)
    for(let i = 0; i < nums.length; i++){
        for(let j = 0; j < nums.length; j++){
            if(nums[i] === nums[j]){
                count++
            }
        }
        if(arr.length < k){
            arr[i] = nums[i]
        }
        else{
            break;
        }
    }
    return arr
};
