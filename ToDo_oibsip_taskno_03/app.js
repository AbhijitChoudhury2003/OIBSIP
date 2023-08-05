//Selectors

const todoInput = document.querySelector(".todo-input");
const todoButton = document.querySelector(".todo-button");
const todoList = document.querySelector(".todo-list");

// eventSelectors

//Makes the button work to add things in our todo list.
todoButton.addEventListener('click', addTodo);
todoList.addEventListener('click', deleteCheck);
document.addEventListener('DOMContentLoaded', getTodos);
//After the content in our webpage is loaded and if it is loaded then execute the function.


//function


function addTodo(event) { 
    //Prevents form from Submitting naturally
  event.preventDefault();
 
//Create a Todo Div

  const todoDiv = document.createElement("div");
  todoDiv.classList.add("todo");
//Creating Li
  const newTodo = document.createElement("li");
  newTodo.innerText = todoInput.value;
  newTodo.classList.add("todo-item");
  todoDiv.appendChild(newTodo);
  //Add todo to LocalStorage
  saveLocalTodos(todoInput.value);
//Check Mark Button
  const completedButton = document.createElement("button");
  completedButton.innerHTML = `<i class = "fas fa-check"></i>`;
  completedButton.classList.add("complete-btn");
  todoDiv.appendChild(completedButton);
//Create Trash Button
  const trashButton = document.createElement("button");
  trashButton.innerHTML = `<i class= "fas fa-trash"></i> `;
  trashButton.classList.add("trash-btn");
  todoDiv.appendChild(trashButton);

  //Appending our Todo Div to todo list
  todoList.appendChild(todoDiv);
  //Finally we will append our whole todoDiv in our todoList(which we have created in our html page).

  
  todoInput.value = "";
  //Clears Todo Input Value from the todo-input box.
}

function deleteCheck(e) {
  const item = e.target;

  //Delete Todo
  if (item.classList[0] === "trash-btn")
  {
    const todo = item.parentElement;
    todo.classList.add("fall");
    removeLocalTodos(todo);

    //ANIMATIONS
    todo.addEventListener("transitionend", function () { todo.remove(); }); 
    }
    

  
  //Check Mark
    if (item.classList[0] === "complete-btn")
    {
      const todo = item.parentElement;
      todo.classList.toggle("completed");
    }
} 

//Saving our Todos in our LocalStorage.
function saveLocalTodos(todo) {
  //CHECKING DO I ALREADY HAVE ANYTHING INSIDE OUR TODO??
  let todos;
  if (localStorage.getItem("todos") === null) {
    todos = [];
  }
  else {
    todos = JSON.parse(localStorage.getItem("todos"));
  }

  todos.push(todo);
  localStorage.setItem("todos", JSON.stringify(todos));


}
 
function getTodos(todo) {
  let todos;
  if (localStorage.getItem("todos") === null) {
    todos = [];
  }
  else {
 
    todos = JSON.parse(localStorage.getItem("todos"));
  }
  todos.forEach(function (todo) {
    //Todo DIV
    const todoDiv = document.createElement("div");
    
    todoDiv.classList.add("todo");
  //Creating Li
    const newTodo = document.createElement("li");
    newTodo.innerText = todo;
  //this time todo will add elements present in the local storage.
    newTodo.classList.add("todo-item");
    todoDiv.appendChild(newTodo);
    //Add todo to LocalStorage

  //Check Mark Button
    const completedButton = document.createElement("button");
    completedButton.innerHTML = `<i class = "fas fa-check"></i>`;
    completedButton.classList.add("complete-btn");
    todoDiv.appendChild(completedButton);
  //Create Trash Button
    const trashButton = document.createElement("button");
    trashButton.innerHTML = `<i class= "fas fa-trash"></i> `;
    trashButton.classList.add("trash-btn");
    todoDiv.appendChild(trashButton);
  
    //Appending our Todo Div to todo list
    todoList.appendChild(todoDiv);
    
  });
}

//Removing local Storage Todo 
function removeLocalTodos(todo) {
  let todos;
  if (localStorage.getItem("todos") === null)
  {
    todos = [];
  } else {
    todos = JSON.parse(localStorage.getItem("todos"));
  }
  const todoIndex = todo.children[0].innerText;

  todos.splice(todos.indexOf(todoIndex), 1);
  //Splice Fun. will go through the entire array ,the argument will find the index of the element and delete it 1 time.
  localStorage.setItem("todos", JSON.stringify(todos));
}

