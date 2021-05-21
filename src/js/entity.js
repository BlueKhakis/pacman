class Entity {
    constructor(type, xpos, ypos) {
        this.type = type;
        this.xpos = xpos;
        this.ypos = ypos;
    }

    render() {

        const entityElement = document.createElement('div')
        
        if (this.type === "wall") {
            entityElement.className = "entity entity--wall"
        }
        else if (this.type === "apple") {
            entityElement.className = "entity entity--apple"
        }
        else
        {
            entityElement.className = "entity entity--bomb"
        }
    

        return entityElement;
    }


    mount(parent) {
        this.element = this.render();
        parent.appendChild(this.element);
        this.update();
        
    }
  
    update() {

        console.log(this.xpos)
        console.log(this.ypos)
        console.log(TILE_SIZE)
        this.element.style.left = this.xpos * TILE_SIZE + "px";
        this.element.style.top = this.ypos * TILE_SIZE + "px";

        
        
            
    }

}

