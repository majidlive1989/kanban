import "./style.css";
const addEl = document.getElementById("newtask") as HTMLButtonElement;
const modalEl = document.getElementById("modal") as HTMLElement;
const blurEl = document.getElementById("blurmj") as HTMLElement;
const titleEl = document.getElementById("title") as HTMLInputElement;
const todoCol = document.getElementById("todo") as HTMLDivElement;
const descriptionEl = document.getElementById(
  "description"
) as HTMLTextAreaElement;
const doingCol = document.getElementById("doing") as HTMLDivElement;
const createEl = document.getElementById("create") as HTMLButtonElement;
const todolistEl = document.getElementById("todolist") as HTMLSelectElement;
// const todolistitemEl1 = document.getElementById("todoitems") as HTMLElement;
const todoitemsModalEl = document.getElementById(
  "todoitemsmodal"
) as HTMLDivElement;

console.log(titleEl, descriptionEl, todolistEl);

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

createEl.addEventListener("click", () => {
  const titleinput = titleEl.value;
  const descriptionInput = descriptionEl.value;
  const todolistOption = todolistEl.value;
  if (todolistOption === "todo") {
    todoCol.innerHTML += ` 
     <div id="todoitem"
            class="w-full bg-gray-300 p-5 rounded-2xl hover:opacity-20 cursor-pointer shadow-md text-left"
          >
            <h4 class="font-semibold">${titleinput}</h4>
            <span
              role="button"
              tabindex="0"
              aria-disabled="false"
              aria-roledescription="draggable"
              aria-describedby="DndDescribedBy-0"
              class="text-gray-400 p-2 text-xs font-bold"
            >
             ${descriptionInput}</span
            >
          </div>`;
  } else if (todolistOption === "doing") {
    doingCol.innerHTML += ` 
    <div id="doingoitem"
            class="w-full bg-gray-300 p-5 rounded-2xl hover:opacity-20 cursor-pointer shadow-md text-left"
          >
            <h4 class="font-semibold">${titleinput}</h4>
            <span
              role="button"
              tabindex="0"
              aria-disabled="false"
              aria-roledescription="draggable"
              aria-describedby="DndDescribedBy-0"
              class="text-gray-400 p-2 text-xs font-bold"
            >
             ${descriptionInput}</span
            >
          </div>`;
  }

  titleEl.value = "";
  descriptionEl.value = "";
  todolistEl.value = "";
  modalEl.classList.add("hidden");
  blurEl.classList.add("hidden");
});

// const todoitemEl = document.getElementById("todoitem") as HTMLDivElement;

// todoitemEl.addEventListener("click", () => {
//   console.log(todoitemEl);
//   const todolist1El = document.getElementById("todolist1") as HTMLElement;
//   const todoitemsmodalEl = document.getElementById(
//     "todoitemsmodal"
//   ) as HTMLDivElement;
//   todoitemsmodalEl.classList.remove("hidden");
//   if (todolist1El === "doing") {
//     console.log(`${titleinput}`);
//   }
// });
const changeColorEl = document.getElementById("changeColor") as HTMLDivElement;
const changeCircleEl = document.getElementById(
  "changeCircle"
) as HTMLDivElement;

changeColorEl.addEventListener("click", () => {
  document.documentElement.classList.toggle("dark");
  changeCircleEl.classList.add("move");
  console.log(changeColorEl);
});
