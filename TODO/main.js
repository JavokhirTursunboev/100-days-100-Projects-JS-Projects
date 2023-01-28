document.querySelector("#push").onclick = function () {
  if (document.querySelector("#newTask input").value.length == 0) {
     document.querySelector('.hide').style.display = 'block'
   setTimeout(function(){ document.querySelector('.hide').style.display = 'none'
  }, 2000)}
  else{document.querySelector("#tasks").innerHTML += `
    <div class='task'> 
        <span id='taskName'>
        ${document.querySelector("#newTask input").value}
        </span>
    <button class='delete'>
       <i class="fa-solid fa-trash"></i>
    </button>

    </div> `
}
}