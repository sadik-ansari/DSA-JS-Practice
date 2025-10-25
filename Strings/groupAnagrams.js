// Problem: Group Anagrams (#49) - https://leetcode.com/problems/group-anagrams/description/

// solution 1:

var groupAnagrams = function(strs) {
  if (strs.length === 0) return [];
  
  const map = new Map();

  for (let str of strs) {
    const sorted = str.split('').sort().join('');
    if (!map.has(sorted)) {
      map.set(sorted, []);
    }
    map.get(sorted).push(str);
  }

  return Array.from(map.values());
};


//solution 2:

var groupAnagrams = function(strs) {
  if (strs.length <= 1) return [strs];

  const result = [];
  const visited = new Array(strs.length).fill(false);

  for (let i = 0; i < strs.length; i++) {
    if (visited[i]) continue; // skip already grouped words

    const currentSorted = strs[i].split('').sort().join('');
    const group = [strs[i]];
    visited[i] = true;

    for (let j = i + 1; j < strs.length; j++) {
      if (visited[j]) continue;

      const compareSorted = strs[j].split('').sort().join('');
      if (currentSorted === compareSorted) {
        group.push(strs[j]);
        visited[j] = true;
      }
    }

    result.push(group);
  }

  return result;
};
