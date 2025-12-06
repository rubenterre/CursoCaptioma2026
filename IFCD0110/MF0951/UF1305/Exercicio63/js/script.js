const series = {
    "Loki": {
        "fondo": "url(assets/fondo_Loki.png)",
        "logo": "assets/Logos/logo_loki.png",
        "iconos": {
            "idade": "assets/iconos/12+.png",
            "audiodescripcion": "assets/iconos/audiodescripcion.png",
            "subtitulos": "assets/iconos/subtitulos.png"
        },
        "ano": "2021 - 2023",
        "tempadas": "2 tempadas",
        "categorías": "Ciencia ficción, Fantástica, Superhéroe, Acción e aventura",
        "descricion": "A nova serie Loki, de Marvel Studios, empeza alí onde terminou Vengadores: Endgame. Nela, o voluble vilán Loki (Tom Hiddleston) volve gañarse o alcume de Dios do Engano. Kate Herron é a súa directora e Michael Waldron o guionista principal.",
        "trailer": `<button onclick="mostrarPopup('Loki')" class="informacion__button">Trailer</button>`
    },
    "Percy": {
        "fondo": "url(assets/fondo_percy.png)",
        "logo": "assets/Logos/logo_percy.png",
        "iconos": {
            "idade": "assets/iconos/12+.png",
            "audiodescripcion": "assets/iconos/audiodescripcion.png",
            "subtitulos": "assets/iconos/subtitulos.png"
        },
        "ano": "2023",
        "tempadas": "1 tempada",
        "categorías": "Familiar, Fantástica, Acción e aventura",
        "descricion": "Percy Jackson emprende unha perigosa misión. Deixando atrás aos monstros e burlando aos deuses, percorrerá Estados Unidos para devolver o Raio Mestre de Zeus e evitar a guerra. Con axuda dos seus compañeiros de misión, Annabeth e Grover, a viaxe de Percy achegarao máis ás respostas que busca: como encaixar nun mundo que lle é alléo logrará entender o seu destino.",
        "trailer": `<button onclick="mostrarPopup('Percy')" class="informacion__button">Trailer</button>`

    },
    "Mandalorian": {
        "fondo": "url(assets/fondo_mandalorian.png)",
        "logo": "assets/Logos/logo_mandalorian.png",
        "iconos": {
            "idade": "assets/iconos/12+.png",
            "audiodescripcion": "assets/iconos/audiodescripcion.png",
            "subtitulos": "assets/iconos/subtitulos.png"
        },
        "ano": "2019 - 2023",
        "tempadas": "3 tempadas",
        "categorías": "Ciencia ficción, Acción e aventura",
        "descricion": "Tras a caída do Imperio, un solitario Mandaloriano viaxa por unha galaxia sen lei co seu protexido: Grogu.",
        "trailer": `<button onclick="mostrarPopup('Mandalorian')" class="informacion__button">Trailer</button>`

    },
    "Solo": {
        "fondo": "url(assets/fondo_asesinatos.png)",
        "logo": "assets/Logos/logo_solo_asesinatos.png",
        "iconos": {
            "idade": "assets/iconos/16+.png",
            "audiodescripcion": "assets/iconos/audiodescripcion.png",
            "subtitulos": "assets/iconos/subtitulos.png"
        },
        "ano": "2021 - 2023",
        "tempadas": "3 tempadas",
        "categorías": "Misterio, Drama, Comedia, Policiaca",
        "descricion": "Aos veciños do Upper West Side Charles, Oliver e Mabel únelles a súa paixón polos crimes reais. Cando un residente do seu edificio morre, o trío decide resolver o misterio e gravar un podcast relatándoo.",
        "trailer": `<button onclick="mostrarPopup('Solo')" class="informacion__button">Trailer</button>`

    }
}

/* Versión con Switch */

function botonSeries(serie) {

    switch (serie) {
        case "Loki":
        document.getElementById("informacionLogo").src = series[serie].logo;
        document.getElementById("informacionIdade").src = series[serie].iconos.idade;
        document.getElementById("autodescripcion").src = series[serie].iconos.audiodescripcion;
        document.getElementById("informacionAnos").textContent = series[serie].ano;
        document.getElementById("informacionTempada").textContent = series[serie].tempadas;
        document.getElementById("informacionCategorias").textContent = series[serie].categorías;
        document.getElementById("informacionDescripcion").textContent = series[serie].descricion;
        document.getElementById("informacionTrailer").innerHTML = series[serie].trailer;
        document.body.style.background = series[serie].fondo;
            
            break;
        case "Percy":
        document.getElementById("informacionLogo").src = series[serie].logo;
        document.getElementById("informacionIdade").src = series[serie].iconos.idade;
        document.getElementById("autodescripcion").src = series[serie].iconos.audiodescripcion;
        document.getElementById("informacionAnos").textContent = series[serie].ano;
        document.getElementById("informacionTempada").textContent = series[serie].tempadas;
        document.getElementById("informacionCategorias").textContent = series[serie].categorías;
        document.getElementById("informacionDescripcion").textContent = series[serie].descricion;
        document.getElementById("informacionTrailer").innerHTML = series[serie].trailer;
        document.body.style.background = series[serie].fondo;
            
            break;
        default:
            break;
    }
    
}


/* Versión con if */

function botonSeries(serie) {

    if(serie){
        document.getElementById("informacionLogo").src = series[serie].logo;
        document.getElementById("informacionIdade").src = series[serie].iconos.idade;
        document.getElementById("autodescripcion").src = series[serie].iconos.audiodescripcion;
        document.getElementById("informacionAnos").textContent = series[serie].ano;
        document.getElementById("informacionTempada").textContent = series[serie].tempadas;
        document.getElementById("informacionCategorias").textContent = series[serie].categorías;
        document.getElementById("informacionDescripcion").textContent = series[serie].descricion;
        document.getElementById("informacionTrailer").innerHTML = series[serie].trailer;
        document.body.style.background = series[serie].fondo;
    }
    
}

/* Versión con funcións */

function botonSeriesLoki() {
        document.getElementById("informacionLogo").src = series.Loki.logo;
        document.getElementById("informacionIdade").src = series.Loki.iconos.idade;
        document.getElementById("autodescripcion").src = series.Loki.iconos.audiodescripcion;
        document.getElementById("informacionAnos").textContent = series.Loki.ano;
        document.getElementById("informacionTempada").textContent = series.Loki.tempadas;
        document.getElementById("informacionCategorias").textContent = series.Loki.categorías;
        document.getElementById("informacionDescripcion").textContent = series.Loki.descricion;
        document.getElementById("informacionTrailer").innerHTML = series.Loki.trailer;
        document.body.style.background = series.Loki.fondo;
    
}

function botonSeriesPercy() {
        document.getElementById("informacionLogo").src = series.Percy.logo;
        document.getElementById("informacionIdade").src = series.Percy.iconos.idade;
        document.getElementById("autodescripcion").src = series.Percy.iconos.audiodescripcion;
        document.getElementById("informacionAnos").textContent = series.Percy.ano;
        document.getElementById("informacionTempada").textContent = series.Percy.tempadas;
        document.getElementById("informacionCategorias").textContent = series.Percy.categorías;
        document.getElementById("informacionDescripcion").textContent = series.Percy.descricion;
        document.getElementById("informacionTrailer").innerHTML = series.Percy.trailer;
        document.body.style.background = series.Percy.fondo;
    
}









/* Executamos a función botonSeries(serie) en función do atributo data-series que teña o botón no HTML */
document.querySelectorAll('[data-series]').forEach(btn => {
  btn.addEventListener('click', () => botonSeries(btn.getAttribute('data-series')));
});


/* Función para mostrar cada popup */
const trailers = {
    "Loki": "https://www.youtube.com/embed/fM7v_IFaH1g?si=p0WLKjeuBnc7ce_0",
    "Percy": "https://www.youtube.com/embed/jL1eRUpQpKE?si=Rz8eePnMhKttH776",
    "Mandalorian": "https://www.youtube.com/embed/aOC8E8z_ifw?si=EG6clZNp0t7eiXTT",
    "Solo": "https://www.youtube.com/embed/kmgT20OXV1o?si=OsmkYFKHFV1E3Zeq"
};

function mostrarPopup(titulo) {
    if(titulo && trailers[titulo]){
        document.getElementById("popup").style.display = "block";
        document.getElementById("iframe").src = trailers[titulo];
    }
}

/* Función para pechar o modal */
function pecharModal() {
    document.getElementById("popup").style.display = "none";
    document.getElementById("iframe").src = ""; //Quitamos a ruta do iframe para que ao pechar o popup deixe de reproducirse o video.
}

document.querySelector('.popup__button').addEventListener('click', pecharModal);
