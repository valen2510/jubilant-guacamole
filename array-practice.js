// Show the secret message
// Secret message
let secretMessage = ['Learning', 'is', 'not', 'about', 'what', 'you', 'get', 'easily', 'the', 'first', 'time,', 'it', 'is', 'about', 'what', 'you', 'can', 'figure', 'out.', '-2015,', 'Chris', 'Pine,', 'Learn', 'JavaScript'];

// Delete the last element of secretMessage ('JavaScript')
secretMessage.pop();

// Add two items at the end of secretMessage
secretMessage.push('to', 'Program');

// Replace the seventh element ('easily') with 'right'
secretMessage[7] = 'right';

// Remove the element at the start ('Learning') of secretMessage
secretMessage.shift();

// Add an element 'Programming' at the start of secretMessage
secretMessage.unshift('Programming');

// Replacing a sub-array, from 6th element (five times) until 10th element, with 'know'.
secretMessage.splice(6, 5, 'know');

// Create a string from secretMessage by concatenating its elements
console.log(secretMessage.join(" "));
