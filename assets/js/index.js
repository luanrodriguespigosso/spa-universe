import { Router } from "./router.js";

const router = new Router();

router.add("/", "/assets/pages/home.html");
router.add("/universe", "/assets/pages/universe.html");
router.add("/exploration", "/assets/pages/exploration.html");
router.add(404, "/assets/pages/404.html");

router.handle();

window.onpopstate = () => router.handle();
window.router = () => router.router();

const body = document.querySelector("body");
const home = document.querySelector("header a:nth-child(1)");
const universe = document.querySelector("header a:nth-child(2)");
const exploration = document.querySelector("header a:nth-child(3)");

// console.log(home);
// console.log(universe);
// console.log(exploration);

home.addEventListener("click", function () {
  body.classList.remove("universe");
  body.classList.remove("exploration");
  home.classList.add("active");
  universe.classList.remove("active");
  exploration.classList.remove("active");
});

universe.addEventListener("click", function () {
  body.classList.remove("exploration");
  body.classList.add("universe");
  home.classList.remove("active");
  universe.classList.add("active");
  exploration.classList.remove("active");
});

exploration.addEventListener("click", function () {
  body.classList.remove("universe");
  body.classList.add("exploration");
  home.classList.remove("active");
  universe.classList.remove("active");
  exploration.classList.add("active");
});
