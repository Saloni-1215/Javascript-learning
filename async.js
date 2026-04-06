
//callbacks.js
function greet(callback){
  console.log("Hello");
  callback();
}

greet(() => console.log("Callback executed"));

//promises.js
let promise = new Promise((resolve, reject) => {
  resolve("Success");
});

promise.then(res => console.log(res));

//async-await.js
async function hello(){
  return "Hello Async";
}
hello().then(console.log);

//fetchapi.js
async function getData(){
  let res = await fetch("https://jsonplaceholder.typicode.com/posts");
  let data = await res.json();
  console.log(data);
}
getData();
