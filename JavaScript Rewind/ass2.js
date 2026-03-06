// Print all the elements of the following array var thisIsAnArray = ["element1", "element2", "element3", "element4"];
var thisIsAnArray = ["element1", "element2", "element3", "element4"];
for (let index = 0; index < thisIsAnArray.length; index++) {
    console.log(thisIsAnArray[index])
}

// Write a JavaScript function to check if a string contains a specific substring
function containsSubstring(str, substring) {
    return str.includes(substring);
}

console.log(containsSubstring("Hello World", "World")); // true
console.log(containsSubstring("Hello World", "xyz")); // false

// Write a Program to reverse a string in JavaScript.
let string = "palindrome"
string = string.split("").reverse().join("")
console.log(string)
// Write a Program to delete a property from an object?
let Employee = {
    name: "Sandeep",
    address:"Indore",
    age:25
}
console.log(Employee)
delete Employee.address
console.log(Employee);

// Write a Program to add a property to an object?
Employee.fatherName = "Santosh Solanki"
console.log(Employee)
// Write a Program to find a sum of all the elements of an array?
var array = [2,3,5,45,78,98]
let sum = 0
for (let index = 0; index < array.length; index++) {
    sum += array[index]
}
console.log(sum);

// Write a Program to check if a number is prime or not?
let number = 230
if(number == 1)
{
    console.log("1 is neither a prime nor a composite number")
}
else if(number > 1)
{
    for (let index = 0; index < number/2; index++) {
        if(number % index == 0)
        {
            console.log("Number is not prime");
            
        }
        else
        {
            console.log("Number is not prime");
        }
        break
    }
} 

// Write a Program to print Fibonacci sequence up to n terms?
// 0,1,1,2,3,5,8,13,21,34,55......
function printFibonacci(n)
{
    if(n<=0)
        console.log("Please inter the ppositive integer");
    
    let n1 = 0
    let n2 = 1
    let nextTerm
    for (let i = 0; i <= n; i++)
    {
        console.log(n1);
        nextTerm = n1 + n2
        n1 = n2
        n2 = nextTerm         
    }
}
printFibonacci(10)

// Write a Program to find factorial of a number?
function findFactorial(num) {
    if (num < 0) return "Factorial is not defined for negative numbers";
    if (num === 0 || num === 1) return 1;
    let factorial = 1;
    for (let i = 2; i <= num; i++) {
        factorial *= i;
    }
    return factorial;
}

console.log(findFactorial(5)); // 120
console.log(findFactorial(0)); // 1

// Print the odd numbers less than 100
for (let i = 1; i < 100; i += 2) {
    console.log(i);
}
// Print the odd numbers less than 100