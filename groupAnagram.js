class Solution {
  /**
   * @param {string[]} strs
   * @return {string[][]}
   */
  groupAnagrams(strs) {
    if (strs.length === 0) {
      return [[""]];
    }

    if (strs.length === 1) {
      return [[strs[0]]];
    }

    const map = new Map();

    for (let word of strs) {
      let signature = word.split("").sort().join("");

      if (!map.has(signature)) {
        map.set(signature, []);
      }

      map.get(signature).push(word);
    }

    return [...map.values()];
  }
}

const solution = new Solution();
console.log(solution.groupAnagrams(["act", "pots", "tops", "cat", "stop", "hat"]));
