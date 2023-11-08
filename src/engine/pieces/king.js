import Piece from './piece';
import Square from "../square";

export default class King extends Piece {
    constructor(player) {
        super(player);
    }

    getAvailableMoves(board) {
        const currentSquare = board.findPiece(this)
        if (!currentSquare){ return new Array(0) }
        let moves = new Array(0)
        for (let i=-1; i<2; i++){
            for (let j=-1; j<2; j++){
                moves.push(Square.at(currentSquare.row+i, currentSquare.col+j))
            }
        }
        moves = this.removeMovesOutsideBoard(moves)
        moves = this.removeMoveToSamePosition(moves, currentSquare)
        return moves
    }
}
