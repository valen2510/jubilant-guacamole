// Get the vowels from a string and duplicate the vowels of e and u.

// Declare string and array of vowels to evaluate.
let input = 'a whale of a deal!'
const vowels = ['a','e','i','o','u'];
const resultArray = [];

// Transverse the string
for (let i = 0; i < input.length; i++) {
  //Transeverse the array of vowels
  for (let j = 0; j < vowels.length; j++) {
    //Compare if the current character of string is a vowel of the array
    if (input[i] === vowels[j]) {
      // add the character at the result array
      resultArray.push(input[i]);
    }
  }
  // Add again the vowels of e and u if the are found to get the dupicates.
  if (input[i] === 'e' || input[i] === 'u') {
    resultArray.push(input[i]);
  }
}

// Create a string from resultArray by concatenating its elements and convert it to uppercase
console.log(resultArray.join("").toUpperCase());
