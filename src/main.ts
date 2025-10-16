import "./style.css";
const addEl = document.getElementById("newtask") as HTMLButtonElement;
const modalEl = document.getElementById("modal") as HTMLElement;
const blurEl = document.getElementById("blurmj") as HTMLElement;

addEl.addEventListener("click", () => {
  modalEl.classList.remove("hidden");
  blurEl.classList.remove("hidden");
});
document.addEventListener("keydown", function (e) {
  if (e.key === "Escape") {
    modalEl.classList.add("hidden");
    blurEl.classList.add("hidden");
  }
});
blurEl.addEventListener("click", () => {
  blurEl.classList.add("hidden");
  modalEl.classList.add("hidden");
});
