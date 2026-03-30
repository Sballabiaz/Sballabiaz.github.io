function InizializzaParagrafi(){
    
    let titoli = document.querySelectorAll(".titolo");
    
    for(let i = 0; i < titoli.length; i++){
        //aggiunge evento legato al click
        titoli[i].addEventListener("click", gestisciClickTitolo);
    }
}

function gestisciClickTitolo(){
    
    let contenuto = this.nextElementSibling; //prende il prossimo elemento del dom rispetto a quello che clicco e lo metto in contenuto 
    
    if(contenuto.classList.contains("visible")){
        contenuto.classList.remove("visible");
    } else{
        
        let tuttiContenuti = documento.querySelectorAll(".contenuto");
        
        for(let i = 0; i < tuttiContenuti.length; i++){
            tuttiContenuti[i].classList.remove("visible");
        }

        contenuto.classList.add("visible")
    }
}

document.addEventListener("DOMContentLoaded", InizializzaParagrafi)