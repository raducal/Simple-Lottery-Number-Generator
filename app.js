const button = document.querySelector(".btn");
const numbers = document.querySelector(".numbers");

let array = [];

button.addEventListener("click", function() {
  for (let i = 0; i < 7; i++) {
    let num = Math.floor(Math.random() * 60) + 1;
    array.push(num);
    numbers.textContent = array.toString();
  }
  array.length = 0;
});
