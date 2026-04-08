let menu = document.getElementById("menu");
let annoCorrente = new Date().getFullYear() -18;

function riempiConAnni(){
    let html = "";
    for (let i = 1900; i <= annoCorrente; i++){
        html += "<option value=" + i + ">" + i + "</option>";
    }
    menu.innerHTML = html;
}

document.addEventListener("DOMContentLoaded", riempiConAnni)

let txt1 = document.getElementById("txt1")
let txt2 = document.getElementById("txt2")

function StampaRegistrazione(){

    if(termini.checked){
        console.log("Gentile sig/sig.ra" + txt1.value + " " + txt2.value + ",")
        console.log("la ringraziamo per la registrazione.")
    } else{
        console.log("non sono stati accettati i termini di condizione")
    }
}
