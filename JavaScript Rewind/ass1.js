//1. Write a program that determines if a year is a leap year.

let year = 1900

if ((year % 100 == 0) && (year % 400 == 0) || (year%4 == 0)  )
{
    console.log("year is leap year");
}
else 
{
    console.log("Year is non leap year")
}

//2. Write a program that calculates the Body Mass Index (BMI) and categorizes it.
let weight = 65
let height = 1.6764
let BMI = weight / height**2
console.log("BMI: ", BMI);

//3. Write a program that assigns a letter grade based on a numerical grade.
let marks = 6
switch (true) {
    case (marks>= 90 && marks <= 100):
        console.log("You obtained A grade")
        break;
    case (marks>= 80 && marks < 90):
        console.log("You obtained B grade")
        break;
    case (marks>= 65 && marks < 80):
        console.log("You obtained C grade")
        break;
    case (marks>= 50 && marks < 65):
        console.log("You obtained D grade")
        break;
    case (marks< 50):
        console.log("You obtained E grade, You didn't pass the Exam")
        break;
    default:
        break;
}

// 4. Write a program that calculates the ticket price based on age.
let distanceinKM = 300
let age = 20
let fair
if (age <= 2) {
    fair = distanceinKM*0
    console.log("Fair for infants is ",fair, " no birth allocated");
}
else if(age>2 && age <= 11)
{
    fair = (distanceinKM *2) / 3
    console.log("Fair for children is ",fair);
}
else if(age>11 && age <= 60)
{
    fair = distanceinKM*2 
    console.log("Fair for Adult is ",fair);
}
else if(age>60)
{
    fair = (distanceinKM *2) / 3
    console.log("Fair for Senior Citizen is ",fair);
}

// 5. Write a program that calculates a discount based on the purchase amount.
let purchaseAmount = 11000
let discount = 0

if (purchaseAmount >= 1000) {
    discount = purchaseAmount * 0.05
}
else if (purchaseAmount >= 5000) {
    discount = purchaseAmount * 0.08
}
else if (purchaseAmount >= 10000) {
    discount = purchaseAmount * 0.1
}

let finalAmount = purchaseAmount - discount
console.log("Final Amount: ", finalAmount)
// 6. Write a simple number guessing game.


// 7. Print the numbers from 0 to 15 with loop & without loop

let n = 0
while(n<=15)
{
    console.log(n);
    n = n + 1
}
console.log("0");
console.log("1");
console.log("2");
console.log("3");
console.log("4");
console.log("5");
console.log("6");
console.log("7");
console.log("8");
console.log("9");
console.log("10");
console.log("11");
console.log("12");
console.log("13");
console.log("14");
console.log("15");

//8 Print the numbers from 12 to 24 with loop & without loop

for (let index = 12; index <= 24; index++) {
    console.log(index);
    
}
console.log("12");
console.log("13");
console.log("14");
console.log("15");
console.log("16");
console.log("17");
console.log("18");
console.log("19");
console.log("20");
console.log("21");
console.log("22");
console.log("23");
console.log("24");

// 9 Print the ODD numbers from 7 to 31
for (let index = 7; index <= 31; index++) {
    if (index % 2 == 1) {
        console.log(index);
        
    }
    
}
// 10. Print the EVEN numbers from 10 to -20
for (let index = 10; index >= -20; index--) {
    if (index % 2 == 0 ) {
        console.log(index);
        
    }
    
}
