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

/**
 * Merges two sorted arrays into a single sorted array.
 * Used as a helper function for mergeSort.
 */
function merge<T>(left: T[], right: T[], compareFn?: (a: T, b: T) => number): T[] {
  const result: T[] = [];
  let leftIndex = 0;
  let rightIndex = 0;
  
  // Default comparison function if none provided
  const compare = compareFn || ((a: T, b: T) => {
    if (a < b) return -1;
    if (a > b) return 1;
    return 0;
  });

  // Merge the two arrays into result array in sorted order
  while (leftIndex < left.length && rightIndex < right.length) {
    if (compare(left[leftIndex], right[rightIndex]) <= 0) {
      result.push(left[leftIndex]);
      leftIndex++;
    } else {
      result.push(right[rightIndex]);
      rightIndex++;
    }
  }

  // Add remaining elements from either array
  return result
    .concat(left.slice(leftIndex))
    .concat(right.slice(rightIndex));
}

/**
 * Sorts an array using the merge sort algorithm without modifying the original array.
 * Optionally accepts a comparison function to determine the sort order.
 * 
 * @param arr - The array to sort
 * @param compareFn - Optional comparison function that defines the sort order.
 *                    If omitted, the array elements are sorted in ascending order.
 * @returns A new sorted array
 */
export function mergeSort<T>(arr: T[], compareFn?: (a: T, b: T) => number): T[] {
  // Return a copy of the array if it has 0 or 1 elements
  if (arr.length <= 1) {
    return arr.slice();
  }

  // Split the array into two halves
  const middle = Math.floor(arr.length / 2);
  const left = arr.slice(0, middle);
  const right = arr.slice(middle);

  // Recursively sort both halves and merge them
  return merge(
    mergeSort(left, compareFn),
    mergeSort(right, compareFn),
    compareFn
  );
}
