
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
