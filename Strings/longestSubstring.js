// Problem: Longest Substring without Repeating Character(#387) - https://leetcode.com/problems/longest-substring-without-repeating-characters/description/

var lengthOfLongestSubstring = function(s) {
  let seen = new Set();
  let left = 0;
  let maxLen = 0;

  for (let right = 0; right < s.length; right++) {
    while (seen.has(s[right])) {
      seen.delete(s[left]);
      left++;
    }
    seen.add(s[right]);
    maxLen = Math.max(maxLen, right - left + 1);
  }

  return maxLen;
};