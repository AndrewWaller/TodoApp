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
  li.setAttribute('class', 'liTag');
  li.setAttribute('id', idNum);
  let inputValue = document.getElementById("input").value;
  let lol = document.createTextNode(inputValue);
  li.innerHTML = '<p class="pTag"></p> <button id="edit" onclick="editTodoItem()" class="btn">Edit</button> <button onClick="deleteTodoItem(event)" class="btn" id="idNum">Delete</button>'
  li.getElementsByClassName("pTag")[0].appendChild(lol);
  document.getElementById("list").appendChild(li);
});

function deleteTodoItem(event) {
  var node = event.target.parentNode;
  node.parentNode.removeChild(node);
};

function editTodoItem() {
  console.log('edit/change');
};

