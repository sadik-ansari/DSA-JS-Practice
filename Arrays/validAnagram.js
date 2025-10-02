// Problem: Valid Anagram (#242) - https://leetcode.com/problems/valid-anagram/description/

var isAnagram = function(s, t) {
    s = s.split("").sort().join("");
    t = t.split("").sort().join("");
    return s === t
};

