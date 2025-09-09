let bool = true;
let number = 42;
let bigInt = 9007199254740991n;
let str = "Hello, world!";
let undef = undefined;

console.log(`${bool} [${typeof bool}]`)
console.log(`${number} [${typeof number}]`);
console.log(`${bigInt} [${typeof bigInt}]`);
console.log(`${str} [${typeof str}]`);
console.log(`${undef} [${typeof undef}]`);

// Carry out a chain of conversions: create a Boolean from a BigInt created from a Number that was created from a String. Start with the value "1234". Is it possible?
let value = "1234"
let number1 = Number(value)
let bigInt2 = BigInt(number1)
let bool2 = Boolean(bigInt2)
console.log(value, number1, bigInt2, bool2);


// Try adding two values of the same type and check the result type. Try it for all primitive types.

// let string = "1234" + "2345"
// console.log(string);
// console.log(typeof string);

// let bool1 = true + true
// console.log(bool1);
// console.log(typeof bool1);

// let bigint1 = 12345678912345n + 123456789123456789123n
// console.log(bigint1);
// console.log(typeof bigint1);

// let num1 = 1234 + 1234
// console.log(num1);
// console.log(typeof num1);

// let undef1 = undefined + undefined
// console.log(undef1);
// console.log(typeof undef1);

// // Try adding two values of different types and check the results.
// let strnum = 1234 + "Sandeep"
// console.log(strnum);
// console.log(typeof strnum);

// let strbool = "Sandeep" + true
// console.log(strbool);
// console.log(typeof strbool);

// let strbigInt = "Sandeep" + 123456789123456789123n
// console.log(strbigInt);
// console.log(typeof strbigInt);

// let strundef = "sandeep" + undefined
// console.log(strundef);
// console.log(typeof strundef);

// let numBool = 1234 + true
// console.log(numBool);
// console.log(typeof numBool);

// // let numBigInt = 1234 + 12345678912345n //TypeError: Cannot mix BigInt and other types, use explicit conversions
// // console.log(numBigInt);
// // console.log(typeof numBigInt);

// let numUndef = 1234 + undefined
// console.log(numUndef);
// console.log(typeof numUndef);

// // let boolBigInt = true + 12345678912345n //TypeError: Cannot mix BigInt and other types, use explicit conversions
// // console.log(boolBigInt);
// // console.log(typeof boolBigInt);

// let boolUndef = true + undefined
// console.log(boolUndef);
// console.log(typeof boolUndef);

// // Try to modify the line const str1 = 42 + "1"; to get the result 43 (without removing the quotes around 1)
// let str1 = 42 + "1"
// console.log(str1);
// console.log(typeof str1);
// str1 = 42 + Number("1")
// console.log(str1);
// console.log(typeof str1);

