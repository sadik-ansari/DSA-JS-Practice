// Problem: Valid Anagram (#242) - https://leetcode.com/problems/valid-anagram/description/

//First Attempt
var isAnagram = function(s, t) {
    s = s.split("").sort().join("");
    t = t.split("").sort().join("");
    return s === t
};

//Second Attempt
var isAnagram = function(s, t) {
    if(s.length != t.length) return false
    let counter = {};
    for(let char of s){
        counter[char] = (counter[char] || 0) + 1;
    }
    for(let char of t){
        if(!counter[char]) return false;
        counter[char]--
    }
    return true
};

