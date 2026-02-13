import Person from "./Person";

class Teacher extends Person {
  constructor(name, age, subject) {
    super(name, age);
    this.subject = subject;
  }

  getRole() {
    return "Teacher";
  }

  getDetails() {
    return `${this.name}, Age: ${this.age}, Subject: ${this.subject}`;
  }
}

export default Teacher;
