"use strict";

/**
 * Ternary Operator
 */
let statusRate = true;
let action = statusRate ? 'yes' : 'no';
console.log(action);

/**
 * Number to String - String To Number
 */
let num = 10;
let str = num + "";
console.log(str);
let n = +str;
console.log(n);

/**
 * Populating an Array
 */
let filledArray = new Array(2).fill(null).map(() => ({'hello': 'good morning'}));
console.log(filledArray);

/**
 * Dynamic Props in Object
 */
let dynamic = "name";
let user = {
    id: 1,
    [dynamic]: "Anne"
};
console.log(user);

/**
 * Removing Duplicates
 */
let arr = [100, 23, 23, 23, 78, 78, 90];
let op = Array.from(new Set(arr));
console.log(op);

/**
 * Array To Object
 */
let val = ["value1", "value2", "value3"];
let obj = {...val};
console.log(obj);

/**
 * Object To Array
 */
let numObj = {
    "one": 1,
    "two": 2
};
let keys = Object.keys(numObj);
console.log(keys);
let values = Object.values(numObj);
console.log(values);
let entry = Object.entries(numObj);
console.log(entry);

/**
 * Short Circuit Conditions
 */
let docs = true;
docs && goToDocs()

function goToDocs() {
    console.log("Short Circuit conditional");
    return true;
}

/**
 * Use ^ to check if numbers are not equal
 */

let num1 = 98;
console.log((num1 ^ 98));


/**
 * Loop over an object
 */
