"use strict";

const theItem = document.querySelectorAll(".item");

for (let i = 0; i < theItem.length; i++) {
  theItem[i].addEventListener("click", function () {
    this.classList.toggle("open");
  });
}