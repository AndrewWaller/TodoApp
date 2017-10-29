//adds new item to the list

add.addEventListener('click', function(){   
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
      li.innerHTML = '<h2 id="paraTag" class="h2tag"></h2> <div class="bottom-nav"> <button id="edit" onclick="editTodoItem(event)" class="btn btnBig">Edit</button> <button onClick="deleteTodoItem(event)" class="btn btnBig">Delete</button> <label class="switch"> <input type="checkbox" onclick="checkOffTodoItem(event)"> <span class="slider round"></span> </label> </div>';  
      li.getElementsByClassName("h2tag")[0].appendChild(lol);
      document.getElementById("list").appendChild(li);
  };
  document.getElementById('input').value='';
});

// delete button

function deleteTodoItem(event) {
    let node = event.target.parentNode;
    let parentLi = node.parentNode;
    let deleteDaItem = confirm("Are you sure you would like to delete this item?");
    if (deleteDaItem == true) {
        parentLi.parentNode.removeChild(parentLi);
    } 
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
      node.parentNode.innerHTML = '<h2 id="paraTag" class="h2tag">' + newInputValue + '</h2> <div class="bottom-nav"> <button id="edit" onclick="editTodoItem(event)" class="btn btnBig">Edit</button> <button onClick="deleteTodoItem(event)" class="btn btnBig">Delete</button> <label class="switch"> <input type="checkbox" onclick="checkOffTodoItem(event)"> <span class="slider round"></span> </label> </div>';
    };
};

// makes slider button check off todo item

function checkOffTodoItem(event) {
    let node = event.target.parentNode;
    let beforeParent = node.parentNode;
    let parent = beforeParent.parentNode;
 if (parent.classList[0] == "li01") {
        parent.classList.remove("li01");
        parent.classList.add("li02");
        beforeParent.classList.remove("bottom-nav");
        beforeParent.classList.add("bottom-nav-2");
        beforeParent.childNodes[1].classList.remove("btn");
        beforeParent.childNodes[1].classList.add("btn2");
        beforeParent.childNodes[3].classList.remove("btn");
        beforeParent.childNodes[3].classList.add("btn2");
    } else if (parent.classList[0] == "li02") {
        parent.classList.remove("li02");
        parent.classList.add("li01");
        beforeParent.classList.remove("bottom-nav-2");
        beforeParent.classList.add("bottom-nav");
        beforeParent.childNodes[1].classList.remove("btn2");
        beforeParent.childNodes[1].classList.add("btn");
        beforeParent.childNodes[3].classList.remove("btn2");
        beforeParent.childNodes[3].classList.add("btn");
    }
};

//  allows enter button on keyboard to submit new task

document.getElementById("input").addEventListener("keyup", function(event) {
event.preventDefault();
if (event.keyCode == 13) {
    document.getElementById("add").click();
    }
});

