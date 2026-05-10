function setCookie(nome, valore, giorni){   //funzione per settare i cookie
    let data = new Date();
    data.setTime(data.getTime() + (giorni * 24 * 60 * 60 * 1000));
    document.cookie = nome + "=" + encodeURIComponent(valore) + ";expires=" + data.toUTCString() + ";path=/";
}

function getCookie(nome){   //funzione per prendere i cookie
    let cookies = document.cookie.split(";");
    for (let i = 0; i < cookies.length; i++){
        let c = cookies[i].trim();
        if(c.startsWith(nome+"=")){
            return decodeURIComponent(c.substring(nome.length+1))
        }
    }
    return "";
}

function SalvataggioInserimento() {
    let nome = document.getElementById("nome").value;
    let cognome = document.getElementById("cognome").value;

    if (nome.length < 3 || cognome.length < 3) {
        alert("Il nome e il cognome devono avere almeno 3 caratteri.");
        return;
    }

    if (nome[0] < 'A' || nome[0] > 'Z') {
        alert("La prima lettera del nome deve essere maiuscola.");
        return;
    }

    for (let i = 0; i < nome.length; i++) {
        let char = nome[i];
        // Verifica che sia una lettera (maiuscola o minuscola)
        if (!((char >= 'A' && char <= 'Z') || (char >= 'a' && char <= 'z'))) {
            alert("Il nome contiene caratteri speciali o numeri non ammessi.");
            return;
        }
    }

    if (cognome[0] < 'A' || cognome[0] > 'Z') {
        alert("La prima lettera del cognome deve essere maiuscola.");
        return;
    }

    for (let i = 0; i < cognome.length; i++) {
        let char = cognome[i];
        // Verifica che sia una lettera (maiuscola o minuscola)
        if (!((char >= 'A' && char <= 'Z') || (char >= 'a' && char <= 'z'))) {
            alert("Il cognome contiene caratteri speciali o numeri non ammessi.");
            return;
        }
    }

    setCookie("nome", nome, 1);
    setCookie("cognome", cognome, 1);
    window.location.href = "SelezioneCitta.html";
    
}

let VettCitta = ["Milano", "Bergamo", "Cremona", "Lecco", "Lodi", "Mantova", "Monza", "Pavia", "Sondrio", "Varese"]

function caricaCombo(){ //funzione per riempire la combobox
    let menu = document.getElementById("partenza");
    let menu2 = document.getElementById("destinazione");
    let t = "";
    for (let i = 0; i < VettCitta.length; i++){
        t += "<option>" + VettCitta[i] + "</option>";
    }
    menu.innerHTML = t;
    menu2.innerHTML = t;

}

function SalvataggioViaggio(){  //funzione per controllare destinazione e partenza, settare i cookie e portare alla pagina dopo
    let partenza = document.getElementById("partenza").value;
    let dest = document.getElementById("destinazione").value;
    if(partenza == dest){
        alert("la partenza e la destinazione sono la stessa città");
        return;
    } else {
        setCookie("partenza", partenza, 1);
        setCookie("destinazione", dest, 1);
        window.location.href = "SelezioneData.html";
    }
}

let VettMese = ["Gennaio", "Febbraio", "Marzo", "Aprile", "Maggio", "Giugno", "Luglio", "Agosto", "Settembre","Ottobre", "Novembre", "Dicembre",]
function CaricaComboMesi(){ //funzione per riempire combobox
    let menu = document.getElementById("mese");
    let t = "";
    for (let i = 0; i < VettMese.length; i++){
        t += "<option>" + VettMese[i] + "</option>";
    }
    menu.innerHTML = t;
}

function ControlloData(){   //funzione per controllare la data inserita, settare i cookie e portare alla pagina dopo
    
    let giornoDiOggi = new Date().getDate();
    let meseDiOggi = new Date().getMonth() + 1;
    let annoDiOggi = new Date().getFullYear();

    let giorno = document.getElementById("giorno").value;
    let mese = document.getElementById("mese").value;
    let anno = document.getElementById("anno").value;
    let meseNumero;

    if(mese == "Gennaio"){
        meseNumero = 1;
    }
    if(mese == "Febbraio"){
        meseNumero = 2;
    }
    if(mese == "Marzo"){
        meseNumero = 3;
    }
    if(mese == "Aprile"){
        meseNumero = 4;
    }
    if(mese == "Maggio"){
        meseNumero = 5;
    }
    if(mese == "Giugno"){
        meseNumero = 6;
    }
    if(mese == "Luglio"){
        meseNumero = 7;
    }
    if(mese == "Agosto"){
        meseNumero = 8;
    }
    if(mese == "Settembre"){
        meseNumero = 9;
    }
    if(mese == "Ottobre"){
        meseNumero = 10;
    }
    if(mese == "Novembre"){
        meseNumero = 11;
    }
    if(mese == "Dicembre"){
        meseNumero = 12;
    }

    let sommaOggi = giornoDiOggi + meseDiOggi * 30 + annoDiOggi * 12 * 30;
    let sommaData = giorno + meseNumero * 30 + anno * 12 * 30;

    if(sommaData - sommaOggi < 30 && sommaData - sommaOggi > 0){
        setCookie("giorno", giorno, 1);
        setCookie("mese", mese, 1);
        setCookie("anno", anno, 1);
        window.location.href = "riepilogo.html";
    } else{
        alert("il giorno di prenotazione non è valido, dev'essere entro un mese dal giorno odierno");
        return;
    }

}

function Riepilogo(){   //riepologo finale con la prenotazione 
    let nome = getCookie("nome");
    let cognome = getCookie("cognome");
    let part = getCookie("partenza");
    let dest = getCookie("destinazione")
    let gp = getCookie("giorno");
    let mp = getCookie("mese");
    let ap = getCookie("anno");

    let s = "";
    s += "il passeggero " + nome + " " + cognome + " ha prenotato un viaggio <br><br>";
    s += "con partenza a " + part + " <br><br>";
    s += "arrivo a " + dest + " <br><br>";
    s += "il viaggio avverrà il " + gp + "del mese di " + mp + " dell'anno " + ap + "<br><br>"
    s += "congratulazioni e buon viaggio";
    document.getElementById("riepilogo").innerHTML = s;

}

function Ritorna(){ //bottone per tornare all'inizio
    window.location.href = "Inserimento.html";
}
