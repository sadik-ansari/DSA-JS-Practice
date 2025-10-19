// Problem: Longest Common Prefix (#14) - https://leetcode.com/problems/longest-common-prefix/description/

var longestCommonPrefix = function (strs) {
    if (strs.length === 0) return "";
    let common = strs[0];

    for (let i = 1; i < strs.length; i++) {
        let newStr = strs[i];
        let j = 0;

        while (j < newStr.length && j < common.length && newStr[j] === common[j]) {
            j++;
        } 
        common = common.substring(0, j);
        if (common === "") return "";
    }
        
    return common;
};