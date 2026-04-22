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
    window.location.href = "domanda2.html";
}

function prossimaPagina2(){
    window.location.href = "domanda3.html";
}

function prossimaPagina3(){
    window.location.href = "domanda4.html";
}

function prossimaPagina4(){
    window.location.href = "domanda5.html";
}

function prossimaPagina5(){
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

