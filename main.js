// Hashvel factorial tiv@

function factorial1(num) {
  for (let i = num - 1; i >= 1; i--) {
    num = num * i;
  }
  return num;
}
console.log(factorial1(6));

//Algorithm, gteq bolor kent tver@

// let randomom_num = [1, 2, 4, 5, 6, 7, 2, 3];
// for (let i = 0; i < random_num.length; i++) {
//   if (random_num[i] % 2 !== 0) {
//     console.log(random_num[i]);
//   }
// }

// // Algorithm, gteq duplikatner@ massivi mej ev texadreq iranc nor massivi mej

// let numbers1 = [1, 2, 3, 2, 4, 5, 5, 6, 6];

// let duplicates1 = [];

// for (let i = 0; i < numbers1.length; i++) {
//   for (let j = 0; j < numbers1.length; j++) {
//     if (i !== j) {
//       if (numbers1[i] === numbers1[j] && !duplicates1.includes(numbers1[i])) {
//         duplicates1.push(numbers1[i]);
//       }
//     }
//   }
// }
// console.log(duplicates1);

// // write a function which changes places of 2 given arguments
// // for example, if function accepts 5 and 2, it should return 2 and 5

// function myTmp(a, b) {
//   let tmp;
//   tmp = a;
//   a = b;
//   b = tmp;
//   return a + " " + b;
// }

// console.log(myTmp(45, 67));

// //swap example

// // a = 3;
// // b = 5;
// // [a,b] = [b,a]

// // console.log(a, b);

// // write a function which accepts 3 numbers and returns their sum

// function sum(first, second) {
//   console.log(first + second);
// }
// sum(4, 6);

// // write a function to test if an array has length of 3

// let array = [1, 2, 3];

// let check_len = () => {
//   if (array.length != 3) {
//     console.log(false);
//   } else console.log(true);
// };

// check_len();

// // write a function which removes duplicates from an array [1, 5, 6, 2, 3, 4, 5, 2, 3, 1]

// let test_arr = [1, 3, 5, 1, 2, 7, 5, 1, 2];
// let new_arr = [];
// function remove_dup(arr) {
//   for (let i = 0; i < arr.length; i++) {
//     if (!new_arr.includes(arr[i])) {
//       new_arr.push(arr[i]);
//     }
//   }
// }
// remove_dup(test_arr);
// console.log(new_arr);

// // Duplicate Remove Example

// // let numbers = [1, 5, 6, 2, 3, 4, 5, 2, 3, 1]

// // let newNumbers = numbers.filter((element, index) => {
// //     return numbers.indexOf(element) === index;
// // });

// // console.log(newNumbers);

// // Using linear search, find the index of 18 Given an array  [1, 5, 7, 2, 3, 6, 18, 19]

// const find_index = [1, 5, 7, 2, 3, 6, 18, 19];

// for (let i = 0; i < find_index.length; i++) {
//   if (find_index[i] == 18) {
//     console.log(find_index[i]);
//   }
// }

// // Write a function to calculate the total sum of all integers in a given array
// // For example[1, 6, 2, 3, 2] = 1 + 6 + 2 + 3 + 2 =14

// let numbers = [3, 5, 7, 9, 11];

// let total_sum = function (numbersArr) {
//   let result = 0;

//   for (let i = 0; i < numbersArr.length; i += 1) {
//     let e = numbersArr[i];
//     result += e;
//   }
//   return result;
// };
// console.log(total_sum(numbers));

// // Write a function to count the factorial of a number (use 2 methods, linear for loop, and recursion)
// // Example, factorial of 5 = 1*2*3*4*5 = 120

// let factorial = function (nmb) {
//   for (let i = nmb - 1; i >= 1; i--) {
//     nmb = nmb * i;
//   }
//   return nmb;
// };
// console.log(factorial(7));

// // Write a function print any word you give as a parameters n amount of times
// // For example
// function word_print(word, count) {
//   let array = [];
//   for (let i = 0; i < count; array[i++]) array[i] = word;
//   return array.join("");
// }
// console.log(word_print("hello ", 5));
// // Expected result = hellohellohellohellohello

// // Write a function which calculates the total sum of elements inside an array and divides them by n
// // For example: arr = [1, 5, 6], n = 3, (1 + 5 + 6) / 3 = 4

// let test_array = [1, 5, 6];
// let divide = 3;

// function calc(arr, n) {
//   let result = 0;
//   for (let i = 0; i < arr.length; i++) {
//     const elem = arr[i];
//     result += elem / n;
//   }
//   return result;
// }

// console.log(calc(test_array, divide));

// // Write a function which checks if a given number can be divided by n without a remainder

// function isDivided(num, num_to_divide) {
//   if (num % num_to_divide == 0) {
//     return true;
//   }
//   return false;
// }

// console.log(isDivided(79, 10));

// // Write a function which finds the highest number inside an array

// function highest(arr) {
//   let max = arr[0];
//   for (let i = 1; i < arr.length; i++) {
//     if (arr[i] > max) max = arr[i];
//   }
//   return max;
// }
// test_array = [1, 5, 7, 8, 2, 3, 19, 52, 25, 11, 15];
// console.log(highest(test_array));

// // Write a function which calculates the total sum of elements inside an array in WHILE LOOP

// function summary(numbers) {
//   let result = 0;
//   let i = 0;
//   while (i < numbers.length) {
//     result += numbers[i];
//     i++;
//   }
//   return result;
// }
// let test = summary([1, 5, 6]);
// console.log(test);

// //Algorithm, gteq bolor kent tver@

// let random_nmb = [1, 2, 4, 5, 6, 7, 2, 3];
// for (let i = 0; i < random_nmb.length; i++) {
//   if (random_nmb[i] % 2 !== 0) {
//     console.log(random_nmb[i]);
//   }
// }

// //Algorithm, gteq duplikatner@ massivi mej ev texadreq iranc nor massivi mej

// let any_numbers = [1, 2, 3, 2, 4, 5, 5, 6];

// let duplicates = [];

// for (let i = 0; i < any_numbers.length; i++) {
//   for (let j = 0; j < any_numbers.length; j++) {
//     if (i !== j) {
//       if (
//         any_numbers[i] === any_numbers[j] &&
//         !duplicates.includes(any_numbers[i])
//       ) {
//         duplicates.push(any_numbers[i]);
//       }
//     }
//   }
// }

// console.log(duplicates);

// // Dublicate remove examples

// // let arr = [1,1,3,5,5,7,8,9,11,11,11,11,15];
// // let new_array = [];

// // for(let item of arr ){
// // if(new_array.indexOf(item) == -1){
// //      new_array.push(item)
// // }
// // }
// // console.log(new_array)

// // console.log(arr.indexOf(11))

// // let arr = [1,2,3,3,3,3,3,3,3,4,5,5,5, 6]

// // new_arr = []

// // for(let i =0 ; i < arr.length; i++){
// //         debugger
// //     if(!new_arr.includes(arr[i])){
// //         new_arr.push(arr[i])
// //     }
// // }

// // console.log(new_arr)

// let arr = [1, 1, 1, 3, 3, 5, 5, 7, 8, 9, 11, 11, 11, 11, 15];

// function sortArrayDub() {
//   let new_Array = [];
//   for (let i = 0; i < arr.length; i++) {
//     if (arr[i] !== arr[i - 1]) {
//       new_Array.push(arr[i]);
//     }
//   }
//   return new_Array;
// }
// console.log(sortArrayDub(arr));

// //stexcel massiv, vori mej ka massiv, orinak let a = [[1,2,3], [4,5,6], [7,8,9]]
// //ogtagorcel for loop for loopi mej vor console log aneq 1,2,3,4,5,6,7,8,9

// // const arr = [[1, 2, 3], [4, 5, 6], [7, 8, 9]];
// // for (i = 0; i < arr.length; i++) {
// //     for (let j = 0; j < arr[i].length; j++) {
// //         console.log(arr[i][j]);
// //     }
// // }

// // Bind Method

// const person = {
//   name: "Mike",
//   surname: "Tindall",
//   fullName: function () {
//     return this.name + " " + this.surname;
//   },
// };

// const newPerson = {
//   name: "Ben",
//   surname: "Parker",
// };

// let result = person.fullName.bind(newPerson);

// console.log(result(person));

// // Recursion factorial

// function factorIal(number) {
//   if (number < 1) {
//     return 1;
//   }
//   return number * factorIal(number - 1);
// }

// console.log(factorIal(5)); // should return 120

// //sum from given number to 0
// function mySum(number) {
//   if (number <= 1) {
//     return 1;
//   }
//   return number + mySum(number - 1);
// }

// console.log(mySum(10)); //should return 55

// const testarr1 = ["Jay", "Stan", "Anna"];
// const testarr2 = ["Lita", "Jay", "Thawne"];

// function dupl(array1, array2) {
//   const temp = [];
//   for (let i = 0; i < array1.length; i++) {
//     if (!temp.includes(array1[i])) {
//       temp.push(array1[i]);
//     }

//     for (let i = 0; i < array2.length; i++) {
//       if (!temp.includes(array2[i])) {
//         temp.push(array2[i]);
//       }
//     }
//   }
//   return temp;
// }
// console.log(dupl(testarr1, testarr2));

// // For Example
// // const testarr3 = ["Maria", "Stephanie", "Maria"]
// // const testarr4 = ["Ron", "Stephanie", "Romero"]
// // console.log(dupl(testarr3, testarr4))

// const myArr = [1, 42, 352, 5, 236, 2, 6, 236, 23, 4, 23, 56, 23, 623523];

// function findMax(arr) {
//   let max = arr[0];
//   for (let num of arr) {
//     if (max < num) {
//       max = num;
//     }
//   }
//   return max;
// }

// console.log(findMax(myArr));

// text reverse

// function reverse(str) {
//   return str.split("").reverse().join("");
// }
// console.log(reverse("Привет мир,как дела"));

// function reverse(data) {
//   let letters = [],
//     letter = data.length;
//   while (letter--) {
//     letters.push(data[letter]);
//   }
//   return letters.join("");
// }
// console.log(reverse("Это обычный текст"));

// function capitaLetter(data) {
//   const splitted = data.split("");
//   const capital = splitted[0].toUpperCase();
//   splitted.splice(0, 1);
//   const result = [capital, ...splitted].join("");
//   return result;
// }
// console.log(capitaLetter("lyov"));

const myName = "lyov";

const result = myName.charAt(0).toUpperCase() + myName.slice(1);

console.log(result);
