import Piece from './piece';
import Square from "../square";

export default class Rook extends Piece {
    constructor(player) {
        super(player);
    }

    getAvailableMoves(board) {
        const currentSquare = board.findPiece(this)
        if (!currentSquare){ return new Array(0) }

        let moves = new Array(0)
        for (let i = 0; i<8; i++) {
            if (i!==currentSquare.col) {moves.push(Square.at(currentSquare.row, i))}
            if (i!==currentSquare.row) {moves.push(Square.at(i, currentSquare.col))}
        }
        return moves;
    }
}
