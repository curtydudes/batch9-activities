window.addEventListener('DOMContentLoaded', () => {
    const tiles = Array.from(document.querySelectorAll('.tile'));
    const playerDisplay = document.querySelector('.display-player');
    const resetButton = document.querySelector('#reset');
    const announcer = document.querySelector('.announcer');
    const control = document.querySelector('.controls');
    const previousBtn = document.querySelector('#previous');
    const nextBtn = document.querySelector('#next');
    const modalContainer = document.querySelector('.modal-bg');
    // const modalHeader = document.querySelector('#modal-header');
    // const modalText = document.querySelector('#modal-text');
    const newGameBtn = document.querySelector('#newBtn');
    const gameHistoryBtn = document.querySelector('#historyBtn');

    //create an array with 9 empty strings and this will act as a board
    let board = ['', '', '', '', '', '', '', '', ''];
    // store the current player
    let currentPlayer = 'X';
    // if game is resolved or not
    // this assumes that whenever board has a space or no one has one, it stays true
    let isGameActive = true;

    //create arrays for previous and next button
    let previousMoveArray = [];
    let nextMoveArray = [];
    

    //see end game state
    const PLAYERX_WON = 'PLAYERX_WON';
    const PLAYERO_WON = 'PLAYERO_WON';
    const TIE = 'TIE';


    /*
        Indexes within the board
        [0] [1] [2]
        [3] [4] [5]
        [6] [7] [8]
    */

    const winningConditions = [
        [0, 1, 2],
        [3, 4, 5],
        [6, 7, 8],
        [0, 3, 6],
        [1, 4, 7],
        [2, 5, 8],
        [0, 4, 8],
        [2, 4, 6]
    ];





    // loop function to always check if TTC has a winner
    function handleResultValidation() {
        let roundWon = false;
        for (let i = 0; i <= 7; i++) {
            const winCondition = winningConditions[i];
            let a = board[winCondition[0]];
            let b = board[winCondition[1]];
            let c = board[winCondition[2]];
            if (a === '' || b === '' || c === '') {
                continue;
            }
            if (a === b && b === c) {
                roundWon = true;
                break;
            }
        }
        //if roundWon is true
    if (roundWon) {
            announce(currentPlayer === 'X' ? PLAYERX_WON : PLAYERO_WON);
            // and game is not active
            // return announce winner
            isGameActive = false;
            return;
        }
        // if the board does not have any more spaces, it's a tie
    if (!board.includes(''))
        announce(TIE);
    }
    //announce the end game winner via HTML
    const announce = (type) => {
        switch(type){
            case PLAYERO_WON:
                announcer.innerHTML = 'Player <span class="playerO">O</span> Won';
                break;
            case PLAYERX_WON:
                announcer.innerHTML = 'Player <span class="playerX">X</span> Won';
                break;
            case TIE:
                announcer.innerText = 'Tie';
        }
        announcer.classList.remove('hide');
        modalContainer.style.display = 'flex';
    };
    //check if the tile has a value already
    // makes sure players only play empty tile
    const isValidAction = (tile) => {
        if (tile.innerText === 'X' || tile.innerText === 'O'){
            return false;
        }

        return true;
    };

    const updateBoard =  (index) => {
        board[index] = currentPlayer;
    }

    const changePlayer = () => {
        playerDisplay.classList.remove(`player${currentPlayer}`);
        // The conditional operator assigns a value to a variable based on a condition.
        // choose between x or o then show in html
        currentPlayer = currentPlayer === 'X' ? 'O' : 'X';
        playerDisplay.innerText = currentPlayer;
        playerDisplay.classList.add(`player${currentPlayer}`);
    }
    // function called when user clicks on a tile
    //  valid action will check if game is active
    // if all action is valid, will assign to player x or o class based on player
    // currentPlayer will depend will come from changePlayer function that changes X to O
    // update board will check via index if we have a winner or not 


    const userAction = (tile, index) => {
        if(isValidAction(tile) && isGameActive) {
            tile.innerText = currentPlayer;
            tile.classList.add(`player${currentPlayer}`);
        } 
            let moveObject = {};
            // index will call the number
            moveObject.tile = index;
            // currentPlayer will call the X or O turn
            moveObject.player = currentPlayer;
            // tile will call X and O as a string in the grid
            moveObject.move = tile;
            
            console.log(moveObject)

            updateBoard(index);
            handleResultValidation();
            changePlayer();
            previousMoveArray.push(moveObject); 
        
    }

    //previous button
    previousBtn.addEventListener('click', () => {
        nextBtn.style.visibility = 'visible';
        if (previousMoveArray.length != 0) {
            let lastMove = previousMoveArray[previousMoveArray.length - 1]; //move object
            let newTile = lastMove.move;
            newTile.innerHTML = "";
            nextMoveArray.push(lastMove);
            previousMoveArray.pop();
            console.log(previousMoveArray);
            console.log(lastMove);
        } else {
            previousBtn.style.visibility = 'hidden';
        }
    });

    //next button
    nextBtn.addEventListener('click', () => {
        previousBtn.style.visibility = 'visible';
        if (nextMoveArray.length != 0) {
            let nextMove = nextMoveArray[nextMoveArray.length - 1]; //moveObject
            // console.log(nextMove);
            let newTile = nextMove.move;
            let nextIndex = nextMove.player;
            newTile.innerHTML = nextIndex;
            previousMoveArray.push(nextMove);
            nextMoveArray.pop();
            console.log(nextMove);
            console.log(previousMoveArray);
        } else {
            nextBtn.style.visibility = 'hidden';
            previousBtn.style.visibility = 'visible';
        }
    })

    gameHistoryBtn.addEventListener('click', () => {
    previousBtn.style.visibility = 'visible';
    modalContainer.style.display = 'none';
    });

    const resetBoard = () => {
        board = ['', '', '', '', '', '', '', '', ''];
        isGameActive = true;
        announcer.classList.add('hide');
        control.classList.add('hide');

        if (currentPlayer === 'O') {
            changePlayer();
        }
//every tile will be empty and remove any classList 
        tiles.forEach(tile => {
            tile.innerText = '';
            tile.classList.remove('playerX');
            tile.classList.remove('playerO');
        });
    }
    //attach an event listener to every tile 
    //every time a tile will be clicked, userAction will take place 
    // and get the tile and index

    tiles.forEach( (tile, index) => {
        tile.addEventListener('click', () => userAction(tile, index));
    });
    // resetButton
    resetButton.addEventListener('click', resetBoard);
    // modal button
    newGameBtn.addEventListener("click", () => {
        window.location.reload();
        modalContainer.style.display = 'none';
      });
});

previousBtn.style.visibility = 'hidden';
nextBtn.style.visibility = 'hidden';



