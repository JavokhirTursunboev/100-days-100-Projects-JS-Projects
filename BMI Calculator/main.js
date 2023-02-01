function calculate() {
  let weight = parseInt(document.querySelector(".weight").value);
  document.getElementById("weight__value").innerText = weight + " kg";

  let height = parseInt(document.querySelector(".height").value);
  document.getElementById("height__value").textContent = height + " cm";

  let bmi = (weight / Math.pow(height / 100, 2)).toFixed(1);
  let result = document.getElementById("result");

  result.textContent = bmi;
  if (bmi < 18.5) {
    category = "UnderWeight";
    result.style.color = "#ffc44d";
  } else if (bmi > 18.5 && bmi <= 24.9) {
    category = "Normal Weight";
    result.style.color = "#0be881";
  } else if (bmi > 25 && bmi <= 29.9) {
    category = "Overweight";
    result.style.color = "#ff884d";
  } else {
    category = "Obese";
    result.style.color = "#ff5e57";
  }

  document.getElementById("category").textContent = category;
}
