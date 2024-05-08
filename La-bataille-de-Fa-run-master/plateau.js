var position_Combat = 0 ;
const dep_rouge =  1 ;
const dep_bleu = -1 ;

class Plateau {
    constructor() {
        this.carreaux = [[], [], [], [], []];
    }

    ajouterGuerrier(chateau, index) {
        for (let i = 0; i < chateau.fileAttente.length; i++) {
            if (chateau.fileAttente[i].entrainement === 0) {
                chateau.equipe.push(chateau.fileAttente[i].guerrier);
                chateau.fileAttente.splice(i, 1);
              //  console.log("equipe" , chateau.equipe);
                i--;
            }
        }
        this.carreaux[index].push(chateau.equipe);
      //  console.log('carreauuuu',this.carreaux);

    }


    retirerGuerrier(index) {
        return this.carreaux[index].pop();
    }



    afficherGuerriers(index) {
        let carreauDiv = document.getElementById(`carreau-${index}`);
        carreauDiv.innerHTML = '';

        for (let guerrier of this.carreaux[index]) {
          if(guerrier != null){
            for (let i = 1; i < guerrier.length ; i++) {
                let guerrierImg = document.createElement('img');
                guerrierImg.src = guerrier[i].image; 
                guerrierImg.alt = guerrier[i].type; 
                carreauDiv.appendChild(guerrierImg);
            }
           
          }else{
            
          }
        } 

        console.log('le carreau',this.carreaux[index]);
    }

    afficherDepGuerriers(index,dep){
        this.afficherGuerriers(index);
        let carreauDiv2 = document.getElementById(`carreau-${index + dep}`);
        while(carreauDiv2.firstChild){
            carreauDiv2.removeChild(carreauDiv2.firstChild);
        }
    }


     
    
    deplacerGuerriers() {
    
        let indexBleu = 1;
        let indexRouge = this.carreaux.length - 2;
        var combat =  false ;
        while ( combat == false ){
           
        // Déplacer un guerrier bleu vers la droite
           
//dep bleu
        if(  (  Array.isArray(this.carreaux[indexBleu][0])  )|| ( Array.isArray(this.carreaux[indexBleu][1]))){
            if ( this.carreaux[indexBleu][0][0]=="rouge"||this.carreaux[indexBleu][1][0]=="rouge"){
                combat = true ;
                position_Combat = indexBleu ;
            }
        }

            this.carreaux[indexBleu].push(this.carreaux[indexBleu-1][0]);
            this.carreaux[indexBleu-1] = [];
            plateau.afficherDepGuerriers(indexBleu, -1);
            indexBleu++;

//dep rouge
            if(  (  Array.isArray(this.carreaux[indexRouge][0])  )|| ( Array.isArray(this.carreaux[indexRouge][1]))){
                if ( this.carreaux[indexRouge][0][0]=="bleu"||this.carreaux[indexRouge][1][0]=="bleu"){
                    combat = true ;
                    position_Combat = indexRouge ;
                }
            }
    
                this.carreaux[indexRouge].push(this.carreaux[indexRouge+1][0]);
                this.carreaux[indexRouge+1] = [];
                plateau.afficherDepGuerriers(indexRouge,1) ;        
                indexRouge -- ;
    
    
        }
      
       
     
        
    }
    

    Attaquer(equipeAttaquante,equipeAttaquee){
        try {
            if (equipeAttaquante.length > 1 && equipeAttaquee.length > 1)
                {
                  console.log('les deux equipes sont remplis !');
                  var degatPartage = 0 ;
                  for (let i = 1 ; i < equipeAttaquee.length; i++) {
                    console.log('pv de ', i , 'de l equipe attaquee :' , equipeAttaquee[i].pv) ;
                      let j = 1 ;
                      while ( equipeAttaquee[i].pv > 0 && equipeAttaquante.length > j){
                        console.log('l elemet', j ,'de lequipe attaquante frape' ,i)
                         let degat = equipeAttaquante[j].calculerDegats();
                         console.log('le degat que va subir l elem',j,'de la liste attaquante =',degat);
                              if ( degatPartage != 0 ) { // degatPartage <> 0
                                  degat += degatPartage ;
                              }
                              if ( equipeAttaquee[i].pv <= degat ) { // degat = 50  et equipeAttaquee[i].PV = 20
                                  degatPartage = degat -  equipeAttaquee[i].pv;
                                  equipeAttaquee.splice(i,1);
                              }else{ // degat < equipeAttaquee[i].PV 
                                equipeAttaquee[i].pv =   equipeAttaquee[i].pv - degat ;   
                                console.log('point de vie restante :',equipeAttaquee[i].pv)     
                              }
                          console.log('degatPartage',degatPartage);
                          console.log('equipe bleu',equipeAttaquante);
                         console.log('equipe rouge',equipeAttaquee);
                          j++;
                       }
    
                       
                  }
                 
          }  
          
            
        } catch (error) {
            
        }
               
    }

    Tour(equipe_bleu,equipe_rouge){
              do {
                this.Attaquer(equipe_bleu,equipe_rouge);
                console.log('equipe bleu',equipe_bleu);
                console.log('equipe rouge',equipe_rouge);  
                this.Attaquer(equipe_rouge,equipe_bleu);
                console.log('tour en cours!');
              } while (equipe_bleu.length > 1 && equipe_rouge.length > 1);
          
              console.log('tour finie!');    
              this.afficherGuerriers(position_Combat, -1);   
    }
          
    


    
    
}