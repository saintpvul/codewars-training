/*

Task

Given an array of length N, where N denotes the number of iterative statements. Each item-pair in the array represents two elements, with the 1st value (V) indicating the upper boundary for the iteration to take place (can be inclusive or exclusive depending on the 2nd value) and the 2nd value (Boolean data type -> true / false depending on your chosen language) indicating whether the upper boundary (V) is inclusive or not.

You must write a function that outputs an array in which each element represents the number of times each for-loop condition is evaluated. Below is an example for better understanding:

Example

arr = [[7, true], [5, false]]

for(int i = 0; i <= 7; i++){   // This statement is executed 9 times before termination -> 0, 1, 2, 3, 4, 5, 6, 7, 8 (since 8 > 7 is the breaking condition)
  for(int j = 0; j < 5; j++){  // In one cycle of outermost loop, this statement is executed 6 times before termination -> 0, 1, 2, 3, 4, 5 (since 5 >= 5 is the breaking condition)
    // some statements
  }
}
Note

The array can be empty, with a range of 0 <= N <= 20
The starting counter of the C-style for-loop is always 0
The iteration expression or operation to be performed is always incremental
The range of upper boundary is as follows: 1 <= V <= 20

*/

// solution

function countLoopIterations(arr) {
  let prod = 1n,
    r;
  return arr.map(
    ([num, bool]) => (
      (r = prod * (num + BigInt(bool)) + prod), (prod = r - prod), r
    )
  );
}
