/*
JavaScript has variables that are analogous to Java’s null.
Unusually, JavaScript has two seperate values that could represent nothing.
undefined is a variable type that has only one value, also called undefined. 
It usually indicates the absence of a value or an error condition. 
There are many ways to get an undefined value. For instance, if we 
declare a variable with var, but do not set an initial value, its 
initial value will be set to undefined.
*/

var myVar;
console.log(myVar);
console.log(typeof myVar);

// null is a value of type object.
var myVar = null;
console.log(myVar);
console.log(typeof myVar);

