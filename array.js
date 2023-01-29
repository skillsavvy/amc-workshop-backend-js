var array = []; // empty square brackets - to define a array

// array has index - starts with zero
// array length = 6;
// Foreach is method of array - to loop the array elements
// push method
// array1.push(100);
// array1.forEach(function(element) {
//     console.log('Element', element);
// });
// console.log('Length', array1.length); // 7
// array1.pop(); // 100
// console.log('Length', array1.length); // 6

// splice
var array1 = ['Hello world', 10, false, true, null, undefined];
console.log('Length', array1.length); // 6
array1.splice(1, 3, 2000, 3000);
console.log('Array', array1)
console.log('Length', array1.length); // 

// console.log('Array 1st item', array1[0]);
// console.log('Array 1st item', array1[-1]);
// console.log('Array 1st item', array1[1]);
// console.log('Array 1st item', array1[6]);
// console.log('Array:Length', array1.length);