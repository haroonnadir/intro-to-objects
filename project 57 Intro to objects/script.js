const person = {
    firstName: 'John',
    lastName: 'Doe',
    age: 30,
    isStudent: false
  };
console.log(person.firstName);  // Outputs: 'John'
console.log(person['lastName']); // Outputs: 'Doe'

const student = {
    name: 'Alice',
    address: {
      city: 'San Francisco',
      postalCode: '94101'
    }
  };
console.log(student);
