// ARRAY AND OBJECTS

/*
Compound data types:
Numbers, booleans and strings are the primitive datatypes in 
JavaScript. JavaScript also allows us to compose these datatypes 
into compound datatypes, such as arrays and objects. Both array 
and objects are ways of grouping pieces of data together into meaningful 
collections.
*/

// ARRAY
// Initializing array

function arrayTest(){  // Begin array test
var myArr = [];
var daysOfWeek = ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday",
                  "Saturday", "Sunday"];
// Getting value
console.log(daysOfWeek[0])
// Setting value
daysOfWeek[0]="Mon"

// No-out-of-bound error
/*
JavaScript arrays do not have out-of-bounds errors. This implies that they 
also do not need bounds checking. If an array has 7 elements, it is okay to 
get or set the 8th element. If you try to get an element past the end of 
the array, the value of the element will be undefined.
*/
console.log("The value of the 8th day is: " + daysOfWeek[7]);

/*
If you try to set an element past the end of the array, the array will 
be extended to the required length.
*/
var daysOfWeek = ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday",
                  "Saturday", "Sunday"];
daysOfWeek[7] = "The extra day of the week that everyone wishes they had";
console.log("The value of the 8th day is: " + daysOfWeek[7]);
// In fact, you can set an element far off the end of the array, 
//and the elements in between will get filled with undefined.
var daysOfWeek = ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday",
                  "Saturday", "Sunday"];
daysOfWeek[10] = "Ten Day"
console.log(daysOfWeek)

// Array elements need not all have the same type. You can create 
//an array whose elements have different type.
var daysOfWeek = ["The Answer to Life, Universe and Everything", 42];
console.log(daysOfWeek)

/* Multi-dimensional array:
You can even create arrays of arrays, also known as multidimensional arrays. 
Unfortunately, there is no shorthand for creating these arrays: you have to 
initialize the child arrays by hand, using a loop if necessary. Also, the 
multidimensional array need not be rectangular: each row can have a 
different number of elements.
*/

var ticTacToe= [
	["X", "O", "X"],
	[" ", "O", " "],
	[" ", " ", "X"],
];

console.log(ticTacToe)

// Loop through array
// If you wish to loop over an array, the common idiom is to use a for loop.
var daysOfWeek = ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday",
                  "Saturday", "Sunday"];
for (var i = 0; i < daysOfWeek.length; i++) {
	console.log(daysOfWeek[i]);
}

// In JavaScript 1.6, arrays get a forEach function. This is rarely used 
//because it is not compatible with older browsers (e.g. IE6).
var daysOfWeek = ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday",
                  "Saturday", "Sunday"];
daysOfWeek.forEach(function(x) { console.log(x) });

// ARRAY METHODS

/* List insertion and removal:
pop
Removes the last element from an array and returns that element.
push
Adds one or more elements to the end of an array and returns the new length of the array.
shift
Removes the first element from an array and returns that element.
unshift
Adds one or more elements to the front of an array and returns the new length of the array.
*/

var arr = [1, 2, 3];
console.log(arr.pop());
console.log(arr);

console.log(arr.push(4));
console.log(arr)

console.log(arr.shift())
console.log(arr)

console.log(arr.unshift(1))
console.log(arr)

/* Reordering array elements:
reverse : Reverses the order of the elements of an array – the first 
becomes the last, and the last becomes the first.
sort : Sorts the elements of an array.
*/
var primes = [5, 3, 7, 11, 2]

console.log("Unsorted:");
console.log(primes);

console.log("Sorted:");
primes.sort()
console.log(primes);

console.log("Sorted and reversed:");
primes.reverse()
console.log(primes);

//concate : Returns a new array comprised of this array joined with 
//other array(s) and/or value(s).

var arr1=[1,2,3]
var arr2=['un','deux','trois']
console.log(arr1.concat(arr2))
//join : Joins all elements of an array into a string.
console.log(arr1.join())


// splice: Adds and/or removes elements from an array.
/*
var myFish = ["angel", "clown", "mandarin", "surgeon"];
// Remove 0 elements from index 2, and insert "drum"
var removed = myFish.splice(2, 0, "drum");
print(myFish)
//Remove 1 element from index 3
var removed = myFish.splice(3, 1);
print(myFish)
*/

var arr3=[1,2,3,4,5]
//slice: Adds and/or removes elements from an array.
console.log(arr3.slice(2,4))

} // End array test

function oopsTest(){
/*
OOPS:
JavaScript supports most of the same OOP features, but it differs in several key features.
JavaScript differs from other OOP languages such as Java and C++ in that it has no classes.
You can create an object that does not have a class per se. 

*/

// creating an object
var student = {}; // it creates an empty object
console.log(student);
// We can use the typeof operator to see that it is, in fact, an object.
console.log(typeof student);
// We can also initialize the object such that it is not empty
var student = {
    
	"name": "Jane Doe",
	"class": 2015
};
/*
Note 1: JSON
The above notation allows us to set properties when we define the object.
The names of properties are always strings. The properties of properties 
can be any type, including arrays or even another object. This is also
popularly known as JSON (JavaScript Object Notation)

Note 2: All public (lacks encapsulation)
You might have noticed that all our data members are public. If we were 
writing this in C++ or Java, we would make our data members private, and 
expose them using getter and setter methods. The fact that all our 
properties are automatically public might make you uncomfortable. 
This is an unfortunate consequence of the objects work: it makes 
it really easy to work with objects, with the cost of sacrificing 
encapsulation. (Later on, we will see that a mechanism called closures 
allows us to simulate private instance variables.)

*/
console.log(student);

// Getting and setting properties

//To access a property of an object, we use the dot notation. 
//For instance, ninja.weapon refers to the weapon property of the ninja object.
console.log('Name:', student.name);
console.log('Class:', student.class);

//We can also use this notation to set properties using the assignment = operator. 
//This modifies a property if it already exists, or creates a new property if it did not exist.

student.class = 2014
student 

console.log('Name:', student.name);
console.log('Class:', student.class);

// Another way to access a property is to use the square bracket notation. 
//The square bracket notation takes a property name as a string, and then 
//returns the value of the requested property.

var ninja = {
	weapon: 'katana',
	skill: 'stealth'
};

console.log('Weapon:', ninja["weapon"]);
console.log('Skill:', ninja["skill"]);

console.log('Skill:', ninja["email"]);

/*
Note1:
The square bracket notation allows us to request and look up properties at run time. 
However, if we know beforehand what property we want to look up, dot notation is 
preferred to square bracket notation, as it is less error prone.

Note2:
A common mistake is to omit the quotes around the keys. 
In the example below, we wrote student[name] when we meant student['name'].

Note3:
Interestingly, looking up a non-existent property in an object is not an error. 
Attempting to do so just results in an undefined value.
*/

// Following is an example of inspecting an object using forEach style interation
for(key in student){
    if (student.hasOwnProperty(key)) {
		console.log(key + ": " + student[key]);
	}
}
/*
Note:
// The hasOwnProperty method ensures that we don’t get keys from further up the PROTOTYPE CHAIN (this is discussed later). 
The order in which keys are returned is undefined.
*/

// Modifying properties
//To modify a property, we just use the = operator to assign a value to it. 
//The syntax is identical to how we get the property. We can use dot notation.

var ninja = {};
ninja.skill = "silance";
ninja.weapon = "katan";

//Or we can use square bracket notation.

var ninja = {};
ninja["skill"] = "silance";
ninja["weapon"] = "katan";

console.log(ninja)

// Everything is an object except the primitives
// Everything (except null or undefined) is an object. 
//This means that we can use the dot notation to call methods on everything (except primitive number
// as it will be interpreted as decimal).


console.log(true.toString());
console.log("Hello world!".toString());
console.log([1, 2, 3].toString());
console.log({"hi": "there"}.toString());

// Primitive wrappers
// Almost everything is an object, except primitives. The primitive types are:
// number, string, boolean, null and undefined. However, it would be nice if 
//you could use object-style syntax on everything without having to worry about 
//if it were an object, so you can do that:

// wrapping
console.log((42).toString());

var myNum = 42;
// Autoboxing as an object
myNum.answerTo = "Life, The Universe and Everything";
console.log(myNum.answerTo);
/*
Note:
If you’ve learned Java, you might remember that that each primitive type has 
a corresponding object type that wraps around the primitive type. (e.g. int and Integer).

In fact, JavaScript does something very similar. It temporarily boxes the primitive into 
an object, runs the statement, and unboxes the primitive afterwards. The object is transient, 
and you normally never get to see it. This means that if you try to set a property on an object, 
it does not persist.
*/

// Global object
// Global variables appear as properties in the window object.
// Note : global variable is declared without var keyword
EARTH_GRAVITY = 9.807
MOON_GRAVITY = 1.622
MARS_GRAVITY = 3.711
console.log(window.EARTH_GRAVITY);
console.log(window.MOON_GRAVITY);
console.log(window.MARS_GRAVITY);

//Likewise, properties in the window object appear as global variables.

window.EARTH_GRAVITY = 9.807
window.MOON_GRAVITY = 1.622
window.MARS_GRAVITY = 3.711
console.log(EARTH_GRAVITY);
console.log(MOON_GRAVITY);
console.log(MARS_GRAVITY);

// object references

//Like Java, every non-primitive variable in JavaScript is actually a reference 
//(or pointer) to a the object, which resides somewhere in heap memory. When assigning 
//a non-primitive variable to another variable, the assignment is done by copying the reference.

var myArr1 = [1, 2, 3];
var myArr2 = myArr1;
myArr2.push(4);
console.log(myArr1);

//In this example, we create a new array, myArr1. We then assign this array to myArr2. 
//This assignment causes the reference to be copied to myArr2. Thus, a modification to 
//myArr2 is reflected in myArr1, as both variables refer to the same array.

//Reference copying means that different variables in different places can refer to the same 
//object. Since variables are names, The act of giving an object a new name is called aliasing.

//This also means we can create data structures by wiring up references between different objects. 
//We can even have circularity in our data structures. Here’s an example of a circular linked list:

var link1 = {val: "1", next: null};
var link2 = {val: "1", next: null};
var link3 = {val: "1", next: null};
link1.next = link2;
link2.next = link3;
link3.next = link1;
console.log(link1.next.next.next.val);

}

/*
Note: Garbage collections
JavaScript is a high-level language, and (like Java) does not provide facilities for managing memory directly, 
such as pointers. Instead of requiring programmers to manually allocate and free memory, JavaScript automatically 
allocates memory for new objects, and uses a garbage collector to free memory when it is no longer needed.
*/

/*
Note: Dynamic typing
Variables in JavaScript are declared without a type. In fact, we can assign 
a number to a variable, and then later assign a string to the same variable.
*/

var myStuff;
myStuff = 1;
myStuff = "hi";
myStuff = null;
myStuff = [];
myStuff = {};
onsole.log(muStuff);

/*
Note: Weak typing
JavaScript has weak typing, in that it freely coerces variables to whatever type seem appropriate. 
If we use the + operator with a string, the other object gets converted to a string first. 
The order of the operands does not matter.
*/
console.log("1" + 2);
console.log(1 + "2");

// If we use the *, / and - operators with a number, the other object gets converted to a number.
console.log("3" * 4);
console.log(3 * "4");

/*
Note: Whenever possible, minimize the use of automatic casting.
*/

//###########  Test cases section ###############

//arrayTest()
oopsTest()













