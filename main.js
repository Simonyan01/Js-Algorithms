// Binary search --------------------------------
// Function to calculate factorial using a for loop

// const factorial = (num) => {
//   let result = 1
//   while (num > 1) {
//     result *= num
//     num--
//   }
//   return result
// }
// console.log(factorial(5))

// function factorial(num) {
//   for (let i = num - 1; i > 1; i--) {
//     num = num * i
//   }
//   return num
// }
// console.log(factorial(5))

// const factorial = (num) => {
//   if (num === 1) {
//     return 1
//   }
//   return Math.ceil(num * factorial(num - 1))
// }

// console.log(factorial(5));

// const factorial = (num) => {
//   let result = 1
//   if (num === 1) {
//     return 1
//   }
//   for (let i = 1; i <= num; i++) {
//     result *= i
//   }

//   return result
// }

// console.log(factorial(5))

// ----------------------------------------------

// Binary search --------------------------------
// Implementation of binary search algorithm

// const array = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15]

// const binarySearch = (array, item) => {
//   let start = 0
//   let end = array.length - 1
//   while (start <= end) {
//     let middle = Math.floor((start + end) / 2)
//     if (array[middle] === item) {
//       return middle
//     } else if (item < array[middle]) {
//       end = middle - 1
//     } else {
//       start = middle + 1
//     }
//   }
//   return "Position not found"
// }

// console.log(binarySearch(array, 15))

// ----------------------------------------------

// Remove duplicates ----------------------------
// Function to remove duplicates from an array

// const removeDuplicates = function (nums) {
//   for (let i = 0; i < nums.length; i++) {
//     if (nums[i] === nums[i - 1]) {
//       nums.splice(i, 1)
//       i--
//     }
//   }
//   return nums;
// }

// const removeDuplicates = function (nums) {
//     let uniqueNums = [];
//     for (let i = 0; i < nums.length; i++) {
//       if (!uniqueNums.includes(nums[i])) {
//         uniqueNums.push(nums[i]);
//       }
//     }
//     return uniqueNums;
//   }

// let myNumbers = [1, 5, 6, 2, 3, 4, 5, 2, 3, 1];

// let newNumbers = myNumbers.filter((element, index) => myNumbers.indexOf(element) === index);

// console.log(newNumbers);

// ----------------------------------------------

// Get first unique character -------------------
// Function to find the index of the first unique character in a string

// let firstUniqueChar = function (str) {
//   for (let i = 0; i < str.length; i++) {
//     if (str.indexOf(str[i]) === str.lastIndexOf(str[i])) {
//       return i
//     }
//   }
//   return -1
// }

// ----------------------------------------------

// Max Length between equal characters ----------
// Function to find the maximum length between equal characters

// let maxLengthBetweenEqualCharacters = function (str) {
//   let maxSubstringLength = 0

//   for (let i = 0; i < str.length; i++) {
//     let firstIndex = str.indexOf(str[i])
//     let lastIndex = str.lastIndexOf(str[i])
//     if (firstIndex !== lastIndex) {
//       let substringLength = firstIndex + lastIndex - 1
//       maxSubstringLength = Math.max(maxSubstringLength, substringLength)
//     }
//   }
//   return maxSubstringLength
// }

// ----------------------------------------------

// Distinct Integers ----------------------------
// Function to generate distinct integers

// const distinctIntegers = function (n) {
//   let board = []
//   for (let day = 1; day <= 20; day++) {
//     let distinctNumbers = []
//     for (let i = 0; i < n; i++) {
//       distinctNumbers.push(Math.floor(Math.random() * 100))
//     }
//     board.push(distinctNumbers)
//   }
//   return board
// }

// console.log(distinctIntegers(5))
// console.log(3 * 4 + "5" - 2)

// ----------------------------------------------

// Number is prime or not -----------------------
// Function to check if a number is prime

// const isPrime = (num) => {
//   if (num <= 1) return false

//   for (let i = 2; i <= Math.sqrt(num); i++) {
//     if (num % i === 0) return false
//   }
//   return true
// }

// console.log(isPrime(6))

//  ---------------------------------------------

// Function to convert the first letter of each word to uppercase

// const toTitleCase = (str) => str.replace(/\b\w/g, (l) => l.toUpperCase())

// console.log(toTitleCase("lyov"))

// ----------------------------------------------

// Function Debounce ----------------------------
// Debounce function to delay function execution

// const debounce = (fn, ms) => {
//   let timeout
//   return function () {
//     const fnCall = () => fn.apply(this, arguments)
//     clearTimeout(timeout)
//     timeout = setTimeout(fnCall, ms)
//   }
// }

// function onChange(e) {
//   e.target.value
//   console.log(e.target.value)
// }

// onChange = debounce(onChange, 600)

// document.getElementById("debounce").addEventListener("keyup", onChange)

// ----------------------------------------------------------------

// Function Throttle
// Throttle function to limit the rate of function execution

// const throttle = (func, ms) => {
//   let isThrottled = false
//   let savedArgs
//   let savedThis
//   function innerFunc() {
//     if (isThrottled) {
//       savedArgs = arguments
//       savedThis = this
//       return
//     }

//     func.apply(this, arguments)
//     isThrottled = true
//     setTimeout(() => {
//       isThrottled = false
//       if (savedArgs) {
//         innerFunc.apply(savedThis, savedArgs)
//         savedArgs = savedThis = null
//       }
//     }, ms)
//   }
//   return innerFunc
// }

// function movedMouse() {
//   console.log(new Date())
// }

// movedMouse = throttle(movedMouse, 4000)

// setInterval(movedMouse, 1000)

// ----------------------------------------------------------------

// Algorithm, gteq bolor kent tver@

// let random_num = [1, 2, 4, 5, 6, 7, 2, 3];
// for (let i = 0; i < random_num.length; i++) {
//   if (random_num[i] % 2 !== 0) {
//     console.log(random_num[i]);
//   }
// }

// Algorithm, gteq duplikatner@ massivi mej ev texadreq iranc nor massivi mej

// let numbers1 = [1, 2, 3, 2, 4, 5, 5, 6, 6];

// let duplicates = [];

// for (let i = 0; i < numbers1.length; i++) {
//   for (let j = 0; j < numbers1.length; j++) {
//     if (i !== j) {
//       if (numbers1[i] === numbers1[j] && !duplicates.includes(numbers1[i])) {
//         duplicates.push(numbers1[i]);
//       }
//
//   }
// }
// console.log(duplicates);

// Write a function which changes places of 2 given arguments
// For example, if function accepts 5 and 2, it should return 2 and 5

// function myTmp(a, b) {
//   let tmp = a;
//   a = b;
//   b = tmp;
//   return a + " " + b;
// }

// console.log(myTmp(45, 67));

// Swap example

// let a = 3;
// let b = 5;
// [a, b] = [b, a];

// console.log(a, b);

// Write a function which accepts 3 numbers and returns their sum

// function sum(first, second) {
//   console.log(first + second);
// }
// sum(4, 6);

// Write a function to test if an array has length of 3

// let array = [1, 2, 3];

// let check_len = () => {
//   if (array.length == 3) {
//     console.log(true);
//   } else console.log(false);
// };

// check_len();

// Using linear search, find the index of 18 Given an array  [1, 5, 7, 2, 3, 6, 18, 19]

// const find_index = [1, 5, 7, 2, 3, 6, 18, 19];

// for (let i = 0; i < find_index.length; i++) {
//   if (find_index[i] === 18) {
//     console.log(find_index[i]);
//   }
// }

// Write a function to calculate the total sum of all integers in a given array
// For example [1, 6, 2, 3, 2] = 1 + 6 + 2 + 3 + 2 = 14

// let numbers = [3, 5, 7, 9, 11];

// function total_sum(numbersArray) {
//   let result = 0;
//   for (let i = 0; i < numbersArray.length; i++) {
//     result += numbersArray[i];
//   }
//   return result;
// }
// console.log(total_sum(numbers));

//  Write a function print any word you give as a parameters n amount of times

// function word_print(word, count) {
//   let array = [];
//   for (let i = 0; i < count; array[i++]) array[i] = word;
//   return array.join("");
// }

// console.log(word_print("hello ", 5)); ---- Expected result = hellohellohellohellohello

// Write a function which calculates the total sum of elements inside an array and divides them by n
// For example: arr = [1, 5, 6], n = 3, (1 + 5 + 6) / 3 = 4

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

// Write a function which checks if a given number can be divided by n without a remainder

// function isDivided(num, num_to_divide) {
//   if (num % num_to_divide == 0) {
//     return true;
//   }
//   return false;
// }

// console.log(isDivided(79, 10));

// Write a function which finds the highest number inside an array

// let test_array = [1, 5, 7, 8, 2, 3, 19, 52, 25, 11, 15];

// function highest(arr) {
//   let max = arr[0];
//   for (let i = 1; i < arr.length; i++) {
//     if (arr[i] > max) max = arr[i];
//   }
//   return max;
// }

// console.log(highest(test_array));

// Write a function which calculates the total sum of elements inside an array in WHILE LOOP

// function summary(numbers) {
//   let result = 0;
//   let i = 0;
//   while (i < numbers.length) {
//     result += numbers[i];
//     i++;
//   }
//   return result;
// }

// console.log(summary([1, 5, 6]));

// let arr = [1, 1, 1, 3, 3, 5, 5, 7, 8, 9, 11, 11, 11, 11, 15];
// let new_Array = [];

// function sortArrayDub() {
//   for (let i = 0; i < arr.length; i++) {
//     if (arr[i] !== arr[i - 1]) {
//       new_Array.push(arr[i]);
//     }
//   }
//   return new_Array;
// }
// console.log(sortArrayDub(arr));

// stexcel massiv, vori mej ka massiv, orinak let a = [[1,2,3], [4,5,6], [7,8,9]]
// ogtagorcel for loop for loopi mej vor console log aneq 1,2,3,4,5,6,7,8,9

// const arr = [
//   [1, 2, 3],
//   [4, 5, 6],
//   [7, 8, 9],
// ];

// for (let i = 0; i < arr.length; i++) {
//   for (let j = 0; j < arr[i].length; j++) {
//     console.log(arr[i][j]);
//   }
// }

//  Bind Method

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

// let myResult = person.fullName.bind(newPerson);

// console.log(myResult(person));

// Recursion factorial

// function factorIal(number) {
//   if (number < 1) {
//     return 1;
//   }
//   return number * factorIal(number - 1);
// }

// console.log(factorIal(5)); // should return 120

// Sum from given number to 0

// function mySum(number) {
//   if (number <= 1) {
//     return 1;
//   }
//   return number + mySum(number - 1);
// }

// console.log(mySum(10));  ---- should return 55

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

//  For Example
//  const testarr3 = ["Maria", "Stephanie", "Maria"]
//  const testarr4 = ["Ron", "Stephanie", "Romero"]
//  console.log(dupl(testarr3, testarr4))

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

//  Text reverse

//  function reverse(str) {
//    return str.split("").reverse().join("");
//  }

//  console.log(reverse("Привет мир"));

// function reverse(data) {
//   let letters = [];
//   let letter = data.length;
//   while (letter--) {
//     letters.push(data[letter]);
//   }
//   return letters.join("");
// }

// console.log(reverse("Это обычный текст"));

// function capitaLetter(data) {
//   const splitted = data.split("");
//   const capital = splitted.splice(0, 1)[0].toUpperCase();
//   return [capital, ...splitted].join("");
// }
// console.log(capitaLetter("lyov"));

// const myName = "lyov";

// const result = myName.charAt(0).toUpperCase() + myName.slice(1);

// console.log(result);

// function Rabbit() {}
// Rabbit.prototype = {
//   eats: true,
// };
// let rabbit = new Rabbit();
// delete Rabbit.prototype.eats;
// console.log(rabbit);

// let n = 0;
// console.log(n + 2 - (n % 2));

// console.log(Boolean(Infinity));

// console.log(Boolean(+0));

// function func(n) {
//   console.log(n);
// }
// let x = 7;
// func(x++);

// let num1 = 2;
// let num2 = "8";
// let operation = num2 - num1;
// console.log(operation);

// let z = 5;
// console.log(z++);
// console.log(++z);

// let i = 6;
// let j = 3;

// if (++i > 6 || ++j > 3) {
//   // do
// }

// console.log(i, j);

// const getData = () => new Promise((resolve) => resolve([1, 1, 2, 3, 5, 8, 13]));

// // getData().then(data => console.log(data))

// async function asyncExample() {
//   try {
//     const data = await getData();
//     console.log("Data", data);
//   } catch (e) {
//     console.log(e);
//   }
// }

// asyncExample();

// forEach with arrow function

// const foreach = () => numbers.forEach((number) => console.log(number * 2));

// Array.prototype.forEach.call(numbers, (x) => console.log(x * 2));

// Map with arrow function

// const map = () => {
//   return numbers.map((number) => number * 2);
// };

// console.log(map(numbers));

// const map = () => numbers.map((number) => number * 2);

// Reduce with arrow function

// const reduce = () => {
//   return numbers.reduce((val, i) => {
//     return val + i;
//   }, 0);
// };

// const reduce = () => numbers.reduce((val, i) => val + i, 0);

// console.log(reduce(numbers));

// let secondsToRemoveOccurrences = function (s) {
//   let str = s
//     .split("")
//     .map((elem) => Number(elem))
//     .reverse();
//   let sec = 0;
//   let check = true;
//   while (check) {
//     check = false;
//     console.log(str);
//     for (let i = 1; i < str.length; i++) {
//       if (str[i] < str[i - 1]) {
//         str[i] = 1;
//         str[i - 1] = 0;
//         check = true;
//         i++;
//       }
//     }
//     if (check) sec++;
//   }
//   return sec;
// };

// console.log(secondsToRemoveOccurrences("0110101"));

// for (let i = 10; i < 100; i++) {
//   if (i % 3 == 0 && i % 5 == 0) {
//     console.log("FB")
//   } else if (i % 3 == 0) {
//     console.log("F")
//   } else if (i % 5 == 0) {
//     console.log("B")
//   } else {
//     console.log(i)
//   }
// }

// for (let i = 0; i < 5; i++) {
//   for (let j = 0; j < 20; j++) {
//     document.write("+")
//   }
//   document.write("<br>")
//   document.body.style.margin = "5rem"
// }

// for (let i = 0; i < 20; i++) {
//   for (let k = 0; k < 20 - i; k++) {
//     document.write("&nbsp;")
//   }
//   for (let j = 0; j < i + 1; j++) {
//     document.write("+")
//   }

//   document.write("<br>")
//   document.body.style.margin = "5rem"
// }

// let count = 0
// for (let i = 10; i < 100; i++) {
//   if (i % 3 == 0 && i % 5 == 0) {
//     count++
//     if (count == 4) {
//       console.log(i)
//       break
//     }
//   }
// }

// for (let i = 10; i < 50; i++) {
//   if (i % 3 == 0) {
//     continue
//   }
//   console.log(i)
// }

// let p = +prompt("Մուտքագրեք թիվ")

// for (let i = 1; i <= 10; i++) {
//   let result = i * p
//   console.log(`${i} x ${p} = ${result}`)
// }

// for (let i = 1; i <= 10; i++) {
//   for (let j = 1; j <= 10; j++) {
//     let result = i * j
//     console.log(`${i} x ${j} = ${result}`)
//   }
//   console.log("")
// }

// for (let i = 10; i < 16; i++) {
//   for (let j = 0; j < 60; j += 5) {
//     let hour = i < 10 ? "0" + i : i
//     let min = j < 10 ? "0" + j : j
//     console.log(`${hour}:${min}`)
//   }
// }

// for (let i = 1; i <= 20; i++) {
//   if (i % 4 === 0) {
//     console.log(i)
//   } else if (i % 5 === 0) {
//     console.log("Five")
//   }
// }

// ----------------------------------------------------------------
// function firstIdx(arr) {
//   for (let i = 0; i < arr.length; i++) {
//     if (arr[i] % 2 == 0) {
//       return i
//     }
//   }
//   return -1
// }

// console.log(firstIdx([3, 8, 4, 2]))
// ----------------------------------------------------------------
// function vowelCount(text) {
//   let vowels = "aeouiAEOUI"
//   let count = 0
//   for (let i = 0; i < text.length; i++) {
//     if (vowels.includes(text[i])) {
//       count++
//     }
//   }
//   return count
// }

// console.log(vowelCount("Armenia"))
// ----------------------------------------------------------------
// function changeNumbers(text) {
//   return text.replace(/[0-9]/g, "*")
// }

// console.log(changeNumbers("a32c b8af e2c45"))
// ----------------------------------------------------------------
// function regexExample(text) {
//   let nums = text.match(/\d+/g)
//   let sum = 0
//   for (let i = 0; i < nums.length; i++) {
//     sum += parseInt(nums[i])
//   }
//   return sum
// }

// console.log(regexExample("a32c b8k a14c"))
// ----------------------------------------------------------------
// function chess(pos) {
//   let regex = /^[A-H][1-8]$/
//   return regex.test(pos)
// }

// console.log(chess("C55"))
// console.log(chess("C5"))
// ----------------------------------------------------------------

// Ֆունկցիա, որը ստանում է տեքստ և վերադարձնում ամենաերկար բառի հերթական համարը:

// function longestWordIndex(text) {
//   const words = text.split(" ")

//   let longestIndex = 0
//   let maxLength = 0
//   for (let i = 0; i < words.length; i++) {
//     if (words[i].length > maxLength) {
//       maxLength = words[i].length
//       longestIndex = i
//     }
//   }
//   return longestIndex
// }

// console.log(longestWordIndex("This is a test sentence"))
// console.log(longestWordIndex("Another example with different length words"))

// Ֆունկցիա, որը ստանում է տեքստ և վերադարձնում թվանշան պարունակող բառերի քանակը:

// function countWordsWithDigits(text) {
//   const words = text.split(" ")

//   let count = 0
//   for (let i = 0; i < words.length; i++) {
//     if (/\d/.test(words[i])) {
//       count++
//     }
//   }
//   return count
// }

// console.log(countWordsWithDigits("Mix of words and num8ers"))
// console.log(countWordsWithDigits("There are 2 apples and 3 oranges"))
// console.log(countWordsWithDigits("No numbers here"))

// Ֆունկցիա, որը ստանում է տեքստ, բոլոր ձայնավորները փոխարինում * ով:

// function replaceVowelsWithAsterisk(text) {
//   return text.replace(/[aeiou]/gi, "*")
// }

// console.log(replaceVowelsWithAsterisk("Apricot"))

// Ֆունկցիա, որը ստանում է a, b թվեր և վերադարձնում a-ից b հատվածում գտնվող բոլոր թվերի գումարը:

// function sumInRange(a, b) {
//   let sum = 0
//   for (let i = a; i <= b; i++) {
//     sum += i
//   }
//   return sum
// }

// console.log(sumInRange(2, 8))

// function isPalindrome(num) {
//   let text = num.toString()
//   let n = text.length

//   for (let i = 0; i < n / 2; i++) {
//     if (text[i] !== text[n - 1 - i]) {
//       return false
//     }
//   }
//   return true
//   // return text == [...text].reverse().join("")
// }

// console.log(isPalindrome("annae"))

// function twoSum(nums, target) {
//   // for (let i = 0; i < nums.length - 1; i++) {
//   //   for (let j = i + 1; j < nums.length; j++) {
//   //     if (nums[i] + nums[j] == target) {
//   //       return [i, j]
//   //     }
//   //   }
//   // }
//   let temp = [] // [0, 1, 2, 3], indices -> [2, 3, 4, 1]
//   for (let i = 0; i < nums.length; i++) {
//     let diff = target - nums[i] // diff = 7 - 2 = 5 | diff = 7 - 3 = 4 | diff = 7 - 4 = 3
//     if (diff in temp) {
//       return [temp[diff], i]
//     }
//     temp[nums[i]] = i
//   }
// }

// console.log(twoSum([2, 3, 4, 1], 7))

// function task(text) {
//   let [hour, min] = text.split(":")
//   min -= 10
//   if (min < 0) {
//     hour--
//     min += 60
//   }
//   if (hour < 0) {
//     hour = 23
//   }
//   return `${hour}:${min.toString().padStart(2, "0")}`
// }

// console.log(task("11:00"))

// function evaluate(text) {
//   let nums = text.split(/[+-]/) // ["14","2","3","6"]
//   let actions = text.match(/[+-]/g) // ["+","-","+"]
//   let result = +nums[0] // 14
//   for (let i = 0; i < actions.length; i++) {
//     if (actions[i] == "+") {
//       result += +nums[i + 1]
//     } else {
//       result -= nums[i + 1]
//     }
//   }
//   return result
//   // return eval(text)
// }

// console.log(evaluate("14+2-3+6"))

// function parent() {
//   let cache = []
//   return factorial

//   function factorial(n) {
//     let p = 1
//     for (let i = 2; i <= n; i++) {
//       p *= i
//     }
//     cache[n] = p
//     return p
//   }
// }

// let result = parent()

// console.log(result(5))

// const binarySearch = (arr, target, start = 0, end = arr.length - 1) => {
//   if (start > end) {
//     return -1
//   }

//   const mid = Math.floor((start + end) / 2)

//   if (arr[mid] === target) {
//     return mid
//   }

//   if (arr[mid] > target) {
//     return binarySearch(arr, target, start, mid - 1)
//   } else {
//     return binarySearch(arr, target, mid + 1, end)
//   }
// }

// const array = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
// const target = 7
// const result = binarySearch(array, target)

// console.log(result)

// function isPrime(num) {
//   if (num <= 1) return false // Numbers less than or equal to 1 are not prime
//   for (let i = 2; i < Math.sqrt(num); i++) {
//     if (num % i === 0) {
//       return false // If num is divisible by any number other than 1 and itself
//     }
//   }
//   return true // If no divisors were found, num is a prime number
// }

// console.log(isPrime(121))

// class Student {
//   exams = []
//   constructor(name) {
//     this.name = name
//   }
//   addExam(examInfo) {
//     const { exams } = this
//     exams.push(examInfo)
//   }
//   average() {
//     const { exams } = this
//     return exams.reduce((a, b) => a + b.rate, 0) / exams.length
//   }
//   info() {
//     console.log(this.name)
//     this.exams.forEach((e) => {
//       console.log(e.subject, e.rate)
//     })
//     console.log(`Avg: ${this.average()}`)
//   }
// }

// class Exam {
//   constructor(subject, rate) {
//     this.subject = subject
//     this.rate = rate
//   }
// }

// let s1 = new Student("Anna")

// s1.addExam(new Exam("Math", 2))
// s1.addExam(new Exam("English", 10))
// s1.addExam(new Exam("Physics", 9))

// console.log(s1)
// console.log(s1.average())
// s1.info()

// class Person {
//   name = null
//   #salary = null // Private field
//   get salary() {
// return this.#salary * 0.7
//   }
//   set salary(val) {
// if (val < 0) {
//   throw new Error("Salary can't have a negative value")
// }
// this.#salary = val
//   }
// }
//
// let p = new Person()
// p.name = "Ashot"
// p.salary = -250000
// console.log(p)
// console.log(p.salary)

// class Person {
//   constructor(name, age) {
//     this.name = name
//     this.age = age
//   }
//   info() {
//     console.log(this)
//   }
// }

// class Male extends Person {}

// class Female extends Person {
//   constructor(name, age, isMother) {
//     super(name, age)
//     this.isMother = isMother
//   }
// }

// let p1 = new Person("John", 40)
// let p2 = new Male("Tiko", 42)
// let p3 = new Female("Anna", 27, true)

// p1.info()
// p2.info()
// p3.info()

// console.log(p2 instanceof Male) // true
// console.log(p2 instanceof Person) // true
// console.log(p2 instanceof Female) // false

// class Point2d {}
// class Point3d extends Point2d {}

// var point = new Point2d(3, 4)

// console.log(point instanceof Point2d) // true
// console.log(point instanceof Point3d) // false

// var anotherPoint = new Point3d(3, 4, 5)

// console.log(anotherPoint instanceof Point2d) // true
// console.log(anotherPoint instanceof Point3d) // true

// class Employee {
//   #salary = null // private դաշտ
//   constructor(name, age, gender, salary) {
//     this.name = name
//     this.age = age
//     this.gender = gender
//     this.salary = salary
//   }

//   get salary() {
//     return this.#salary * 0.73 // վերադառնում է աշխատավարձի 73%-ը
//   }

//   set salary(value) {
//     if (value > 0) {
//       this.#salary = value
//     } else {
//       throw new Error("Salary must be a positive number")
//     }
//   }
// }

// class Teacher extends Employee {
//   constructor(name, age, gender, salary, isLead) {
//     super(name, age, gender, salary)
//     this.isLead = isLead // լրացուցիչ դաշտ՝ դասղեկ լինել-չլինելու մասին
//   }
// }

// class Doctor extends Employee {
//   // Այստեղ ոչ մի լրացուցիչ դաշտ պետք չէ, ուղղակի ժառանգում ենք Employee-ից
// }

// class Developer extends Employee {
//   constructor(name, age, gender, salary, position) {
//     super(name, age, gender, salary)
//     this.position = position // լրացուցիչ դաշտ՝ դիրքը (junior/senior/middle)

//     if (!["junior", "middle", "senior"].includes(position)) {
//       throw new Error("Position must be 'Junior','Middle' or 'Senior'")
//     }
//   }
// }

// // Օրինակ՝
// const teacher = new Teacher("Anna", 30, "female", 100000, true)
// const doctor = new Doctor("David", 40, "male", 150000)
// const developer = new Developer("Mike", 25, "male", 120000, "middle")

// console.log(teacher.salary)
// console.log(developer.position)

// const employees = [
//   new Teacher("Anna", 30, "female", 1000000, true),
//   new Doctor("David", 40, "male", 150000),
//   new Developer("Mike", 25, "male", 120000, "junior"),
//   new Teacher("Karen", 45, "male", 90000, false),
//   new Developer("Lily", 28, "female", 200000, "senior"),
// ]

// const highestPaidEmployee = employees.reduce((prev, current) => (prev.salary > current.salary ? prev : current))

// console.log(`Ամենաբարձր աշխատավարձով աշխատակիցն է՝ ${highestPaidEmployee.name} - ${highestPaidEmployee.salary}`)

// const highestPaidTeacher = employees
//   .filter((employee) => employee instanceof Teacher)
//   .reduce((prev, current) => {
//     return prev.salary > current.salary ? prev : current
//   })

// console.log(`Ամենաբարձր աշխատավարձով ուսուցիչն է՝ ${highestPaidTeacher.name} - ${highestPaidTeacher.salary}`)

// const seniorDevelopers = employees.filter((employee) => employee instanceof Developer && employee.position === "senior")
// const averageSeniorSalary = seniorDevelopers.reduce((sum, developer) => sum + developer.salary, 0) / seniorDevelopers.length

// console.log(`Senior ծրագրավորողների միջին աշխատավարձն է՝ ${averageSeniorSalary}`)

// const lowestPaidLeadTeacher = employees
//   .filter((employee) => employee instanceof Teacher && employee.isLead)
//   .reduce((prev, current) => {
//     return prev.salary < current.salary ? prev : current
//   })

// console.log(`Ամենացածր աշխատավարձով դասղեկն է՝ ${lowestPaidLeadTeacher.name} - ${lowestPaidLeadTeacher.salary}`)

Array.prototype.instanceOfMap = function (callback) {
    if (typeof callback !== "function") {
        throw new TypeError(`${callback} is not a function`)
    }

    const result = [];

    for (const [key, value] of this) {
        result.push(callback(value, key, this));
    }

    return result;
}

Array.prototype.instanceOfFilter = function (callback) {
    if (typeof callback !== "function") {
        throw new TypeError(`${callback} is not a function`)
    }

    const result = []
    for (let i = 0; i < this.length; i++) {
        if (callback(this[i], i, this)) {
            result.push(this[i])
        }
    }
    return result
}

Array.prototype.instanceOfReduce = function (callback, initial) {
    if (typeof callback !== "function") {
        throw new TypeError(`${callback} is not a function`)
    }

    let acc = initial ?? this[0]
    let start = initial === undefined ? 1 : 0

    for (let i = start; i < this.length; i++) {
        acc = callback(acc, this[i], i, this)
    }

    return acc
}

Number.instanceOfIsNan = function (x) {
    if (typeof x == "number" && x != x) {
        return true
    }
    return false
}

// ----------------------------------------------------------------------------

Array.prototype.instanceOfIncludes = function (searchElement, fromIndex = 0) {
    while (fromIndex < this.length) {
        if (this[fromIndex] === searchElement) {
            return true
        }
        fromIndex++
    }
    return false
}

// ----------------------------------------------------------------------------

Array.prototype.instanceOfEvery = function (callback) {
    if (typeof callback !== "function") {
        throw new TypeError(`${callback} is not a function`)
    }

    for (let i = 0; i < this.length; i++) {
        if (!callback(this[i], i)) {
            return false
        }
    }

    return true
}

// ----------------------------------------------------------------------------

Array.prototype.instanceOfSome = function (callback) {
    if (typeof callback !== "function") {
        throw new TypeError(`${callback} is not a function`)
    }

    for (let i = 0; i < this.length; i++) {
        if (callback(this[i], i)) {
            return true
        }
    }

    return false
}

// ----------------------------------------------------------------------------

// Array.prototype.exampleOfSplice = function (start, deleteCount) {
//   let o = Object(this)
//   let len = o.length

//   if (start < 0) {
//     start = Math.max(len + start, 0)
//   }

//   // Եթե deleteCount-ը բացակայում է, ջնջում ենք բոլոր տարրերը start-ից հետո
//   if (arguments.length === 1) {
//     deleteCount = len - start
//   } else {
//     deleteCount = Math.min(Math.max(deleteCount, 0), len - start) // Սահմանափակում ենք ջնջվող տարրերի քանակը
//   }

//   let removed = o.slice(start, start + deleteCount)

//   let itemsToInsert = Array.prototype.slice.call(arguments, 2)
//   let itemsCount = itemsToInsert.length

//   // Տեղափոխում ենք մնացած տարրերը
//   if (itemsCount > deleteCount) {
//     for (let i = len - 1; i >= start + deleteCount; i--) {
//       o[i + itemsCount - deleteCount] = o[i]
//     }
//   } else {
//     // Եթե շատ տեղադրումներ չեն, պարզապես տեղափոխում ենք ավելի քիչ տարրեր
//     for (let i = start + deleteCount; i < len; i++) {
//       o[i + itemsCount - deleteCount] = o[i]
//     }
//   }

//   // Ավելացնում ենք նոր տարրերը
//   for (let i = 0; i < itemsCount; i++) {
//     o[start + i] = itemsToInsert[i]
//   }

//   o.length = len - deleteCount + itemsCount // Թարմացնում ենք զանգվածի երկարությունը

//   return removed
// }

Array.prototype.instanceOfSplice2 = function (start, count, ...args) {
    let middle = this.slice(start, start + count)
    let end = this.slice(start + count)
    this.length = start
    this.push(...args)
    this.push(...end)
    return middle
}

// let arr = [10, 20, 30, 40, 50, 60, 70, 80]
// let removed = arr.exampleOfSplice2(2, 3, "A", "B", "C")
// console.log(arr)

// ----------------------------------------------------------------------------

String.prototype.instanceOfSplit = function (separator) {
    const result = []
    let start = 0
    for (let i = 0; i < this.length; ++i) {
        if (this[i] == separator[0]) {
            let temp = this.slice(i, i + separator.length)
            if (temp == separator) {
                result.push(this.slice(start, i))
                start = i + separator.length
            }
        }
    }
    result.push(this.slice(start))

    return result
}

// let text = "abc__fffr__hh"
// let temp = text.exampleOfSplit("__")
// console.log(temp)

// ------------------------------------------------------------------------------------------------

Array.prototype.instanceOfJoin = function (separator = ",") {
    return this.map(item => item ?? "").join(String(separator));

    // separator = String(separator)
    // let result = ""

    // for (let i = 0; i < this.length; i++) {
    //     if (i > 0) {
    //         result += separator
    //     }
    //     result += this[i] ?? ""
    // }

    // return result
}

function* range(a, b) {
    while (a < b) {
        yield a++
    }
}

// const gen3 = range(10, 20)

// for (const item of gen3) {
//     console.log(item)
// }

function* fib() {
    let current = 0,
        next = 1
    while (true) {
        yield next
            ;[current, next] = [next, current + next]
    }
}

// const fibNums = fib()

// console.log(fibNums.next())
// console.log(fibNums.next())

class Reversed extends Array {
    constructor(...args) {
        super(...args)
    }

    [Symbol.iterator]() {
        let i = this.length - 1
        return {
            next: () => {
                if (i >= 0) {
                    return { value: this[i--], done: false }
                }
                return { done: true }
            },
        }
    }

    static [Symbol.hasInstance](model) {
        if (!Array.isArray(model)) return false

        const isNumbers = model.every((el) => typeof el === "number")
        if (!isNumbers) return false
        if (model.length > 0) {
            const isDescending = model.every((elem, idx, arr) => idx === 0 || arr[idx - 1] > elem)

            return isDescending
        }
        return false
    }
}

// let validDescending = new Reversed(10, 5, 3);
// let invalidDescending = new Reversed(3, 7, 10);

// console.log(validDescending instanceof Reversed);
// console.log(invalidDescending instanceof Reversed);


Function.prototype.callPoly = function (context, ...args) {
    let temp = { ...context }
    temp.func = this
    temp.func(...args)
}

Function.prototype.applyPoly = function (context, args) {
    if (!Array.isArray(args)) {
        throw new Error("Arguments must be in an array")
    }
    let temp = { ...context }
    temp.func = this
    temp.func(args)
}

Function.prototype.bindPoly = function (context) {
    let temp = { ...context }
    temp.func = this

    return function (...args) {
        temp.func(...args)
    }
}

Promise.instanceOfAll = function (args) {
    return new Promise((resolve, reject) => {
        let count = 0,
            values = []

        args.forEach((promise, idx) => {
            promise
                .then((val) => {
                    values[idx] = val
                    count++
                    if (count === args.length) {
                        resolve(values)
                    }
                })
                .catch(reject)
        })
    })
}

Promise.instanceOfAny = function (args) {
    return new Promise((resolve, reject) => {
        let count = 0,
            errors = []

        args.forEach((promise, idx) => {
            promise
                .then(resolve)
                .catch((error) => {
                    errors[idx] = error
                    count++
                    if (count === args.length) {
                        reject(new Error(errors))
                        // Քանի որ չենք անցել։
                        // reject(new AggregateError(errors, "All promises were rejected"));
                    }
                })
        })
    })
}

Promise.instanceOfRace = function (args) {
    return new Promise((resolve, reject) => {
        args.forEach((promise) => {
            promise
                .then(resolve)
                .catch(reject)
        })
    })
}

Promise.instanceOfAllSettled = function (args) {
    return new Promise((resolve) => {
        let count = 0,
            values = []

        const handlePromise = (status, value, i) => {
            values[i] = { status, value }
            count++
            if (count === args.length) {
                resolve(values)
            }
        }

        args.forEach((promise, idx) => {
            promise
                .then((value) => handlePromise("fulfilled", value, idx))
                .catch((reason) => handlePromise("rejected", reason, idx))
        })
    })
}
const calculate = () => {
    let cache = {}
    return isPrime

    function isPrime(num) {
        if (num <= 1) return false
        if (num in cache) return cache[num]

        let target = true
        for (let i = 2; i <= Math.sqrt(num); ++i) {
            if (num % i == 0) {
                target = false
                break
            }
        }

        cache[num] = target
        return target
    }

}

const fibonacciSequence = (num, memo = {}) => {
    if (num <= 1) return num
    if (num in memo) return memo[num]

    memo[num] = fibonacciSequence(num - 1) + fibonacciSequence(num - 2)
    return memo[num]
}

const factorial = (num, memo = {}) => {
    if (num <= 1) return 1
    if (memo[num]) return memo[num]

    memo[num] = num * factorial(num - 1, memo)
    return memo[num]
}

// class Library {
//   amount = 0
//   items = []
//   addBook(book) {
//     if (!(book instanceof Book)) {
//       throw new TypeError("Must be a book")
//     }
//     this.items.push(book)
//   }
//   takeOne(title, user) {
//     return new Promise((resolve, reject) => {
//       const found = this.items.find((book) => book.title === title)
//       if (!found) {
//         reject(`No such book - ${title}`)
//       } else if (!found.isAvailable()) {
//         reject(`${title} is not available. Try again later`)
//       } else if (user.amount < found.price) {
//         reject(`You can't afford - ${title}`)
//       } else {
//         this.amount += found.price
//         user.amount -= found.price
//         found.count--
//         resolve(`${title} ordered successfully`)
//       }
//     })
//   }
//   takeAll(titles, user) {
//     const results = titles.map((title) => this.takeOne(title, user))
//     return Promise.all(results)
//   }
// }

// class User {
//   constructor(name, amount) {
//     this.name = name
//     this.amount = amount
//   }
// }

// class Book {
//   constructor(title, author, price, count) {
//     this.title = title
//     this.author = author
//     this.price = price
//     this.count = count
//   }
//   isAvailable() {
//     return this.count > 0
//   }
// }

// const library = new Library()
// const user1 = new User("Ashot", 9200)
// const user2 = new User("Anna", 17200)

// console.log(library)
// library.addBook(new Book("Hamlet", "Shakespeare", 4200, 3))
// library.addBook(new Book("Scope and Closure", "Kyle Simpson", 5300, 1))
// library.addBook(new Book("The Idiot", "Dostoevksi", 4200, 2))
// library.addBook(new Book("Stranger", "Camus", 1800, 5))
// library.addBook(new Book("The Trial", "Kafka", 3500, 1))

// library
//   .takeOne("Scope and Closure", user1)
//   .then((result) => console.log(result))
//   .catch((err) => console.error(err))

// library
//   .takeAll(["Scope and Closure", "The Trial", "Hamlet"], user2)
//   .then((res) => console.log(res))
//   .catch((err) => console.error(err))

// console.log(user1)

// console.log(user2)

// class Foo {
//     [Symbol.toPrimitive](hint) {
//         console.log(hint);
//         return 42
//     }
// }

// let bar = new Foo()

// console.log(bar + 8);
// console.log(bar + "8");
// console.log(bar * 8);
// console.log(String(bar));

// with (Math) {
//   console.log(sin(5) + sqrt(6) + pow(2, 3));
// }

// let o1 = {
//     name: "Ash"
// }

// let m1 = new Map()

// m1.set(o1, [2, 2, 2])
// console.log(m1.get(o1));

// let x = [1, 2, 3]

// let y = 42

// console.log(typeof x[Symbol.iterator]);
// console.log(typeof y[Symbol.iterator]);