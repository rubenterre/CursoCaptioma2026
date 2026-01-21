const modelos = [
  {
    "id": "berlina",
    "nombre": "Taycan Berlina Deportiva",
    "precio": "Desde EUR 106.252,00 PVP Recomendado",
    "imagenModelo": "./assets/cars/models/taycan-berlina.avif",
    "imagenFrontal": "./assets/cars/front/frente-taycan-berlina.avif",
    "legal": "Consumo eléctrico combinado - WLTP* (intervalo modelo): 19,4 – 16,7 kWh/100 km, Consumo eléctrico bajo - WLTP* (intervalo modelo): 16,6 – 14,4 kWh/100 km, Consumo eléctrico medio - WLTP* (intervalo modelo): 16,6 – 13,8 kWh/100 km, Consumo eléctrico alto - WLTP* (intervalo modelo): 17,6 – 14,2 kWh/100 km, Consumo eléctrico muy alto - WLTP* (intervalo modelo): 22,8 – 18,2 kWh/100 km, Autonomía eléctrica en ciudad - WLTP* (intervalo modelo): 593 – 824 km, Autonomía eléctrica combinado - WLTP* (intervalo modelo): 521 – 680 km, Emisiones CO2 combinado (Gasolina y BEV)/ combinado ponderado (PHEV) - WLTP* (intervalo modelo): 0 – 0 g/km",
    "aceleracion": "4,8",
    "potenciaKw": "300",
    "potenciaCv":"408",
    "velocidad":"230"
  },
  {
    "id": "sport-turismo",
    "nombre": "Taycan Sport Turismo",
    "precio": "Desde EUR 110.000,00 PVP Recomendado",
    "imagenModelo": "./assets/cars/models/taycan-sport.avif",
    "imagenFrontal": "./assets/cars/front/frente-taycan-sport.avif",
    "legal":"Consumo eléctrico combinado - WLTP* (intervalo modelo): 20,2 – 17,5 kWh/100 km, Consumo eléctrico bajo - WLTP* (intervalo modelo): 16,9 – 14,6 kWh/100 km, Consumo eléctrico medio - WLTP* (intervalo modelo): 17,0 – 14,1 kWh/100 km, Consumo eléctrico alto - WLTP* (intervalo modelo): 18,3 – 14,8 kWh/100 km, Consumo eléctrico muy alto - WLTP* (intervalo modelo): 24,2 – 19,5 kWh/100 km, Autonomía eléctrica en ciudad - WLTP* (intervalo modelo): 579 – 811 km, Autonomía eléctrica combinado - WLTP* (intervalo modelo): 496 – 652 km, Emisiones CO2 combinado (Gasolina y BEV)/ combinado ponderado (PHEV) - WLTP* (intervalo modelo): 0 – 0 g/km",
    "aceleracion": "4,8",
    "potenciaKw": "300",
    "potenciaCv":"408",
    "velocidad":"230"
  },
  {
    "id": "cross-turismo",
    "nombre": "Taycan Cross Turismo",
    "precio": "Desde EUR 115.000,00 PVP Recomendado",
    "imagenModelo": "./assets/cars/models/taycan-cross.avif",
    "imagenFrontal": "./assets/cars/front/frente-taycan-cross.avif",
    "legal":"Consumo eléctrico combinado - WLTP* (intervalo modelo): 21,4 – 18,7 kWh/100 km, Consumo eléctrico bajo - WLTP* (intervalo modelo): 18,8 – 16,7 kWh/100 km, Consumo eléctrico medio - WLTP* (intervalo modelo): 18,4 – 16,1 kWh/100 km, Consumo eléctrico alto - WLTP* (intervalo modelo): 19,6 – 17,1 kWh/100 km, Consumo eléctrico muy alto - WLTP* (intervalo modelo): 25,8 – 22,5 kWh/100 km, Autonomía eléctrica en ciudad - WLTP* (intervalo modelo): 611 – 696 km, Autonomía eléctrica combinado - WLTP* (intervalo modelo): 532 – 614 km, Emisiones CO2 combinado (Gasolina y BEV)/ combinado ponderado (PHEV) - WLTP* (intervalo modelo): 0 – 0 g/km",
    "aceleracion": "4,7",
    "potenciaKw": "320",
    "potenciaCv":"435",
    "velocidad":"220"
  }
]

function cambiarCoche(indice) {
    if (modelos[indice]) {
        document.getElementById('carHero').src = modelos[indice].imagenModelo;
        document.getElementById('carHero').alt = modelos[indice].nombre;
        document.getElementById('nameHero').textContent = modelos[indice].nombre;
        document.getElementById('priceHero').textContent = modelos[indice].precio;
        document.getElementById('legalHero').textContent = modelos[indice].legal;
        document.getElementById('aceleracion').textContent = modelos[indice].aceleracion;
        document.getElementById('powerKw').textContent = modelos[indice].potenciaKw;
        document.getElementById('powerCv').textContent = modelos[indice].potenciaCv;
        document.getElementById('speed').textContent = modelos[indice].velocidad;
        document.getElementById('carDetails').src = modelos[indice].imagenFrontal;
        document.getElementById('carDetails').alt = modelos[indice].nombre;
    } else {
        console.error('Índice de modelo no válido');
    }
}

