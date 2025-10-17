// Problem: Reverse String (#344) - https://leetcode.com/problems/reverse-string/description/

var reverseString = function (s) {
    let i = 0;
    let j = s.length - 1
    while (i < j) {
        let temp = s[i];
        s[i] = s[j];
        s[j] = temp;
        i++;
        j--;
    }
};

//using built in functions
var reverseString = function (s) {
    s.reverse();
};