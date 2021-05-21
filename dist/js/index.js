'use strict';

console.log('it works!');


const pacmanMouth  = document.querySelector(".pacboy-active-light");
const body  = document.querySelector('body');

 document.addEventListener('keydown', (event) => {
    if(event.code === 'ArrowRight') {
        if(pacmanMouth.style.backgroundPositionX === "left") {
        pacmanMouth.style.backgroundPositionX = "right";  
        } else {
        pacmanMouth.style.backgroundPositionX = "left"
  }
    }
})