class Stage {
    constructor() {

    }

    render() {

        const stageElement = document.createElement('div');
        stageElement.className = "stage"
        stageElement.innerHTML = `<div></div>`

        return stageElement;
    }


    mount(parent) {
        this.element = this.render();
        parent.appendChild(this.element);
        this.update();
        
    }
  
    update() {

     
    }

    collisionDetection(x, y) {
        for (let i = 0; i < entities.length; i++)
        {
            if (entity[i].xpos === x && entity[i].ypos === y) {
                return entity[i]
            }
            }
    }
}