const colorSets = [
  ["#D5ECFC", "#232323"],
  ["#FEC924", "#482A18"],
  ["#f79380", "#1a1c53"],
  ["#6ccace", "#1d3748"],
  ["#29d1f6", "#353343"],
  ["#FFDE85", "#986432"],
  ["#C4E8FB", "#34648D"],
  ["#81D4D1", "#384450"],
];

const colors = colorSets[Math.floor(Math.random() * colorSets.length)];

document.addEventListener("DOMContentLoaded", function(event) {
  const body = document.getElementById("body");
  const links = document.querySelectorAll("li a");
  body.style.color = colors[1];
  body.style.background = colors[0];

  for (let i = 0; i < links.length; i++) {
    links[i].style.color = colors[1];
  }
});
