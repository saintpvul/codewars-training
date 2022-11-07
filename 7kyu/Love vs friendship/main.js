/*

If　a = 1, b = 2, c = 3 ... z = 26

Then l + o + v + e = 54

and f + r + i + e + n + d + s + h + i + p = 108

So friendship is twice as strong as love :-)

Your task is to write a function which calculates the value of a word based off the sum of the alphabet positions of its characters.

The input will always be made of only lowercase letters and will never be empty.



*/

// solution

function wordsToMarks(string) {
  let sum = 0;

  for (let i = 0; i < string.length; i++) {
    sum += string.charCodeAt(i) - 96;
  }
  return sum;
}

const wordsToMarks = (str) =>
  [...str].reduce((sum, char) => (sum += char.charCodeAt() - 96), 0);
