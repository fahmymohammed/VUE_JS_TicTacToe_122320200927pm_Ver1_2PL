class TicTacToe {
    constructor() {
        this.inProgress = true;
        this.winner = null;
        this.currentTurn = TicTacToe.O;
        this.MovesMade = 0;
        this.totalWinsForO = 0;
        this.totalWinsForX = 0;
        this.cells = new Array(9).fill().map(x => new cell());

        // make a move to a users
        this.makeMove = function(i) {
            if (this.inProgress && !this.cells[i].value) {
                this.cells[i].value = this.currentTurn;
                this.MovesMade++;
                this.currentTurn = (this.currentTurn === TicTacToe.O) ? TicTacToe.X : TicTacToe.O;
                this.checkForWinner();
            }

        }

        //checking for a winner
        this.checkForWinner = function () {
            const uwc = [
                [0, 1, 2],
                [3, 4, 5],
                [6, 7, 8],
                [0, 3, 6],
                [1, 4, 7],
                [2, 5, 8],
                [0, 4, 8],
                [2, 4, 6],
            ];

            uwc.forEach((uwc) => {
                const [a, b, c] = uwc;

                const CellOne = this.cells[a];
                const CellTwo = this.cells[b];
                const CellThree = this.cells[c];

                if (CellOne.value && CellOne.value === CellTwo.value && CellOne.value === CellThree.value) {
                    this.inProgress = false;
                    this.winner = CellOne.value;

                    if (CellOne.value == TicTacToe.O) {
                        this.totalWinsForO++;
                    } else {
                        this.totalWinsForX++;
                    }

                    CellOne.isHighLighted = CellTwo.isHighLighted = CellThree.isHighLighted = true;
                    
                }                 
              
            });

            if (this.MovesMade === this.cells.length) {
                this.inProgress = false;

            }

        }

        //for start a new Game by reset the values
        this.newRound = function() {
            this.cells.length = 0;
            this.cells = new Array(9).fill().map(x => new cell());
            this.inProgress = true;
            this.winner = null;
            this.currentTurn = TicTacToe.O;
            this.MovesMade = 0;
        }
    };

}

//sleeping function not used just in case needed
function sleep(milliseconds) {
    const date = Date.now();
    let currentDate = null;
    do {
        currentDate = Date.now();
    } while (currentDate - date < milliseconds);
}


TicTacToe.O = "O"; 
TicTacToe.X = "X";

//Each Cell Object
class cell {
    constructor() {
        this.value = null;
        this.isHighLighted = false;
    }
}

