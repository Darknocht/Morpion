import React, {useEffect} from 'react';
import Affichage from './game/Affichage';
import Reset from './game/Reset';
import Morpion from './game/Morpion';

export default function DownloadPage({compt}) {
    let titre = "Morpion";

    useEffect(() => {
        document.title = titre
    }, [titre]);
    
    if (compt == 0) {
        titre = "Morpion";
        return (
            <>
                <Affichage />
                <Morpion />
                <Reset />
            </>
        );
    } 
    else if(compt == 1){
        titre = "Classement";
        return (
            <>
                <h1>Classement</h1>
                <form>
                    <label for="nom">Entrez votre nom:</label>
                    <input type="text" id="nom"></input>
                    <label for="rouge">rouge</label>
                    <input type="radio" id="rouge" name="couleur"></input>
                    <label for="bleu">bleu</label>
                    <input type="radio" id="bleu" name="couleur"></input>
                </form>
                <article>
                    <h2>Numéro</h2>
                    <p>Nom</p>
                </article>
            </>
        );
    }
    else if(compt == 2){
        titre = "Paramètres";
        return (
            <>
                <h1>Paramètres</h1>
                <ul>
                    <li>Changer thème</li>
                    <li>Changer la langue</li>
                    <li>etc</li>
                </ul>
            </>
        );
    }
    else {
        return (
            <>
                <h1>Erreur 404</h1>
            </>
        );
    }
}