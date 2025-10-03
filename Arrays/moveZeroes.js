// Problem: Move Zeroes (#283) - https://leetcode.com/problems/move-zeroes/description/

var moveZeroes = function(nums) {
    let insertNonZero = 0
    for(let i = 0; i < nums.length; i++){
        if(nums[i] !== 0){
            nums[insertNonZero] = nums[i];
            insertNonZero++
        }
    }
    while(insertNonZero < nums.length){
        nums[insertNonZero] = 0;
        insertNonZero++
    }
};