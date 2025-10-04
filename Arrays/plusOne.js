// Problem: Plus One (#66) - https://leetcode.com/problems/plus-one/description/

var plusOne = function(digits) {
    let str = "";
    for(let i = 0; i < digits.length; i++){
        str += digits[i];
    }
    str = BigInt(str);
    str = (str+1n).toString().split('').map(Number);
    return str
};