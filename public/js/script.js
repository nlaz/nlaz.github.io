const handleClick = e => {
  const checked = e.target.checked;
  const body = document.querySelector("body");
  const internet = document.querySelector(".internet");
  const arr = document.querySelectorAll(".list i");

  body.classList.toggle("bg-near-black", checked);
  body.classList.toggle("washed-yellow", checked);
  if (internet) {
    internet.classList.toggle("glitter", checked);
  }

  arr.forEach(el => el.classList.toggle("glitter", checked));
};

document.addEventListener("DOMContentLoaded", function() {
  const checkbox = document.querySelector("input[type='checkbox']");
  checkbox.addEventListener("click", handleClick);
});
