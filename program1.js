//Add the given element to the array if it is not present in it.
const addToList = (list, value) => {
    if (!list.includes(value)) {
      list.push(value);
    }
    return list;
  }