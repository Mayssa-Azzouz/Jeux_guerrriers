
//les deux chateau
const chateauBleu = new Chateau();
const chateauRouge = new Chateau();

chateauBleu.equipe[0]="bleu";
chateauRouge.equipe[0]="rouge";

//le plateau
const plateau = new Plateau();

// div des geurriers novices
const warriorsContainerBleu = document.getElementById('warriorsContainerBleu');
const warriorsContainerRouge = document.getElementById('warriorsContainerRouge');

// div waitingList
const waitingListBleu = document.getElementById('waitingListBleu');
const waitingListRouge = document.getElementById('waitingListRouge');

//boutons d'entrainement
btnEntrainerRouge = document.getElementById("btnEntrainerRouge");
btnEntrainerBleu = document.getElementById("btnEntrainerBleu");


// Fonction pour mettre à jour l'affichage de la liste d'attente
function updateWaitingList(waitingList,warriorsContainer,chateau) {
    waitingList.innerHTML = ''; 
    chateau.fileAttente.forEach(guerrier => {
        const imageElement = document.createElement('img');
        imageElement.src = guerrier.guerrier.image; 
        console.log("image de nain",guerrier);
        imageElement.alt = `Image de ${guerrier.type}`; 
        imageElement.addEventListener('click', () => {
            const index = chateau.fileAttente.indexOf(guerrier);
            if (index !== -1) {
                chateau.fileAttente.splice(index, 1);
                updateWaitingList(waitingList,warriorsContainer,chateau);
                chateau.guerriersNovices.push(guerrier, 0);

                const warriorItem = document.createElement('div');
                const imageElement = document.createElement('img');
                imageElement.src = guerrier.guerrier.image;
                imageElement.alt = `Image de ${guerrier.constructor.type}`;
                warriorItem.appendChild(imageElement);
                
                warriorItem.addEventListener('click', () => {
                    chateau.fileAttente.push(guerrier);
                    updateWaitingList(waitingList,warriorsContainer,chateau); // Mettre à jour l'affichage de la liste d'attente
                    
                    chateau.guerriersNovices.splice(index, 1);


                    warriorsContainer.removeChild(warriorItem);
                });
                
                warriorsContainer.appendChild(warriorItem);
            }

        });
        waitingList.appendChild(imageElement); 
        
    });
}

//chateau bleu
chateauBleu.guerriersNovices.forEach((guerrier) => {

    const warriorItem = document.createElement('div');    
    const imageElement = document.createElement('img');
    imageElement.src = guerrier.guerrier.image; 
   imageElement.alt = `Image de ${guerrier.guerrier.type}`;
    warriorItem.appendChild(imageElement); 
    
    // click guerrier novice
    warriorItem.addEventListener('click', () => {
        const index = chateauBleu.fileAttente.indexOf(guerrier);
        if (index !== -1) {
            chateauBleu.fileAttente.splice(index, 1);
            warriorItem.classList.remove('selected');
        } else {
            if (chateauBleu.fileAttente.length < 10) {
                chateauBleu.fileAttente.push(guerrier);
                console.log("file dattente",chateauBleu.fileAttente);

                warriorItem.classList.add('selected');
                
                warriorsContainerBleu.removeChild(warriorItem);
                chateauBleu.guerriersNovices.splice(index, 1);
                                console.log("la liste des guerriers", chateauBleu.guerriersNovices);

            }
        }
        updateWaitingList( waitingListBleu ,warriorsContainerBleu,chateauBleu);
        console.log("Liste d'attente des guerriers bleu:", chateauBleu.fileAttente);

        //console.log("Liste d'attente des guerriers :", chateau.fileAttente);

    });
    warriorsContainerBleu.appendChild(warriorItem);


});



// Mettre à jour l'affichage de la liste d'attente une première fois au chargement de la page
updateWaitingList(waitingListBleu,warriorsContainerBleu,chateauBleu);
updateWaitingList(waitingListRouge,warriorsContainerRouge,chateauRouge);




//chateau rouge
chateauRouge.guerriersNovices.forEach((guerrier) => {

    // Créer guerrier
    const warriorItem = document.createElement('div');    
    const imageElement = document.createElement('img');
    imageElement.src = guerrier.guerrier.image; 
   imageElement.alt = `Image de ${guerrier.guerrier.type}`;
    warriorItem.appendChild(imageElement); 
    
    // click guerrier novice
    warriorItem.addEventListener('click', () => {
        const index = chateauRouge.fileAttente.indexOf(guerrier);
        if (index !== -1) {
            chateauRouge.fileAttente.splice(index, 1);
            warriorItem.classList.remove('selected');
        } else {
            if (chateauRouge.fileAttente.length < 10) {
                chateauRouge.fileAttente.push(guerrier);
                console.log("file dattente des rouges",chateauRouge.fileAttente);

                warriorItem.classList.add('selected');
                
                warriorsContainerRouge.removeChild(warriorItem);
                chateauRouge.guerriersNovices.splice(index, 1);
                                console.log("la liste des guerriers", chateauRouge.guerriersNovices);

            }
        }
        // Mettre à jour l'affichage de la liste d'attente
        updateWaitingList(waitingListRouge ,warriorsContainerRouge,chateauRouge);
        console.log("Liste d'attente des guerriers  rouge:", chateauRouge.fileAttente);

        //console.log("Liste d'attente des guerriers :", chateau.fileAttente);

    });
    warriorsContainerRouge.appendChild(warriorItem);

});

// click la liste d'attente bleu
waitingListBleu.addEventListener('click', (event) => {
    const clickedElement = event.target;
    const warriorIndex = chateauBleu.fileAttente.findIndex(warrior => warrior.image === clickedElement.src);
    
    if (warriorIndex !== -1) {
        const warrior = chateauBleu.fileAttente[warriorIndex];
        
        // Supprimer le guerrier de la liste d'attente
        chateauBleu.fileAttente.splice(warriorIndex, 1);
        updateWaitingList(waitingListBleu,warriorsContainerBleu,chateauBleu); 
        
        chateauBleu.guerriersNovices.push(warrior,0) ;
        
        const warriorItem = document.createElement('div');
        const imageElement = document.createElement('img');
        imageElement.src = warrior.image;
        imageElement.alt = `Image de ${warrior.constructor.type}`;
        warriorItem.appendChild(imageElement);
        
        warriorItem.addEventListener('click', () => {
            chateauBleu.fileAttente.push(warrior);
            updateWaitingList(waitingListBleu,warriorsContainerBleu,chateauBleu); 
            
            const index = chateauBleu.guerriersNovices.indexOf(warrior);
            if (index !== -1) {
                chateauBleu.guerriersNovices.splice(index, 1);
            }
            warriorsContainerBleu.removeChild(warriorItem);
        });
        
        warriorsContainerBleu.appendChild(warriorItem);
    }
});


// click la liste d'attente rouge
waitingListRouge.addEventListener('click', (event) => {
    const clickedElement = event.target;
    const warriorIndex = chateauRouge.fileAttente.findIndex(warrior => warrior.image === clickedElement.src);
    
    if (warriorIndex !== -1) {
        const warrior = chateauRouge.fileAttente[warriorIndex];
        
        chateauRouge.fileAttente.splice(warriorIndex, 1);
        updateWaitingList(waitingListRouge,warriorsContainerRouge,chateauRouge); // Mettre à jour l'affichage de la liste d'attente
        
        chateauRouge.guerriersNovices.push(warrior,0) ;
        
        const warriorItem = document.createElement('div');
        const imageElement = document.createElement('img');
        imageElement.src = warrior.image;
        imageElement.alt = `Image de ${warrior.constructor.type}`;
        warriorItem.appendChild(imageElement);
        
        warriorItem.addEventListener('click', () => {
            chateauRouge.fileAttente.push(warrior);
            updateWaitingList(waitingListRouge,warriorsContainerRouge,chateauRouge); 
            const index = chateauRouge.guerriersNovices.indexOf(warrior);
            if (index !== -1) {
                chateauRouge.guerriersNovices.splice(index, 1);
            }
            warriorsContainerRouge.removeChild(warriorItem);
        });
        
        warriorsContainerRouge.appendChild(warriorItem);
    }
});




btnEntrainerBleu.addEventListener('click', ()=>{
    chateauBleu.entrainer();
    if(chateauBleu.fileAttente.length>0)
        {
    btnEntrainerBleu.style.display = 'none';}

   plateau.ajouterGuerrier(chateauBleu,0);
     console.log("longeur file",chateauBleu.fileAttente.length);
     console.log("longeur file",chateauBleu.fileAttente);
     console.log("ressources",chateauBleu.ressources);
     console.log("le plateau",plateau.carreaux);
     console.log("longeur file",chateauBleu.fileAttente);
     // plateau.afficherGuerriers(0);
    updateWaitingList(waitingListBleu,warriorsContainerBleu,chateauBleu);
    plateau.deplacerGuerriersBleu();
for(let i = 0; i < plateau.carreaux.length; i++) {
             plateau.afficherGuerriers(i);
         
}
})

btnEntrainerRouge.addEventListener('click', ()=>{
     chateauRouge.entrainer();
     if(chateauRouge.fileAttente.length>0)
        {
    btnEntrainerRouge.style.display = 'none';}
     plateau.ajouterGuerrier(chateauRouge,4);
      console.log("longeur file",chateauRouge.fileAttente.length);
      console.log("longeur file",chateauRouge.fileAttente);
      console.log("ressources",chateauRouge.ressources);
      console.log("le plateau",plateau.carreaux);
      console.log("longeur file",chateauRouge.fileAttente);
     //  plateau.afficherGuerriers(4);
      updateWaitingList(waitingListRouge,waitingListRouge,chateauRouge);
      plateau.deplacerGuerriersRouge();
    for (let i = 0; i < plateau.carreaux.length; i++) {
              plateau.afficherGuerriers(i);
          }

})


