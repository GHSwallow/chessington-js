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
        return this.getAllLateralMoves(currentSquare)
    }
}
