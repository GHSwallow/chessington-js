import Piece from './piece';
import Square from "../square";

export default class King extends Piece {
    constructor(player) {
        super(player);
    }

    getAvailableMoves(board) {
        if (!this.currentSquareOnBoard(board)){
            return []
        }

        let moves = []
        const currentSquare = board.findPiece(this)
        for (let i=-1; i<2; i++){
            for (let j=-1; j<2; j++){
                moves.push(Square.at(currentSquare.row+i, currentSquare.col+j))
            }
        }
        this.removeMovesOutsideBoard(moves)
        this.removeMoveToSamePosition(moves, currentSquare)
        this.removeMovesToFriendlyPieces(board, moves)
        return moves
    }
}
