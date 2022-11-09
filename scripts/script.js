import { update as updateSnake, draw as drawSnake, getSnakeHead, snakeIntersection } from "./snake.js";
import { update as updateFood, draw as drawFood } from "./food.js";
import { outsideGrid } from "./grid.js";

export let speed = 5;
let lastRenderTime = 0;
let gameOver = false;
const gameBoard = document.getElementById('game-board');

function main(currentTime) {
    if (gameOver) {
        if (confirm('You lost, press ok to restart')) {
            window.location = "https://thedummi.github.io/snake/"
        }
        return;
    }
    window.requestAnimationFrame(main);

    const secondsSinceLastRender = (currentTime - lastRenderTime) / 1000;

    if (secondsSinceLastRender < 1 / speed) return;

    lastRenderTime = currentTime;
    const speeder = update();

    if (speeder) {
        speed += speeder;

        const spd = document.getElementById('speed');

        spd.textContent = `Speed: ${Math.round(speed * 10) / 10}`;
    }

    draw();
}

window.requestAnimationFrame(main)

function update() {
    updateSnake()
    checkForDeath()
    return updateFood()
}

function draw() {
    gameBoard.innerHTML = ''
    drawSnake(gameBoard)
    drawFood(gameBoard)
}

function checkForDeath() {
    gameOver = outsideGrid(getSnakeHead()) || snakeIntersection()
}
