//arrow-functions.js
const add = (a, b) => a + b;
console.log(add(5, 3));

 //destructuring.js
let user = {name: "Saloni", age: 20};

let {name, age} = user;
console.log(name, age);

//spread-rest.js
let arr1 = [1,2];
let arr2 = [...arr1, 3,4];
console.log(arr2);

//template-literals.js
let name = "Saloni";
console.log(`Hello ${name}`);
