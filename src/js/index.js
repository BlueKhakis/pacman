'use strict';

// const htmlmin = require("gulp-htmlmin");

const TILE_SIZE = 85;

const pacmanMouth  = document.querySelector(".pacboy-active-light");


let mouthOpen = true;


 document.addEventListener('keydown', (event) => {
    if(event.code === 'ArrowRight') {
        if(pacmanMouth.style.backgroundPositionX === 0 + "%") {
        pacmanMouth.style.backgroundPositionX = 100 + "%"; 
        mouthOpen = false; 
        } else {
        pacmanMouth.style.backgroundPositionX = 0 + "%"
        mouthOpen = true; 
  }
    }
})



class Pacman {
    constructor(xpos, mouthOpen){
        this.xpos = xpos;
        this.mouthOpen = mouthOpen;

    }
render() {
    document.addEventListener('keydown', (event) => {
    if(event.code === 'ArrowRight') {
        this.moveRight()
    }
})
}
mount() {

}
update(){
    this.moveRight()

}
moveRight(){
    this.xpos = 0
        this.xpos += TILE_SIZE
        pacmanMouth.style.left = this.xpos + "px"

}
}



