 export const SNAKE_SPEED = 1
 const snakebody = [
    {x: 10, y: 11},
    {x: 11, y: 11},
    {x: 12, y: 11},
    {x: 13, y: 11},
    {x: 14, y: 11}
]

 export function update(){
    for(let i= snakebody.length-2; i>=0; i--){
        snakebody[i + 1] = {...snakebody[i] }
    }
    snakebody[0].x += 0
    snakebody[0].y += 1
 }
 
 export function draw(gameBoard){
    snakebody.forEach( segment=> {
    const snakeElement= document.createElement('div')
    snakeElement.style.gridRowStart = segment.y
    snakeElement.style.gridColumnStart = segment.x
    snakeElement.classList.add('snake')
    gameBoard.appendChild(snakeElement)
    })
 }