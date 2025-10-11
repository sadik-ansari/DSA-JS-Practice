// Problem: Traipping Rain Water (#217) - https://leetcode.com/problems/trapping-rain-water/description/

var trap = function (height) {
    let left = 0;
    let right = height.length - 1;
    let leftMax = 0;
    let rightMax = 0;
    let result = 0;

    while (left < right) {
        if (height[left] < height[right]) {
            if (height[left] >= leftMax) {
                leftMax = height[left]
            }
            else {
                result += leftMax - height[left]
            }
            left++
        }
        else {
            if (height[right] >= rightMax) {
                rightMax = height[right]
            }
            else {
                result += rightMax - height[right]
            }
            right--
        }
    }
    return result;
}

console.log(trap([3, 0, 2, 0, 4]));