document.querySelector("#push").onclick = function () {
  if (document.querySelector("#newTask input").value.length == 0) {
    document.querySelector(".hide").style.display = "block";
    setTimeout(function () {
      document.querySelector(".hide").style.display = "none";
    }, 2000);
  } else {
    document.querySelector("#tasks").innerHTML += `
    <div class='task'> 
        <span id='taskName'>
        ${document.querySelector("#newTask input").value}
        </span>
    <button class='delete'>
       <i class="fa-solid fa-trash"></i>
    </button>
    </div> `;

    let current__task = document.querySelectorAll(".delete");
    for (let i = 0; i < current__task.length; i++) {
      current__task[i].onclick = function () {
        this.parentNode.remove();
      };
    }

    let tasks = document.querySelectorAll(".task");
    for (let i = 0; i < tasks.length; i++) {
      tasks[i].onclick = function () {
        this.classList.toggle("done");
      };
    }

    document.querySelector('#newTask input').value = ''
  }
};
