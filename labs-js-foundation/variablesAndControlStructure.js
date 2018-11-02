/*
VARIABLES: 

Variables allow you to save variables for further use and computation. 
Variables are declared with the var keyword. They can be declared and 
assigned an initial value on the same line. 
They can also be declared anywhere, so it is best to position the 
declaration as close as possible to the site of use.

Variables can also be declared without the var keyword. 
This is very bad because it also causes the variable to be declared 
with global scope.

Attempting to use a variable without previously declaring it will cause 
a ReferenceError. To check if a variable is declared, you can use the 
typeof operator. Calling typeof on an undefined variable results in the 
type “undefined”.
*/

// Declaring variable using var
var myNum = 1;
console.log(typeof myNum);        // number

// typeof operator
var myBool = true;
console.log(typeof myBool);       // boolean

var myString = "Hello world";
console.log(typeof myString);     // string

var myNull = null;
console.log(typeof myNull);       // object

var myUndefined;
console.log(typeof myUndefined);  // undefined

console.log(typeof (myMissing));    // undefined

/*
CONTROL STRUCTURE:

JavaScript inherits the same control structures from C++ and Java, 
as well as some of their quirks.

*/

// IF ..ELSE IF ...ELSE
var x = 11;
if (x < 10) {
	console.log("x is less than 10.");
} else if (x >= 10 && x <= 20) {
	console.log("x is between 10 and 20.");
} else {
	console.log("x is more than 20.");
}

 // WHILE
 var numNyan = 10;
var i = 0;
while (i < numNyan) {
	console.log("j'adore JavaScript ")
	i++;
}

// FOR LOOP
var n = 3;
var d = 10;
console.log("First " + n + " multiples of " + d)
for (var i = 1; i <= n; i++) {
	console.log(i * d);
}

// Switch statement

/*  Attention: Fall through
One unfortunate carry-over from C++ and Java is the fall-through behavior 
of the switch statement. After jumping to the appropriate branch of the 
switch statement, JavaScrpit continues executing until it sees a break 
or return statement, or reaches the end of the block.
*/


var n = 1;
switch (n) {
	case 1:
		console.log("Ichi");
		break;
	case 2:
		console.log("Ni");
		break;
	case 3:
		console.log("San");
		break;
}





