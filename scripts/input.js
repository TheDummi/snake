import { speed } from "./script.js";

let inputDirection = { x: 0, y: 0 }
let lastInputDirection = { x: 0, y: 0 }

window.addEventListener('keydown', d => {
    const Keys = { Up: 'ArrowUp', Down: 'ArrowDown', Left: 'ArrowLeft', Right: 'ArrowRight' }

    switch (d.key) {
        case Keys.Up:
            if (lastInputDirection.y !== 0) break;
            inputDirection = { x: 0, y: -1 }
            break
        case Keys.Down:
            if (lastInputDirection.y !== 0) break;
            inputDirection = { x: 0, y: 1 }
            break
        case Keys.Left:
            if (lastInputDirection.x !== 0) break;
            inputDirection = { x: -1, y: 0 }
            break
        case Keys.Right:
            if (lastInputDirection.x !== 0) break;
            inputDirection = { x: 1, y: 0 }
            break;
    }

    if (Object.values(Keys).includes(d.key)) document.getElementById('speed').innerText = `Speed: ${Math.round(speed * 10) / 10}`;
})

export function getInputDirection() {
    lastInputDirection = inputDirection;

    return inputDirection;
}

export function getSnakeSpeed(bool) {
    if (bool) return 10;
    else return 5;
}