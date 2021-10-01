//Remove Duplicate And Sort Rivers
const removeDuplicateAndSort = (rivers) => {
    if (rivers.length !== 0) {
      const filteredList = [...new Set(rivers)];
      return filteredList.sort();
    } else {
      return false;
    }
  }
