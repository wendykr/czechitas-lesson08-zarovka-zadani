console.log('funguju!');

/*
const changeBulb = () => {
    
    const bulbElm = document.querySelector('.bulb');
    bulbElm.classList.add('bulb--on');
}

window.addEventListener('keydown', changeBulb);
*/

const bulbElm = document.querySelector('.bulb');
let actualBulb = true;

const changeBulb = () => {
    
    if(actualBulb == true) {
        bulbElm.classList.add('bulb--on');
        actualBulb = false;
    } else {
        bulbElm.classList.remove('bulb--on');
        actualBulb = true;
    }
}

window.addEventListener('keydown', changeBulb);