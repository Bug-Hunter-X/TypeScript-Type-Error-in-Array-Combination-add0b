function combineArrays(arr1: number[], arr2: number[]): number[] {
  return [...arr1, ...arr2];
}

const array1: number[] = [1, 2, 3];
const array2: string[] = ['a', 'b', 'c'];

const combinedArray = combineArrays(array1, array2); // Type Error