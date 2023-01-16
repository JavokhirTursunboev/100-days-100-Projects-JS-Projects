(function () {
  const buttons = document.querySelectorAll(".counterBtn");
  let count = 0;

  //Add event listeners and functionailty to each button

  buttons.forEach(function (button) {
    button.addEventListener("click", function () {
      if (button.classList.contains("adder")) {
        count++;
      } else if (button.classList.contains("lower")) {
        count--;
      }

      //Select the counter text
      const counter = document.querySelector("#counter");
      counter.textContent = count;

      if (count > 0) {
        counter.style.color = "green";
      } else if (count < 0) {
        counter.style.color = "red";
      } else {
        counter.style.color = "#333333";
      }
    });
  });
})();
