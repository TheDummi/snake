import { onSnake, expandSnake } from "./snake.js";
import { randomGridPosition } from "./grid.js"
let food = { x: 26, y: 20 }
const expansionRate = 1;

export function update() {
    if (onSnake(food)) {
        expandSnake(expansionRate)
        food = getRandomFoodPosition()
        return 0.1;
    }
}

export function draw(gameBoard) {
    const foodElement = document.createElement('div');
    foodElement.style.gridRowStart = food.y;
    foodElement.style.gridColumnStart = food.x;
    foodElement.classList.add('food');
    gameBoard.appendChild(foodElement);
}

function getRandomFoodPosition() {
    let newFoodPosition;
    while (newFoodPosition == null || onSnake(newFoodPosition)) {
        newFoodPosition = randomGridPosition()
    }
    return newFoodPosition
}