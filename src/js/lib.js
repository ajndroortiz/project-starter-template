export const person = {
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
}
