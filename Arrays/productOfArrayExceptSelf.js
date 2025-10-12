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


//Second Approach
var productExceptSelf = function(nums) {
    let i = j = 0;
    let answer = [];
    let cal = 1
    while(i < nums.length){
       answer[i] = (multi(i, j));
       i++
    }
    function multi (i, j){
        cal = 1
        while(j < nums.length){
             if(j != i){
                cal = cal * nums[j]
            }
            j++
        }
        return cal
    }
   
    return answer
};
console.log(productExceptSelf([1,2,3,4]))
