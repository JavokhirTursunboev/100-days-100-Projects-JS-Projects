const button = document.querySelector("button");

button.addEventListener("click", () => {
  if (navigator.geolocation) {
    navigator.geolocation.getCurrentPosition(onSuccess, onError);
  } else {
    button.innerText = "Your Browser not support";
  }
});

function onSuccess(position) {
  button.innerText = "Detecting your location...";
  let { latitude, longitude } = position.coords;
  console.log(position)
  //
  fetch(
    ` https://api.opencagedata.com/geocode/v1/json?q=${latitude}+${longitude}&key=477cdf03b29c46fd923a0741d8921a8e`
  )
    .then((response) => response.json())
    .then((result) => {
      let allDetails = result.results[0].components;
      let { city, postcode, country } = allDetails;
      button.innerText = `${country} ${city}  ${postcode}`;
      console.table(allDetails)
    })
    .catch(() => {
      button.innerText = "Something went wrong";
    });
}
function onError(e) {
  if (e.code == 1) {
    button.innerText = "Your Denied the request";
  } else if (e.code === 2) {
    button.innerText = "Location not available";
  } else {
    button.innerText = "Something went wrong";
  }
  button.setAttribute("disabled", "true");
}
