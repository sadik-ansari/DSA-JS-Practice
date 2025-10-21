// Problem: First Unique Character in a String (#387) - https://leetcode.com/problems/first-unique-character-in-a-string/description/

// solution 1

var firstUniqChar = function (s) {
    let str = ""
    s = s.split('')
    let f = false
    for (let i = 0; i < s.length; i++) {
        for (let j = i + 1; j < s.length; j++) {
            if (s[i] === s[j]) {
                str += s[i]
                break;
            }
        }
        str.includes(s[i]) ? f = false : f = true
        if (f == true) {
            return i
        }
        else {
            f = false
        }
    }
    if(f != true) return -1
};


//solution 2

var firstUniqChar = function (s) {
    const map = {};
    for (let ch of s) {
        map[ch] = (map[ch] || 0) + 1;
    }

    for (let i = 0; i < s.length; i++) {
        if (map[s[i]] === 1) return i;
    }
    return -1;
};
