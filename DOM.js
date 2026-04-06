// Selecting Elements
let heading = document.getElementById("title");
console.log(heading);

// Changing Content
document.getElementById("text").innerText = "Hello World";

// Events
document.getElementById("btn").addEventListener("click", function(){
  alert("Button Clicked");
});

// Form Handling
document.querySelector("form").addEventListener("submit", function(e){
  e.preventDefault();
  alert("Form Submitted");
});
