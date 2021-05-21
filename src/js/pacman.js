class Pacman {
    constructor(xpos, ypos, mouthOpen) {
        this.xpos = xpos;
        this.ypos = ypos;
        this.mouthOpen = mouthOpen;

    }
    render() {
        const pacmanElement = document.createElement('div');
        pacmanElement.className = 'entity entity--pac pacboy-active-light'
        pacmanElement.innerHTML = `<div></div>`

        return pacmanElement;
    }


    mount(parent) {
        this.element = this.render();
        parent.appendChild(this.element);
        this.update();
        
    }
  
    update() {

        
        this.element.style.left = this.xpos + "px"
        this.element.style.right = this.xpos - "px"
        this.element.style.top = this.ypos - "px"
        this.element.style.bottom = this.ypos + "px"

        this.mouthOpen = !this.mouthOpen

        if (this.mouthOpen)
        {
            this.element.style.backgroundPositionX = 0 + "%"
        }
        else
        {
            this.element.style.backgroundPositionX = 100 + "%"
        }

     
      
            
    }
    moveRight() {
        this.element.style.backgroundPositionY = 0 + "%"
    
        if (this.xpos < 1020 - 85) {
            
            this.xpos += TILE_SIZE
        }
        this.update()

    }

    moveLeft() {
        this.element.style.backgroundPositionY = 33 + "%"
        if (this.xpos > 0) {
            this.xpos -= TILE_SIZE
        }
         this.update()

    }

    moveUp(){
        this.element.style.backgroundPositionY = 100 + "%"
        if (this.ypos < 510 - 85) {
            this.ypos += TILE_SIZE
        }
         this.update()

    }

    moveDown(){
        this.element.style.backgroundPositionY = 66 + "%"
        if (this.ypos > 0) {
            this.ypos -= TILE_SIZE
        }
         this.update()

    }

}