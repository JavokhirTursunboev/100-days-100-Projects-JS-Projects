// (function() {
//     //Select the input element
//     const form = document.querySelector('#message-form')
//     //Set up Submit Button
//     form.addEventListener('submit', function(e){
//         // prevent the form's default submission action
//         e.preventDefault()
//         //Get user's input from from
//         const message = document.querySelector('#message')
//         const alerted = document.querySelector('.alert')
//         const messageContent = document.querySelector('.message-content')

//         if (message.value === ''){
//             alerted.classList.add('show')
//             setTimeout(function(){
//                 alerted.classList.remove('show')
//             }, 2000)
//         } else {
//             //Change message content and clear the message input
//             messageContent.textContent = message.value
//             message.value = ''
//         }
//     })
//     })()

(function () {
  const form = document.querySelector("#message-form");

  form.addEventListener("submit", function (e) {
    e.preventDefault();

    const message = document.querySelector("#message")
    const alerted = document.querySelector(".alert")
    const messageContent = document.querySelector(".message-content")


   if(message.value = ''){
    alerted.classList.add('show')
    setTimeout(function(){
        alerted.classList.remove('show')
    }, 2000)
   
    } else {
      messageContent.textContent = message.value
      message.value = ""
    }
  });
})();
