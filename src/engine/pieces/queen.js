import Piece from './piece';

export default class Queen extends Piece {
    constructor(player) {
        super(player);
    }

    getAvailableMoves(board) {
        const currentSquare = board.findPiece(this)
        if (!currentSquare){ return new Array(0) }

        let moves = this.getAllDiagonalMoves(currentSquare)
        moves = moves.concat(this.getAllLateralMoves(currentSquare))
        return moves
    }
}
