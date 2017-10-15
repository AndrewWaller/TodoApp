function newTodoItem() {
  let li = document.createElement("li");
  li.setAttribute("id", "liItem");
  let p = document.createElement("p");
  p.setAttribute("id", "pTag");
  let inputValue = document.getElementById("input").value;
  let lol = document.createTextNode(inputValue);
  let editButton = document.createElement('button');
  editButton.setAttribute("class", "addBtn");
  let deleteButton =  document.createElement('button');
  deleteButton.setAttribute("class", "addBtn");
  li.appendChild(lol);
  document.getElementById("liItem").appendChild(p);
  document.getElementById("list").appendChild(li);

  document.getElementById("input").value = "";
  li.append(editButton);
  li.append(deleteButton);
};











/*function newTodoItem() {
  let li = document.createElement("li");
  let inputValue = document.getElementById("input").value;
  let lol = document.createTextNode(inputValue);
  let editButton = document.createElement('button');
  let deleteButton =  document.createElement('button');
  li.appendChild(lol);
  document.getElementById("list").appendChild(li);
  document.getElementById("input").value = "";
  li.append(editButton);
  li.append(deleteButton);
};*/
