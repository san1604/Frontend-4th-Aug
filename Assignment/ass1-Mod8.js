// Scenario 1 
// Try to prepare a simple system to store information about students and teachers and combine them for tutoring.
// Create a User class to create objects for both teachers and students. The constructor should take the user data (name, surname, email, role), but be sure to create the appropriate properties.
// Additionally, create the following methods:
// addCourse(course, level) - which will allow you to add course (e.g. math) and level (e.g. 2 - the higher the number, the higher the level) in the case of a student, it will mean that they are looking for help on this level, and in case of a teacher, it will mean that they can help up to this level
// removeCourse(course) - which will allow you to remove the course (e.g. if the student is no longer interested in learning math)
// editCourse(course, level) - which will allow you to change the level associated with the course
// sendMessage(from, message) - which will allow you to send a 'message' message from user 'from' to the user described in the object complete information about the sent message should be stored in the local cache (hint: use an array for this) the sending of the message itself will only be simulated, declare the function sendEmail(from, to, message) {} beforehand and use it in the appropriate place
// showMessagesHistory() - which will display the history of all messages sent to the user in the console.

class User{
    
    constructor(name, surname, email, role)
    {
        this.name = name,
        this.surname = surname,
        this.email = email,
        this.role = role
    }
    
    // addCourse(cource, level)
    // {
    //     this.course = cource,
    //     this.level = level
    // }
    // removeCourse(course)
    // {
    //     this.course = course
    // }
    // editCourse(course,level)
    // {
    //     this.course = course,
    //     this.level = level
    // }
    // sendMessage(from, message)
    // {
    //     this.from = from,
    //     this.message = message
    // }
    // showMessageHistory()
    // {
    //     this.message = message
    // }
}
let teacher = new User({name:"Aditya", surname:"Gupta",email:"ss@gmail.com"})
console.log(teacher);

let student = new User({name:"Sandeep", surname:"Solanki", email:"sandeepsolanki@gmail.com", course:"JavaScript", level:"Begineer"})
console.log(student);
