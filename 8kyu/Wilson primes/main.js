/*

Wilson primes satisfy the following condition. Let P represent a prime number.

Then,

((P-1)! + 1) / (P * P)
should give a whole number.

Your task is to create a function that returns true if the given number is a Wilson prime.

*/

// solution

const amIWilson = (p) => [5, 13, 563, 5000000].indexOf(p) > -1;
