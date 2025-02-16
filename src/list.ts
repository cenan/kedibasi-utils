/**
 * Flattens a two-dimensional array into a one-dimensional array.
 */
export function flattenArray<T>(arr: T[][]): T[] {
  return arr.reduce((acc, curr) => acc.concat(curr), [] as T[])
}

/**
 * Takes the first `n` elements from an array.
 * If `n` is greater than the length of the array,
 * it returns a copy of the entire array.
 */
export function take<T>(arr: T[], n: number): T[] {
  return arr.slice(0, n);
}

/**
 * Reverses the order of elements in an array without modifying the original array.
 */
export function inverse<T>(arr: T[]): T[] {
  return arr.slice().reverse();
}
