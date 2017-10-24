add.addEventListener('click', function(){
  let li = document.createElement("li");
  let inputValue = document.getElementById("input").value;
  let lol = document.createTextNode(inputValue);
  li.innerHTML = '<p id="paraTag" class="pTag"></p> <button id="edit" onclick="editTodoItem(event)" class="btn">Edit</button> <button onClick="deleteTodoItem(event)" class="btn" id="idNum">Delete</button>'
  li.getElementsByClassName("pTag")[0].appendChild(lol);
  document.getElementById("list").appendChild(li);
});

function deleteTodoItem(event) {
  var node = event.target.parentNode;
  node.parentNode.removeChild(node);
};

function editTodoItem(event) {
  let inputValue = document.getElementById("input").value;
  let newInputValue = prompt("Change List Item:", "type here");  //newInputValue for place holder
  if (inputValue == newInputValue) {
    alert('No change was made');
  } else {
      var node = event.target.parentNode;
      node.innerHTML = '<p id="paraTag" class="pTag"> ' + newInputValue + ' </p> <button id="edit" onclick="editTodoItem(event)" class="btn">Edit</button> <button onClick="deleteTodoItem(event)" class="btn" id="idNum">Delete</button>';
  };
};

