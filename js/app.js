"use strict";

const btn = document.getElementById("btn");
const p = document.getElementById("text");

btn.addEventListener("click", getAdvice);

function getAdvice() {
  fetch("https://api.adviceslip.com/advice")
    .then((response) => response.json())
    .then((data) => {
      p.textContent = data.slip.advice;
    })
    .catch((error) => {
      console.error("Error:", error);
    });
}

// loader
$(window).on("load", () => {
  setTimeout(removeLoader, 1500);
});

function removeLoader() {
  $("#loadingDiv").fadeOut(500, () => {
    $("#loadingDiv").remove();
  });
}
