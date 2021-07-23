// ------------------- PRACTICING TO CODE WARS ---------------------
// ----------------------->01<--------------------------------------
// Write a function that accepts an array of 10 integers (between 0 and 9), that returns a string of those numbers in the form of a phone number.
// Example:
// createPhoneNumber([1, 2, 3, 4, 5, 6, 7, 8, 9, 0]) // => returns "(123) 456-7890"


// function createPhoneNumber(numbers){
//     return `(${numbers.slice(0, 3).join('')}) ${numbers.slice(3, 6).join('')}-${numbers.slice(6).join('')}`
// }


// function createPhoneNumber(arr) {
//     let str = arr.join('');
//     return `(${str.substring(0, 3)}) ${str.substring(3, 6)}-${str.substring(6)}`;
// }


// function createPhoneNumber(arr) {
//     let mask = '(xxx) xxx-xxxx';
//     arr.forEach(item => {
//         mask = mask.replace('x', item);
//     });
//     return mask;
// }


// function createPhoneNumber(numbers){
//     let format = "(xxx) xxx-xxxx";
//     for(var i = 0; i < numbers.length; i++)
//     {
//       format = format.replace('x', numbers[i]);
//     }
//     return format;
//   }


// function createPhoneNumber(numbers){
//     return numbers.join('').replace(/(...)(...)(.*)/, '($1) $2-$3');
//   }