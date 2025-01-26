class Solution {
  /**
   * @param {number[]} nums
   * @param {number} k
   * @return {number[]}
   */
  topKFrequent(nums, k) {
    const map = new Map();

    for (let i = 0; i < nums.length; i++) {
      if (map.has(nums[i])) {
        map.set(nums[i], map.get(nums[i]) + 1);
      } else {
        map.set(nums[i], 1);
      }
    }

    const sortedMap = [...map.entries()].sort((a, b) => b[1] - a[1]);

    return sortedMap.slice(0, k).map(([key]) => key);
  }
}

const solution = new Solution();
console.log(solution.topKFrequent([10, 10, 10, 20, 20, 30, 40, 40, 40, 40], 2));
