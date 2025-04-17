function Student(firstName, lastName) {
    if (new.target) {
        console.log("called with new");
      } else {
        console.log("not called with new");
      }
    this.firstName = firstName;
    this.lastName = lastName;
    this.percentage = function (totalMarks) {
        return (totalMarks/20)*100;
    };
}
let student1 = new Student("nikhil","Waichal");
let student2 = new Student("Abc","xyz");
let student3 = Student("A","B")

console.log(student1.firstName)
console.log(student1.lastName)

console.log("Student 1 scored 15 out of 30 his percentage is "+student1.percentage(15))