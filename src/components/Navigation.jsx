import React, { useState } from 'react';
import DownloadPage from './DownloadPage';

export default function Navigation(){
    const [compt, setCompt] = useState(0);

    return (
        <>
            <main className="App-header"> 
                <DownloadPage compt={compt}/>
            </main>
            <nav>
                <ul>
                    <li><button onClick={(e) => bouttonSelectionnee(e, setCompt(0))}><i class="gg-games selectionne"></i></button></li>
                    <li><button onClick={(e) => bouttonSelectionnee(e, setCompt(1))}><i class="gg-layout-list"></i></button></li>
                    <li><button onClick={(e) => bouttonSelectionnee(e, setCompt(2))}><i class="gg-info"></i></button></li>
                </ul>
            </nav>
        </>
    );
}

function bouttonSelectionnee(event){
    event.preventDefault();
    const element = event.target;
    const autreElement = document.querySelector('.selectionne');
    if(element != autreElement && !(element.classList.contains(''))){
        element.classList.add('selectionne');
        autreElement.classList.remove('selectionne');
    }
}