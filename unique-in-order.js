// Implement the function unique_in_order which takes as argument a sequence and returns a list of items without any elements with the same value next to each other and preserving the original order of elements.

// For example:
// uniqueInOrder('AAAABBBCCDAABBB') == ['A', 'B', 'C', 'D', 'A', 'B']
// uniqueInOrder('ABBCcAD')         == ['A', 'B', 'C', 'c', 'A', 'D']
// uniqueInOrder([1,2,2,3,3])       == [1,2,3]

// tags:
// * fundamentals
// * advanced language features
// * algorithms

// Given:
// var uniqueInOrder=function(iterable){
  //your code here - remember iterable can be a string or an array
// }

// Resource I found:
// https://www.includehelp.com/algorithms/removing-consecutive-duplicates-from-a-string.aspx

// Edge cases to ask about:
// 1. Do spaces count as characters?
// 2. Does this need to work for an empty iterable? (e.g., '' or [])


// My solution:
"use strict";

var uniqueInOrder = function(iterable) {
  // consecDupesRemoved will contain the array to be returned
  const consecDupesRemoved = [];

  // if the iterable is empty, return the empty solution array
  if (!iterable[0]) return consecDupesRemoved;

  /* At this point, we know the iterable contains at least one character. */

  // current will contain the value we are currently checking against
  let current = iterable[0];
  consecDupesRemoved.push(current);

  // Check each value in the iterable to see if it matches current
  // - if it doesn't match: add the value to the consecDupesRemoved array and reset current to be the new value
  // - if it does match: do nothing and move on to the next iteration
  for (let idx = 1; idx < iterable.length; idx++) {
    if (iterable[idx] !== current) {
      consecDupesRemoved.push(iterable[idx]);
      current = iterable[idx];
    }
  }
  return consecDupesRemoved;
}


// write a function that takes the current character of an iterable and returns the index of the next character that is different from it
console.log(uniqueInOrder('AAAABBBCCDAABBB'));
console.log(uniqueInOrder('ABBCcAD'));
console.log(uniqueInOrder([1,2,2,3,3]));