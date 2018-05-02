export const person = {
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
}
