(function () {
  const pictures = ["a-1", "a-2", "a-0"];

  const buttons = document.querySelectorAll('.btn')
  const imageDIV = document.querySelector('.img__container')
  let counter = 0

  buttons.forEach(function(button){
    button.addEventListener('click', function(){
      if (button.classList.contains('btn_left')){
        counter--
        if(counter < 0){
          counter = pictures.length -1
        }
        imageDIV.style.backgroundImage = `url('./images/${pictures[counter]}.jpg')`
      }
      if (button.classList.contains('btn_right')){
        counter++
        if(counter > pictures.length -1){
          counter = 0
        }
        imageDIV.style.backgroundImage = `url('./images/${pictures[counter]}.jpg')`
      }
    })
  })
})();