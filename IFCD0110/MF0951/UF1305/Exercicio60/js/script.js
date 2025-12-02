/* Navbar dropdown */

document.addEventListener('DOMContentLoaded', () => {

  // Get all "navbar-burger" elements
  const $navbarBurgers = Array.prototype.slice.call(document.querySelectorAll('.navbar-burger'), 0);

  // Add a click event on each of them
  $navbarBurgers.forEach( el => {
    el.addEventListener('click', () => {

      // Get the target from the "data-target" attribute
      const target = el.dataset.target;
      const $target = document.getElementById(target);

      // Toggle the "is-active" class on both the "navbar-burger" and the "navbar-menu"
      el.classList.toggle('is-active');
      $target.classList.toggle('is-active');

    });
  });

});


/* API Weather */

async function obtenerDatos(lat, lon) {

  const APIKEY = "a83cd5db22f6b778c1c4c67eef3578bb"

  const apiUrl = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&lang=gl&appid=${APIKEY}&units=metric`;

  try {
    const response = await fetch(apiUrl);
    return await response.json();
    
  } catch (error) {
      console.error("Non hai datos metereolóxicos", error)
  }
  
}


async function actualizarDatos(lat, lon) {

  const data = await obtenerDatos(lat, lon);
  console.log(data)

  if (data) {
    document.getElementById("weatherToday").textContent = data.weather[0].description;
    document.getElementById("iconWeather").src = `./assets/iconos/${data.weather[0].icon}.png`;
    document.getElementById("temperatureToday").textContent = `${Math.round(data.main.temp)}ºC`;
    document.getElementById("tempMax").textContent = `${data.main.temp_max}ºC`;
    document.getElementById("tempMin").textContent = `${data.main.temp_min}ºC`;
    document.getElementById("feelsLike").textContent = `${data.main.feels_like}ºC`;
    document.getElementById("humidity").textContent = `${data.main.humidity}%`
  }
  
}

actualizarDatos(42.61, -8.79)