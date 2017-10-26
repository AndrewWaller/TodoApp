//var idNum = -1;
//var array = [];

//adds new item to the list

add.addEventListener('click', function(){
    /*function Item(value, index) {
        this.value= value;
        this.index= index;
    }
    idNum++;
    let arrayItem = new Item(input.value, idNum);
    array.push(arrayItem);*/    
  let inputValue = document.getElementById("input").value;
  let lol = document.createTextNode(inputValue);
  if (inputValue === '') {
    alert("You didn't type anything!");
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
      li.setAttribute("class", "li01");
      li.innerHTML = '<p id="paraTag" class="pTag"></p> <button id="edit" onclick="editTodoItem(event)" class="btn">Edit</button> <button onClick="deleteTodoItem(event)" class="btn">Delete</button> <label class="switch"> <input type="checkbox" onclick="checkOffTodoItem(event)"> <span class="slider round"></span> </label>'
      li.getElementsByClassName("pTag")[0].appendChild(lol);
      document.getElementById("list").appendChild(li);
  };
  document.getElementById('input').value='';
});

// delete button

function deleteTodoItem(event) {
    let node = event.target.parentNode;
    node.parentNode.removeChild(node);
};

// edit button

function editTodoItem(event) {
    let inputValue = document.getElementById("input").value;
    let newInputValue = prompt("Change List Item:", inputValue);
    if (newInputValue == inputValue) {
      alert('No change were made');
    } else if (newInputValue == '') {
        alert("You didn't type anything!");
    } else {
      let node = event.target.parentNode;
      node.innerHTML = '<p id="paraTag" class="pTag"> ' + newInputValue + '</p> <button id="edit" onclick="editTodoItem(event)" class="btn">Edit</button> <button onClick="deleteTodoItem(event)" class="btn">Delete</button> <label class="switch"> <input type="checkbox" onclick="checkOffTodoItem(event)"> <span class="slider round"></span> </label>';
    };
};

// makes slider button check off todo item

function checkOffTodoItem(event) {
    let node = event.target.parentNode;
    // console.log(node);
    let parent = node.parentNode;
    if (parent.classList[0] == "li01") {
        parent.classList.remove("li01");
        parent.classList.add("li02");
    } else if (parent.classList[0] == "li02") {
        parent.classList.remove("li02");
        parent.classList.add("li01");
    }
};

//  allows enter button on keyboard to submit new task

document.getElementById("input").addEventListener("keyup", function(event) {
event.preventDefault();
if (event.keyCode == 13) {
    document.getElementById("add").click();
}
});

