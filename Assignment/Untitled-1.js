class User {
    constructor(name, surname, email, role) {
        this.name = name;
        this.surname = surname;
        this.email = email;
        this.role = role;
        this.courses = {};
        this.messagesReceived = [];
    }

    getFullName() {
        return `${this.name} ${this.surname}`;
    }

    getUserInfo() {
        return `${this.getFullName()} (${this.role}) - ${this.email}`;
    }

    addCourse(course, level) {
        this.courses[course] = level;
    }

    removeCourse(course) {
        delete this.courses[course];
    }

    editCourse(course, level) {
        if (this.courses[course]) {
            this.courses[course] = level;
        }
    }

    sendMessage(from, message) {
        const messageObj = {
            from: from.getFullName(),
            to: this.getFullName(),
            message: message,
            timestamp: new Date()
        };
        this.messagesReceived.push(messageObj);
        sendEmail(from.email, this.email, message);
    }

    showMessagesHistory() {
        this.messagesReceived.forEach(msg => {
            console.log(`From: ${msg.from} | To: ${msg.to} | Message: ${msg.message} | Time: ${msg.timestamp}`);
        });
    }
}

function sendEmail(from, to, message) { }
class ExtendedUser extends User {
    get fullName() {
        return this.getFullName();
    }

    set fullName(fullName) {
        const [name, surname] = fullName.split(' ');
        this.name = name;
        this.surname = surname;
    }
}

class Teacher extends ExtendedUser {
    constructor(name, surname, email) {
        super(name, surname, email, 'teacher');
    }
}

class Student extends ExtendedUser {
    constructor(name, surname, email) {
        super(name, surname, email, 'student');
    }
}
class ExtendedUser extends User {
    get fullName() {
        return this.getFullName();
    }

    set fullName(fullName) {
        const [name, surname] = fullName.split(' ');
        this.name = name;
        this.surname = surname;
    }

    static match(teacher, student, courseName) {
        const matches = [];

        for (const course in student.courses) {
            if (teacher.courses[course]) {
                if (teacher.courses[course] >= student.courses[course]) {
                    matches.push({ course, level: teacher.courses[course] });
                }
            }
        }

        if (courseName) {
            return matches.find(m => m.course === courseName);
        }

        return matches;
    }
}
// Example usage:
// const teacher = new User('John', 'Doe', 'john@school.com', 'teacher');
// const student = new User('Jane', 'Smith', 'jane@school.com', 'student');