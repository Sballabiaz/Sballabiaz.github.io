let menu = document.getElementById("menu");
let annoCorrente = new Date().getFullYear() - 18;

function riempiConAnni() {
    let html = "";
    for (let i = 1900; i <= annoCorrente; i++) {
        html += "<option value=" + i + ">" + i + "</option>";
    }
    menu.innerHTML = html;
}

document.addEventListener("DOMContentLoaded", riempiConAnni);

let txt1 = document.getElementById("txt1"); 
let txt2 = document.getElementById("txt2"); 
let txt3 = document.getElementById("txt3");
let termini = document.getElementById("termini");

function soloLettere(testo) {
    if (testo === "") return false;

    for (let i = 0; i < testo.length; i++) {
        let codice = testo.charCodeAt(i);
        
        if (!((codice >= 65 && codice <= 90) || (codice >= 97 && codice <= 122) || codice === 32)) {
            return false; 
        }
    }
    return true; // Tutti i caratteri sono validi
}

function StampaRegistrazione() {
    let nome = txt1.value;
    let cognome = txt2.value;
    let cf = txt3.value;

    if (!soloLettere(nome)) {
        console.log("Errore: Il nome deve contenere solo lettere.");
        return;
    }

    if (!soloLettere(cognome)) {
        console.log("Errore: Il cognome deve contenere solo lettere.");
        return;
    }

    if (cf.length !== 16) {
        console.log("Errore: Il codice fiscale deve essere lungo esattamente 16 caratteri.");
        return;
    }

    if (termini.checked) {
        console.log("Gentile sig/sig.ra " + nome + " " + cognome + ",");
        console.log("la ringraziamo per la registrazione.");
    } else {
        console.log("Non sono stati accettati i termini di condizione.");
    }
}
