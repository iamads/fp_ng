// The reduce() method executes a reducer function (that you provide) on each member of the array
// resulting in a single output value.

// const array1 = [1, 2, 3, 4];
// const reducer = (accumulator, currentValue) => accumulator + currentValue;

// // 1 + 2 + 3 + 4
// console.log(array1.reduce(reducer));
// // expected output: 10

// // 5 + 1 + 2 + 3 + 4
// console.log(array1.reduce(reducer, 5));
// // expected output: 15

// The reducer function takes four arguments:

// Accumulator (acc)
// Current Value (cur)
// Current Index (idx)
// Source Array (src)

// Your reducer function's returned value is assigned to the accumulator,
// whose value is remembered across each iteration throughout the array and ultimately becomes the final,
// single resulting value.


/////////////////////////////

const students = [
    { name: 'prithvi', age: 20, section: 'A' },
    { name: 'shubham', age: 19, section: 'B' },
    { name: 'smriti', age: 17, section: 'B'},
    { name: 'aprimit', age: 20, section: 'C' },
    { name: 'ashvini', age: 16, section: 'A' }
]

// I want to find the age of oldest student
// console.log(students.reduce((maxAge, student) => {
//     if (maxAge < student.age) {
//         return student.age
//     } else {
//         return maxAge;
//     }
// }, 0));

// Find youngest student
// console.log(students.reduce((minAge, student) => {
//     if (minAge > student.age) {
//         return student.age
//     } else {
//         return minAge;
//     }
// }, 0));

// What's the mistake in the above example?