// API OpenWeatherMaps

const API_KEY = "3e867330616c39fa60d18a1af5d82f16"

// Obter parámetros da URL
const params = new URLSearchParams(window.location.search);
const lat = params.get('lat');
const lon = params.get('lon');

if (lat && lon) {
  actualizarDatos(lat, lon);
} else {
  // Usar valores por defecto para Vilagarcía de Arousa
  actualizarDatos(42.61, -8.79);
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

async function actualizarDatos(lon, lat) {

  const data = await obterDatosTempo(lon, lat);

  if (data) {
    document.getElementById("weatherTemperature").innerHTML = `${Math.round(data.main.temp)}ºC`;
    document.getElementById("weatherIcon").src = `./assets/iconos/${data.weather[0].icon}.png`;
    document.getElementById("feellike").innerHTML = `${Math.round(data.main.feels_like)}ºC`;
    document.getElementById("humidity").innerHTML = `${data.main.humidity}%`;
    document.getElementById("tempMax").innerHTML = `${Math.round(data.main.temp_max)}ºC`;
    document.getElementById("tempMin").innerHTML = `${Math.round(data.main.temp_min)}ºC`;
    document.getElementById("location").innerHTML = `${data.name}`;
    document.getElementById("description").innerHTML = `${(data.weather[0].description).toUpperCase()}`;
    document.getElementById("pressure").innerHTML = `${data.main.pressure} hPa`;
    document.getElementById("wind").innerHTML = `${data.wind.speed} m/s`;

    //Data actual

   const dataActualTimeStamp = data.dt * 1000;

    const dataActual = new Date(dataActualTimeStamp);

    console.log(dataActual)
/*  
    const options = {
      weekday: "long",
      year: "numeric",
      month: "long",
      day: "numeric",
    };

    document.getElementById("data").textContent = dataActual.toLocaleDateString("es-ES", options);
 */
  //Data semana en galego

    //Día da semana
    const diasSemana = ["Domingo","Luns","Martes","Mércores","Xoves","Venres","Sábado"]
    const dataDia = dataActual.getDay();
    console.log(dataDia)

    const diaSemanaActual = diasSemana[dataDia];
    console.log(diaSemanaActual);

    //Día del mes
    const diaMes = dataActual.getDate();
    console.log(diaMes);

    //Mes do ano
    const meses = ["Xaneiro", "Febreiro", "Marzo", "Abril", "Maio", "Xuño", "Xullo", "Agosto", "Setembro", "Outubro", "Novembro", "Decembro"]
    const dataMes = dataActual.getMonth();
    console.log(dataMes);

    const mesActual = meses[dataMes]
    console.log(mesActual);

    //Ano
    const dataAno = dataActual.getFullYear()
    console.log(dataAno);

    //Data formateada completa
    document.getElementById("data").textContent = `${diaSemanaActual}, ${diaMes} de ${mesActual} de ${dataAno}`;

    

    //Amancer
    const timestampAmancer = data.sys.sunrise * 1000;

    const dataAmancer = new Date(timestampAmancer);

    const horaAmancer = dataAmancer.getHours().toString().padStart(2, "0");
    const minutosAmancer = dataAmancer.getMinutes().toString().padStart(2, "0");

    const horaAmancerFormateada = `${horaAmancer}:${minutosAmancer} AM`;

    document.getElementById("amancer").innerHTML = horaAmancerFormateada;

    //Solpor
    const timestampSolpor = data.sys.sunset * 1000;

    const dataSolpor = new Date(timestampSolpor);

    const horaSolpor = dataSolpor.getHours().toString().padStart(2, "0");
    const minutosSolpor = dataSolpor.getMinutes().toString().padStart(2, "0");

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






