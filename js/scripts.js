function newTodoItem() {
  var li = document.createElement("li");
  var inputValue = document.getElementById("input").value;
  var lol = document.createTextNode(inputValue);
  li.appendChild(lol);
  document.getElementById("list").appendChild(li);
  document.getElementById("input").value = "";
};
