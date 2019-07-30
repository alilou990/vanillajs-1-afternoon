const board = []


// let topRight = board[0];
// const topCenter = board[1];
// const topLeft = board[2];
// const middleRight = board[3];
// const middleCenter = board[4];
// const middleLeft = board[5];
// const bottomRight = board[6];
// const bottomCenter = board[7];
// const bottomLeft = board[8];


const winner = () => {
    // console.log(topRight, topCenter, topLeft)
    // console.log(board)
    if(board[0] !== undefined && board[0] === board[1] && board[1] === board[2]){
        window.alert("WINNER")   
    } else if(board[3] !== undefined && board[3] === board[4] && board[4] === board[5]){
        window.alert("WINNER")
    } else if(board[6] !== undefined && board[6] === board[7] && board[7] === board[8]){
        window.alert("WINNER")
    } else if(board[0] !== undefined && board[0] === board[3] && board[3] === board[6]){
        window.alert("WINNER")
    } else if(board[1] !== undefined && board[1] === board[4] && board[4] === board[7]){
        window.alert('WINNER')
    } else if(board[2] !== undefined && board[2] === board[5] && board[5] === board[8]){
        window.alert('WINNER')
    } else if(board[0] !== undefined && board[0] === board[4] && board[4] === board[8]){
        window.alert('WINNER')
    } else if(board[2] !== undefined && board[2] === board[4] && board[4] === board[6]){
        window.alert('WINNER')
    } else if (isBoardFull()) {
        window.alert("Cat's Game")
    }
}



const play = (clickedId) => {
    const playerSpan = document.getElementById('player')
    const clickedSquare = document.getElementById(clickedId)
    if(playerSpan.innerText === 'X'){
        playerSpan.innerText = 'O'
        clickedSquare.innerText = 'X'
        board[clickedId] = 'X'
    } else {
        playerSpan.innerText = 'X'
        clickedSquare.innerText = 'O'
        board[clickedId] = 'O'
    };
   winner()
};

let catsgame = false
const isBoardFull = () => {
    for(let i = 0; i < 9; i++){
        if(board[i] === undefined){
            return false
        } 
    }
    return true
}