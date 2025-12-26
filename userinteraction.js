// console.log("This is a sample javascipt code inside my webpageS");
// function helloworld()
// {
//     console.log("Hello World");

// const { use } = require("react")


// }
// function confirmDailog(){
//         let decision = window.confirm("It is Ok")
//         console.log(decision);

// }
// function confirmDailog1(){
//     let remove = confirm("Remove All Data")
//     let message = remove ? "Deleting Data!" : "Cancelled"
//     console.log(message);

// }
// let isUserReady = confirm("Are you ready")
// console.log(isUserReady);
// if (isUserReady) {
//     alert("user ready!")
// }

// let unitPrice = 10
// let pieces = prompt("How many pieces do you prefer", 0);
// if (pieces > 0 ) {
//     var total = unitPrice * pieces
//     console.log(total);
// }
// console.log(total);

// let userage = prompt("Enter your age")
// let isFemale = false
// let points = 703
// let cartValue = 299
// let shippingCost = 9.99
// if (userage > 21) {
//     if(cartValue >= 300 || points >= 500){
//         shippingCost = 0
//     }

// }
// alert("Shipping Cost: "+shippingCost)
// if (userage > 21 && (cartValue >= 300 || points >= 500)) {
//     shippingCost = 0
// }
// alert("Shipping Cost: "+shippingCost)

// let num = -1
// if (num >= 0) {
//     console.log("number is positive");

// }
// else{
//     console.log("negative");
// }

// let isUserReady = confirm("Are you ready")
// console.log(isUserReady);
// if (isUserReady) {
//     alert("user ready!")
// }
// else{
//      alert("user not ready!")
// }

// let age = prompt("Enter your age")
// if (age >= 18 ) {
//     alert("You are eligible to vote")
// } else {
//     alert("you are a minor, Can not vote")
// }

// let age = prompt("Enter your age")
// if (age >= 18 ) 
// {
//     alert("You are eligible to vote")
// } 
// else if(age>=13){
//     alert("You are a teenager")
// }
// else
// {
//     alert("you are a minor, Can not vote")
// }

// let age = prompt("Enter your age")
// if (age >= 18 ) 
// {
//     alert("You are eligible to vote")
// } 
// else if(age>=13){
//     alert("You are a teenager")
// }
// else if(age > 60){
//     alert("Old")
// }
// else if (age >= 80) {
//     alert("Older than eighty")
// }
// else
// {
//     alert("you are a minor, Can not vote")
// }
// let name = prompt("ENter name")
// let age = prompt("Enter age")
// if (age>18) {
//     alert("User is eligible to vote")
// }
// else{
//     alert("User is not eligible to vote")
// }

// let unitPrice = 12
// let pieces = prompt("Enter Number of products")
// if (pieces>0) {
//     var total = unitPrice * pieces
//     alert("Total price of products",total)
//     console.log(total);


// }
// 

// let marks = prompt("Enter your marks")
// if (marks >= 90 && marks <=100){
//     alert("A")
// }
// else if (marks >= 80 && marks < 90) {
//     alert("B")
// } 
// else if(marks >= 70 && marks < 80){
//     alert("C")
// }
// else if(marks >= 60 && marks < 70){
//     alert("D")
// }
// else if(marks<60){
//     alert("Fail")
// }
// else{
//     alert("Enter valid marks")
// }
// let marks1 = Number(prompt("Maths"))
// let marks2 = Number(prompt("Physics"))
// let marks3 = Number(prompt("Hindi"))
// let marks4 = Number(prompt("English"))
// let marks5 = Number(prompt("Chemistry"))
// let percentage = (marks1+marks2+marks3+marks4+marks5)/5
// console.log(percentage);
// alert(percentage)

// let number = 16
// switch (number) {
//     case 1:
//         console.log("One");    
//         break;
//     case 2: 
//         console.log("Two");
//         break
//     case 3:
//         console.log("Three");


//     default:
//         console.log("Unknown number");

//         break;
// }

// let number = prompt("Enter a number")
// if (number > 90 && number < 110) {
//     console.log("Bingo!");

// }
// else{
//     console.log("Miss");

// }

// let names = []
// let isOver = false
// while (!isOver) {
//     let name = prompt("Enter another name or press cancel")
//     if (name != null) {
//         names.push(name)
//     }
//     else{
//         isOver = true
//     }
// }
// for (let index = 0; index < names.length; index++) {
//     console.log(names[index]);


// }

// let values= [10,30,50,100,110,200,250,300]
// console.log("---------Forward----------");
// for (let index = 0; index < values.length; index++) {
//     console.log(values[index]);  
// }
// console.log("---------Forward----------");
// for (let index = values.length-1; index > 0; index--) {
//     console.log(values[index]);  
// }
// console.log("---------Forward----------");
// for (let index = 0; index < values.length; index += 2) {
//     console.log(values[index]);  
// }

// let values = [10,30,50,100]
// let sum = 0
// // for (let index = 0; index < values.length; index++) {
// //     sum += values[index]    
// // }
// // console.log(sum);
// for (let number of values){
//     sum += number
// }
// console.log(sum);

// 

// let user = {
//     name : "Calvin",
//     surname: "Hart",
//     Age: 66,
//     email: "calvinhart@gmail.com"
// }
// for (let key in user){
//     console.log("Key: ", key);
//     console.log("Value: ", user[key]);
// }
// let temperatures
// let sum 
// let meantemp
// temperatures = [12, 12, 11, 11, 10, 9, 9, 10, 12, 13, 15, 18, 21, 24, 24, 23, 25, 25, 23, 21, 20, 19, 17, 16]
// getMeanTemperatures(temperatures)
// sum = 0
// for (let i = 0; i < temperatures.length; i++) {
//     sum += temperatures[i]

// }
// meantemp = sum / temperatures.length
// console.log(`mean: ${meantemp}`);

// console.log("-----");
// temperatures = [17, 16, 14, 12, 10, 10, 10, 11, 13, 14, 15, 17, 22, 27, 29, 29, 27, 26, 24, 21, 19, 18, 17, 16]
// getMeanTemperatures(temperatures)
// sum = 0
// for (let i = 0; i < temperatures.length; i++) {
//     sum += temperatures[i]

// }
// meantemp = sum / temperatures.length
// console.log(`mean: ${meantemp}`);

// function getMeanTemperatures(temperatures) {
//     sum = 0
//     for (let i = 0; i < temperatures.length; i++) {
//         sum += temperatures[i]

//     }
//     meantemp = sum / temperatures.length
//     console.log(`mean: ${meantemp}`);
// }

// function checkAge(name, age, contact) {
//     console.log("Name: ", name);
//     console.log("Age: ",age);
//     console.log("Contact: ", contact);
//     if (age>=18) {
//         console.log("You can vote now!");
//     }    
//     else{
//         console.log("Oh no, you have to wait to vote!");  
//     }
// }
// checkAge(10, 9876543219, "Aditya")
// checkAge("Aditya", 10, 9876543219)


// }
// let names = ["alice", "bob", "eve", "john"]
// let name = getElement(names, 2)
// console.log(name);

// function getElement(array,index) {
//     return array[index]
// }
// let count = 0
// console.log("Count from global: ", count);
// syaHello()
// console.log("Count from global: ", count);
// function syaHello() {
//     let count = 10
//     console.log("Count from function: ",count);

// }

// function add(first, second){
//     return first+second
// }
// let first = 10, second = 20, third = 40, fourth = 80
// console.log(first+second);
// console.log(second+third);
// console.log(third+fourth);
// let a = 100, b = 200, c = 300
// function test(a) {
//     let b = 10
//     console.log(a);
//     console.log(b);
//     console.log(c);
// }
// test(1)
// console.log(a);
// console.log(b);
// console.log(c);

// function showmessage(message) {
//     console.log(`message: ${message}`);

// }
// console.log(showmessage);
// let sm = showmessage
// console.log("sm: ", sm);
// sm("sm")
// showmessage("show message")
// function doNothing() {
//     return undefined
// }
// let a = doNothing()
// let b = doNothing

// console.log(typeof a);
// console.log(typeof b);

// function add(a,b) {
//     return a+b
// }
// function multiply(a,b) {
//     return a*b 
// }
// function operation(func, first, second) {
//     return func(first,second)
// }
//console.log(operation(add, 10, 20));
//console.log(operation(multiply, 10, 20));
// console.log(operation(function(a,b){
//     return a+b
// }, 20, 40));

// let myAdd = function (a,b) {
//     return a+b
// }
// console.log(myAdd(20,40));
// function getMeanTemperatures(temperatures) {
//     if (!(temperatures instanceof Array)) {
//         return NaN
//     }
//     let sum = 0
//     for (let i = 0; i < temperatures.length; i++) {
//         sum += temperatures[i]

//     }
//     return sum / temperatures.length
// }
// console.log(getMeanTemperatures([10,20,30]));
// console.log(getMeanTemperatures("not an array"));

// function add(a,b) {
//     if (typeof a !== "number" || typeof b !== "number") {
//         return "Invalid Input: numbers expected"
//     }
//     return a + b
// }
// console.log(operation(add, "ten", 20));
// console.log(operation(add, 10, "twenty"));

// let inner  = function () {
//     console.log('inner 1');
// }
// let outer = function(callback){
//     console.log('outer 1');
//     callback()
//     console.log('outer 2');
// }
// console.log('test 1');
// outer(inner)
// console.log('test 2');

// function calculate(a,b, operation){
//     return operation(a,b)
// }
// function add(x,y){
//     return x+y
// }
// function subtract(x,y){
//     return x-y
// }
// console.log(calculate(5,3,add));
// console.log(calculate(5,3,subtract));

// console.log("start");
// setTimeout(function()
// {
//     console.log("this runs after 1 second");

// },100
// )
// console.log("end");

// let counter = 0
// console.log("start");
// let intervalId = setInterval(function()
// {
//     console.log("repeating: ", ++counter);

// }, 1000
// )
// setTimeout(function()
// {
//     clearInterval(intervalId)
//     console.log("stopped");

// },5500)
// console.log("End!");
// window.addEventListener("click", function(){
//     console.log("Clicked");
// }
// )
// let array = ["Aditya","Sandeep","Diksha", "George","Chandresh"]

// let newArray = array.filter(function(name)
// {
//   return name === "Aditya" || name === "Diksha" || name === "Chandresh"
// })
// console.log(newArray)
// let newArray1 = array.filter(function(name)
// {
//   return name !== "Aditya" && name !== "Diksha" && name !== "Chandresh"
// })
// console.log(newArray1)
// let array = ["Aditya","Sandeep","Diksha", "George","Chandresh"]
// let newArray = array.map(function(element)
// {
//     if(element === "Aditya")
//         return "Aditya Gupta"
//     return element+"---"
// }
// )
// console.log(array);
// console.log(newArray);
// let array1 = [1,2,3,4,5,6,7,8,9]
// let newArray1 = array1.map(function(element)
// {
//     if(element === 9)
//         return +9+10+" nine"
//     return element+20+" plus twenty"
// })
// console.log(array1);
// console.log(newArray1);

// let array = 1//[1,2,3,4,5,6]
// if(array instanceof Array){
//     console.log("yes, we got the array");

// }
// else
// {
//     console.log("Error, not an array");

// }

// let a = -2
// try
// {
//     a = 2
// }
// catch(error)
// {
//     if(error instanceof ReferenceError){
//         console.log("Reference error reset a to -2");
//         a = -2
//     }
//     else
//     {
//         console.log("Other Error", + error);

//     }
// }
// console.log(a);

// let a = 10
// try
// {
//     // a = 5
//     a = b
// }
// catch(error)
// {
//     console.log("Error: ", error)
// }
// finally
// {
//     console.log("Finally: ", a);

// }
// console.log("Outside: ", a);
// let = 10
// try
// {
//     a = b
// }
// catch(error)
// {
//     try
//     {
//         console.log(b)
//     }
//     catch(error2)
//     {
//         console.log("Second Catch! \n",error2)
//     }
// }
// finally
// {
//     console.log("Finally!")
// }

// console.log("Start")
// throw 100
// console.log("end")

// console.log("Start")
// throw ReferenceError("this is my custom reference error")
// console.log("end")

// console.log("Start")
// try
// {
//     throw 100
// }
// catch(error)
// {
//     console.log("error")
// }
// console.log("end")

// function factorial(n){
//     let result = 1
//     if(n>20){
//         throw new RangeError("Max value 20")
//     }
//     for(; n > 1; n--){
//         result = result * n
//     }
//     return result
// }
// console.log(factorial(5))
// console.log(factorial(6))
// console.log(factorial(10))
// console.log(factorial(20))
// console.log(factorial(1000))

// function average(a,b)
// {
//     return a + b / 2
// }
// console.log(average(2,10))
// console.log(average(5,5))

// function largest(a,b,c)
// {
//     if(a>b && a>c)
//     {
//         return a
//     }
//     else if(b>a && b>c)
//     {
//         return b
//     }
//     else
//     {
//         return c
//     }

// }
// console.log(largest(1,1,2));
// console.log(largest(3,2,1));
// console.log(largest(1,2,3));
// console.log(largest(2,2,1));

// console.log("Before Debugger");
// debugger;
// console.log("After Debugger");

// function outer(){
//     let name = "outer"
//     let str = "inner"
//     return str
// }
// function inner(){
//     let name = "inner"
//     return "hello"
// }
// console.log("before outer() call")
// debugger;
// console.log(outer())
// console.log("after outer() call")

// let part = 0 
// console.time("Lebniez")
// for (let k = 0; k<10000000;k++)
// {
//     part  = part + ((-1) ** k)/ (2*k+1)
// }
// console.timeEnd("Lebniez")
// let pi = part * 4
// console.log(pi);

// Tasks
//  Run the following code:
// let end=2;
// for(let i=1; i<end; i++) 
// {
//     console.log(i);
// }
// It should output the numbers 1 and 2 on the console. Use the debugger to make the program output the numbers 1, 2, 3, 4, and 5 instead. Do not modify the program code. Use only breakpoints and the option to modify variables.

// let counter = 0
// let maxvalue = 10
// let result = 1
// debugger
// for (counter = 0; counter<maxvalue; counter++)
// {
//     console.log(result);
//     result *= maxvalue - counter - 1
// }
// console.log("final result", result);

// let contact = {}
// console.log(contact);
// console.log(typeof contact);
// contact.tel =  "123-456-789" 
// console.log(contact);
// console.log(contact.tel);
// console.log("Contact:", contact);
// console.log(typeof contact);
// console.log(typeof contact.tel);

// contact["code"] = 123
// console.log(contact["code"]);


// contact["email.work"] = "abc@gmail.com"
// contact["email.personal"] = "def@gmail.com"

// console.log(contact["email.work"]);
// console.log(contact["email.personal"]);

// // contact.first name = "Aditya"
// contact["first name"] = "Aditya"
// console.log(contact["first name"]);

// let contact = 
// {
//     email_1: "RonaldSMurphy@freepost.org",
//     email_2: "rsmurphy@briazz.com"
// };
// for(i = 1; i<=2; i++)
// {
//     let key = "email_"+i
//     console.log(key);
//     console.log(contact[key]);
// }

// let contact = {}
// let email = prompt("Enter email.....")
// let count = 1
// while(email)
// {
//     contact["email_"+count] = email
//     count++
//     email = prompt("enter email...")
// }
// console.log("Contact: ",contact);
// for(let count1 = 1; count<Object.keys(contact).length; count1++)
// {
//     console.log(contact["email_"+count1]);

// }

// let test = 
// {
//     nr : 10,
//     b: false,
//     str:"uno des tre",
//     arr: [10,20,30],
//     obj: {
//         x:10,
//         y:20
//     },
//     fn: function(arg) {console.log(arg);}


// }
// test.fn(123)
// console.log("1 index", test.arr[1]);
// console.log("y from object of object", test.obj.y);
// console.log("string from object", test.str);
// console.log("number from object", test.nr);
// console.log("boolean from obj", test.b);
// console.log("boolean from obj", test.obj);
// console.log("boolean from obj", test);

// let point = 
// {
//     x:0,
//     y:0,
//     moveHorizontally: function(distance){
//         this.x = this.x + distance
//     },
//     moveVertically: function(distance){
//         this.y = this.y + distance
//     }

// }
// console.log(point.x);
// point.moveHorizontally(30)
// console.log(point.x)

// let contact = 
// {
//     tel: "1234-567-890",
//     email :"ronaldsmurphy@gmail.com"
// }
// console.log(contact.tel);
// console.log(contact.email);

// contact.email = ["ronaldsmurphy@gmail.com", "rsmurphy@briazz.com"]
// console.log("email: ",contact.email[0]);
// console.log("email: ",contact.email[1]);

// contact.email = 
// {
//     private: "ronaldsmurphy@gmail.com",
//     Work: "rsmurphy@briazz.com"
// };
// console.log(contact.email.private);
// console.log(contact.email.Work);

// // delete contact.email.Work
// console.log("Private email",contact.email.private);
// console.log("Work email",contact.email.Work);

// if(contact.email.Work)
// {
//     console.log("THis is executing");

// }
// if("private" in contact.email)
// {
//     console.log("This is private email", contact.email.private);

// }
// if("email" in contact)
// {
//     console.log("This is private email", contact.email.private);

// }
// let contact = 
// {
//     tel: "1234-567-890",
//     email :"ronaldsmurphy@gmail.com"
// }
// for(x in contact)
// {
//     console.log(x);
//     console.log(x + ": "+contact[x]);
// }
// let propArray = Object.keys(contact)
// console.log("PropArray: ", propArray);

// contact = 
// {
//     tel: "1234-567-890",
//     email :"ronaldsmurphy@gmail.com"
// }
// contact.tel = "1234-567-890"
// console.log("contact.tel:", contact.tel);
// contact.name = "Sandeep"

// var point1 = {x:10, y:20}
// var point2 = {x:10, y:20}
// console.log(point1===point2);
// let point3 = point1
// console.log(point3===point1);
// point1.x = 30
// console.log("point1.x", point1.x);
// console.log("point3.x", point3.x);


// let point0 = {x:10,y:20}
// let point1 = point0
// let point2 = {}
// Object.assign(point2,point0)
// console.log(point2.x );
// console.log(point2.y );

// point1.x = 30
// point1.y = 50

// point0.x = 60
// point0.y = 70

// console.log("------");
// console.log(point2.x );

// console.log(point2.y );
// console.log("------");
// console.log("point1.x:", point1.x);
// console.log("point1.y:", point1.y);
// console.log("point2.x:", point2.x);
// console.log("point2.y:", point2.y);

// console.log(point1 === point0);
// console.log(point1 === point2);

// let point4 = {};
// Object.assign(point4, point0, {z:100})
// console.log("point4", point4);
// // console.log(point4.x);
// // console.log(point4.y);
// // console.log(point4.z);

// let point5 = {};
// Object.assign(point5, point4, {z:120 , color:"red"})
// console.log("point5", point5);

// let point6 = {}
// point5 = {...point5}
// console.log("point5: ", point5);
// console.log("point5===point6 ", point6===point5);



// function max(array) {
//     let maxValue = array[1];
//     for (let i = 1; i < array.length; i++) {
//         if (array[i] > maxValue) {
//             maxValue = array[i];
//         }
//     }
//     return maxValue;
// }

// console.log(max([1, 4, 6, 2]));
// console.log(max([10, 4, 6, 2]));

// const arr1 = [1,2]
// const arr2 = [3,4]

// const combinedArray = [...arr1, ...arr2]
// console.log("arr1: ",arr1);
// console.log("arr2: ",arr2);
// console.log("combined array: ",combinedArray);

// const array1 = [1,2,3,4]
// let resultArray = [...array1]
// console.log(resultArray);
// resultArray = [...array1, 5,6,7,8]
// console.log("resultArray",resultArray);

// resultArray = [5,6,7,8,...array1]
// console.log("resultArray",resultArray);

// resultArray = [5,6,...array1,7,8]
// console.log("resultArray",resultArray);

// function sum(a,b,c)
// {
//     return a+b+c
// }
// let numbers = [10,12,23]
// const result = sum(...numbers)
// console.log("result: ", result);

// const string1 = "Aditya"
// let charArray = [...string1]
// console.log("Char Array: ", charArray);

// let deepclone = function(obj)
// {
//     let newObj = {...obj}
//     for(property in newObj)
//     {
//         if(typeof newObj[property]==="object")
//         {
//             newObj[property] = deepclone(newObj[property])
//         }
//     }
//     return newObj
// }

// let obj = {
//     x:10,
//     y:20,
//     z: {
//         a:100,
//         b:200
//     }
// }
// let obj1 = {}
// // Object.assign(obj1,obj)
// // obj1 = {...obj}
// obj1 = deepclone(obj)
// console.log("obj:",obj)
// console.log("obj1:",obj1)
// console.log("obj1===obj:",obj1===obj)

// obj.z.a= 150
// obj.x = 15
// console.log("Chinging obj.z.a to 150");
// console.log("Chinging obj.x to 15");
// console.log(obj);
// console.log(obj1);


// let circle = 
// {
//     radius: 100,
//     center:
//     {
//         x : 0,
//         y : 0
//     },
//     // getType : function()
//     // {
//     //     return "circle"
//     // }
//     getType()
//     {
//         // return "circle"
//         return (typeof this.radius === "number") ? "circle" : "unknown"
//         // return (typeof circle.radius === "number") ? "circle" : "unknown"    
//     },
//     getRadius()
//     {
//         return this.radius
//     }
// }
// console.log("circle.radius",circle.radius);
// console.log("circle.center.x",circle.center.x);
// console.log("getType():", circle.getType());
// console.log("getType():", circle["getType"]());
// console.log("getRadius(): ", circle.getRadius());
// let circle1 = {...circle}
// circle1.radius = "abc"
// console.log("getRadius(): ", circle1.getRadius());
// console.log("getType(): ", circle1.getType());


// let contact = 
// {
//     _tel : "207-367-4065",
//     get tel()
//     {
//         console.log("Calling getter for _tel");
//         return this._tel
//     },
//     set tel(t)
//     {
//         console.log("Setting _tel");
//          this._tel = t
//     }

// }
// console.log(contact.tel);
// contact.tel = "100-233-4653"    //setter is called
// console.log(contact.tel);
// contact.email = "RonaldSMurphy@freepost.org"
// console.log(contact.email);


// let contact = 
// {
//     _age : 36,
//     _firstname: "David",
//     _lastName: "Taylor",
//     get fullName()
//     {
//         return `${this._firstname} ${this._lastName}`
//     },
//     get age()
//     {
//         return this._age
//     },
//     set age(a)
//     {
//         if(a>0)
//             this._age = a
//         else
//             console.log("Setting up invalid number is not allowed");
        
//     }
// }
// console.log(contact.fullName);
// // contact.age = -20
// contact.age = 20
// console.log(contact.age);

// let contact =
// {
//     age: 36,
//     firstName: "David",
//     lastName: "Taylor",
//     get fullName()
//     {
//          return `${this.firstName} ${this.lastName}`; 
//     },
//     get age()
//     {
//         return this._age; 
//     },
//     set age(a) 
//     { 
//         if (a > 0) 
//             this.age = a 
//     }
// }
// let keys = Object.keys(contact)
// console.log("Keys of contact: ", keys);
// let desc = Object.getOwnPropertyDescriptor(contact, "age")
// console.log("age property descriptor: ", desc);
// Object.defineProperty(contact, "age",
//     {
//         value: 34,
//         writable:true,
//         enumerable:false,
//         configurable:true
//     }
// )
// keys = Object.keys(contact)
// console.log("Keys of contact", keys);
// desc = Object.getOwnPropertyDescriptor(contact, "age")
// console.log("age property descriptor: ", desc);

// Object.defineProperty(contact, "age",
//     {
//         value: contact.age,
//         writable:false,
//         enumerable:false,
//         configurable:true
//     }
// )
// contact.age = 100
// console.log("age: ", contact.age);

// let createpoint = function(x,y)
// {
//     let obj = {}
//     obj.x = x
//     obj.y = y
//     return obj
// }
// let point1 = createpoint(1,1)
// let point2 = createpoint(2,2)
// console.log(point1);
// console.log(point2);

// let createpoint = function(x,y)
// { 
//     return {
//         x:x,
//         y:y
//     }
// }
// let point1 = createpoint(1,1)
// let point2 = createpoint(2,2)
// console.log(point1);
// console.log(point2);

// let createpoint = (x,y) => ({x,y})
// let point1 = createpoint(1,1)
// let point2 = createpoint(2,2)
// console.log(point1);
// console.log(point2);

// let createColoredPoint = function(x, y, color)
// {
//     let _info = "...object under cunstruction"
//     let _color = color
//     console.log(_info)
//     return{
//         x,
//         y,
//         getColor()
//         {
//             return _color
//         }
//     }
// }
// let Coloredpoint1 = createColoredPoint(1,1,"Red")
// let Coloredpoint2 = createColoredPoint(2,2,"Green")
// console.log("Coloredpoint1.getColor(): ", Coloredpoint1.getColor());
// console.log("Coloredpoint2.getColor(): ", Coloredpoint2.getColor());
// console.log("coloredPoint1._color", Coloredpoint1._color);

// let Coloredpoint = function(x, y, color)
// {
//     let _info = "...object under cunstruction"
//     let _color = color
//     console.log(_info)
    
//     this.x = x,
//     this.y = y,
//     this.getColor = function()
//     {
//         return _color
//     }
    
// }
// let Coloredpoint1 = new Coloredpoint(1,1,"Red")
// let Coloredpoint2 = new Coloredpoint(2,2,"Green")
// console.log("Coloredpoint1.getColor(): ", Coloredpoint1.getColor());
// console.log("Coloredpoint2.getColor(): ", Coloredpoint2.getColor());
// console.log("coloredPoint1._color", Coloredpoint1._color);
// console.log("coloredPoint.constructor.name", Coloredpoint.constructor.name);
// console.log("coloredPoint.constructor.name", Coloredpoint.constructor);
// console.log("coloredPoint.constructor.name", typeof Coloredpoint.constructor);

// console.log(1+"2");
// console.log(1-"a");

// let testString = new String("Uno doi trei")
// console.log("testString.length", testString.length)
// console.log("testString.toUpperCase: ", testString.toUpperCase());

// String.prototype.hi = function()
// {
//     console.log("hi")
// }
// testString.hi()

// class Student
// {
//     name
//     age
//     gender
//     rollNumber
//     // constructor()
//     // {
//     //     console.log("constructor called");
//     // }//default constructor
//     constructor(name, age, gender, rollNumber)
//     {
//         console.log("constructor called");
//         this.name = name
//         this.age = age
//         this.gender = gender
//         this.rollNumber = rollNumber
//     }// parameterized constr

//     printStudent()
//     {
//         console.log("sandeep.name: ",this.name);
//         console.log("sandeep.age: ",this.age);
//         console.log("sandeep.gender: ",this.gender);
//         console.log("sandeep.rollNumber: ",this.rollNumber);
//     }
// }

// console.log("creating new object");
// let sandeep = new Student("Sandeep Solanki", 20, "Male", 101)
// // let sandeep = new Student
// console.log("created object");
// // sandeep.name = "Sandeep Solanki"
// // sandeep.age = 24
// // sandeep.gender = "Male"
// // sandeep.rollNumber = 121

// // console.log("sandeep.name: ",sandeep.name);
// // console.log("sandeep.age: ",sandeep.age);
// // console.log("sandeep.gender: ",sandeep.gender);
// // console.log("sandeep.rollNumber: ",sandeep.rollNumber);

// sandeep.printStudent()

// let aditya = new Student("Aditya Gupta", 21, "Male", 102)
// aditya.printStudent()

// class Vehicle
// {
//     transportMode
//     weight
//     capasity
//     color
//     print()
//     {
//         console.log("transportMode: ", this.transportMode);
//         console.log("weight: ", this.weight);
//         console.log("capasity: ", this.capasity);
//         console.log("capasity: ", this.capasity);
//     }
// }
// class MotorBike extends Vehicle
// {
//     maxSpeed
//     fuelType
//     PeopleCapacity
//     average

//     print()
//     {
//         super.print()
//         console.log("maxSpeed: ", this.maxSpeed)
//         console.log("fuelType: ", this.fuelType)
//         console.log("PeopleCapacity: ", this.PeopleCapacity)
//         console.log("average: ", this.average)
//     }
// }
// class Car extends Vehicle
// {
//     maxSpeed
//     fuelType
//     PeopleCapacity
//     average  
//     gears
//     canReverse
    
//     print()
//     {
//         super.print()
//         console.log("maxSpeed: ", this.maxSpeed)
//         console.log("fuelType: ", this.fuelType)
//         console.log("PeopleCapacity: ", this.PeopleCapacity)
//         console.log("average: ", this.average)
//         console.log("gears: ", this.gears)
//         console.log("canReverse: ", this.canReverse)

//     }
// }
// let honda = new Car
// honda.transportMode = "Road"
// honda.weight = "150 KGS"
// honda.capasity = "2.5 L"
// honda.color = "Yellow"
// honda.maxSpeed = "220 KMPH"
// honda.fuelType = "Diesel"
// honda.PeopleCapacity = 6
// honda.average = "50 KMPL"
// honda.canReverse = true

// honda.print()
// console.log("------");

// let motorBike = new MotorBike
// motorBike.transportMode = "Road"
// motorBike.weight = "100 KGS"
// motorBike.capasity = "1.5 L"
// motorBike.color = "Red"
// motorBike.maxSpeed = "150KMPH"
// motorBike.fuelType = "Petrol"
// motorBike.PeopleCapacity = 2
// motorBike.average = "80 KMPL"
// motorBike.print()

// class Test{
//     name
//     description
//     marking
//     rank
// }
// let physicsTest = new Test()
// physicsTest.name = "Physics Test"
// physicsTest.description = "fdgdfghgb gfbgf"
// physicsTest.marking = "50"
// physicsTest.rank = 100

// console.log(physicsTest);

// let { name, marking, rank} = physicsTest
// console.log("Name: ", name);
// console.log("marking: ", marking);
// console.log("rank: ", rank);

// let Vehicle = function(id, lattitude, longitude)
// {
//     this.setPosition = function(lattitude, longitude)
//     {
//         this.time = Date.now();
//         this.longitude = longitude
//         this.lattitude = lattitude
//     }
//     this.id = id
//     this.status = "unavailable"
//     this.setPosition(lattitude, longitude)
// }
//Factory function
// let Vehicle = function(intialData)
// {
//     let { id, lattitude, longitude } = intialData //distructor or dismantle
//     this.setPosition = function(lattitude, longitude)
//     {
//         this.time = Date.now();
//         this.longitude = longitude
//         this.lattitude = lattitude
//     }
//     this.getPosition = function()
//     {
//         return { lattitude: this.lattitude, longitude:this.longitude}
//     }
//     this.id = id
//     this.status = "unavailable"
//     this.setPosition(lattitude, longitude)
// }
// let car = new Vehicle({id:"XE9", lattitude: 12.9090909, longitude: 24.9797979})
// console.log("car", car);
// console.log("lat long : ", car.getPosition());
// let {lattitude, longitude} = car.getPosition()
// console.log("lattitude", lattitude);
// console.log("longitude", longitude);


// let getName = function(name)
// {
//     return name
// }
// console.log(getName());


// class Vehicle
// {
//     constructor({id, lattitude, longitude})
//     {
//         this.id = id
//         this.status = "unavailable"
//         this.setPosition(lattitude, longitude)
//     }
//     setPosition({lattitude, longitude})
//     {
//         this.time = Date.now();
//         this.longitude = longitude
//         this.lattitude = lattitude
//     }
//     getPosition()
//     {
//         return { lattitude: this.lattitude, longitude:this.longitude}
//     }
// }
// let vehicle = new Vehicle({lattitude: 18.32123, longitude: 59.367628, id: "AL1024"})
// vehicle.setPosition({longitude: 18.193121, lattitude: 59.378654})
// console.log(vehicle.getPosition());


// function namedFunction()
// {
//     console.log("I'm NJ, I hope....");    
// }
// let anonymousFunction = function()
// {
//     console.log("I'm a bit anonymous....");
    
// }
// let notExactlyAnonymousFunction = function anotherNamedFunction()
// {
//     console.log("I'm confused");
    
// }
// namedFunction()
// anonymousFunction()
// notExactlyAnonymousFunction()

let AlmostEmptyClass = class
{
    constructor(sth)
    {
        console.log(sth);
    }
    sayHi()
    {
        console.log("Hi!");
    }
}
let almostEmptyobject = new AlmostEmptyClass(120)
almostEmptyobject.sayHi()
console.log("almostEmptyobject instanceof AlmostEmptyClass: ",almostEmptyobject instanceof AlmostEmptyClass);
console.log("almostEmptyobject instanceof AlmostEmptyClass: ",almostEmptyobject instanceof String);
let str = new String("Test Me!")
console.log("str instanceof String: ",str instanceof String);
