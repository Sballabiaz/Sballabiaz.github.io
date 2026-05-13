let studenti = [];
let datisalvati = localStorage.getItem("studenti");

if (datisalvati != null) {
    studenti = JSON.parse(datisalvati);
}

mostraStudenti();

function aggiungiStudente() {

    let nome = document.getElementById("nome").value;
    let cognome = document.getElementById("cognome").value;
    let eta = document.getElementById("eta").value;

    if (nome == "" || cognome == "" || eta == "") {
        alert("Compila tutti i campi!");
        return;
    }

    let nuovoStudente = {
        nome: nome,
        cognome: cognome,
        eta: eta
    };

    studenti.push(nuovoStudente);
    
    localStorage.setItem("studenti", JSON.stringify(studenti));
    mostraStudenti();
    
    document.getElementById("nome").value = "";
    document.getElementById("cognome").value = "";
    document.getElementById("eta").value = "";
}

function mostraStudenti() {
    let corpo = document.getElementById("corpoTabella");
    corpo.innerHTML = "";

    for (let i = 0; i < studenti.length; i++) {
        let riga = `
            <tr>
                <td>${studenti[i].nome}</td>
                <td>${studenti[i].cognome}</td>
                <td>${studenti[i].eta}</td>
                <td>
                    <button class="btn btn-danger" onclick="eliminaStudente(${i})">
                        Elimina
                    </button>
                </td>
            </tr>`;
        corpo.innerHTML += riga;
    }
}

function eliminaStudente(i) {
    
    studenti.splice(i, 1);
    localStorage.setItem("studenti", JSON.stringify(studenti));
    mostraStudenti();
}







