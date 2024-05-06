// Constantes définissant les caractéristiques de base des guerriers
const FORCE_BASE = 10;
const PV_BASE = 100;
const IMAGE_NAIN ='nain.png';
const IMAGE_CHEF_NAIN ='nain.png';
const IMAGE_ELFE='elfe.png';
const IMAGE_CHEF_ELFE='chefelfe.png';



//Guerrier
class Guerrier {

    constructor(force, pv , image,type) {
        this.force = force;
        this.pv = pv;
        this.image = image; 
        this.type=type;
    }

    // Méthode pour calculer les dégâts
    calculerDegats() {
        let degats = 0;

        //Lancement de 3 dés 
        for (let i = 0; i < this.force; i++) {
            degats += Math.floor(Math.random() * 3) + 1; // Lancer un dé à 3 faces
        }

        return degats;
    }

}

//Nain 
class Nain extends Guerrier {
    constructor() {
        super(FORCE_BASE, PV_BASE ,IMAGE_NAIN,"Nain"); 
    }

    calculerDegats() {
        return super.calculerDegats() / 2; 
    }
}

//Elfe
class Elfe extends Guerrier {
    constructor() {
        super(FORCE_BASE * 2, PV_BASE ,IMAGE_ELFE,"Elfe");
    }
}

//ChefNain
class ChefNain extends Nain {
    constructor() {
        super(FORCE_BASE, PV_BASE,IMAGE_CHEF_NAIN,"ChefNain" ); 
    }

    calculerDegats() {
        return super.calculerDegats() / 2; 
    }
}

class ChefElfe extends Elfe {
    constructor() {
        super(FORCE_BASE * 4 , PV_BASE ,IMAGE_CHEF_ELFE,"ChefElfe"); 
    }



    
}