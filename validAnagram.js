class Solution {
  /**
   * @param {string} s
   * @param {string} t
   * @return {boolean}
   */
  isAnagramUsingMap(s, t) {
    if (s.length !== t.length) {
      return false;
    }

    // Create a charCount map to store the frequency of each character in the string
    const charCount = new Map();

    // Iterate through the first string and store the frequency of each character
    for (let char of s) {
      charCount.set(char, (charCount.get(char) || 0) + 1);
    }

    // Iterate through the second string and decrement the frequency of each character
    for (let char of t) {
      if (!charCount.has(char)) {
        return false;
      }

      // Decrement the frequency of the character
      charCount.set(char, charCount.get(char) - 1);

      // If the frequency of the character is 0, delete the character from the charCount
      if (charCount.get(char) === 0) {
        charCount.delete(char);
      }
    }

    // If the charCount is empty, the strings are anagrams
    if (charCount.size === 0) {
      return true;
    }

    return false;
  }

  isAnagramUsingArray(s, t) {
    if (s.length !== t.length) {
      return false;
    }

    const charArray = new Array(26).fill(0);

    for (let char of s) {
      charArray[char.charCodeAt(0) - "a".charCodeAt(0)]++;
    }

    for (let char of t) {
      charArray[char.charCodeAt(0) - "a".charCodeAt(0)]--;
      if (charArray[char.charCodeAt(0) - "a".charCodeAt(0)] < 0) {
        return false;
      }
    }

    return true;
  }
}

const validAnagram = new Solution();
console.log(validAnagram.isAnagramUsingMap("anagram", "nagaram"));
console.log(validAnagram.isAnagramUsingArray("anagram", "nagaram"));
