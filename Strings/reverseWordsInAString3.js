// Problem: Reverse Words in a Strings 3 (#557) - https://leetcode.com/problems/reverse-words-in-a-string-iii/description/

var reverseWords = function(s) {
    let str = "";
    let i = 0;
    let j = 1;
    while(i < s.length){
        if(s[j] === ' ' || j === s.length){
            let newStr = ""
            let m = i;
            let n = j - 1;
            while(m <= n){
                newStr += s[n] 
                n--;
            }
            str += newStr + ' ';
            i = j + 1;
            j = i + 1;
        }
        else{
            j++
        }
    }
    return str.trim();
};