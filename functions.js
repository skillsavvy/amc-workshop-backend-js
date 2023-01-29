// function definition or syntax
//function functionName(parameters) {
// block of code
// }

// parameters are argument variables which are declared for function call

// function call syntax
// functionName(parameter value);

// functional scope

function showOutput(total) {
  console.log("Total result is " + total); // concat
}

function sum(number1, number2, number3) {
  var total = number1 + number2 + number3; // expression
  showOutput(total);
}

function minus(number1, number2, number3) {
  var total = number1 - number2 - number3; // expression
  showOutput(total);
}

// sum(10, 20, 30);
// minus(100, 200, 300);
// minus(1, 2);


// return statement - 
// returns a value from a function
// return statement should be last statement of the function

function getName(name) {
    var output = 'your name is '+ name;
    return output; // your name is value in name
}

// var name1 = getName();
// console.log(name1);
// var name2 = getName('Rushikesh');
// console.log(name2);

// var array = [1, 2, 3];
// new operator - it defines an object with this value
// this keyword - this is a pointer for an object instance for a class object
// var array = new Array(1, 2, 3);

// // function/method
// var function1 = function() { console.log('This is function expression')};

// array.forEach(function(element) {
//     // console.log('Element', element);
// });


// callback
function hamaraCallback(total) {
    // console.log('This is my callback', total);
}

function sum(num1, num2, cb) {
    console.log('Total', num1 + num2);
    console.log('cb', cb)
    cb(num1 + num2);
}

// console.log(sum(10, 20, hamaraCallback))


function shahid(phone_callback) {
    console.log('Im shahid');
    phone_callback();
}

function anand() {
    console.log('Im anand calling. please call me back fast.. abhi ke abhi');
}

shahid(anand); // this is a miscall