// div waitingList
const waitingList = document.getElementById('waitingList');

// liste d'attente
let selectedWarriors = [];

// Mettre à jour l'affichage de la liste d'attente une première fois au chargement de la page
updateWaitingList();

// Fonction pour mettre à jour l'affichage de la liste d'attente
function updateWaitingList() {
    waitingList.innerHTML = ''; // Effacer la liste actuelle
    // Parcourir les guerriers sélectionnés et les ajouter à la liste d'attente
    chateau.fileAttente.forEach(guerrier => {
        // Créer un élément img pour afficher l'image du guerrier
        const imageElement = document.createElement('img');
        imageElement.src = guerrier.guerrier.image; // Définir le chemin de l'image du guerrier
        console.log("image de nain",guerrier);
    imageElement.alt = `Image de ${guerrier.type}`; // Définir un texte alternatif pour l'image
        imageElement.addEventListener('click', () => {
            // Supprimer le guerrier de la liste d'attente lorsque son image est cliquée
            const index = chateau.fileAttente.indexOf(guerrier);
            if (index !== -1) {
                chateau.fileAttente.splice(index, 1);
                updateWaitingList();

                // Ajouter le guerrier à la carte chateau.guerriers
                chateau.guerriersNovices.push(guerrier, 0);

                
                // Créer un nouvel élément de liste pour le guerrier dans le conteneur des guerriers
                const warriorItem = document.createElement('div');
                const imageElement = document.createElement('img');
                imageElement.src = guerrier.guerrier.image;
                imageElement.alt = `Image de ${guerrier.constructor.type}`;
                warriorItem.appendChild(imageElement);
                
                // Ajouter un gestionnaire d'événements pour gérer la sélection du guerrier dans la liste des guerriers
                warriorItem.addEventListener('click', () => {
                    // Ajouter le guerrier à la liste d'attente
                    chateau.fileAttente.push(guerrier);
                    updateWaitingList(); // Mettre à jour l'affichage de la liste d'attente
                    
                    // Supprimer le guerrier de la carte chateau.guerriers
                    chateau.guerriersNovices.splice(index, 1);


                    // Supprimer l'élément de la liste des guerriers
                    warriorsContainer.removeChild(warriorItem);
                });
                
                // Ajouter l'élément de liste à la liste des guerriers
                warriorsContainer.appendChild(warriorItem);
            }

        });
        waitingList.appendChild(imageElement); // Ajouter l'élément img à la liste d'attente
        
    });
}



// div des geurriers novices
const warriorsContainer = document.getElementById('warriorsContainer');

chateau.guerriersNovices.forEach((guerrier) => {

    // Créer guerrier
    const warriorItem = document.createElement('div');    
    const imageElement = document.createElement('img');
    imageElement.src = guerrier.guerrier.image; 
   imageElement.alt = `Image de ${guerrier.guerrier.type}`;
    warriorItem.appendChild(imageElement); 
    
    // click guerrier novice
    warriorItem.addEventListener('click', () => {
        // Vérifier si le guerrier est déjà sélectionné
        const index = chateau.fileAttente.indexOf(guerrier);
        if (index !== -1) {
            // Le guerrier est déjà sélectionné, donc le désélectionner
            chateau.fileAttente.splice(index, 1);
            warriorItem.classList.remove('selected');
        } else {
            // Vérifier si moins de 10 guerriers sont déjà sélectionnés
            if (chateau.fileAttente.length < 10) {
                // Le guerrier n'est pas encore sélectionné et moins de 10 guerriers sont déjà sélectionnés, donc le sélectionner
                chateau.fileAttente.push(guerrier);
                console.log("file dattente",chateau.fileAttente);

                warriorItem.classList.add('selected');
                
                // Supprimer l'élément de la liste des guerriers affichée dans le conteneur warriorsContainer
                warriorsContainer.removeChild(warriorItem);
                chateau.guerriersNovices.splice(index, 1);
                                console.log("la liste des guerriers", chateau.guerriersNovices);

            }
        }
        // Mettre à jour l'affichage de la liste d'attente
        updateWaitingList();
        console.log("Liste d'attente des guerriers :", chateau.fileAttente);

        //console.log("Liste d'attente des guerriers :", chateau.fileAttente);

    });
    // Ajouter l'élément de liste au conteneur des guerriers
    warriorsContainer.appendChild(warriorItem);

});

// click la liste d'attente
waitingList.addEventListener('click', (event) => {
    const clickedElement = event.target;
    const warriorIndex = chateau.fileAttente.findIndex(warrior => warrior.image === clickedElement.src);
    
    // Vérifier si l'élément cliqué est une image de guerrier dans la liste d'attente
    if (warriorIndex !== -1) {
        const warrior = chateau.fileAttente[warriorIndex];
        
        // Supprimer le guerrier de la liste d'attente
        chateau.fileAttente.splice(warriorIndex, 1);
        updateWaitingList(); // Mettre à jour l'affichage de la liste d'attente
        
        // Ajouter le guerrier à la carte chateau.guerriers
        chateau.guerriersNovices.push(warrior,0) ;
        
        // Créer un nouvel élément de liste pour le guerrier dans le conteneur des guerriers
        const warriorItem = document.createElement('div');
        const imageElement = document.createElement('img');
        imageElement.src = warrior.image;
        imageElement.alt = `Image de ${warrior.constructor.type}`;
        warriorItem.appendChild(imageElement);
        
        // Ajouter un gestionnaire d'événements pour gérer la sélection du guerrier dans la liste des guerriers
        warriorItem.addEventListener('click', () => {
            // Ajouter le guerrier à la liste d'attente
            chateau.fileAttente.push(warrior);
            updateWaitingList(); // Mettre à jour l'affichage de la liste d'attente
            
            // Supprimer le guerrier de la carte chateau.guerriersNovices
            const index = chateau.guerriersNovices.indexOf(warrior);
            if (index !== -1) {
                chateau.guerriersNovices.splice(index, 1);
            }
            // Supprimer l'élément de la liste des guerriers
            warriorsContainer.removeChild(warriorItem);
        });
        
        // Ajouter l'élément de liste à la liste des guerriers
        warriorsContainer.appendChild(warriorItem);
    }
});
