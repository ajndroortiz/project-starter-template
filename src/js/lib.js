export const person = {
<<<<<<< HEAD
    name: 'John',
    location: 'Miami',
    age: 35
};

export function sayHello( name ) {
    return `Hello ${name}`;
}

export class Person {
    constructor(firstName, lastName) {
        this.firstName = firstName;
        this.lastName = lastName;
    }
    greeting() {
        return "Hi my name is " + this.firstName + " " + this.lastName;
    }
=======
  name: 'John',
  location: 'Miami',
  age: 35,
};

export function sayHello(name) {
  return `Hello ${name}`;
}

export class Adult {
  constructor(firstName, lastName) {
    this.firstName = firstName;
    this.lastName = lastName;
  }
  printName() {
    console.log(`${this.firstName} ${this.lastName}`);
  }
>>>>>>> updated imagemin task settings
}
