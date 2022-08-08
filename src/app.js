/* eslint-disable */
import "bootstrap";
import "./style.css";

import "./assets/img/4geeks.ico";

const palo = ["♦", "♥", "♠", "♣"];
const numero = [
  "1",
  "2",
  "3",
  "4",
  "5",
  "6",
  "7",
  "8",
  "9",
  "10",
  "K",
  "Q",
  "J",
  "A"
];

function cartaRandom(array) {
  let randomPosition = Math.floor(Math.random() * array.length);
  return array[randomPosition];
}

const suit = document.querySelector(".palo");
const suit2 = document.querySelector(".palo2");
const number = document.querySelector(".numero");
let randomSuit = cartaRandom(palo);
suit.innerHTML = randomSuit;
suit2.innerHTML = randomSuit;
number.innerHTML = cartaRandom(numero);

function color() {
  if (randomSuit === "♦") {
    suit.classList.add("diamante");
  } else if (randomSuit === "♥") {
    suit.classList.add("corazon");
  } else if (randomSuit === "♠") {
    suit.classList.add("picas");
  } else {
    suit.classList.add("trebol");
  }
}

function color2() {
  if (randomSuit === "♦") {
    suit2.classList.add("diamante");
  } else if (randomSuit === "♥") {
    suit2.classList.add("corazon");
  } else if (randomSuit === "♠") {
    suit2.classList.add("picas");
  } else {
    suit2.classList.add("trebol");
  }
}

let resultado = randomSuit + color();
let resultado2 = randomSuit + color2();
