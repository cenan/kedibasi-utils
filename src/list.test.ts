/// <reference types="jest" />
import { flattenArray, take, inverse, mergeSort } from './list';

describe('flattenArray', () => {
  test('flattens a two-dimensional array into a one-dimensional array', () => {
    const input = [[1, 2], [3, 4], [5]];
    const expectedOutput = [1, 2, 3, 4, 5];
    expect(flattenArray(input)).toEqual(expectedOutput);
  });

  test("returns an empty array if the input is an empty array", () => {
    const input: number[][] = [];
    const expectedOutput: number[] = [];
    expect(flattenArray(input)).toEqual(expectedOutput);
  });

  test("returns a single-element array if the input has only one element", () => {
    const input = [[1]];
    const expectedOutput = [1];
    expect(flattenArray(input)).toEqual(expectedOutput);
  });
});

describe('take', () => {
  test('takes the first n elements from an array', () => {
    const input = [1, 2, 3, 4, 5];
    const n = 3;
    const expectedOutput = [1, 2, 3];
    expect(take(input, n)).toEqual(expectedOutput);
  });

  test('returns a copy of the entire array if n is greater than the length of the array', () => {
    const input = [1, 2, 3, 4, 5];
    const n = 10;
    const expectedOutput = [1, 2, 3, 4, 5];
    expect(take(input, n)).toEqual(expectedOutput);
  });
});

describe('inverse', () => {
  test('reverses the order of elements in an array without modifying the original array', () => {
    const input = [1, 2, 3, 4, 5];
    const expectedOutput = [5, 4, 3, 2, 1];
    expect(inverse(input)).toEqual(expectedOutput);
    expect(input).toEqual([1, 2, 3, 4, 5]);
  });

  test('reverses the order of elements in an empty array', () => {
    const input: number[] = [];
    const expectedOutput: number[] = [];
    expect(inverse(input)).toEqual(expectedOutput);
  });
});

describe('mergeSort', () => {
  test('sorts an array of numbers in ascending order', () => {
    const input = [5, 3, 8, 1, 2, 7, 4, 6];
    const expectedOutput = [1, 2, 3, 4, 5, 6, 7, 8];
    expect(mergeSort(input)).toEqual(expectedOutput);
    // Original array should not be modified
    expect(input).toEqual([5, 3, 8, 1, 2, 7, 4, 6]);
  });

  test('sorts an array with duplicate elements', () => {
    const input = [5, 3, 5, 1, 2, 3, 4, 2];
    const expectedOutput = [1, 2, 2, 3, 3, 4, 5, 5];
    expect(mergeSort(input)).toEqual(expectedOutput);
  });

  test('returns a copy of the array if it has 0 or 1 elements', () => {
    const emptyInput: number[] = [];
    expect(mergeSort(emptyInput)).toEqual([]);
    
    const singleElementInput = [42];
    expect(mergeSort(singleElementInput)).toEqual([42]);
  });

  test('sorts an array of strings alphabetically', () => {
    const input = ['banana', 'apple', 'orange', 'grape', 'kiwi'];
    const expectedOutput = ['apple', 'banana', 'grape', 'kiwi', 'orange'];
    expect(mergeSort(input)).toEqual(expectedOutput);
  });

  test('sorts an array using a custom comparison function', () => {
    const input = [5, 3, 8, 1, 2, 7, 4, 6];
    // Sort in descending order
    const compareFn = (a: number, b: number) => b - a;
    const expectedOutput = [8, 7, 6, 5, 4, 3, 2, 1];
    expect(mergeSort(input, compareFn)).toEqual(expectedOutput);
  });

  test('sorts an array of objects using a custom comparison function', () => {
    const input = [
      { name: 'Alice', age: 30 },
      { name: 'Bob', age: 25 },
      { name: 'Charlie', age: 35 },
      { name: 'David', age: 20 }
    ];
    
    // Sort by age in ascending order
    const compareFn = (a: { name: string, age: number }, b: { name: string, age: number }) => a.age - b.age;
    
    const expectedOutput = [
      { name: 'David', age: 20 },
      { name: 'Bob', age: 25 },
      { name: 'Alice', age: 30 },
      { name: 'Charlie', age: 35 }
    ];
    
    expect(mergeSort(input, compareFn)).toEqual(expectedOutput);
  });
});
