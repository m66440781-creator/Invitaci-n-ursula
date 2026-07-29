// ===============================
// INVITACIÓN ÚRSULA NAZARETH
// ROSITA FRESITA
// ===============================

const loader = document.getElementById("loader");
const contenido = document.getElementById("contenido");
const sobre = document.getElementById("sobre");
const libro = document.getElementById("libro");
const historia = document.getElementById("historia");
const continuar = document.getElementById("continuar");

const texto = "Había una vez una pequeña llamada Úrsula Nazareth... que estaba a punto de cumplir 4 añitos. Y quiere compartir este día tan especial contigo. 🍓✨";


let i = 0;

// Loader
window.addEventListener("load", () => {

    setTimeout(() => {

        loader.classList.add("oculto");

    }, 2200);

});

// Abrir sobre
sobre.addEventListener("click", () => {

    sobre.classList.add("abierto");

    setTimeout(() => {

        libro.classList.add("mostrar");

        escribirHistoria();

        crearFlores(20);
        crearFresas(15);
        crearMariposas(4);
        crearEstrellas(40);
        crearNubes(20);
        
        if(typeof confetti === "function"){

            confetti({
                particleCount:180,
                spread:90,
                origin:{ y:.6 }
            });

        }

    },900);

});

// Máquina de escribir

function escribirHistoria(){

    historia.innerHTML="";

    i=0;

    let intervalo=setInterval(()=>{

        historia.innerHTML+=texto.charAt(i);

        i++;

        if(i>=texto.length){

            clearInterval(intervalo);

        }

    },35);

}

// FLORES

function crearFlores(cantidad){

    for(let i=0;i<cantidad;i++){

        const flor=document.createElement("div");

        flor.className="flor";

        flor.innerHTML="🌸";

        flor.style.left=Math.random()*100+"vw";

        flor.style.animationDuration=(6+Math.random()*5)+"s";

        flor.style.animationDelay=Math.random()*4+"s";

        document.body.appendChild(flor);

    }

}

// FRESAS

function crearFresas(cantidad){

    for(let i=0;i<cantidad;i++){

        const fresa=document.createElement("div");

        fresa.className="fresaFloat";

        fresa.innerHTML="🍓";

        fresa.style.left=Math.random()*100+"vw";

        fresa.style.animationDuration=(8+Math.random()*6)+"s";

        fresa.style.animationDelay=Math.random()*3+"s";

        document.body.appendChild(fresa);

    }

}

// MARIPOSAS

function crearMariposas(cantidad){

    for(let i=0;i<cantidad;i++){

        const mariposa=document.createElement("div");

        mariposa.className="mariposa";

        mariposa.innerHTML="🦋";

        mariposa.style.top=Math.random()*80+"vh";

        mariposa.style.animationDelay=(i*2)+"s";

        document.body.appendChild(mariposa);

    }

}

// DESTELLOS

function crearEstrellas(cantidad){

    for(let i=0;i<cantidad;i++){

        const estrella=document.createElement("div");

        estrella.className="estrella";

        estrella.style.left=Math.random()*100+"vw";

        estrella.style.top=Math.random()*100+"vh";

        estrella.style.animationDelay=Math.random()*2+"s";

        document.body.appendChild(estrella);


    }

}


// BOTÓN ABRIR INVITACIÓN

continuar.addEventListener("click", () => {

    continuar.innerHTML = "🍓 Abriendo sorpresa...";

    setTimeout(() => {

    document.getElementById("invitacionFinal").classList.add("mostrar");

    },1000);

});
    
function crearNubes(cantidad){

    for(let i=0;i<cantidad;i++){

        const nube=document.createElement("div");

        nube.className="nube";

        nube.innerHTML="☁️";

        nube.style.left=(-20-Math.random()*30)+"vw";
        nube.style.top=(5+Math.random()*35)+"vh";

        nube.style.fontSize=(40+Math.random()*60)+"px";

        nube.style.animationDuration=(50+Math.random()*40)+"s";

        nube.style.animationDelay=(-Math.random()*40)+"s";

        document.body.appendChild(nube);

    }

            }
