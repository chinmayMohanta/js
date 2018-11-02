// Working with string

/*
Strings are the second kind of primitive in JavaScript. 
A string is a sequence of characters. Strings are usually 
used to contain text input by the user, or messages to output 
to the user. Strings are immutable and cannot be modified, 
though new strings can be created out of old ones.
String values can be specified using single quotes '' or double quotes "". 
There is no functional difference between single and double quotes.

*/

console.log("I am a string!");
console.log('So am I!');

/*
As in C / C++, JavaScript strings can be treated as arrays of characters. 
The square bracket [] notation retrieves the character at the specified position 
as a string.
*/
console.log("Hello world!"[0]);

/*
Strings support a number of operators. Strings can be 
concatenated using the + operator. Strings can be concantenated 
with other non-string values, which will be first converted to strings.
*/
console.log("Hello" + "Dave");
console.log("The answer to Life, The Universe and Everything is " + 42);

/*
JavaScript does not have a multi-line string literal notation. 
If a string is long enough that it needs to wrap over multiple lines, 
one way to handle it is to split it into multiple smaller strings 
and use the concatenation operator to reassemble them into the original string.
*/
var gettysburgAddress =
	"Four score and seven years ago our fathers brought forth on this " +
	"continent, a new nation, conceived in Liberty, and dedicated to the " +
	"proposition that all men are created equal.\n" +
	"\n" +
	"Now we are engaged in a great civil war, testing whether that nation," +
	"or any nation so conceived and so dedicated, can long endure. We are " +
	"met on a great battle-field of that war. We have come to dedicate a " +
	"portion of that field, as a final resting place for those who here " +
	"gave their lives that that nation might live. It is altogether fitting " +
	"and proper that we should do this.\n"

console.log(gettysburgAddress);
console.log(gettysburgAddress.length)
//console.log(gettysburgAddress.contains('civil'))
console.log(gettysburgAddress.indexOf('chinmay'))
console.log(gettysburgAddress.lastIndexOf('we'))



console.log("I'm in lowercase".toLowerCase());
console.log("I'm in uppercase".toUpperCase());

// Substring methods
console.log('Substring operation')
console.log("one two three four".split(' ',3));
console.log("one two three four".slice(4,7));
console.log("one two three four".substr(3,8))


