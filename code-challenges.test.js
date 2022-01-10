// ASSESSMENT 3: Coding Practical Questions with Jest

// Please read all questions thoroughly
// Pseudo coding is REQUIRED
// If you get stuck, please leave comments to help us understand your thought process

// Use test driven development to complete the following questions
// Add appropriate dependencies: $ yarn add jest

// Reminder: The test will call your function
// Run the file with the following command: $ yarn jest


// --------------------1) Create a function that takes in a number (greater than 2) and returns 
//an array that length containing the numbers of the Fibonacci sequence.

// a) Create a test with expect statements for each of the variables provided.

// Example input: 6
// Expected output: [1, 1, 2, 3, 5, 8]

// Example input: 10
// Expected output: [1, 1, 2, 3, 5, 8, 13, 21, 34, 55]

// a describe method that lists the name of the function OR naming of the particular test.
describe("fibSequence", () => {

    // a test/it method, nested within the describe block, that in plain words, describes that the function does.
    it("takes in a number (greater than 2) and returns an array that length containing the numbers of the Fibonacci sequence", () => {

        //an expect method, nested within the test block, calling on the fibSequence() function, followed by the .toEqual() matcher that checks the expected output of the function return.
        expect(fibSequence(6)).toEqual([1, 1, 2, 3, 5, 8])
        expect(fibSequence(10)).toEqual([1, 1, 2, 3, 5, 8, 13, 21, 34, 55])
    })
})
// -- Got the red --  

// b) Create the function that makes the test pass.
// create a function that takes in an number (greater than 2) and returns an array that length containing the numbers of the Fibonacci sequence
function fibSequence(number) {
// declare the arrays
    var fibArray = [1, 1];
// declare another array, find out we don't need this array, will delete this array when we refactoring
    var newFibArray
    //build a if statement check the number is greater than 2 or not
    if (number > 2) {
        // if greater than 2 is true, we gonna make a for loop, let i starts with 2, because the first 2 values in the array are always [1,1]
        // and we only care about the number greater than 2
        for (let i = 3 - 1; i < number; i++) {
            //we are gonna let the fibArray[i-2]plus fibArray[i-1] and push this result to the fibArray which starts with [1,1]
            newFibArray = fibArray.push(fibArray[i - 2] + fibArray[i - 1]);
        }
        //if the input is not a integer number or less than 2
    } else {
        return console.log("Please type an integer that greater than 2.");
    }
    //return a value
    return fibArray
}
// -- Got the green --

//Refactoring line 49 ====>  for (let i = 2; i < number; i++) {
//            line 44 ====>  delet var newFibArray
//            line 51 ====>  delet newFibArray

// function fibSequence(number) {

//     var fibArray = [1, 1];
//
//     if(number > 2) {
//      for (let i = 2; i < number; i++) {
//         fibArray.push(fibArray[i - 2] + fibArray[i - 1]);
//      }
//     } else {
//       return console.log("Please type an integer that greater than 2."); 
//     }
//     return fibArray
//   }
// --------------------2) Create a function that takes in an array and returns a new array of only odd
// numbers sorted from least to greatest.

// a) Create a test with expect statements for each of the variables provided.

var fullArr1 = [4, 9, 0, "7", 8, true, "hey", 7, 199, -9, false, "hola"]
// Expected output: [-9, 7, 9, 199]

var fullArr2 = ["hello", 7, 23, -823, false, 78, null, "67", 6, "number"]
// Expected output: [-823, 7, 23]

// a describe method that lists the name of the function OR naming of the particular test.

describe("oddFilter", () => {
    var fullArr1 = [4, 9, 0, "7", 8, true, "hey", 7, 199, -9, false, "hola"]
    var fullArr2 = ["hello", 7, 23, -823, false, 78, null, "67", 6, "number"]
    // a test/it method, nested within the describe block, that in plain words, describes that the function does.
    it("takes in an array and returns a new array of only odd numbers sorted from least to greatest.", () => {

        //an expect method, nested within the test block, calling on the oddFilter() function, followed by the .toEqual() matcher that checks the expected output of the function return.
        expect(oddFilter(fullArr1)).toEqual([-9, 7, 9, 199])
        expect(oddFilter(fullArr2)).toEqual([-823, 7, 23])
    })
})
// -- Got the red --  

// b) Create the function that makes the test pass.
// create a function that takes in an array and returns a new array of only odd numbers sorted from least to greatest.
function oddFilter(array) {
    // declare the an empty arrays
    var oddNumArr = []
    //filter out the array, only sort the odd numbers in array
    oddNumArr = array.filter(number => number % 2 !== 0 && (typeof number) === "number")
    //then sort the odd numbers from least to greatest
    let leastToGreatest = oddNumArr.sort((a, b) => a - b);
    //return the values
    return leastToGreatest
}
//console.log(oddFilter(fullArr1));
// -- Got the green --

// --------------------3) Create a function that takes in an array and returns an array of the 
// accumulating sum. An empty array should return an empty array.

// a) Create a test with expect statements for each of the variables provided.
//                   0           1                       2       3
var numbersToAdd1 = [2,         4,                     45,      9]
//                 0+oddindex0   newindex0+oddindex1     
// Excpected output:[2,          6,                     51,     60]

var numbersToAdd2 = [0, 7, -8, 12]
// Expected output: [0, 7, -1, 11]

var numbersToAdd3 = []
// Expected output: []
// a describe method that lists the name of the function OR naming of the particular test.
describe("twistPlus", () => {
    var numbersToAdd1 = [2, 4, 45, 9]
    var numbersToAdd2 = [0, 7, -8, 12]
    var numbersToAdd3 = []

    // a test/it method, nested within the describe block, that in plain words, describes that the function does.
    it("with expect statements for each of the variables provided.var numbersToAdd1 = [2, 4, 45, 9] ===> Excpected output: [2, 6, 51, 60]", () => {

        //an expect method, nested within the test block, calling on the oddFilter() function, followed by the .toEqual() matcher that checks the expected output of the function return.
        expect(twistPlus(numbersToAdd1)).toEqual([2, 6, 51, 60])
        expect(twistPlus(numbersToAdd2)).toEqual([0, 7, -1, 11])
        expect(twistPlus(numbersToAdd3)).toEqual([])
    })
})
// -- Got the red --  
// b) Create the function that makes the test pass.
// create a function 
const twistPlus = (array) => {
    // declare the an empty arrays
    var newArray = []
    //if statement starts, if the array from the argument is empty,which the length is 0
    if (array.length === 0) {
        //we can return the newArray,since the newArray is empty
        return newArray;
        
    }
    //if it's not empty 
    else {
        //first we push the first value of the argument array to the newArray
        //newArray[0] = array[0]
        newArray.push(array[0])
        //for loop starts, search the argument array starts with sencond value of the array
        for (let i = 1; i < array.length; i++) {
            //let the array[i] + newArray[i - 1] then push to newArray
            //newArray[1] = array[1] + newArray[0]
            //newArray[2] = array[2] + newArray[1]
            //newArray[3] = array[3] + newArray[2]
            //..
            //newArray[i] = array[i] + newArray[i-1]
            newArray.push(array[i] + newArray[i - 1])
        }
        //return newArray
        return newArray;
    }
}
// -- Got the green --  