// Problem: Count and Say (#38) - https://leetcode.com/problems/count-and-say/description/

var countAndSay = function (n) {
    let result = "1";
    if (n === 1) return result
    for (let i = 2; i <= n; i++) {
        let temp = "";
        let count = 1;

        for (let j = 0; j < result.length; j++) {
            if (result[j] === result[j + 1]) {
                count++;
            } else {
                temp += count.toString() + result[j];
                count = 1;
            }
        }
        result = temp;
    }
    return result 
};