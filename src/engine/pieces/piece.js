import Square from "../square";
import player from "../player";
import GameSettings from "../gameSettings";

export default class Piece {
    constructor(player) {
        this.player = player;
    }

    getAvailableMoves(board) {
        throw new Error('This method must be implemented, and return a list of available moves');
    }
    currentSquareOnBoard(board){
        return board.findPiece(this);
    }

    removeMovesOutsideBoard(moves){
        this._removeOnCondition(moves, (move) => {
            return !this.positionIsOnBoard(move)
        })
        return moves
    }

    removeMoveToSamePosition(moves, currentSquare){
        this._removeOnCondition(moves, (move) => {
            return move.row===currentSquare.row && move.col===currentSquare.col
        })
        return moves
    }

    _removeOnCondition(moves, condition)  {
        let movesCopy = [...moves];
        movesCopy.forEach((move) => {
            if (condition(move)){
                moves.splice(moves.indexOf(move), 1)
            }
        })
        return moves
    }

    positionIsOnBoard(square){
        return (square.row >= 0 && square.row < GameSettings.BOARD_SIZE && square.col >= 0 && square.col < GameSettings.BOARD_SIZE)
    }

    updateMovesViaPropagatingPiece(board, moves, rowMove, colMove){
        const currentSquare = board.findPiece(this)
        let move = Square.at(currentSquare.row+rowMove, currentSquare.col+colMove)
        while (this.positionIsOnBoard(move) && !board.getPiece(move)){
            moves.push(move)
            move = Square.at(move.row+rowMove, move.col+colMove)
        }
        let potentialTakeMove = move
        if (
            this.positionIsOnBoard(potentialTakeMove) &&
            board.getPiece(potentialTakeMove).player !== this.player
    ){
            moves.push(potentialTakeMove)
        }
    }

    moveTo(board, newSquare) {
        const currentSquare = board.findPiece(this);
        board.movePiece(currentSquare, newSquare);
    }
}
