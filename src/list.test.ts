/// <reference types="jest" />
import { flattenArray, take, inverse } from './list';

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
