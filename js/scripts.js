function newTodoItem() {
  let li = document.createElement("li");
  let inputValue = document.getElementById("input").value;
  let lol = document.createTextNode(inputValue);
  li.innerHTML = '<p class="pTag"></p> <button class="addBtn">Edit</button> <button class="addBtn">Delete</button>'
//  li.appendChild(lol);
  document.getElementById("list").appendChild(li);
  document.getElementsByClassName("pTag").appendChild(lol);
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
