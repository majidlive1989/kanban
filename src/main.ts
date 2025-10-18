import "./style.css";
const addEl = document.getElementById("newtask") as HTMLButtonElement;
const modalEl = document.getElementById("modal") as HTMLElement;
const blurEl = document.getElementById("blurmj") as HTMLElement;
const titleEl = document.getElementById("title") as HTMLInputElement;
const todoCol = document.getElementById("todo") as HTMLDivElement;
const donCol = document.getElementById("donecol") as HTMLDivElement;
const descriptionEl = document.getElementById(
  "description"
) as HTMLTextAreaElement;
const doingCol = document.getElementById("doing") as HTMLDivElement;
const createEl = document.getElementById("create") as HTMLButtonElement;
const todolistEl = document.getElementById("todolist") as HTMLSelectElement;
const doneColEl = document.getElementById("donecol") as HTMLDivElement;

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
            class="w-full  p-5 rounded-2xl hover:opacity-20 cursor-pointer shadow-md text-left bg-[#f4f7fd] dark:bg-[#2b2c37]"
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
    <div id="doingitem"
            class="w-full  p-5 rounded-2xl  bg-[#f4f7fd] dark:bg-[#2b2c37] hover:opacity-20 cursor-pointer shadow-md text-left"
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
  } else if (todolistOption === "done") {
    donCol.innerHTML += `<div id="done"
            class="w-full  p-5 rounded-2xl  bg-[#f4f7fd] dark:bg-[#2b2c37] hover:opacity-20 cursor-pointer shadow-md text-left"
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

const changeColorEl = document.getElementById("changeColor") as HTMLDivElement;
const changeCircleEl = document.getElementById(
  "changeCircle"
) as HTMLDivElement;

changeColorEl.addEventListener("click", () => {
  document.documentElement.classList.toggle("dark");
  changeCircleEl.classList.add("move");
  console.log(changeColorEl);
});

const todoItemCard = document.getElementById("todoitem") as HTMLDivElement;
const todomodalEl = document.getElementById("todomodal") as HTMLElement;
const currentStateEl = document.getElementById("currentstate") as HTMLElement;
const confirmBtnEl = document.getElementById("confirmBtn") as HTMLButtonElement;
const doingitemEl = document.getElementById("doingitem") as HTMLDivElement;
const doneEl = document.getElementById("done") as HTMLDivElement;

todoItemCard.addEventListener("click", () => {
  todomodalEl.classList.remove("hide");
  blurEl.classList.remove("hidden");
  const currentStateElOp = currentStateEl.value;
  if (currentStateElOp === "doing") {
    todoItemCard.setAttribute("id", "doingitem");

    todoCol.removeChild(todoItemCard);
    doingCol.appendChild(todoItemCard);

    todomodalEl.classList.add("hide");
    blurEl.classList.add("hidden");
  }
});
confirmBtnEl.addEventListener("click", () => {
  const selectedState = currentStateEl.value;

  if (selectedState === "doing") {
    // تغییر ID
    todoItemCard.id = "doingitem";

    // انتقال بین ستون‌ها
    if (todoCol.contains(todoItemCard)) {
      todoCol.removeChild(todoItemCard);
      doingCol.appendChild(todoItemCard);
    }

    // به‌روزرسانی داده‌ها (اختیاری)
    todoItemCard.setAttribute("data-status", "doing");
    todoItemCard.classList.add("doing-item");
    todoItemCard.classList.remove("todo-item");
  } else if (selectedState === "todo") {
    // تغییر از DOING به TODO
    todoItemCard.id = "todoitem";

    // انتقال بین ستون‌ها
    if (doingCol.contains(todoItemCard)) {
      doingCol.removeChild(todoItemCard);
      todoCol.appendChild(todoItemCard);
    }

    // به‌روزرسانی داده‌ها
    todoItemCard.setAttribute("data-status", "todo");
    todoItemCard.classList.add("todo-item");
    todoItemCard.classList.remove("doing-item");
  } else if (selectedState === "done") {
    // تغییر به DONE
    todoItemCard.id = "doneitem";

    // انتقال به ستون doneCol
    if (todoCol.contains(todoItemCard) || doingCol.contains(todoItemCard)) {
      // حذف از هر ستونی که هست
      const currentColumn = todoItemCard.parentElement;
      if (currentColumn) {
        currentColumn.removeChild(todoItemCard);
      }
      doneCol.appendChild(todoItemCard);
    }

    // به‌روزرسانی داده‌ها
    todoItemCard.setAttribute("data-status", "done");
    todoItemCard.classList.add("done-item");
    todoItemCard.classList.remove("todo-item", "doing-item");
  }
  // بستن مدال
  todomodalEl.classList.add("hide");
  blurEl.classList.add("hidden");
});
