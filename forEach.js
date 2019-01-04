// The forEach() method executes a provided function once for each array element.
// forEach returns undefined
// forEach callback takes in 3 arguments, they are: the current element, the current element index, the array being traversed

const arr = ["a", "b", "c", "d", "e"];

// I want to print out all the elements of this array
// So I will use a for loop

// for(let i=0; i< arr.length; i++) {
//     console.log(arr[i]);
// }

// arr.forEach((element) => console.log(element));

// But I also want the indexes of these elements

// arr.forEach((element, index) => console.log(element, index));

// Similarly we can also access the array

// arr.forEach((element, index, theArray) => console.log(element, index, theArray));

// const newArr = [2, 4, 6, 8, 10, 12]
// const z = newArr.forEach((x) => console.log(x * 2));
// console.log(z);
////////////////////////////////////////

// Unlike map and reduce, forEach returns undefined and therefore is not chainable