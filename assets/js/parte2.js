let inputGitHub = document.querySelector("#cantidadGithub");
let inputSlack = document.querySelector("#cantidadSlack");
let inputGit = document.querySelector("#cantidadGit");

let spanCantidadTotal = document.querySelector("#cantidadTotal");

function calcularTotalStickers() {
    let cantidadGithub = Number(inputGitHub.value);
    let cantidadSlack = Number(inputSlack.value);
    let cantidadGit = Number(inputGit.value);

    let cantidadTotal = cantidadGithub + cantidadSlack + cantidadGit;

    if(cantidadTotal <= 10){
        spanCantidadTotal.innerHTML = cantidadTotal
    } else {
        spanCantidadTotal.innerHTML = "demasiados"
    }
}  