let studenti = [];
let datisalvati = localStorage.getItem("studenti");
if (datisalvati != null){
    studenti = JSON.parse(datisalvati);
}

mostraStudenti();

function aggiungiStudente(){
    
    let nome = document.getElementById("nome").value;

    let regexNome = /^[a-zA-Z\s]+$/;

    if(!regexNome.test(nome)){
        alert("il nome non è valido");
        return;
    }

    studenti.push(nome);
    localStorage.setItem("studenti", JSON.stringify(studenti));
    mostraStudenti();
    document.getElementById("nome").value = "";

}

function mostraStudenti(){

    let lista = document.getElementById("listaStudenti");
    lista.innerHTML = "";
    
    for (let i = 0; i < studenti.length; i++){
        let p = document.createElement("p");
        p.innerHTML = studenti[i];
        let button = document.createElement("button");
        button.textContent = "elimina";
        button.onclick = function () {eliminaStudente(i)};
        p.appendChild(button);
        lista.appendChild(p);
    }
}


function eliminaStudente(i){
    
    studenti.splice(i, 1);
    localStorage.setItem("studenti", JSON.stringify(studenti));
    mostraStudenti();


}