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
        let differenceBetweenRowAndCol = Math.abs(currentSquare.row - currentSquare.col)
        let sumOfRowAndCol = currentSquare.row + currentSquare.col

        // forwards diagonal
        if (currentSquare.row >= currentSquare.col){
            for (let i = 0; i<8-differenceBetweenRowAndCol; i++) {
                if (differenceBetweenRowAndCol+i !== currentSquare.row && i !== currentSquare.col){
                    moves.push(Square.at(differenceBetweenRowAndCol+i, i))
                }
            }
        } else {
            for (let i = 0; i<8-differenceBetweenRowAndCol; i++){
                if (i!==currentSquare.row && differenceBetweenRowAndCol+i!==currentSquare.col){
                    moves.push(Square.at(i, differenceBetweenRowAndCol+i))
                }
            }
        }

        // backwards diagonal
        for (let i = 0; i<=sumOfRowAndCol; i++){
            if (i!==currentSquare.row && sumOfRowAndCol-i!==currentSquare.col)
                moves.push(Square.at(i, sumOfRowAndCol-i))
            }
        return moves
    }
}
