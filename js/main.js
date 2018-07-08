var PLAYER_ONE_SYMBOL = 'X';
var PLAYER_TWO_SYMBOL = 'O';
var currentTrun = PLAYER_ONE_SYMBOL;

var board = document.querySelector('.board');

board.addEventListener('click', function(e) {
    e.target.innerHTML = currentTurn;
    currentTurn = currentTurn === PLAYER_ONE_SYMBOL ? PLAYER_TWO_SYMBOL : PLAYER_ONE_SYMBOL;
});