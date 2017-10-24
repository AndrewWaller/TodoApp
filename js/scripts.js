add.addEventListener('click', function(){
  let inputValue = document.getElementById("input").value;
  let lol = document.createTextNode(inputValue);
  if (inputValue === '') {
    alert("You didn't type anything");
  } else if (inputValue === 'This is the best final project ever!') {
      alert("I know, thanks!");
  } else if (inputValue === "This is lame") {
      alert("No! You're Lame!!!");
  } else if (inputValue === "Freeze my computer") {
      var topSecret = prompt("Password?", "");
      if (topSecret === "Please") {
        alert("Top Secret Access Granted");
        while (true) {
           console.log(Math.random());
        }
      } else {
          alert('neiner neiner neiner');
      };
  } else {
      let li = document.createElement("li");
      li.innerHTML = '<p id="paraTag" class="pTag"></p> <button id="edit" onclick="editTodoItem(event)" class="btn">Edit</button> <button onClick="deleteTodoItem(event)" class="btn" id="idNum">Delete</button>'
      li.getElementsByClassName("pTag")[0].appendChild(lol);
      document.getElementById("list").appendChild(li);
  }
});

function deleteTodoItem(event) {
  var node = event.target.parentNode;
  node.parentNode.removeChild(node);
};

function editTodoItem(event) {
  let inputValue = document.getElementById("input").value;
  let newInputValue = prompt("Change List Item:", inputValue);
  if (inputValue == newInputValue) {
    alert('No change were made');
  } else {
      var node = event.target.parentNode;
      node.innerHTML = '<p id="paraTag" class="pTag"> ' + newInputValue + ' </p> <button id="edit" onclick="editTodoItem(event)" class="btn">Edit</button> <button onClick="deleteTodoItem(event)" class="btn" id="idNum">Delete</button>';
  };
};

document.getElementById("input")
.addEventListener("keyup", function(event) {
event.preventDefault();
if (event.keyCode == 13) {
    document.getElementById("add").click();
}
});
