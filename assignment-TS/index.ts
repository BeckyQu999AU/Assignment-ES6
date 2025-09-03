// Part 1 Setting Up TypeScript
// *****npm install -g typescript
// *****tsc --init
// *****tsc index.ts

// Part 2: Basic Type Annotations
const add = (a: number, b: number): number => {
  return a + b;
};

console.log(add(5, 100));
console.log(add(10, 20));

// Part 3: Working with Interfaces
interface person {
  name: string;
  age: number;
}
function greet(person: person): void {
  console.log(
    `Hello, my name is ${person.name} and I am ${person.age} years old.`
  );
}

const user: person = { name: 'Alice', age: 30 };
greet(user);
