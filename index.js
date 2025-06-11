const removeTodo = (div, todoText) => {
  div.remove();
  let listArray = JSON.parse(localStorage.getItem("data"));
  listArray.splice(
    listArray.findIndex((index) => index == todoText),
    1
  );
  localStorage.setItem("data", JSON.stringify(listArray));
};

const addTodo = () => {
  const todoInput = document.getElementById("todo-input");
  const list = document.getElementById("todo-list");

  //value
  const todoText = todoInput.value == "" ? false : todoInput.value;

  //get
  if (localStorage.getItem("data") == null) {
    localStorage.setItem("data", "[]");
  }
  let listArray = JSON.parse(localStorage.getItem("data"));

  //check
  if (todoText != false) {
    if (listArray.filter((txt) => txt == todoText).length == 0) {
      const div = document.createElement("div");
      const btn = document.createElement("button");

      div.className = "item";
      div.innerHTML = todoText;
      btn.innerHTML = "x";

      todoInput.value = "";
      div.appendChild(btn);
      list.appendChild(div);

      listArray.push(todoText);
      localStorage.setItem("data", JSON.stringify(listArray));

      btn.addEventListener("click", () => removeTodo(div, todoText));
    } else {
      alert("ข้อมูลซ้ำ กรุณากรอกใหม่");
      todoInput.value = "";
    }
  } else {
    alert("ไม่มีข้อมูล กรุณากรอกใหม่");
    todoInput.value = "";
  }
};
