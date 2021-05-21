'use strict';

// const htmlmin = require("gulp-htmlmin");


const pacmanMouth  = document.querySelector(".pacboy-active-light");


 document.addEventListener('keydown', (event) => {
    if(event.code === 'ArrowRight') {
        if(pacmanMouth.style.backgroundPositionX === "left") {
        pacmanMouth.style.backgroundPositionX = "right";  
        } else {
        pacmanMouth.style.backgroundPositionX = "left"
  }
    }
})

