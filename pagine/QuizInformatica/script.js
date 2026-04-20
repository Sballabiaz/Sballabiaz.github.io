let Mesi = ["Gennaio ", "Febbraio" ,"Marzo","Aprile","Maggio","Giugno","Luglio","Agosto","Settembre","Ottobre","Novembre","Dicembre" ]
let RispostaDomanda2 = ["1","2","4","256"]
let Risposte = ["SQL","2","dinamiche","void","char","byte"]
let p=0;
function riempiMese()
{
  let menuMesi = document.getElementById("comboBoxMesi")
  let s ="";
  for(let i=0;i<Mesi.length;i++)
  {
      s+= "<option>"+Mesi[i]+"</option>";
  }
  menuMesi.innerHTML = s;
}
function riempidomanda2()
{
  let menudati = document.getElementById("risposta2")
  let s ="";
  for(let i=0;i<RispostaDomanda2.length;i++)
  {
      s+= "<option>"+RispostaDomanda2[i]+"</option>";
  }
  menudati.innerHTML = s;
}

function stampaPunteggio()
{

   let r1= document.getElementById("risposta1").value;
   if(r1==="SQL")
   {
    p += 1;
   }
   
   let r2= document.getElementById("risposta2").value;
   if(r2==="2")
   {
    p += 1;
   }

   let r3= document.getElementById("dinamiche");
   if(r3.checked)
   {
    p += 1;
   }

   let r4_1 = document.getElementById("check1");
   let r4_2 = document.getElementById("check2");
   let r4_3 = document.getElementById("check3");
   if(r4_1.checked && !r4_2.checked && r4_3.checked)
   {
    p += 1;
   }

   let r5 = document.getElementById("risposta5").value;
   if(r5==="byte")
   {
    p +=1;
   }



   let punti= document.getElementById("txtPunteggio");
   punti.value = p;
}

/*Utente con punteggio comunica in una casella di testo il codice del test elaborato (3 caratteri del cognome, 3 del nome, 3 del mese e 2 dell’anno) e il punteggio (10 punti per ogni risposta esatta) */
function stampaPunteggioUtente()
{
    let s ="";
    let cognome = document.getElementById("textBoxCognome").value;
    let nome = document.getElementById("textBoxNome").value;
    let mese = document.getElementById("comboBoxMesi").value;
    let anno = document.getElementById("textBoxAnno").value;

     if(cognome==="" || nome==="" || mese==="" || anno==="")
     {
        s="Dati non inseriti";
        let stringaFinale= document.getElementById("txtPunteggio2");
        stringaFinale.value = s;
        return;
     }
    for(let i=0;i<3;i++)
    {
       s+= cognome[i];
    }
    for(let i=0;i<3;i++)
    {
       s+= nome[i];
    }
    for(let i=0;i<3;i++)
    {
       s+= mese[i];
    }
    for(let i=0;i<2;i++)
    {
       s+= anno[i+2];
    }
    s+=p;

    let stringaFinale= document.getElementById("txtPunteggio2");
    stringaFinale.value = s;
}


