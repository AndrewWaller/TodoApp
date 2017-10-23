var idNum = -1;
var array = [];

add.addEventListener('click', function(){
  function Item(value, index) {
      this.value= value;
      this.index= index;
  }
  idNum++;
  let arrayItem = new Item(input.value, idNum);
  array.push(arrayItem);
  let li = document.createElement("li");
  //li.setAttribute('class', 'liTag');
 // li.setAttribute('id', idNum);
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
  let newInputValue = prompt("Change List Item:", inputValue);
  if (inputValue == newInputValue) {
    alert('No change was made');
  } else {
      var node = event.target.parentNode;
      node.parentNode.innerHTML = '<li> <p id="paraTag" class="pTag"></p> <button id="edit" onclick="editTodoItem(event)" class="btn">Edit</button> <button onClick="deleteTodoItem(event)" class="btn" id="idNum">Delete</button> </li>';
      
      console.log(newInputValue);
  };
};

