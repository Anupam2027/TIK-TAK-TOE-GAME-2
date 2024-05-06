const Restart = document.getElementById('Restart');

    Restart.addEventListener("click", function (e) {
        window.location.href = "index.html";
      })
    const humanPlayer = 'X';
    const computerPlayer = 'O';
    let currentPlayer = humanPlayer;

    const cells = document.querySelectorAll('td');
    const scoreDisplays = document.querySelectorAll('.score');
    const tieScoreDisplay = document.querySelector('.scoree');
    const playerTurn = document.querySelector('.p2');

    let score = { X: 0, O: 0, Tie: 0 };

    document.querySelector('.btn4:nth-child(2)').addEventListener('click', () => {
        cells.forEach(cell => cell.textContent = '');
        currentPlayer = humanPlayer;
        playerTurn.textContent = "Player's Turn: " + currentPlayer;
    });

    cells.forEach(cell => {
        cell.addEventListener('click', () => {
            if (cell.textContent === '' && currentPlayer === humanPlayer) {
                cell.textContent = humanPlayer;
                if (checkWin(humanPlayer)) {
                    alert('X wins!');
                    updateScore(humanPlayer);
                } else if (!isDraw()) {
                    currentPlayer = computerPlayer;
                    makeComputerMove();
                    if (checkWin(computerPlayer)) {
                        alert('O wins!');
                        updateScore(computerPlayer);
                    } else if (isDraw()) {
                        alert('It\'s a draw!');
                        updateScore('Tie');
                    }
                    currentPlayer = humanPlayer;
                } else {
                    alert('It\'s a draw!');
                    updateScore('Tie');
                }
                playerTurn.textContent = "Player's Turn: " + currentPlayer;
            }
        });
    });

    function makeComputerMove() {
        let bestScore = -Infinity;
        let bestMove;
        for (let i = 0; i < cells.length; i++) {
            if (cells[i].textContent === '') {
                cells[i].textContent = computerPlayer;
                let score = minimax(cells, 0, false);
                cells[i].textContent = '';
                if (score > bestScore) {
                    bestScore = score;
                    bestMove = i;
                }
            }
        }
        cells[bestMove].textContent = computerPlayer;
    }

    function minimax(board, depth, isMaximizing) {
        if (checkWin(humanPlayer)) return -10 + depth;
        if (checkWin(computerPlayer)) return 10 - depth;
        if (isDraw()) return 0;

        if (isMaximizing) {
            let bestScore = -Infinity;
            for (let i = 0; i < cells.length; i++) {
                if (board[i].textContent === '') {
                    board[i].textContent = computerPlayer;
                    let score = minimax(board, depth + 1, false);
                    board[i].textContent = '';
                    bestScore = Math.max(score, bestScore);
                }
            }
            return bestScore;
        } else {
            let bestScore = Infinity;
            for (let i = 0; i < cells.length; i++) {
                if (board[i].textContent === '') {
                    board[i].textContent = humanPlayer;
                    let score = minimax(board, depth + 1, true);
                    board[i].textContent = '';
                    bestScore = Math.min(score, bestScore);
                }
            }
            return bestScore;
        }
    }

    function checkWin(player) {
        const winConditions = [
            [0, 1, 2], [3, 4, 5], [6, 7, 8], // Rows
            [0, 3, 6], [1, 4, 7], [2, 5, 8], // Columns
            [0, 4, 8], [2, 4, 6] // Diagonals
        ];

        return winConditions.some(condition => {
            return condition.every(index => cells[index].textContent === player);
        });
    }

    function isDraw() {
        return [...cells].every(cell => cell.textContent);
    }

    function updateScore(outcome) {
        if (outcome === humanPlayer) {
            score.X++;
        } else if (outcome === computerPlayer) {
            score.O++;
        } else {
            score.Tie++;
        }
        scoreDisplays[0].textContent = score.X;
        scoreDisplays[1].textContent = score.O;
        tieScoreDisplay.textContent = score.Tie;
    }
