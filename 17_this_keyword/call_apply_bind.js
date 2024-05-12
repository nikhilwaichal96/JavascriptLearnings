const person = {
    fullName: function () {
        return this.firstName + " " + this.lastName;
    },
    fullAddress: function (city, country) {
        return this.firstName + " " + city + " " + country

    }
}
const person1 = {
    firstName: "Nikhil",
    lastName: "Waichal"
}
const person2 = {
    firstName: "Nishi",
    lastName: "Waichal"
}

// Call method
console.log("Using call method ", person.fullName.call(person1))
console.log("Using call method with args ", person.fullAddress.call(person1, "pune", "India"))

// Apply method
console.log("Using Apply method ", person.fullName.apply(person1))
console.log("Using Apply method with args ", person.fullAddress.apply(person1, ["pune", "India"]))

// Bind method
const getFullname = person.fullAddress.bind(person1, ["pune", "India"])
console.log("Using bind method ", getFullname())

//Bind use for preserving this when function is called as callback,

const obj = {
    name: 'John',
    greet: function () {
        console.log(`Hello, ${this.name}!`);
    }
};

// Scenario 1: Direct invocation
obj.greet(); // Output: Hello, John!

// Scenario 2: Using setTimeout with a function as a callback
setTimeout(obj.greet, 1000); // Output after 1 second: Hello, undefined!

// Using bind to maintain the this context
setTimeout(obj.greet.bind(obj), 1000); // Output after 1 second: Hello, John!
