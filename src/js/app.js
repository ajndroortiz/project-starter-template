<<<<<<< HEAD
import { person, sayHello, Person } from './lib';
=======
import { person, sayHello, Adult } from './lib';
>>>>>>> updated imagemin task settings

console.log( person.name );
console.log( sayHello( 'Alex' ) );

<<<<<<< HEAD
const Alex = new Person( 'Alex', 'Ortiz' );

console.log( Alex.greeting() );

// async function getPosts() {
//     const response = await fetch('https://jsonplaceholder.typicode.com/posts');
//     const data = await response.json();
//     return data;
// }

// getPosts().then(posts => console.log(posts));
=======
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
>>>>>>> updated imagemin task settings
