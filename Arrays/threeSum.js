// Problem: Three Sum (#15) - https://leetcode.com/problems/3sum/description/

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