import Piece from './piece';

export default class Queen extends Piece {
    constructor(player) {
        super(player);
    }

    getAvailableMoves(board) {
        if (!this.currentSquareOnBoard(board)){
            return []
        }

        let moves = []
        this.updateMovesViaPropagatingPiece(board, moves, 0, 1)
        this.updateMovesViaPropagatingPiece(board, moves, 0, -1)
        this.updateMovesViaPropagatingPiece(board, moves, 1, 0)
        this.updateMovesViaPropagatingPiece(board, moves, -1, 0)
        this.updateMovesViaPropagatingPiece(board, moves, 1, 1)
        this.updateMovesViaPropagatingPiece(board, moves, 1, -1)
        this.updateMovesViaPropagatingPiece(board, moves, -1, 1)
        this.updateMovesViaPropagatingPiece(board, moves, -1, -1)

        return moves
    }
}
