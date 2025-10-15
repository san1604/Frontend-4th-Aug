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
let temperatures
let sum 
let meantemp
temperatures = [12, 12, 11, 11, 10, 9, 9, 10, 12, 13, 15, 18, 21, 24, 24, 23, 25, 25, 23, 21, 20, 19, 17, 16]
getMeanTemperatures(temperatures)
// sum = 0
// for (let i = 0; i < temperatures.length; i++) {
//     sum += temperatures[i]
    
// }
// meantemp = sum / temperatures.length
// console.log(`mean: ${meantemp}`);

console.log("-----");
temperatures = [17, 16, 14, 12, 10, 10, 10, 11, 13, 14, 15, 17, 22, 27, 29, 29, 27, 26, 24, 21, 19, 18, 17, 16]
getMeanTemperatures(temperatures)
// sum = 0
// for (let i = 0; i < temperatures.length; i++) {
//     sum += temperatures[i]
    
// }
// meantemp = sum / temperatures.length
// console.log(`mean: ${meantemp}`);

function getMeanTemperatures(temperatures) {
    sum = 0
    for (let i = 0; i < temperatures.length; i++) {
        sum += temperatures[i]
        
    }
    meantemp = sum / temperatures.length
    console.log(`mean: ${meantemp}`);
}