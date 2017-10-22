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
  li.innerHTML = '<p class="pTag"></p> <button id="edit" onclick="editTodoItem()" class="btn">Edit</button> <button onClick="deleteTodoItem()" class="btn" id="del">Delete</button>'
  li.getElementsByClassName("pTag")[0].appendChild(lol);
  document.getElementById("list").appendChild(li);
  console.log(array);
});

function deleteTodoItem() {
  idNum--;
  var element = document.getElementById('liTag');
  element[0].outerHTML = "";
  delete element['liTag'];
  array.splice( array.indexOf('foo'), 1);
  console.log(idNum);
  console.log(array);

  /*
var deleteTodo = function(todo) {
            todo.parentNode.removeChild(todo);
        };
  */
};

function editTodoItem() {
  console.log('edit/change');
};

