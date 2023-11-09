import Square from "../square";

export default class Piece {
    constructor(player) {
        this.player = player;
    }

    getAvailableMoves(board) {
        throw new Error('This method must be implemented, and return a list of available moves');
    }

    removeMovesOutsideBoard(moves){
        let movesCopy = [...moves];
        movesCopy.forEach((move) => {
            if (!this.positionIsOnBoard(move)){
                moves.splice(moves.indexOf(move), 1)
            }
        })
        return moves
    }

    removeMoveToSamePosition(moves, currentSquare){
        let movesCopy = [...moves];
        movesCopy.forEach((move) => {
            if (move.row===currentSquare.row && move.col===currentSquare.col){
                moves.splice(moves.indexOf(move), 1)
            }
        })
        return moves
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

    moveTo(board, newSquare) {
        const currentSquare = board.findPiece(this);
        board.movePiece(currentSquare, newSquare);
    }
}
