// Part 1 Setting Up TypeScript
// *****npm install -g typescript
// *****tsc --init
// *****tsc index.ts
// Part 2: Basic Type Annotations
var add = function (a, b) {
    return a + b;
};
console.log(add(5, 100));
console.log(add(10, 20));
function greet(person) {
    console.log("Hello, my name is ".concat(person.name, " and I am ").concat(person.age, " years old."));
}
var user = { name: 'Alice', age: 30 };
greet(user);
