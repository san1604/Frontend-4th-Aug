let book1 = {
    title: "Speaking JavaScript",
    author: "Axel Rauschmayer",
    noOfPages: 460,
}
let book2 = {
    title: "Programming JavaScript Applications",
    author: "Eric Elliott",
    noOfPages: 254,
}
let book3 = {
    title: "Understanding ECMAScript 6",
    author: " Nicholas C. Zakas",
    noOfPages: 352,
}
let book1Array = [book1.title, book1.author, book1.noOfPages,book2.title, book2.author, book2.noOfPages,book3.title, book3.author, book3.noOfPages]
// let book2Array = [book2.title, book2.author, book2.noOfPages]
// let book3Array = [book3.title, book3.author, book3.noOfPages]
console.log(book1Array);
book1Array.push("Learning JavaScript Design Patterns", "Addy Osmani", 254)
console.log(book1Array);
console.log(book1Array.length);
// let arr1 = book1Array.slice(6)
// console.log(arr1);

// book1Array.shift()
// book1Array.shift()
// book1Array.shift()
// console.log(book1Array);
// console.log(book1Array.length);
// // DIsplay the sum  of pages of all books from the collection
// let sum_of_pages = book1.noOfPages + book2.noOfPages + book3.noOfPages
// console.log("Sum of Pages: ",sum_of_pages);


// console.log(book2Array);
// console.log(book3Array);

// console.log(book1);

