    
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
     
    console.log(sessionStorage);

   sessionStorage
    if(sessionStorage.getItem('entries'))
    {
      let myarr = JSON.parse(sessionStorage.getItem('entries'));
      console.log(myarr);
       for(let x of myarr)
        {
           addexistingItems(x);
        }   

    }
    else
    {
        sessionStorage.setItem('entries',JSON.stringify([]));
    }
    
   function  addexistingItems(textc)
   {

     const li = document.createElement("li");
      li.className = "task-item";
      
      const span = document.createElement("span");
      span.className = "task-text";
      span.textContent = textc;

      span.addEventListener("click", () => {
        li.classList.toggle("completed");
      });

      const deleteBtn = document.createElement("button");
      deleteBtn.type = "button";
      deleteBtn.className = "delete-btn";
      deleteBtn.textContent = "Delete";

      deleteBtn.addEventListener("click", () => {
        li.remove();
        let oldarr=JSON.parse(sessionStorage.getItem('entries'));
         oldarr=oldarr.filter( (e)=>{return e!==textc});
          sessionStorage.setItem('entries',JSON.stringify(oldarr));

      });

      li.appendChild(span);
      li.appendChild(deleteBtn);
      taskList.appendChild(li);
   }

  
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
        let oldarr=JSON.parse(sessionStorage.getItem('entries'));
         oldarr=oldarr.filter( (e)=>{return e!==text});
          sessionStorage.setItem('entries',JSON.stringify(oldarr));

      });

      li.appendChild(span);
      li.appendChild(deleteBtn);
      taskList.appendChild(li);

      let oldarr=JSON.parse(sessionStorage.getItem('entries'));
      console.log(oldarr);
      oldarr.push(text);
      console.log(oldarr);
      sessionStorage.setItem('entries',JSON.stringify(oldarr));
      console.log(sessionStorage);


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


// if there is an entries key alreay in sessionStorageobject what will you do ? 
// ->Read the values and go though each one by one and add them in your list  
