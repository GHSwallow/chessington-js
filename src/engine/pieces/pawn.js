import Piece from './piece';
import Square from "../square";
import Player from "../player";

export default class Pawn extends Piece {
    constructor(player) {
        super(player);
    }

    getAvailableMoves(board) {
        if (!this.currentSquareOnBoard(board)){
            return []
        }

        let moves = []
        let startingRow = 0
        let rowPropagation = 0
        const currentSquare = board.findPiece(this)
        if (this.player === Player.WHITE) {
            startingRow = 1
            rowPropagation = 1
        } else {
            startingRow = 6
            rowPropagation = -1
        }

        moves.push(Square.at(currentSquare.row + rowPropagation, currentSquare.col))
        if (currentSquare.row === startingRow) {
                moves.push((Square.at(currentSquare.row + (2*rowPropagation), currentSquare.col)))
            }

        moves = this.removeMovesOutsideBoard(moves)
        moves.forEach((move) => {
            if (board.getPiece(move)){
                moves.splice(moves.indexOf(move), 2)
            }
        })


        return moves
    }
}
