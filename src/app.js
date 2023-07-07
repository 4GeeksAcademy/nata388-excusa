/* eslint-disable */
import "bootstrap";
import "./style.css";

import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";

window.onload = function() {
  document.querySelector("#excuse").innerHTML = generador();
  console.log("Hello Rigo from the console!");
};
let generador = () => {
  let who = ["The dog", "My grandma", "His turtle", "My bird"];
  let action = ["ate", "peed", "crushed", "broke"];
  let what = ["my homework", "the keys", "the car"];
  let when = [
    "before the class",
    "right on time",
    "when I finished",
    "during my lunch",
    "while I was praying"
  ];
  let x = Math.floor(Math.random() * who.length);
  let y = Math.floor(Math.random() * action.length);
  let g = Math.floor(Math.random() * what.length);
  let n = Math.floor(Math.random() * when.length);
  return who[x] + " " + action[y] + " " + what[g] + " " + when[n];
};
