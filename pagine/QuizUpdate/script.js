let RispostaDomanda2 = ["1","2","4","256"]
let Risposte = ["SQL","2","dinamiche","void","char","byte"]
let p=0;

function Riempi(){
    let menudati = document.getElementById("risposta2")
    let t ="";
    for(let i=0;i<RispostaDomanda2.length;i++)
    {
        t+= "<option>"+RispostaDomanda2[i]+"</option>";
    }
    menudati.innerHTML = t;
}

function prossimaPagina1(){
    let a = document.getElementById("risposta1").value;
    setCookie("risposta1", a, 1);
    window.location.href = "domanda2.html";
}

function prossimaPagina2(){
    let b = document.getElementById("risposta2").value;
    setCookie("risposta2", b, 1);
    window.location.href = "domanda3.html";
}

function prossimaPagina3(){
    // Recuperiamo gli elementi correttamente tramite ID (stringa)
    let sceltaStatica = document.getElementById("statiche");
    let valoreDaSalvare = "";

    if(sceltaStatica && sceltaStatica.checked){
        valoreDaSalvare = "statiche";
    } else {
        valoreDaSalvare = "dinamiche";
    }

    setCookie("risposta3", valoreDaSalvare, 1);
    window.location.href = "domanda4.html";
}

function prossimaPagina4(){
    
    let tipo = document.querySelectorAll(".ciao")
    if (tipo[0] != "integer" && tipo[1] != "integer" && tipo[2] != "integer"){
        setCookie("risposta4", "giusta",1)
    } else{
        setCookie("risposta4", "sbagliata", 1);
    }
    
    window.location.href = "domanda5.html";
}

function prossimaPagina5(){
    setCookie("risposta5", document.getElementById("risposta5").value,1);
    window.location.href = "riepilogo.html";
}

function setCookie(nome, valore, giorni){
    let data = new Date();
    data.setTime(data.getTime() + (giorni * 24 * 60 * 60 * 1000));
    document.cookie = nome + "=" + encodeURIComponent(valore) + ";expires=" + data.toUTCString() + ";path=/";

}

function getCookie(nome){
    let cookies = document.cookie.split(";");
    for (let i = 0; i < cookies.length; i++){
        let c = cookies[i].trim();
        if(c.startsWith(nome+"=")){
            return decodeURIComponent(c.substring(nome.length+1))
        }
    }
    return "";
}

function Riepilogo(){
    let risp1 = getCookie("risposta1")
    let scritto = [];
    
    if(risp1 == Risposte[0]){
        scritto.push("giusta");
    } else{
        scritto.push("sbagliata");
    }

    let risp2 = getCookie("risposta2");

    if(risp2 == RispostaDomanda2[1]){
        scritto.push("giusta");
    } else{
        scritto.push("sbagliata");
    }

    let risp3 = getCookie("risposta3");
    if (risp3 == "dinamiche"){
        scritto.push("giusta");
    } else{
        scritto.push("sbagliata");
    }

    let risp4 = getCookie("risposta4");

    let risp5 = getCookie("risposta5");
    if(risp5 == "byte"){
        scritto.push("giusta");
    } else{
        scritto.push("sbagliata");
    }

    let s = "";
    s += "risposta 1: " + scritto[0] + "<br>";
    s += "risposta 2: " + scritto[1] + "<br>"
    s += "risposta 3: " + scritto[2] + "<br>"
    s += "risposta 4: " + risp4 + "<br>"
    s += "risposta 5: " + scritto[3] + "<br>"
    document.getElementById("ciao").innerHTML = s;

}

