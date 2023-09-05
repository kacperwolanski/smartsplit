export const controlTextLen = (text, length) => {
  return text.length < length ? text : `${text.slice(0, length)}...`;
};
