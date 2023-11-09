import Piece from './piece';
import Square from "../square";

export default class Rook extends Piece {
    constructor(player) {
        super(player);
    }

    getAvailableMoves(board) {
        const currentSquare = board.findPiece(this)
        if (!currentSquare) {
            return new Array(0)
        }
        let moves = new Array(0)
        this.propagatePiece(board, currentSquare, moves, 0, 1)
        this.propagatePiece(board, currentSquare, moves, 0, -1)
        this.propagatePiece(board, currentSquare, moves, 1, 0)
        this.propagatePiece(board, currentSquare, moves, -1, 0)
        return moves
    }
}
