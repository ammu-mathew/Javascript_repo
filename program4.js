//Given two words, determine if one is an anagram of another.
const isAnagram = (s1, s2) => {
    const arr1 = s1.toLowerCase().split("").sort().join("");
    const arr2 = s2.toLowerCase().split("").sort().join("");
    return arr1 === arr2;
  };
  