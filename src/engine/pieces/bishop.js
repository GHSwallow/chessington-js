import Piece from './piece';
import Square from "../square";

export default class Bishop extends Piece {
    constructor(player) {
        super(player);
    }

    getAvailableMoves(board) {
        if (!this.currentSquareOnBoard(board)){
            return []
        }

        let moves = []
        this.updateMovesViaPropagatingPiece(board, moves, 1, 1)
        this.updateMovesViaPropagatingPiece(board, moves, 1, -1)
        this.updateMovesViaPropagatingPiece(board, moves, -1, 1)
        this.updateMovesViaPropagatingPiece(board, moves, -1, -1)
        return moves
    }
}
