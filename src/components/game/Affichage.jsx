export default function Affichage(){
    return (
        <>
            <h1 id="page1">Morpion</h1>
            <p class="tour">Au tour du joueur <span class="joueur1">1</span><span class="none joueur2">2</span></p>
            <p class="none winblue joueur1">Les bleus ont gagnés</p>
            <p class="none winred joueur2">Les rouges ont gagnés</p>
            <p class="none tie">Pas de gagnant</p>
        </>
    );
}