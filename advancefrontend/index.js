    
    const taskInput = document.getElementById("task-input");
    const addBtn = document.getElementById("add-btn");
    const taskList = document.getElementById("task-list");
   
    // {
    //   key1-> breakfast,
    //   key2-> running,
    // }

    
    // {
    //    entries->[breakfast,running,]
    // }
     

    localStorage.setItem("entries" ,JSON.stringify([]));

    function addTask() {
      const text = taskInput.value.trim();

      if (!text) return;

      const li = document.createElement("li");
      li.className = "task-item";
      
      const span = document.createElement("span");
      span.className = "task-text";
      span.textContent = text;

      span.addEventListener("click", () => {
        li.classList.toggle("completed");
      });

      const deleteBtn = document.createElement("button");
      deleteBtn.type = "button";
      deleteBtn.className = "delete-btn";
      deleteBtn.textContent = "Delete";

      deleteBtn.addEventListener("click", () => {
        li.remove();
      });

      li.appendChild(span);
      li.appendChild(deleteBtn);
      taskList.appendChild(li);

      taskInput.value = "";
      taskInput.focus();
    }

    addBtn.addEventListener("click", addTask);

    taskInput.addEventListener("keydown", (e) => {
      if (e.key === "Enter") addTask();
    });
 
// 10-> 

//     [1]->1
//     [1,2]-> 1,2




// when i opened the page -> there can be 2 case -> there is an key with name entries in my local storage or it may be missing


if there is an entries key alreay in localStorageobject what will you do ? 
->Read the values and go though each one by one and add them in your list  
