const boardSize = 100;
const ladders = { 5: 20, 35: 50, 65: 80, 90: 99 };
const snakes = { 15: 7, 25: 5, 37: 3, 52: 30, 68: 45, 85: 60, 98: 70 };
const players = [
    { position: 0, element: null },
    { position: 0, element: null },
];
let currentPlayer = 0;

const board = document.getElementById('board');
const status = document.getElementById('status');
const rollBtn = document.getElementById('rollBtn');
const diceRoll = document.getElementById('diceRoll');

document.addEventListener('DOMContentLoaded', () => {
    createBoard();
    players[0].element = createPlayerElement('player1');
    players[1].element = createPlayerElement('player2');
    updateStatus();
});

rollBtn.addEventListener('click', () => {
    const roll = dice();
    diceRoll.style.fontWeight = 'bold'; 
    diceRoll.style.color = 'red'; 
    diceRoll.textContent = `Player ${currentPlayer + 1} rolled a ${roll}`;
    movePlayer(currentPlayer, roll);
    checkLaddersAndSnakes();
    if (players[currentPlayer].position == boardSize) {
        status.textContent = `Player ${currentPlayer + 1} wins!`;
        rollBtn.disabled = true;
    } else {
        currentPlayer = (currentPlayer + 1) % players.length;
        updateStatus();
    }
});

function createBoard() {
    for (let i = boardSize; i > 0; i--) {
        const cell = document.createElement('div');
        cell.className = 'cell';
        cell.textContent = i;
        board.appendChild(cell);
    }
}

function createPlayerElement(playerClass) {
    const player = document.createElement('div');
    player.className = `player ${playerClass}`;
    board.appendChild(player);
    return player;
}

function movePlayer(playerIndex, roll) {
    let newPosition = players[playerIndex].position + roll;
    if (newPosition >= boardSize) {
        newPosition = boardSize;
    }
    players[playerIndex].position = newPosition;
    updatePlayerPosition(playerIndex);
}

function updatePlayerPosition(playerIndex) {
    const position = players[playerIndex].position;
    const cells = document.getElementsByClassName('cell');
    const cell = cells[cells.length - position];
    const player = players[playerIndex].element;
    player.style.top = cell.offsetTop + 'px';
    player.style.left = cell.offsetLeft + 'px';
}

function checkLaddersAndSnakes() {
    const position = players[currentPlayer].position;
    if (ladders[position]) {
        players[currentPlayer].position = ladders[position];
        updatePlayerPosition(currentPlayer);
    } else if (snakes[position]) {
        players[currentPlayer].position = snakes[position];
        updatePlayerPosition(currentPlayer);
    }
}

function updateStatus() {
    status.style.color = 'red'; 
    status.style.fontWeight= 'bold'; 
    status.textContent = `Player ${currentPlayer + 1}'s turn`;
}


function dice() 
{
    return Math.floor(Math.random() * 6) + 1;
}
