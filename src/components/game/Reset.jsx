export default function Reset(){
    return (
    <>
        <button class="reset" onClick={(e) => toReset(e)}>Reset</button>
        <p id="blue" class="case blue">blue</p>
        <p id="red" class="case red">red</p>
        <p id="tie" class="case cochee"></p>
    </>
    );
}

function toReset(event) {
    event.preventDefault();
    const elements1 = document.querySelectorAll('.blue');
    const elements2 = document.querySelectorAll('.red');
    const blueDefault = document.querySelector('#blue');
    const redDefault = document.querySelector('#red');
    const winblue = document.querySelector('.winblue');
    const winred = document.querySelector('.winred');
    const egalite = document.querySelector('.tie');
    const joueur1 = document.querySelector('.joueur1');
    const joueur2 = document.querySelector('.joueur2');
    const tour = document.querySelector('.tour');
    
    elements1.forEach((element) => {
      element.classList.remove('blue');
      element.classList.remove('cochee');
    });
    elements2.forEach((element) => {
      element.classList.remove('red');
      element.classList.remove('cochee');
    });

    blueDefault.classList.add('blue');
    redDefault.classList.add('red');
    winblue.classList.add("none");
    winred.classList.add("none");
    winred.classList.remove('win');
    winblue.classList.remove('win');
    joueur1.classList.remove("none");
    joueur2.classList.add("none");
    egalite.classList.add("none");
    tour.classList.remove("none");
}