/* =====================
# Lab 2, Part 2 — Underscore Each Function

## Introduction

Up to this point, we have used Javascript's for loop to loop through data. Underscore's _.each function provides us with an easy to read, simple way to accomplish the same goal.

## Task

Find two previous labs that use for loops. Rewrite these labs to use _.each.

===================== */


//From Week 2: Lab 2 Part 1

var theArray = ['A short story.', 42, 55, ['Another story'], 23, 12, 2, 4, 5, 6, 'bar', 'foo'];
var yourSum = 0;

var sumArray = function(value){
  if (typeof value === 'string') {
    return yourSum = yourSum + value.length;
  } else if (typeof value === 'number') {
    return yourSum = yourSum + value.length;
  } else {
    console.log("Not sure how to proceed with value:", value);
  }
};

_.each(theArray, sumArray);
console.log("Success: ", yourSum === 169);

// From Week 3: Lab 1 Part 1

var countItem = function(array, num) {
  var counter = 0;
  _.each(array, function(value, key, list){
    if (list[key] == num) {
     counter += 1;
   }
 });
    //else {counter = counter +0;}
   return counter;
};

console.log('countItem success:', countItem([1, 2, 3, 4, 5, 4, 4], 4) === 3);

/* =====================

## Syntax
You can see an example of how to use ._each in the underscore documentation: http://underscorejs.org/#each and in the code below.

var myArray = [1, 10, 100, 1000];

_.each(myArray, function(value, key, list) {
  console.log(value, key, list);
});
===================== */
