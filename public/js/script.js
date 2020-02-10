const checkbox = document.querySelector("input[type='checkbox']");

checkbox.addEventListener("click", e => {
  const checked = e.target.checked;
  const body = document.querySelector("body");
  const internet = document.querySelector(".internet");
  const arr = document.querySelectorAll(".list i");
  const marquees = document.querySelectorAll("marquee");

  body.classList.toggle("bg-near-black", checked);
  body.classList.toggle("washed-yellow", checked);
  internet.classList.toggle("glitter", checked);

  arr.forEach(el => el.classList.toggle("glitter", checked));
  marquees.forEach(el => el.classList.toggle("o-0", !checked));
});
