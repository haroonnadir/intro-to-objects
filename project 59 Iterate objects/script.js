// // Using for...in Loop:
// const person = {
//   firstName: 'John',
//   lastName: 'Doe',
//   age: 30
// };

// for (let key in person) {
//   console.log(`${key}: ${person[key]}`);
// }

// // Using Object.keys():
// const person = {
//   firstName: 'John',
//   lastName: 'Doe',
//   age: 30
// };

// const keys = Object.keys(person);
// keys.forEach(key => {
//   console.log(`${key}: ${person[key]}`);
// });

// // Using Object.values():
// const person = {
//   firstName: 'John',
//   lastName: 'Doe',
//   age: 30
// };

// const values = Object.values(person);
// console.log(values);


// Using Object.entries():
const person = {
  firstName: 'John',
  lastName: 'Doe',
  age: 30
};

const entries = Object.entries(person);
entries.forEach(([key, value]) => {
  console.log(`${key}: ${value}`);
});
