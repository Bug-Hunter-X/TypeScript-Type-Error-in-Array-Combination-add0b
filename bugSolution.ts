function combineArraysGeneric<T>(arr1: T[], arr2: T[]): T[] {
  return [...arr1, ...arr2];
}

const array1: number[] = [1, 2, 3];
const array2: number[] = [4, 5, 6];
const combinedArray1 = combineArraysGeneric(array1, array2); //Correct

const array3: string[] = ['a', 'b', 'c'];
const array4: string[] = ['d', 'e', 'f'];
const combinedArray2 = combineArraysGeneric(array3, array4); //Correct

// Incorrect usage resulting in a compile-time error:
// const combinedArray3 = combineArraysGeneric(array1, array3); 