"use strict";

// add event on multiple elements

// const addEventOnElemnts = function (elements, eventType, callback) {
//   for (const elem of elements) elem.addEventLisener(eventType, callback);
// };

// toggle search box in mobile devices || small screen

const searchbox = document.querySelector(".search-box");

const searchToggler1 = document.getElementById("search-toggler1");
const searchToggler2 = document.getElementById("search-toggler2");

// console.log(searchToggler);

// addEventOnElemnts(searchToggler, "click", function () {});

searchToggler1.addEventListener("click", () => {
  searchbox.classList.toggle("active");
});

searchToggler2.addEventListener("click", () => {
  searchbox.classList.toggle("active");
});
