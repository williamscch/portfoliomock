const button = document.querySelector(".menu");
const menu = document.querySelector(".desktop");
const body = document.querySelector("body");

button.addEventListener("click", () => {
  menu.classList.toggle("active");
  body.classList.toggle("active");
});
