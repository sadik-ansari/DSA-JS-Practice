// Problem: Three Sum (#15) - https://leetcode.com/problems/3sum/description/

var threeSum = function (nums) {
    nums.sort((a, b) => a - b);
    let resultArr = []
    for (let i = 0; i < nums.length; i++) {
        let left = i + 1;            
        let right = nums.length - 1;    

        while (left < right) {
            let sum = nums[i] + nums[left] + nums[right];
            if (sum === 0) {
                resultArr.push([nums[i], nums[left], nums[right]]);
                left++;
                right--;
                while (left < right && nums[left] === nums[left - 1]) left++;
                while (left < right && nums[right] === nums[right + 1]) right--;
            } else if (sum < 0) {
                left++;
            } else {
                right--;
            }
        }

        while (i < nums.length - 1 && nums[i] === nums[i + 1]) i++;
    }

    resultArr = resultArr.map((arr) => arr.sort((a, b) => a - b))
    resultArr = [...new Set(resultArr.map(t => t.join(',')))]
    resultArr = resultArr.map(s => s.split(',').map(Number))
    return resultArr
};


//Time Limit Exceeded
var threeSum = function (nums) {
    let resultArr = []
    let index = 0
    for (let i = 0; i < nums.length; i++) {
        for (let j = i + 1; j < nums.length; j++) {
            for (let k = j + 1; k < nums.length; k++) {
                console.log(nums[i], nums[j], nums[k])
                if ((nums[i] + nums[j] + nums[k]) == 0) {
                    resultArr[index] = [nums[i], nums[j], nums[k]]
                    index++
                }
            }
        }
    }
    resultArr = resultArr.map((arr) => arr.sort((a,b) => a-b))
    resultArr = [...new Set(resultArr.map(t => t.join(',')))]
    resultArr = resultArr.map(s => s.split(',').map(Number))
    return resultArr
};