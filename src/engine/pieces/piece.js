import Square from "../square";

export default class Piece {
    constructor(player) {
        this.player = player;
    }

    getAvailableMoves(board) {
        throw new Error('This method must be implemented, and return a list of available moves');
    }

    removeMovesOutsideBoard(moves){
        moves.forEach((move) => {
            if (move.row>7 || move.row<0 || move.col>7 || move.col<0){
                moves.splice(moves.indexOf(move), 1)
            }
        })
        return moves
    }

    removeMoveToSamePosition(moves, currentSquare){
        moves.forEach((move) => {
            if (move.row===currentSquare.row && move.col===currentSquare.col){
                moves.splice(moves.indexOf(move), 1)
            }
        })
        return moves
    }

    getAllLateralMoves(currentSquare) {
        let moves = new Array(0)
        for (let i = 0; i<8; i++) {
            if (i!==currentSquare.col) {moves.push(Square.at(currentSquare.row, i))}
            if (i!==currentSquare.row) {moves.push(Square.at(i, currentSquare.col))}
        }
        return moves;
    }

    positionIsOnBoard(square){
        return (square.row >= 0 && square.row <= 7 && square.col >= 0 && square.col <= 7)
    }

    propagatePiece(board, currentSquare, moves, rowMove, colMove){
        let move = Square.at(currentSquare.row+rowMove, currentSquare.col+colMove)
        while (this.positionIsOnBoard(move) && !board.getPiece(move)){
            moves.push(move)
            move = Square.at(move.row+rowMove, move.col+colMove)
        }
    }

    getAllDiagonalMoves(currentSquare){
        let row = currentSquare.row
        let col = currentSquare.col
        let moves = new Array(0)
        let differenceBetweenRowAndCol = Math.abs(row - col)
        let sumOfRowAndCol = row + col

        // forwards diagonal
        if (row >= col){
            for (let i = 0; i<8-differenceBetweenRowAndCol; i++) {
                if (differenceBetweenRowAndCol+i !== row && i !== col){
                    moves.push(Square.at(differenceBetweenRowAndCol+i, i))
                }
            }
        } else {
            for (let i = 0; i<8-differenceBetweenRowAndCol; i++){
                if (i!==row && differenceBetweenRowAndCol+i!==col){
                    moves.push(Square.at(i, differenceBetweenRowAndCol+i))
                }
            }
        }

        // backwards diagonal
        for (let i = 0; i<=sumOfRowAndCol; i++){
            if (i!==row && sumOfRowAndCol-i!==col)
                moves.push(Square.at(i, sumOfRowAndCol-i))
        }
        return moves
    }

    moveTo(board, newSquare) {
        const currentSquare = board.findPiece(this);
        board.movePiece(currentSquare, newSquare);
    }
}
