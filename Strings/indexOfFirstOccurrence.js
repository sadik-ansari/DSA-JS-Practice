// Problem: Find the Index of the First Occurrence in a String (#14) - https://leetcode.com/problems/find-the-index-of-the-first-occurrence-in-a-string/description/


var strStr = function(haystack, needle) {

    for(let i = 0; i < haystack.length; i++){
        let j = 0
       while (j < needle.length && haystack[i + j] === needle[j]) {
            j++;
        }
        if (j === needle.length) {
            return i; 
        }
    }
     return -1;
};