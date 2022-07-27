import { Router } from "./router.js";

const router = new Router();

router.add("/home", "/assets/pages/home.html");
router.add("/universe", "/assets/pages/universe.html");
router.add("/exploration", "/assets/pages/exploration.html");
router.add(404, "/assets/pages/404.html");

router.handle();

window.onpopstate = () => router.handle();
window.router = () => router.router();

const body = document.querySelector("body");
const home = document.querySelector(".bg__home");
const universe = document.querySelector(".bg__universe");
const exploration = document.querySelector(".bg__exploration");

// console.log(body);
// console.log(home);
// console.log(universe);
// console.log(exploration);

home.addEventListener("click", () => {
  window.location = "home";
  body.classList.remove("bg__universe");
  body.classList.remove("bg__exploration");
  // home.classList.add("active");
  // universe.classList.remove("active");
  // exploration.classList.remove("active");
});

universe.addEventListener("click", () => {
  window.location = "universe";
  body.classList.remove("bg__exploration");
  body.classList.add("bg__universe");
  // home.classList.remove("active");
  // exploration.classList.remove("active");
  // universe.classList.add("active");
});

exploration.addEventListener("click", () => {
  window.location = "exploration";
  body.classList.remove("bg__universe");
  body.classList.add("bg__exploration");
  // home.classList.remove("active");
  // universe.classList.remove("active");
  // exploration.classList.add("active");
});
