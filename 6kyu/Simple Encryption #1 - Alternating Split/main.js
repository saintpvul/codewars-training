/*

Implement a pseudo-encryption algorithm which given a string S and an integer N concatenates all the odd-indexed characters of S with all the even-indexed characters of S, this process should be repeated N times.

Examples:

encrypt("012345", 1)  =>  "135024"
encrypt("012345", 2)  =>  "135024"  ->  "304152"
encrypt("012345", 3)  =>  "135024"  ->  "304152"  ->  "012345"

encrypt("01234", 1)  =>  "13024"
encrypt("01234", 2)  =>  "13024"  ->  "32104"
encrypt("01234", 3)  =>  "13024"  ->  "32104"  ->  "20314"
Together with the encryption function, you should also implement a decryption function which reverses the process.

If the string S is an empty value or the integer N is not positive, return the first argument without changes.

This kata is part of the Simple Encryption Series:

Simple Encryption #1 - Alternating Split
Simple Encryption #2 - Index-Difference
Simple Encryption #3 - Turn The Bits Around
Simple Encryption #4 - Qwerty
Have fun coding it and please don't forget to vote and rank this kata! :-)



*/

// solution

function encrypt(text, n) {
  if (!text || n < 1) return text;
  while (n--) {
    let res = "";
    for (let i = 1; i < text.length; i += 2) {
      res += text[i];
    }
    for (let i = 0; i < text.length; i += 2) {
      res += text[i];
    }
    text = res;
  }
  return text;
}

function decrypt(encryptedText, n) {
  if (!encryptedText || n <= 0) return encryptedText;
  const res = new Array(encryptedText.length);
  while (n--) {
    let j = 0;
    for (let i = 1; i < res.length; i += 2) {
      res[i] = encryptedText[j++];
    }
    for (let i = 0; i < res.length; i += 2) {
      res[i] = encryptedText[j++];
    }
    encryptedText = res.join("");
  }
  return encryptedText;
}