// Person constructor function
function Person(name, age) {
  this.name = name;
  this.age = age;
}

// Greet method added to Person prototype
Person.prototype.greet = function() {
  console.log(`Hello, my name is ${this.name}, I am ${this.age} years old.`);
}

// Employee constructor function
function Employee(name, age, jobTitle) {
  // Call Person constructor function with name and age arguments
  Person.call(this, name, age);
  this.jobTitle = jobTitle;
}

// Inherit Person prototype in Employee prototype
Employee.prototype = Object.create(Person.prototype);

// Set constructor of Employee prototype to Employee
Employee.prototype.constructor = Employee;

// JobGreet method added to Employee prototype
Employee.prototype.jobGreet = function() {
  console.log(`Hello, my name is ${this.name}, I am ${this.age} years old, and my job title is ${this.jobTitle}.`);
}
