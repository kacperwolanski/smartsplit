export const updateValueByKey = (list, idToFind, keyToUpdate, newValue) => {
  return list.map((item) => {
    if (item.id === idToFind) {
      const updatedItem = { ...item };
      updatedItem[keyToUpdate] = newValue;
      return updatedItem;
    }
    return item;
  });
};
