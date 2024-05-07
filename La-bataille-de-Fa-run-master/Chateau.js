class Chateau {
    constructor() {
        this.ressources = 3;
        this.guerriersNovices = [];
        this.fileAttente = [];
        this.equipe = [];
        this.initialiserGuerriers();

    }

    //Initialiser l'armé
    initialiserGuerriers() {
        for (let i = 0; i < 4; i++) {
            this.guerriersNovices.push({guerrier: new Nain(), entrainement: 1});
            this.guerriersNovices.push({guerrier: new Elfe(), entrainement: 2});
        }
        this.guerriersNovices.push({guerrier: new ChefNain(), entrainement: 3});
        this.guerriersNovices.push({guerrier: new ChefElfe(), entrainement: 4});
        console.log(this.fileAttente);
     

    }

    entrainer() {
        let i = 0 ;
        console.log("longeur file",this.fileAttente.length);
        while (i < this.fileAttente.length  && this.ressources > 0) {
            //let guerrier = this.fileAttente.shift(); // Retire le premier guerrier de la file d'attente
            do{
                this.ressources -- ;
                this.fileAttente[i].entrainement -- ;
                console.log(i + this.fileAttente[i] + this.fileAttente[i].entrainement)
                //decrement lel valeur entrainement de l'element -- 

            }while ( this.fileAttente[i].entrainement > 0 && this.ressources > 0 );
            i++;
        }
        
        if (this.ressources == 0) {
            console.log("Ressources épuisées !");
        }
    }

}

