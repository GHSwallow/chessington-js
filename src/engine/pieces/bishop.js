import Piece from './piece';
import Square from "../square";

export default class Bishop extends Piece {
    constructor(player) {
        super(player);
    }

    getAvailableMoves(board) {
        const currentSquare = board.findPiece(this)
        if (!currentSquare){ return new Array(0) }

        let moves = new Array(0)
        this.propagatePiece(board, currentSquare, moves, 1, 1)
        this.propagatePiece(board, currentSquare, moves, 1, -1)
        this.propagatePiece(board, currentSquare, moves, -1, 1)
        this.propagatePiece(board, currentSquare, moves, -1, -1)
        return moves
    }
}
