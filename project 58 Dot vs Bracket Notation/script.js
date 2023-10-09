//Dot Notation (.):
const person = {
  firstName: 'John',
  lastName: 'Doe'
};

console.log(person.firstName);  // Outputs: 'John'
person.lastName = 'Smith';      // Modify property using dot notation


//Bracket Notation ([]):
const person = {
  'first name': 'John',
  'last name': 'Doe'
};
console.log(person['first name']);  // Outputs: 'John'
const propertyName = 'last name';
console.log(person[propertyName]);   // Outputs: 'Doe'
