var idNum = 0;
var array = [];


add.addEventListener("click", function add() {
  let li = document.createElement("li");
  li.setAttribute('id', 'liTag');
  let inputValue = document.getElementById("input").value;
  let lol = document.createTextNode(inputValue);
  li.innerHTML = '<p class="pTag"></p> <button onclick="editTodoItem()" class="addBtn">Edit</button> <button onClick="deleteTodoItem()" class="addBtn">Delete</button>'
  li.getElementsByClassName("pTag")[0].appendChild(lol);
  document.getElementById("list").appendChild(li);
  idNum = idNum + 1;
  array.push(idNum);
  console.log(array);
});

function deleteTodoItem() {
  console.log('delete');
  var element = document.getElementById("liTag");
  element.outerHTML = "";
  delete element;
  delete array[0];
  console.log('delete02!!!');
  console.log(array);
};

function editTodoItem() {
  console.log('edit/change');
};

