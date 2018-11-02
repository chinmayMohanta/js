console.log('numbers')
console.log(1 + 2)
console.log(7/8)
console.log(1/0)
console.log(-1/0)
console.log(0 / 0)

console.log('Special Values')
console.log(Infinity)
console.log(-Infinity)
console.log(NaN)

console.log('Convert string to number')

/*
The second argument of parseInt is an optional argument that specifies 
the base of the integer. If the second argument is omitted, parseInt tries 
to determine the base of the string from the leading characters: if the string 
starts with “0x” or “0X”, the radix is 16 (hexadecimal). If the string starts 
with “0”, then the radix is 8 (octal) in older versions of JavaScript, but 10 (decimal) 
in newer versions of JavaScript. For this reason, it is recommended to always pass 10 as 
the second parameter.
*/
console.log(parseInt("42",10))
console.log(parseFloat('0.1'))
console.log(parseFloat('1e-3'))
// Base 16 numbers
console.log(parseInt('0x10'))

/*
The Math library contains lots of useful methods and constants 
for working with numbers.
*/
console.log('Working with numbers using math library')

console.log('Math constats')
console.log(Math.E)
console.log(Math.PI)

console.log('Rounding Functions')
console.log(Math.ceil(1.1))
console.log(Math.floor(1.1))

console.log('Trignometric function')
console.log(Math.sin(Math.PI/3))

console.log(Math.exp(1));       // Exp of 1
console.log(Math.log(Math.E));  // Log of e
console.log(Math.pow(3, 2));    // Square of 3
console.log(Math.sqrt(9));      // Square root of 9

