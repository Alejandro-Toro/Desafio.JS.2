let selectPin1 = document.querySelector("#pin1");
let selectPin2 = document.querySelector("#pin2");
let selectPin3 = document.querySelector("#pin3");

let parrafoResultado = document.querySelector(".resultado");

function validarPassword() {
    let pin1 = selectPin1.value;
    let pin2 = selectPin2.value;
    let pin3 = selectPin3.value;

    let password = pin1 + pin2 + pin3;


    if(password == 911){
        parrafoResultado.innerHTML = "password 1 correcto"
    } else if(password == "714") {
        parrafoResultado.innerHTML = "password 2 correcto"
    } else {
        parrafoResultado.innerHTML = "password incorrecto"
    }
} 