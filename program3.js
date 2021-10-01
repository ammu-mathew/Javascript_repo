//Reverse and Match
function reverseAndMatch(word, list) {
    const condition = (item) =>
      [...item.toLowerCase()].reverse().join("") === word;
    const array = list.filter((...items) => condition(...items));
    return array.length ? array[0] : false;
  }