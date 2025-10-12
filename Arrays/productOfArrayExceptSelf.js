// Problem: Product of Array Except Self (#238) - https://leetcode.com/problems/product-of-array-except-self/description/

//First Approach
var productExceptSelf = function(nums) {
    let answer = [];
    for(let i = 0; i < nums.length; i++){
    let cal = 1
        for (let j = 0; j < nums.length; j++){
            if(j != i){
                cal = cal * nums[j]
            }
        }
        answer[i] = cal
    }
    return answer
};

