class Plateau {
    constructor() {
        this.carreaux = Array(5).fill().map(() => []);
    }

    ajouterGuerrier(chateau, index) {
        for (let i = 0; i < chateau.fileAttente.length; i++) {
            if (chateau.fileAttente[i].entrainement === 0) {
                this.carreaux[index].push(chateau.fileAttente[i]);
                chateau.fileAttente.splice(i, 1);
                i--;
            }
        }
    }

    retirerGuerrier(index) {
        return this.carreaux[index].pop();
    }


    afficherGuerriers(index) {
        let carreauDiv = document.getElementById(`carreau-${index}`);

        carreauDiv.innerHTML = '';

        for (let guerrier of this.carreaux[index]) {
            let guerrierImg = document.createElement('img');
            guerrierImg.src = guerrier.guerrier.image; 
            guerrierImg.alt = guerrier.guerrier.type; 

            carreauDiv.appendChild(guerrierImg);
        } 
    }

        deplacerGuerriersBleu() {
            let index = 0;
            //condition a changer
            while (index < 2) {
                this.carreaux[index + 1] = this.carreaux[index];
                this.carreaux[index] = [];
                index++;
            }  
         
        }
    
        deplacerGuerriersRouge() {
            let index = 4;
            //condition a changer
            while (index > 3 ) {
                this.carreaux[index - 1] = this.carreaux[index];
                this.carreaux[index] = [];
                index--;
    
         
        }
        
    }
}
