import { person, sayHello, Adult } from './lib';

console.log(person.name);
console.log(sayHello('Alex'));

// async function getPosts() {
//   const response = await fetch('https://jsonplaceholder.typicode.com/posts');
//   const data = await response.json();
//   return data;
// }
//
// getPosts().then(posts => console.log(posts));

console.log(`${person.name} is ${person.age} years old`);
const newAdult = new Adult('John', 'Smith');
newAdult.printName();
