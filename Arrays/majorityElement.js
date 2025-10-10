// Problem: Majority Element (#169) - https://leetcode.com/problems/majority-element/description/

var majorityElement = function(nums) {
    let n = nums.length/2;
    let counter = 0
    for(let i = 0; i < nums.length; i++){
        for(let j = 0; j < nums.length; j++){
            if(nums[i] === nums[j]){
                ++counter
            }
        }
        console.log(counter, nums[i])
        if(n < counter){
            n = nums[i]
            return n
            break;
        }
    }
    
};
console.log(majorityElement([8,8,7,7,7]))

// Boyer–Moore (Moore’s Voting) Algorithm

var majorityElement = function(nums) {
    let candidate = nums[0];
    let counter = 0
    for(let i = 0; i < nums.length; i++){
       if(nums[i] === candidate){
        counter++
       }
       else {
        counter--
        if(counter === 0){
            candidate = nums[i];
            counter++
        }
       }
    }
    return candidate
};
console.log(majorityElement([8,8,7,7,7]))