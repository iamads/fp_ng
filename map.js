// The map() method creates a new array with the results of calling a provided function on every element in the calling array.

const arr1 = [2, 4, 6, 8, 10];
// const arr2 = arr1.map(x => x*2);
// console.log(arr2);

// We did the same thing in a forEach also, but there is a very important diffrence
// Did you guys see it?
/////////////////////////////////////////////////////////
// Ok lets try to write a basic version of map

// const myMap = (array, callback) => {
//     const newArray = [];

//     array.forEach((element) => newArray.push(callback(element)));

//     return newArray;
// }

// const doubleIt = (x) => x * 2;
// const halfIt = (x) => x / 2;

// console.log(myMap(arr1, doubleIt));

// console.log(myMap(arr1, halfIt));
////////////////////////////////////////////////////////

// I have a array of numbers which I want their square root

// const squares = [1, 4, 9, 16, 25, 36];
// const sqrts = squares.map(Math.sqrt);
// console.log(sqrts);

////////////////////
// I have some numbers which I want to round off

// const numbers = [1.1, 2.4, 3.7, 8, 9.1, 11.2];
// console.log(numbers.map(Math.floor));