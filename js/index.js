/**
 * Todo lo referente a la vacunacion
 */


let edadesArray = [
    'Prenatal',
    '2 meses',
    '4 meses',
    '6 meses',
    '11 meses',
    '12 meses',
    '15 meses',
    '4 años',
    '5 años',
    '6 años',
    '12 años',
    '14 años'
];
let vacunasArray = [
    'Dipteria, Gripe',
    'Hepatitis, Dipteria,Poliomelitis,haemophilus infl uenzae b',
    'Hepatitis, Dipteria,Poliomelitis,haemophilus infl uenzae b',
    'Gripe',
    'Hepatitis, Dipteria,Poliomelitis,Gripe',
    'Meningitis,Sarampion,Gripe',
    'Varicela,Gripe',
    'Sarampion,Varicela,Gripe',
    '--',
    'Dipteria, Poliomelitis',
    'Meningococo,Varicels,Papiloma',
    'Dipteria'
]


let edades = document.querySelector("#edades"); // select
edades.addEventListener('change',mostrarVacunas);


// rellena select
for (i = 0; i < edadesArray.length; i++) {
    let opcion = document.createElement("option");
    opcion.value=i+1;
    opcion.textContent = edadesArray[i];
    edades.appendChild(opcion);
}

function mostrarVacunas(){
    let vacuna=document.querySelector("#msg-vacunas");


    vacuna.textContent=vacunasArray[edades.value-1];

}








/**
 * Todo lo referente a la accesibilidad
 */

document.querySelector("#aumentar").addEventListener('click', () => {
    ajustarFuente(1);
})
document.querySelector("#reducir").addEventListener('click', () => {
    ajustarFuente(-1);
})
document.querySelector("#escalaGrises").addEventListener("click", escalaGrises);

document.querySelector("#altoContraste").addEventListener("click", altoContraste);

document.querySelector("#restablecer").addEventListener("click", restablecerTodo);

function ajustarFuente(cambio) {
    let elementos = document.querySelectorAll("body *:not(.accesibilidad):not(.accesibilidad *)"); // coge todos
    elementos.forEach(function (elem) {
        let estilo = window.getComputedStyle(elem);
        let fontSize = parseFloat(estilo.fontSize);
        console.log(fontSize);
        elem.style.fontSize = fontSize + cambio + 'px';
    })
}


function escalaGrises() {
    document.body.style.filter = "grayscale(100%)";
}

function altoContraste() {
    document.body.style.backgroundColor = "#1c1f22";
    let elementos = document.querySelectorAll("body *");
    elementos.forEach(function (elem) {
        let estilo = window.getComputedStyle(elem);
        elem.style.color = "#ffd700";
    })

}

function restablecerTodo() {
    let elementos = document.querySelectorAll("body *");
    elementos.forEach(function (elem) {
        elem.style.fontSize = "";
        elem.style.color = "";
    })
    document.body.style.backgroundColor = "";
    document.body.style.filter = "";
}

function mostrarOcultar() {
    let barra = document.querySelector(".accesibilidad");
    barra.classList.toggle("mostrar");

}




