export class Student {
	constructor(course, university, fullName) {
    this.course = course;
    this.university = university;
    this.fullName = fullName;
  }

  getInfo() {
    return `cтудент ${this.course} курсу, ${this.university}, ${this.fullName}`;
  }
}
