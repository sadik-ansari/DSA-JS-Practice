// Problem: Container with Most Water (#11) - https://leetcode.com/problems/container-with-most-water/description/

var maxArea = function (height) {
    let answer = 0;
    let i = 0;
    let j = height.length - 1;
    while (i != j) {
        if (height[i] < height[j]) {
            answer = Math.max(answer, ((j - i) * height[i]))
            i++
        }
        else {
            answer = Math.max(answer, ((j - i) * height[j]))
            j--
        }
    }
    return answer
};