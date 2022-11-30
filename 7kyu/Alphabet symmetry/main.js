/*

Consider the word "abode". We can see that the letter a is in position 1 and b is in position 2. In the alphabet, a and b are also in positions 1 and 2. Notice also that d and e in abode occupy the positions they would occupy in the alphabet, which are positions 4 and 5.

Given an array of words, return an array of the number of letters that occupy their positions in the alphabet for each word. For example,

solve(["abode","ABc","xyzD"]) = [4, 3, 1]
See test cases for more examples.

Input will consist of alphabet characters, both uppercase and lowercase. No spaces.

Good luck!

If you like this Kata, please try:

Last digit symmetry

Alternate capitalization

*/

// solution

function solve(arr){  
  arr = arr.map(e=>e.toLowerCase())
  let result = 0,
      output = []
  for(let i = 0; i < arr.length;i++){
    for(let j = 0;j < arr[i].length; j++){
      if(j+1 === arr[i].charCodeAt(j) - 96){
        result++
      }
    }
    output.push(result)
    result = 0
  }
  return output
};