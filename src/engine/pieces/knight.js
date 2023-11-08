import Piece from './piece';
import Square from "../square";

export default class Knight extends Piece {
    constructor(player) {
        super(player);
    }

    getAvailableMoves(board) {
        const currentSquare = board.findPiece(this)
        if (!currentSquare){ return new Array(0) }
        let moves = new Array(0)
        moves.push(
            Square.at(currentSquare.row+2, currentSquare.col+1),
            Square.at(currentSquare.row+2, currentSquare.col-1),
            Square.at(currentSquare.row-2, currentSquare.col+1),
            Square.at(currentSquare.row-2, currentSquare.col-1),
            Square.at(currentSquare.row+1, currentSquare.col+2),
            Square.at(currentSquare.row+1, currentSquare.col-2),
            Square.at(currentSquare.row-1, currentSquare.col+2),
            Square.at(currentSquare.row-1, currentSquare.col-2),
            )
        return this.removeMovesOutsideBoard(moves)
    }
}
