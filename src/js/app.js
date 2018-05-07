import { person, sayHello, Person } from './lib';

console.log( person.name );
console.log( sayHello( 'Alex' ) );

const Alex = new Person( 'Alex', 'Ortiz' );

console.log( Alex.greeting() );

// async function getPosts() {
//     const response = await fetch('https://jsonplaceholder.typicode.com/posts');
//     const data = await response.json();
//     return data;
// }

// getPosts().then(posts => console.log(posts));
