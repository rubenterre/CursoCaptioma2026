function avaliarDia(dia) {
    
    let deus = document.getElementById("deus");
    let descricion = document.getElementById("descricion");

    const diasSemana = {
        "luns": {
            imaxe: "./assets/luna.png",
            deus: "Luns á Lúa",
            descricion: "O luns estaba dedicado á deusa romana Lúa, unha deidade primitiva que foi substituída posteriormente pola deusa Diana."
        },
        "martes":{
            imaxe: "./assets/marte.jpeg",
            deus: "Martes á Marte",
            descricion: "O martes estaba dedicado a Marte, o deus da guerra."
        },
        "mércores":{
            imaxe: "./assets/mercurio.png",
            deus: "Mércores á Mercurio",
            descricion: "O mércores estaba dedicado ao deus romano Mercurio, o deus do comercio."
        },
        "xoves":{
            imaxe: "./assets/jupiter.png",
            deus: "Xoves á Xúpiter",
            descricion: "O xoves estaba dedicado a Xúpiter, o deus principal e supremo."
        },
        "venres":{
            imaxe: "./assets/venus.png",
            deus: "Venres á Venus",
            descricion: "O venres estaba dedicado á deusa Venus, a deusa do amor e do desexo."
        },
        "sábado":{
            imaxe: "./assets/saturno.png",
            deus: "Sábado á Saturno",
            descricion: "O sábado dedicábase ao deus Saturno, aínda que o nome nos chega da cultura xudeo-cristiá onde significa 'día de repouso'."
        },
        "domingo":{
            imaxe: "./assets/dios.png",
            deus: "Domingo á Apolo",
            descricion: "O domingo dedicábase ao deus Apolo, o deus do sol e da sabedoría, motivo polo cal foi elixido polos cristiáns para establecer o Dominus dei ou día do Señor."
        },
    }

    let imaxe = document.getElementById("imaxe");

    switch (dia) {
        case "luns":
            imaxe.src = diasSemana.luns.imaxe;
            imaxe.alt = diasSemana.luns.deus;
            deus.textContent = diasSemana.luns.deus;
            descricion.textContent = diasSemana.luns.descricion;
            break;
        case "martes":
            imaxe.src = diasSemana.martes.imaxe;
            imaxe.alt = diasSemana.martes.deus;
            deus.textContent = diasSemana.martes.deus;
            descricion.textContent = diasSemana.martes.descricion;
            break;
        case "mércores":
            imaxe.src = diasSemana.mércores.imaxe;
            imaxe.alt = diasSemana.mércores.deus;
            deus.textContent = diasSemana.mércores.deus;
            descricion.textContent = diasSemana.mércores.descricion;
            break;
        case "xoves":
            imaxe.src = diasSemana.xoves.imaxe;
            imaxe.alt = diasSemana.xoves.deus;
            deus.textContent = diasSemana.xoves.deus;
            descricion.textContent = diasSemana.xoves.descricion;
            break;
        case "venres":
            imaxe.src = diasSemana.venres.imaxe;
            imaxe.alt = diasSemana.venres.deus;
            deus.textContent = diasSemana.venres.deus;
            descricion.textContent = diasSemana.venres.descricion;
            break;
        case "sábado":
            imaxe.src = diasSemana.sábado.imaxe;
            imaxe.alt = diasSemana.sábado.deus;
            deus.textContent = diasSemana.sábado.deus;
            descricion.textContent = diasSemana.sábado.descricion;
            break;

        case "domingo":
            imaxe.src = diasSemana.domingo.imaxe;
            imaxe.alt = diasSemana.domingo.deus;
            deus.textContent = diasSemana.domingo.deus;
            descricion.textContent = diasSemana.domingo.descricion;
            break;
        default:
            deus.textContent = "non se atopa un deus";
            descricion.textContent = "non se atopa unha descripción"
            break;
    }
}