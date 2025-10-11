// Problem: Traipping Rain Water (#42) - https://leetcode.com/problems/trapping-rain-water/description/

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

//Second Approach

var trap = function (height) {
    let left = new Array(height.length);
    let right = new Array(height.length);
    let leftMax = height[0];
    let rightMax = height[height.length - 1];
    left[0] = leftMax;
    right[right.length - 1] = rightMax
    let result = 0;

    for (let i = 1; i < height.length; i++) {
        leftMax = Math.max(leftMax, height[i])
        left[i] = leftMax
    }
    for (let i = height.length - 2; i >= 0; i--) {
        rightMax = Math.max(rightMax, height[i])
        right[i] = rightMax
    }

    for (let i = 0; i < height.length; i++) {
        result += Math.min(left[i], right[i]) - height[i]
    }

    return result;

    }
console.log(trap([3, 0, 2, 0, 4]));