let input = document.querySelector("input");
let btn = document.querySelector("button");
let ul = document.querySelector("ul");

btn.addEventListener("click", function () {
  let li = document.createElement("li");
  li.classList.add("task");
  li.innerText = input.value;

  let comBtn = document.createElement("button");
  comBtn.classList.add("comBtn");
  comBtn.innerText = "completed";

  let delBtn = document.createElement("button");
  delBtn.classList.add("delBtn");
  delBtn.innerText = "delete";

  ul.appendChild(li);
  li.append(comBtn);
  li.appendChild(delBtn);
  input.value = "";
});

ul.addEventListener("click", function (event) {
  if (event.target.classList.contains("delBtn")) {
    let listItem = event.target.parentElement;
    listItem.remove();
  } else if (event.target.classList.contains("comBtn")) {
    let item = event.target.parentElement;
    item.style.textDecoration = "line-through";
  }
});
