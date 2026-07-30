// ===============================
// INVITACIÓN ÚRSULA NAZARETH
// ROSITA FRESITA
// ===============================

const loader = document.getElementById("loader");
const contenido = document.getElementById("contenido");
const bienvenida = document.querySelector(".bienvenida");
const fresaInicio = document.getElementById("fresaInicio");
const sobre = document.getElementById("sobre");
const libro = document.getElementById("libro");
const historia = document.getElementById("historia");
const continuar = document.getElementById("continuar");

const texto = "Había una vez una pequeña llamada Úrsula Nazareth... que estaba a punto de cumplir 4 añitos. Y quiere compartir este día tan especial contigo. 🍓✨";


let i = 0;

// Loader permanece hasta tocar la fresa

window.addEventListener("load", () => {

    loader.classList.remove("oculto");

});


// TOQUE DE LA FRESA DE BIENVENIDA

fresaInicio.addEventListener("click", () => {

    if(typeof confetti === "function"){

        confetti({
            particleCount:120,
            spread:80,
            origin:{ y:.7 }
        });

    }

    
bienvenida.classList.add("desaparecer");


setTimeout(()=>{

    loader.classList.add("oculto");

    contenido.classList.add("mostrar");

    bienvenida.style.display="none";

    sobre.classList.add("entradaSobre");


},1500);


});

// Abrir sobre
sobre.addEventListener("click", () => {

    sobre.classList.add("abierto");

    setTimeout(() => {

        libro.classList.add("mostrar");

        escribirHistoria();

        crearFlores(18);
        crearFresas(12);
        crearMariposas(6);
        crearEstrellas(50);
        crearNubes(10);
        crearArboles();
        crearArbustos();
        crearHongos();
        
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

        fresa.style.left = Math.random()*100 + "vw";
        fresa.style.top = "-120px";

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

        nube.style.left=(-10-Math.random()*30)+"vw";
        nube.style.top=(5+Math.random()*50)+"vh";

        nube.style.fontSize=(40+Math.random()*60)+"px";

        nube.style.animationDuration=(20+Math.random()*20)+"s";

        nube.style.animationDelay=(-Math.random()*40)+"s";

        document.body.appendChild(nube);

    }

            }

function crearArboles(){

    const arboles=[
        {x:5,s:90},
        {x:18,s:70},
        {x:34,s:110},
        {x:52,s:80},
        {x:70,s:105},
        {x:86,s:75}
    ];

    arboles.forEach(a=>{

        const arbol=document.createElement("div");

        arbol.className="arbol";

        arbol.innerHTML="🌳";

        arbol.style.left=a.x+"vw";

        arbol.style.fontSize=a.s+"px";

        document.body.appendChild(arbol);

    });

}
function crearArbustos(){

    for(let i=0;i<10;i++){

        const a=document.createElement("div");

        a.className="arbusto";

        a.innerHTML="🌿";

        a.style.left=(i*10+Math.random()*5)+"vw";

        document.body.appendChild(a);

    }

}
function crearHongos(){

    const pos=[12,28,47,63,81];

    pos.forEach(x=>{

        const h=document.createElement("div");

        h.className="hongo";

        h.innerHTML="🍄";

        h.style.left=x+"vw";

        document.body.appendChild(h);

    });

}
