'use strict';

const TILE_SIZE = 85;
const container = document.querySelector("#app")

const stage = new Stage()
stage.mount(container)

const pacman = new Pacman(0, 0, true)
pacman.mount(stage.element)

const entity = new Entity("wall", 1, 4)
entity.mount(stage.element)

const entity2 = new Entity("wall", 2, 4)
entity2.mount(stage.element)

const entity3 = new Entity("wall", 3, 4)
entity3.mount(stage.element)

const entity4 = new Entity("wall", 4, 4)
entity4.mount(stage.element)

const entity5 = new Entity("wall", 5, 4)
entity5.mount(stage.element)

const entity6 = new Entity("wall", 5, 3)
entity6.mount(stage.element)

const entity7 = new Entity("wall", 5, 2)
entity7.mount(stage.element)

const entity8 = new Entity("wall", 5, 1)
entity8.mount(stage.element)

const entity9 = new Entity("wall", 6, 1)
entity9.mount(stage.element)

const entity10 = new Entity("wall", 7, 1)
entity10.mount(stage.element)

const entity11 = new Entity("wall", 8, 1)
entity11.mount(stage.element)

const entity12 = new Entity("wall", 9, 1)
entity12.mount(stage.element)

const entity13 = new Entity("wall", 8, 3)
entity13.mount(stage.element)

const entity14 = new Entity("wall", 9, 3)
entity14.mount(stage.element)

const entity15 = new Entity("wall", 9, 4)
entity15.mount(stage.element)

const entity16 = new Entity("wall", 9, 5)
entity16.mount(stage.element)

const entity17 = new Entity("apple", 10, 3)
entity17.mount(stage.element)

const entity18 = new Entity("apple", 4, 5)
entity18.mount(stage.element)

const entity19 = new Entity("apple", 10, 2)
entity19.mount(stage.element)

const entity20 = new Entity("bomb", 6, 0)
entity20.mount(stage.element)

const entity21 = new Entity("bomb", 6, 3)
entity21.mount(stage.element)

const entity22 = new Entity("bomb", 2, 3)
entity22.mount(stage.element)

const entity23 = new Entity("wall", 4, 1)
entity23.mount(stage.element)


const entity24 = new Entity("wall", 3, 1)
entity24.mount(stage.element)


const entity25 = new Entity("wall", 2, 1)
entity25.mount(stage.element)

const entity26 = new Entity("wall", 2, 0)
entity26.mount(stage.element)





let entities = [entity, entity2, entity3, entity4, entity5, entity6]










const pacmanMouth  = document.querySelector(".pacboy-active-light");
        
document.addEventListener('keydown', (event) => {
    if (event.code === 'ArrowRight') {
       pacman.moveRight()
   }
     }
 )

document.addEventListener('keydown', (event) => {
  if (event.code === 'ArrowLeft') {
     pacman.moveLeft()
 }
   }
)

document.addEventListener('keydown', (event) => {
  if (event.code === 'ArrowDown') {
     pacman.moveDown()
 }
   }
)

document.addEventListener('keydown', (event) => {
  if (event.code === 'ArrowUp') {
     pacman.moveUp()
 }
   }
)