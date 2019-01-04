// The filter() method creates a new array with all elements that pass the 
// test implemented by the provided function.
// callback takes argument: element, index, array


// var words = ['spray', 'limit', 'elite', 'exuberant', 'destruction', 'present'];
// console.log(words.filter(word => word.length > 6));

//////////////////
// I can also use this to  find even/odd numbers

// const numbers = [1, 2, 4, 5, 7, 8, 11];
// console.log(numbers.filter(i => i % 2 === 0));
// What would you change to get odd numbers in the above

///////////////////
// Lets implement our own filter

// const myFilter = (array, callback) => {
//     const newArray = [];


//     return newArray;
// }

// console.log([1, 2, 4, 5, 7, 8, 11], (i => i % 2 === 0));
///////////////////////////////////

// Some more examples
// const students = [
//     { name: 'prithvi', age: 20, section: 'A' },
//     { name: 'shubham', age: 19, section: 'B' },
//     { name: 'smriti', age: 17, section: 'B'},
//     { name: 'aprimit', age: 20, section: 'C' },
//     { name: 'ashvini', age: 16, section: 'A' }
// ]

// Find the adults

// console.log(students.filter(student => student.age > 18));
// get names in the above

// Find the students in section B