
let person = {
    firstName: 'John',
    lastName: 'Doe',
    greet: function () {
        console.log('Hello '+this.firstName);
    }
};
person.greet()
person.setSal = function (sal) {
    console.log("Employee "+this.firstName+ "set salary as "+sal);
}
person.setSal(2000);
//es6
let emp = {
    firstName: 'John',
    lastName: 'Doe',
    greet() {
        console.log('Emp full name is'+this.firstName+ " "+ this.lastName);
    }
};
emp.greet()