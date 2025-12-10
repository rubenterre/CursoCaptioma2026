// API OpenWeatherMaps

const API_KEY = "3e867330616c39fa60d18a1af5d82f16"

// Obter parámetros da URL
const params = new URLSearchParams(window.location.search);
const lat = params.get('lat');
const lon = params.get('lon');

if (lat && lon) {
  actualizarDatos(lat, lon);
  obtenerPronostico(lat, lon);
} else {
  actualizarDatos(42.61, -8.79);
  obtenerPronostico(42.61, -8.79);
}


//Obter datos do tempo

async function obterDatosTempo(lat, lon) {
    const apiURL = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${API_KEY}&units=metric&lang=gl`
    try {
    const response = await fetch(apiURL);
    return await response.json();
    } catch (error) {
    console.error("Error al obtener datos del clima:",
    error);
    }
    }

console.log(obterDatosTempo(42.61, -8.79))

async function actualizarDatos(lat, lon) {

    const data = await obterDatosTempo(lat, lon);

    if(data){
        document.getElementById("weatherTemperature").textContent = `${Math.round(data.main.temp)}ºC`;
        document.getElementById("weatherIcon").src = `./assets/iconos/${data.weather[0].icon}.png`;
        document.getElementById("feellike").textContent = `${Math.round(data.main.feels_like)}ºC`;
        document.getElementById("humidity").textContent = `${data.main.humidity}%`;
        document.getElementById("tempMax").textContent = `${Math.round(data.main.temp_max)}ºC`;
        document.getElementById("tempMin").textContent = `${Math.round(data.main.temp_min)}ºC`;
        document.getElementById("location").textContent = `${data.name}`;
        document.getElementById("description").textContent = `${(data.weather[0].description).toUpperCase()}`;
        document.getElementById("pressure").textContent = `${data.main.pressure} hPa`;
        document.getElementById("wind").textContent = `${data.wind.speed} m/s`;

           //Amancer
           const timestampAmancer = data.sys.sunrise *1000;

           const dataAmancer = new Date(timestampAmancer);

           const horaAmancer = dataAmancer.getHours();
           const minutosAmancer = dataAmancer.getMinutes();

           const horaAmancerFormateada = `${horaAmancer}:${minutosAmancer} AM`;

           document.getElementById("amancer").innerHTML = horaAmancerFormateada;

           //Solpor
           const timestampSolpor = data.sys.sunset * 1000;

           const dataSolpor = new Date(timestampSolpor);

           const horaSolpor = dataSolpor.getHours();
           const minutosSolpor = dataSolpor.getMinutes();

           const horaSolporFormateada = `${horaSolpor}:${minutosSolpor} PM`

           document.getElementById("solpor").innerHTML = horaSolporFormateada;

           //Cambiar fondo

           function cambiarColorDeFondo() {
            const agora = new Date();
          
            let claseFondo;
            if (agora >= dataAmancer && agora < dataSolpor) {
              claseFondo = 'fondo-dia';
            } else {
              claseFondo = 'fondo-noite';
            }
          
            document.body.className = '';
            document.body.classList.add(claseFondo);
          }
          
          cambiarColorDeFondo();
    }
    
}

  async function obtenerPronostico(lat, lon) {

    const URL_API_FORECAST = `https://api.openweathermap.org/data/2.5/forecast?lat=${lat}&lon=${lon}&appid=${API_KEY}&units=metric&lang=gl`
    
    try{

    const response = await fetch(URL_API_FORECAST);
    const dataPronostico = await response.json();
  
    actualizarPronostico(dataPronostico);

    return dataPronostico;
    
    }catch(error){
       console.error("Error ao obtener datos do pronóstico do clima:",error);
    }

  }

  function actualizarPronostico(dataPronostico) {

    if(dataPronostico){

      const template = document.getElementById("forecastTemplate");
      const containerForecast = document.getElementById("forecastContainer");

      containerForecast.innerHTML = "";  

      dataPronostico.list.forEach(element => {
        
       const clone = template.content.cloneNode(true);

       clone.querySelector('#date').textContent = `${new Date(element.dt * 1000).getHours()}h`;
       clone.querySelector('#weatherIcon').src = `./assets/iconos/${element.weather[0].icon}.png`;
       clone.querySelector('#weatherIcon').alt = element.weather[0].description;
       clone.querySelector('#temperature').textContent = `${Math.round(element.main.temp)}ºC`;

       containerForecast.appendChild(clone);
      });

    }
    
  }
