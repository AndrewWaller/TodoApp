function newTodoItem() {
  let li = document.createElement("li");
  let inputValue = document.getElementById("input").value;
  let lol = document.createTextNode(inputValue);
  li.innerHTML = '<p class="pTag"></p> <button onclick="editTodoItem()" class="addBtn">Edit</button> <button onclick="deleteTodoItem()" class="addBtn">Delete</button>'
  li.getElementsByClassName("pTag")[0].appendChild(lol);
  document.getElementById("list").appendChild(li);
};

function deleteTodoItem() {
  console.log('delete');
};

function editTodoItem() {
  console.log('edit/change');
};
