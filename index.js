const heading = document.getElementById("heading");
const box1 = document.getElementById("box1");
const myBtn = document.getElementById("myBtn");
const input = document.querySelector("input");

myBtn.addEventListener("click", () => {
  box1.classList.add("classForDiv");
});
heading.addEventListener("mouseover", () => {
  box1.classList.add("classForDiv");
  myBtn.style.transform = "scale (1.1)";
  heading.style.backgroundColor = "pink";
});
// addEventListener("contextmenu", (e) => {
// e.preventDefault();
// myBtn.style.filter = "blur(10px)";
// });
input.addEventListener("change", (e) => {
  console.log(e.target.value);
});
