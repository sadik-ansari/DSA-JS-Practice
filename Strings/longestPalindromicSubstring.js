// Problem: Longest Palindromic Substring (#5) - https://leetcode.com/problems/longest-palindromic-substring/description/

var longestPalindrome = function(s) {
  if (s.length <= 1) return s;

  let longest = "";

  function expandAroundCenter(left, right) {
    while (left >= 0 && right < s.length && s[left] === s[right]) {
      left--;
      right++;
    }
    return s.slice(left + 1, right);
  }

  for (let i = 0; i < s.length; i++) {
    const odd = expandAroundCenter(i, i);
    const even = expandAroundCenter(i, i + 1);
    const longer = odd.length > even.length ? odd : even;

    if (longer.length > longest.length) longest = longer;
  }

  return longest;
};
