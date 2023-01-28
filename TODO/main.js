document.querySelector("#push").onclick = function () {
  if (document.querySelector("#newTask input").value.length == 0) {
     document.querySelector('.hide').style.display = 'block'
   setTimeout(function(){ document.querySelector('.hide').style.display = 'none'
  }, 2000)};
};
