function calculate() {
  let weight = parseInt(document.querySelector(".weight").value);
  document.getElementById("weight__value").innerText = weight + " kg";

  let height = parseInt(document.querySelector(".height").value);
  document.getElementById("height__value").textContent = height + " cm";

  let bmi = (weight / Math.pow(height / 100, 2)).toFixed(1);
  let result = (document.getElementById("result").textContent = bmi);
}
