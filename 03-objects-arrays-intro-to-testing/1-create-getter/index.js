/**
 * createGetter - creates function getter which allows select value from object
 * @param {string} path - the strings path separated by dot
 * @returns {function} - function-getter which allow get value from object by set path
 */
export function createGetter(path) {
  return (obj) =>
    path.split(".").reduce((prev, current) => {
      if (prev !== undefined && prev[current] !== undefined) {
        return prev[current];
      }
      return undefined;
    }, obj);
}
