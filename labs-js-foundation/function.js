
// FUNCTION AND SCOPING


function functionTest(){

// Definition and Invocation
//There are two common ways to define a function. 
//  fist way:
// It emphasizes the fact that functions are data. They are first-class citizens

// Function definition
var helloFn1 = function() {
	console.log("Hello!");
}

// Function invocation
helloFn1();

//second way
// Function definition
function helloFn2() {
	console.log("Hello!");
}

// Function invocation
helloFn2();


/*
Note1: Parameters

JavaScript functions can take zero or more parameters.
JavaScript functions are variadic, that is, they can take any number of parameters. 
It is legal to call a function with a different number of parameters as in its declaration. 
If we call a function with fewer parameters than in the definition, 
then the parameters are assigned from left to right, and the remaining 
parameter variables will be set to undefined.
*/

var greet = function(greeting, person) {
	console.log(greeting + ", " + person + "!")
}

greet("Hail");

/*
Note2: Parameters
If we call a function with more parameters than in the definition, 
then all the available parameter variables with be bound to the parameters. 
The remaining parameters will not be bound to parameter variables i.e. 
they will become nameless.
*/

var greet = function(greeting, person) {
	console.log(greeting + ", " + person + "!")
}

greet("Hail", "Stanford", "Hail");

}

/*
Note3 : Parameters
However, it is possible to recover the extra parameter through the arguments variable. 
arguments is an array-like object that contains all the parameters passed to the function. 
It is zero-indexed from left to right. We can index into arguments to recover the extra parameter:
*/
var greet = function(greeting, person) {
	console.log(greeting + ", " + person + ", " + arguments[2] + "!")
}

greet("Hail", "Stanford", "Hail");

/*
Note4: Parameters
In fact, it is possible to dispense with parameter variables entirely, and simply rely on arguments:
*/
var greet = function(greeting, person) {
	console.log(arguments[0] + ", " + arguments[1] + ", " + arguments[2] + "!")
}

greet("Hail", "Stanford", "Hail");

/*
Note5: Parameters
This can be generalized to a function with any number of arguments:
*/

var greet = function() {
	var line = "";
	for (var i = 0; i < arguments.length; i++) {
		if (i > 0) line += ", ";
		line += arguments[i];
	}
	line += "!";
	console.log(line);
}

greet("Hail", "Stanford", "Hail");

/*
Note: When a function is happy with different numbers of parameters, 
it is said to be variadic. Variadic function are very common, and can 
be found in the standard JavaScript library
*/

/*
Optional parameters:
JavaScript does not have built-in support for optional parameters, 
but it is easy to manually implement optional parameters. We simply 
check if there are missing parameters, and fill them in if necessary.
*/

var helloWorld = function(lang) {
	if (typeof lang === "undefined") lang = "English";
	switch(lang) {
		case "English":
			console.log("Hello!")
			return;
		case "Chinese":
			console.log("你好!");
			return;
	}
}

helloWorld();
helloWorld("Chinese")

/*
Note: Anonymous function
Anonymous functions, also known as lambda functions, are functions that do not have a name. 
They are usually transient functions that are either passed into or return from another function. 
They are useful because they allow to to write code more concisely. 
It allows you to write a function inline with its usage, rather than defining it elsewhere.
*/

//(function() {	console.log("Hello!"); })()

/*
Note:
The most common use of anonymous functions is as callback functions. 
Some functions are capable of taking other functions as parameters. 
These parameters are called callback functions. Following is an example:
*/

var helloFn = function() {
	console.log("I am anonymous, serving a call back !");
}

// Call helloFn after one second
window.setTimeout(helloFn, 1000); 
// Some more examples
// Assign anonymous function to properties
var dog = {"bark": function() { console.log("Woof!") } };
dog.bark();

// Alternate syntax
var cat = {}
cat.meow = function() { console.log("Meow!") }
cat.meow();

// returing it from another function, useful for functional programming
var makeGreeting = function() {
    return function() {
        console.log("Hello!");
    };
};

var greeting = makeGreeting();
greeting();

/*
Note: Named parameters
The user explicitly names each of the parameters when specifying its value. 
This technique is called named parameters. 
Some languages such as Python (**kwargs) have built-in support for named parameters, while JavaScript does not. 
However, it can be easily be simulated as shown bellow.
*/

var orderSandwich = function(options) {
	console.log(options)
}
orderSandwich({
	size: "footlong",
	bread: "dutch crunch",
	meat: "turkey",
	cheese: true
})

/*
Note: Duck Typing
Like variables, JavaScript functions do not have types in their declarations. 
Therefore no type-checking is performed. Arguments are not type-checked, 
though it is possible to do the type-checking youself using the typeof operator. 
However, use duck typing if possible.

Return values are also not type-checked. 
It is possible for a function to return a 
number under some conditions and a string under other conditions, 
but this is considered very bad style. 
Note that if a function exits without the return keyword, 
or uses the return keyword by itself, the function will implicitly return undefined.
*/

/*
Function overloading:
You can implement this by using the typeof operator to check the type of the input.
Following is an example.

*/


var myFn = function(input) {
	if (typeof input === "string") {
		console.log("The input was a string.");
	} else if (typeof input === "number") {
		console.log("The input was a number.");
	}
}
myFn("hi");
myFn(42);



// ################ Testcase section ################
functionTest()