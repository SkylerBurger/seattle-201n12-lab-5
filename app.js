'use strict';
/////////////////////////////////////
/* Problem 1 (this is your demo that we'll solve in class)
Write a function called sum() that takes in two numbers as arguments and then returns an array where the first element is the sum of those numbers, and the second element is a concatenated string that EXACTLY follows this example and uses the values that were input into the function:

"The sum of 4 and 7 is 11."

Test this function by hand in the console to get it working, and when you think it is finished, uncomment the call for the testSum() function below and check the console to see if the test passes.*/

// Write your code here
function sum(a, b) { 
    var sumTotal = a + b;
    var sumDescription = "The sum of " + a + " and " + b + " is " + sumTotal + ".";
    return [sumTotal, sumDescription];
}

// Here is the test for sum(); uncomment it to run it
testSum(4, 7);

// Once you get the test passing, do an a-c-p cycle and synchronize the code between GitHub and your laptop. Don't forget to create a new branch for your work on the next question!

/////////////////////////////////////
/* Problem 2
Write a function called multiply() that takes in two numbers as arguments and returns an array where the first element is the product of those numbers, and the second element is a string that EXACTLY follows this example and uses the values that were input into the function:

"The product of 5 and 9 is 45."

Test this function by hand in the console to get it working, and when you think it is finished, uncomment the call for the testMultiply() function and see if the test passes.*/

// Write your code here
function multiply(a, b) { 
    var product = a * b;
    var productDescription = "The product of " + a + " and " + b + " is " + product + ".";
    return [product, productDescription];
}

// Here is the test for multiply(); uncomment it to run it
testMultiply(5,9);

// Once you get the test passing, do an a-c-p cycle and synchronize the code between GitHub and your laptop. Don't forget to create a new branch for your work on the next question!

/////////////////////////////////////
/* Problem 3
Write a function called sumAndMultiply() that takes in three numbers as separate arguments and returns an array where the first element is the sum of those three numbers, the second element is the product of those three numbers,  and the third and fourth elements are strings that EXACTLY follow this example and use the values that were input into the function:

Third element: "4 and 7 and 5 sum to 16."
Fourth element: "The product of 4 and 7 and 5 is 140."

IMPORTANT DETAIL: You may not use the arithmetic operators + and * in this function. To do addition, use your sum() function, and to do multiplication, use your multiply() function that you've already created. You're going to have to be resourceful to figure out how to do this.

Test this function by hand in the console to get it working, and when you think it is finished, uncomment the call for the testSumAndMultiply() function and see if the test passes.*/

// Write your code here
function sumAndMultiply(a, b, c) { //eslint-disable-line
    var sumOne = sum(a, b);
    var sumTotal = sum(sumOne[0], c);

    var productOne = multiply(a, b);
    var productTotal = multiply(productOne[0], c);

    var sumDescription = a + " and " + b + " and " + c + " sum to " + sumTotal[0] + ".";
    var productDescription = "The product of " + a + " and " + b + " and " + c + " is " + productTotal[0] + ".";

    return [sumTotal[0], productTotal[0], sumDescription, productDescription];
}

// Here is the test for sumAndMultiply(); uncomment it to run it
testSumAndMultiply(4,7,5);

// Once you get the test passing, do an a-c-p cycle and synchronize the code between GitHub and your laptop. Don't forget to create a new branch for your work on the next question!

/////////////////////////////////////
/* Problem 4
Write a function called sumArray() that takes in an array of numbers as its single argument and then returns an array where the first element is the sum of the numbers in the array, and the second element is a string that EXACTLY follows this example and uses the values that were input into the function:

"2,3,4 was passed in as an array of numbers, and 9 is their sum."

IMPORTANT DETAIL: You may not use the arithmetic operator + in this function. To do addition, use your sum() function that you've already created. You're going to have to be resourceful to figure out how to do this.

Test this function by hand in the console to get it working, and when you think it is finished, uncomment the call for the testSumArray() function and see if the test passes.*/

// Write your code here
var testArray = [2, 3, 4]; //eslint-disable-line

function sumArray(sumArr) { //eslint-disable-line
    var arraySumTotal = 0;
    var arraySumString = "";

    for(var i = 0; i < sumArr.length; i++){
        arraySumTotal = sum(arraySumTotal, sumArr[i])[0];
        arraySumString += sumArr[i];

        if(i + 1 < sumArr.length){
            arraySumString += ",";
        }
    }

    arraySumString += " was passed in as an array of numbers, and " + arraySumTotal + " is their sum.";

    return [arraySumTotal, arraySumString];
}

// Here is the test for sumArray(); uncomment it to run it

testSumArray(testArray);

// Once you get the test passing, do an a-c-p cycle and synchronize the code between GitHub and your laptop. Don't forget to create a new branch for your work on the next question!

/////////////////////////////////////
/* Problem 5
Write a function called multiplyArray() that takes an array of numbers as its argument and returns an array whose first element is the product of those numbers, and the second element is a string that EXACTLY follows this example and uses the values that were input into the function:

"The numbers 2,3,4 have a product of 24."

IMPORTANT DETAIL: You may not use the arithmetic operator * in this function. To do multiplication, use your multiply() function that you've already created. You're going to have to be resourceful to figure out how to do this. This function should handle an array containing three elements.

Test this function by hand in the console to get it working, and when you think it is finished, uncomment the call for the testMultiplyArray() function and see if the test passes.*/

// Write your code here
function multiplyArray(multArr) {
    console.log("test is " + testArray);
    var product1 = multiply(multArr[0], multArr[1])[0];
    console.log("p1 is " + product1);
    var productTotal = multiply(product1, multArr[2])[0];
    console.log("p2 is " + productTotal);

    var arrayDescription = "The numbers ";
    for(var i = 0; i < multArr.length; i++) {
        arrayDescription += multArr[i];
        if(i + 1 < multArr.length) {
            arrayDescription += ",";
        }
    }
    arrayDescription += " have a product of " + productTotal + ".";
    console.log(arrayDescription);

    return [productTotal, arrayDescription];
}

// Here is the test for multiplyArray(); uncomment it to run it
testMultiplyArray(testArray);

// Once you get the test passing, do an a-c-p cycle and synchronize the code between GitHub and your laptop. 

// You're done! Submit the link to the repo following the instructions in Canvas. Or, try out the stretch goal below...

// Don't forget to create a new branch for your work on the next question, if you attempt it.

/////////////////////////////////////
/* STRETCH GOAL: Problem 6
Write a function called multiplyAnyArray() that takes an array of numbers of any length as its argument and returns an array whose first element is the product of those numbers, and the second element is a string that EXACTLY follows this example and concatenates a message using the arguments that were passed into the function:

"The numbers 1,2,3,4,5 have a product of 120."

IMPORTANT DETAIL: You may not use the arithmetic operator * in this function. To do multiplication, use your multiply() function that you've already created. You're going to have to be resourceful to figure out how to do this.

This function should be dynamic, accepting an array of any length.

Test this function by hand in the console to get it working, and when you think it is finished, uncomment the call for the testMultiplyAnyArray() function and see if the test passes.*/

// Write your code here
var testDynamicArray = [1,2,3,4,5];

function multiplyAnyArray(dynamicArray) {
    // Start product with first value in the array
    var arrayProduct = dynamicArray[0];
    var arrayProductDescription = "The numbers ";

    // Multiplication process
    // Starting loop at [1] since the first value is already loaded into the product
    for(var i = 1; i < dynamicArray.length; i++) {
            arrayProduct = multiply(arrayProduct, dynamicArray[i])[0];
            console.log("Multiplying, total is " + arrayProduct);
    }

    // Adding values to string
    for(var i = 0; i < dynamicArray.length; i++){
        arrayProductDescription += dynamicArray[i];
        if(i + 1 < dynamicArray.length){
            arrayProductDescription += ",";
        }
    }
    
    arrayProductDescription += " have a product of " + arrayProduct + ".";

    return [arrayProduct, arrayProductDescription];
}

// Here is the test for multiplyArray(); uncomment it to run it
testMultiplyAnyArray(testDynamicArray);

// Once you get the test passing, do an a-c-p cycle and synchronize the code between GitHub and your laptop. You're done! Submit the link to the repo following the instructions in Canvas.