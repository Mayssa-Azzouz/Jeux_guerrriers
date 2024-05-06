/*const guerrierNormal = new Guerrier(10, 100);
const nain = new Nain();
const elfe = new Elfe();
const chefNain = new ChefNain();
const chefElfe = new ChefElfe();*/

const chateauBleu = new Chateau();
const chateauRouge = new Chateau();

const plateau = new Plateau();
        //pour test
        
      btn = document.getElementById("btnEntrainer");


btn.addEventListener('click', ()=>{
       chateauBleu.entrainer();
       chateauRouge.entrainer();
       plateau.ajouterGuerrier(chateau,0);
        console.log("longeur file",chateau.fileAttente.length);
        console.log("longeur file",chateau.fileAttente);
        console.log("ressources",chateau.ressources);
        console.log("le plateau",plateau.carreaux);
        console.log("longeur file",chateau.fileAttente);
         plateau.afficherGuerriers(0);
        updateWaitingList();
        plateau.deplacerGuerriers();
        /*for (let i = 0; i < plateau.carreaux.length; i++) {
                plateau.afficherGuerriers(i);
            }*/
       
        




})


//chateau.fileAttente = [{elfe , entrainement : 2} ,{elfe , entrainement: 2},{elfe ,entrainement: 2}]

// Exemple d'utilisation : calculer les dégâts infligés par un guerrier

console.log('Liste de guerriers' , chateau.guerriersNovices) ;
//chateau.ajouterGuerrierAFileAttente(selectedWarriors);
console.log('file dattente' , chateau.fileAttente);
console.log('file dattente avant entrainement' , chateau.fileAttente);
chateau.entrainer();
console.log('file dattente' , chateau.fileAttente);
console.log('guerrier novices' , chateau.guerriersNovices);
console.log('ressources' , chateau.ressources);
plateau.ajouterGuerrier(chateau,0);
plateau.afficher()



