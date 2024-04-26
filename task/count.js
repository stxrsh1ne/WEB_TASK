const triangleBasket = document.getElementById('triangleBasket').querySelector('span');
const circleBasket = document.getElementById('circleBasket').querySelector('span');
const squareBasket = document.getElementById('squareBasket').querySelector('span');

const triangleShape = document.getElementById('triangle');
const circleShape = document.getElementById('circle');
const squareShape = document.getElementById('square');

let triangleCount = 0;
let circleCount = 0;
let squareCount = 0;

triangleShape.addEventListener('click', () => {
    triangleCount++;
    triangleBasket.textContent = triangleCount;
});

circleShape.addEventListener('click', () => {
    circleCount++;
    circleBasket.textContent = circleCount;
});

squareShape.addEventListener('click', () => {
    squareCount++;
    squareBasket.textContent = squareCount;
});

const resetButton = document.getElementById('resetButton');
resetButton.addEventListener('click', () => {
    triangleCount = 0;
    circleCount = 0;
    squareCount = 0;

    triangleBasket.textContent = triangleCount;
    circleBasket.textContent = circleCount;
    squareBasket.textContent = squareCount;
});
