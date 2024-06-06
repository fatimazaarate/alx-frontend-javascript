/*eslint-disable*/
export default function cleanSet(set, startString) {
  if (startString === '' || typeof startString !== 'string' || startString.length === 0) {
    return '';
  }
  const stringUni = [];
  for (const value of set) {
    if (typeof value === 'string' && value.startsWith(startString)) {
      // WE'RE SLICING value str from the index equivalent to length of startstring
      stringUni.push(value.slice(startString.length));
    }
  }
  return stringUni.join('-');
}
