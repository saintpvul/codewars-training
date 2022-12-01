/*

Objective
Given a number n we will define its scORe to be 0 | 1 | 2 | 3 | ... | n, where | is the bitwise OR operator.

Write a function that takes n and finds it's scORe.

n	scORe n
0	0
1	1
49	63
1000000	1048575
Any feedback would be much appreciated

*/

// solution

const score = (n) => (n === 0 ? 0 : 2 ** n.toString(2).length - 1);
