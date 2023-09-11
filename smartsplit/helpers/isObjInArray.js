export const isObjectEqual = (obj1, obj2) => {
  return JSON.stringify(obj1) === JSON.stringify(obj2);
};

export const isObjInArray = (array, obj) => {
  return array.some((item) => isObjectEqual(item, obj));
};
