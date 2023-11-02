let prev = document.querySelector(".prev");
let next = document.querySelector(".next");
let box = document.querySelector(".box");

let dagrees = 0;

prev.addEventListener("click", function () {
  dagrees += 45;
  box.style = `transform: perspective(1000px) rotateY(${dagrees}deg)`;
});
next.addEventListener("click", function () {
  dagrees -= 45;
  box.style = `transform: perspective(1000px) rotateY(${dagrees}deg)`;
});
