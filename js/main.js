var PLAYER_ONE_SYMBOL = 'X';
var PLAYER_TWO_SYMBOL = 'O';
var currentTurn = PLAYER_ONE_SYMBOL;
const winCombos = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [6, 4, 2]
];

var board = document.querySelector('.board');

board.addEventListener('click', function(e) {
    e.target.innerHTML = currentTurn;
    currentTurn = (currentTurn === PLAYER_ONE_SYMBOL ? PLAYER_TWO_SYMBOL : PLAYER_ONE_SYMBOL);
    if(checkForWinner()) {
        alert('Somebody One');
    }
});

function checkForWinner(){
    var squares = Array.prototype.slice.call(document.querySelectorAll('.square'));
    var symbols = squares.map( (square) => {
        return square.innerHTML;
    });
    return winCombos.find( (combo) => {
        if(symbols[combo[0]] == symbols[combo[1]] && symbols[combo[1]] == symbols[combo[2]]) {
            return symbols[combo[0]];
        } else {
            return false;
        }
    });
}

