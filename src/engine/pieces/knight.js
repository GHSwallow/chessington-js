import Piece from './piece';
import Square from "../square";

export default class Knight extends Piece {
    constructor(player) {
        super(player);
    }

    getAvailableMoves(board) {
        if (!this.currentSquareOnBoard(board)){
            return []
        }

        let moves = []
        const currentSquare = board.findPiece(this)
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
        this.removeMovesToFriendlyPieces(board, moves)
        this.removeMovesOutsideBoard(moves)
        return moves
    }
}
