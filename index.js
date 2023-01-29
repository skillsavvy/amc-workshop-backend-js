var validator = require('validator');

//require is a function to import package in your code.

const isValidEmail = validator.isEmail('foo@bar.com');
// this condition to test valid email in your code like login/signup

console.log("Your email is ", isValidEmail);