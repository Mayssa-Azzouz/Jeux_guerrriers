class Plateau {
    constructor() {
        // Initialiser le plateau avec un certain nombre de carreaux, chaque carreau étant une liste vide de guerriers
        this.carreaux = Array(5).fill().map(() => []);
    }

    ajouterGuerrier(chateau, index) {
        // Parcourir la liste d'attente du château
        for (let i = 0; i < chateau.fileAttente.length; i++) {
            // Vérifier si l'entraînement du guerrier est égal à 0
            if (chateau.fileAttente[i].entrainement === 0) {
                // Ajouter le guerrier au carreau spécifié
                this.carreaux[index].push(chateau.fileAttente[i]);
                // Retirer le guerrier de la liste d'attente
                chateau.fileAttente.splice(i, 1);
                // Réduire l'index de 1 car nous venons de retirer un élément de la liste
                i--;
            }
        }
    }

    retirerGuerrier(index) {
        // Retirer un guerrier d'un carreau spécifique
        return this.carreaux[index].pop();
    }

    afficher() {
        // Afficher l'état actuel du plateau
        console.log("le plateau",this.carreaux);
    }




    afficherGuerriers(index) {
        // Obtenir le carreau correspondant dans le DOM
        let carreauDiv = document.getElementById(`carreau-${index}`);

        // Effacer le contenu précédent du carreau
        carreauDiv.innerHTML = '';

        // Parcourir tous les guerriers sur le carreau
        for (let guerrier of this.carreaux[index]) {
            // Créer un nouvel élément img pour le guerrier
            let guerrierImg = document.createElement('img');
            guerrierImg.src = guerrier.guerrier.image; // Définir l'image du guerrier
            guerrierImg.alt = guerrier.guerrier.type; // Définir le texte alternatif de l'image

            // Ajouter l'image du guerrier au carreau
            carreauDiv.appendChild(guerrierImg);
        } 
    }

        deplacerGuerriers() {
            let index = 0;
            // Tant que le carreau suivant est vide et qu'il n'est pas le dernier carreau
            while (index <4) {
                // Déplacer tous les guerriers du carreau actuel au carreau suivant
                this.carreaux[index + 1] = this.carreaux[index];
                this.carreaux[index] = [];
    
                // Passer au carreau suivant
                index++;
            }
         
        }
    
}
