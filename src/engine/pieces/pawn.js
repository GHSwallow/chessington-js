import Piece from './piece';
import Square from "../square";
import Player from "../player";

export default class Pawn extends Piece {
    constructor(player) {
        super(player);
    }

    getAvailableMoves(board) {
        const currentSquare = board.findPiece(this)
        if (!currentSquare){ return new Array(0) }

        let moves = new Array(0)
        if (this.player === Player.WHITE){
            moves.push((Square.at(currentSquare.row + 1, currentSquare.col)))
            if (currentSquare.row === 1) {moves.push((Square.at(currentSquare.row + 2, currentSquare.col)))}
        } else if (this.player === Player.BLACK){
            moves.push((Square.at(currentSquare.row - 1, currentSquare.col)))
            if (currentSquare.row === 6) {moves.push((Square.at(currentSquare.row - 2, currentSquare.col)))}
        }

        moves.forEach((move) => {
            if (board.getPiece(move)){
                moves.splice(moves.indexOf(move), 2)
            }
        })

        return moves
    }
}
