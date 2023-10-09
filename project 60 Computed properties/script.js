const propertyName = 'age';

const person = {
  firstName: 'John',
  lastName: 'Doe',
  [propertyName]: 30  // Computed property using the value of 'propertyName'
};

console.log(person.age);  // Outputs: 30
