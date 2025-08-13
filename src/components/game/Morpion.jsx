import { useState } from "react";

export default function Morpion(){
  const [comptBlue, setComptBlue] = useState(0);
  const [comptRed, setComptRed] = useState(0);

    function updateBlue(){
        setComptBlue(comptBlue+1);
    }

    function updateRed(){
        setComptRed(comptRed+1);
    }
  var compt = 1;

  function compareClassLists(...elements) {
    if (elements.length < 2) return true; // Pas assez d'éléments pour comparer

    // Convertir les classList en tableaux de chaînes
    const classArrays = elements.map(element => Array.from(element.classList));

    // Fonction pour comparer deux tableaux
    function arraysEqual(arr1, arr2) {
        if (arr1.length !== arr2.length) return false;
        return arr1.every(item => arr2.includes(item));
    }

    // Comparer tous les tableaux de classes
    for (let i = 1; i < classArrays.length; i++) {
        if (!arraysEqual(classArrays[0], classArrays[i])) {
            return false;
        }
    }
    return true;
}

function handleSubmit(event, compt) {
    event.preventDefault();
    const element = event.target; // Assurez-vous que le sélecteur est correct
    const joueur1 = document.querySelector('.joueur1');
    const joueur2 = document.querySelector('.joueur2');

      if(element){ // Vérifiez que l'élément n'est pas null
        if(gagner(event)){
            console.log("Pas de changement, il y a un gagnant")
        }
        else{
          if(element.classList.contains('red') || element.classList.contains('blue')){
            console.log("Pas de changement, la case est déjà cochée");
        }
        else if(joueur1.classList.contains('none')){
          element.classList.add('red');
          //Bug pour égalité
          //element.classList.add('cochee');
          joueur1.classList.remove('none');
          joueur2.classList.add('none');
          gagner(event);
          return tourSuivant(compt);
        }
        else if(joueur2.classList.contains('none')){
          element.classList.add('blue');
          //Bug pour égalité
          //element.classList.add('cochee');
          joueur2.classList.remove('none');
          joueur1.classList.add('none');
          gagner(event);
          return tourSuivant(compt);
        }
        else{
            console.log("erreur");
        }
        }
      } 
      else {
          console.error('Element not found');
      }
  }

  function gagner(event){
    event.preventDefault();
    const element = document.querySelectorAll('.case');
    const blueDefault = document.querySelector('#blue');
    const redDefault = document.querySelector('#red');
    const winblue = document.querySelector('.winblue');
    const winred = document.querySelector('.winred');
    const egalite = document.querySelector('.tie');
    const tour = document.querySelector('.tour');

    if(
      ((winred.classList.contains('win') && !(winblue.classList.contains('win')))
      ||
       (winblue.classList.contains('win') && !(winred.classList.contains('win')))
    )){
      return true;
    }
    else if((compareClassLists(element[0], element[1], element[2], blueDefault)) 
      || (compareClassLists(element[3], element[4], element[5], blueDefault)) 
      || (compareClassLists(element[6], element[7], element[8], blueDefault)) 
      || (compareClassLists(element[0], element[3], element[6], blueDefault))
      || (compareClassLists(element[1], element[4], element[7], blueDefault))
      || (compareClassLists(element[2], element[5], element[8], blueDefault))
      || (compareClassLists(element[0], element[4], element[8], blueDefault))
      || (compareClassLists(element[2], element[4], element[6], blueDefault))
      ){
        console.log("Les bleus ont gagnés");
        winblue.classList.remove("none");
        winblue.classList.add('win');
        tour.classList.add("none");
        updateBlue();
        return true;
    }
    else if((compareClassLists(element[0], element[1], element[2], redDefault)) 
      || (compareClassLists(element[3], element[4], element[5], redDefault)) 
      || (compareClassLists(element[6], element[7], element[8], redDefault)) 
      || (compareClassLists(element[0], element[3], element[6], redDefault))
      || (compareClassLists(element[1], element[4], element[7], redDefault))
      || (compareClassLists(element[2], element[5], element[8], redDefault))
      || (compareClassLists(element[0], element[4], element[8], redDefault))
      || (compareClassLists(element[2], element[4], element[6], redDefault))
      ){
        console.log("Les rouges ont gagnés");
        winred.classList.remove("none");
        winred.classList.add('win');
        tour.classList.add("none");
        updateRed();
        return true;
    }
    else if(verifierEgalite(event)){
        console.log("Pas de gagnant");
        egalite.classList.remove("none");
        tour.classList.add("none");
        return true;
    }
    else{
        return false;
    }
  }

function tourSuivant(compt){
    if(compt % 2 == 0){
      compt = compt - 1;
      return compt;
    }
    else{
      compt = compt + 1;
      return compt;
    }
}

function verifierEgalite(event){
  event.preventDefault();
  const caseRempli = document.querySelectorAll('.case');
  var compt = 0;

  caseRempli.forEach((element) => {
    compt = compt + parseInt(element.classList.length, 10);
  });
  if(compt == 24){
    return true;
  }
  else{
    return false;
  }
}
    return (
    <>
        <p><strong>{comptBlue}</strong> - <strong>{comptRed}</strong></p>
        <table>
          <tr>
            <td><button id="11" class="case" onClick={(e) => handleSubmit(e, compt)}></button></td>
            <td><button id="12" class="case" onClick={(e) => handleSubmit(e, compt)}></button></td>
            <td><button id="13" class="case" onClick={(e) => handleSubmit(e, compt)}></button></td>
          </tr>
          <tr>
            <td><button id="21" class="case" onClick={(e) => handleSubmit(e, compt)}></button></td>
            <td><button id="22" class="case" onClick={(e) => handleSubmit(e, compt)}></button></td>
            <td><button id="23" class="case" onClick={(e) => handleSubmit(e, compt)}></button></td>
          </tr>
          <tr>
            <td><button id="31" class="case" onClick={(e) => handleSubmit(e, compt)}></button></td>
            <td><button id="32" class="case" onClick={(e) => handleSubmit(e, compt)}></button></td>
            <td><button id="33" class="case" onClick={(e) => handleSubmit(e, compt)}></button></td>
          </tr>
        </table>
    </>
    );
}

