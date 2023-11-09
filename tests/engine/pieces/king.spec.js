import 'chai/register-should';
import King from '../../../src/engine/pieces/king';
import Board from '../../../src/engine/board';
import Player from '../../../src/engine/player';
import Square from '../../../src/engine/square';
import Pawn from "../../../src/engine/pieces/pawn";

describe('King', () => {

    let board;
    beforeEach(() => board = new Board());

    it('can move to adjacent squares', () => {
        const king = new King(Player.WHITE);
        board.setPiece(Square.at(3, 4), king);

        const moves = king.getAvailableMoves(board);

        const expectedMoves = [
            Square.at(2, 3), Square.at(2, 4), Square.at(2, 5), Square.at(3, 5),
            Square.at(4, 5), Square.at(4, 4), Square.at(4, 3), Square.at(3, 3)
        ];

        moves.should.deep.include.members(expectedMoves);
    });

    it('cannot make any other moves', () => {
        const king = new King(Player.WHITE);
        board.setPiece(Square.at(3, 4), king);

        const moves = king.getAvailableMoves(board);

        moves.should.have.length(8);
    });

    it('cannot leave the board', () => {
        const king = new King(Player.WHITE);
        board.setPiece(Square.at(0, 0), king);

        const moves = king.getAvailableMoves(board);

        const expectedMoves = [Square.at(0, 1), Square.at(1, 1), Square.at(1, 0)];

        moves.should.deep.have.members(expectedMoves);
    });

    it('cannot take friendly pieces', () => {
        const king = new King(Player.WHITE);
        board.setPiece(Square.at(0, 0), king);
        const pawn = new Pawn(Player.WHITE);
        board.setPiece(Square.at(1, 0), pawn);

        const moves = king.getAvailableMoves(board);
        const expectedMoves = [Square.at(0, 1), Square.at(1, 1)];
        moves.should.deep.have.members(expectedMoves);
    });

    it('can take opposing pieces', () => {
        const king = new King(Player.WHITE);
        board.setPiece(Square.at(0, 0), king);
        const pawn = new Pawn(Player.BLACK);
        board.setPiece(Square.at(1, 0), pawn);

        const moves = king.getAvailableMoves(board);

        const expectedMoves = [Square.at(0, 1), Square.at(1, 1), Square.at(1, 0)];
        moves.should.deep.have.members(expectedMoves);
        board.movePiece(Square.at(0, 0), Square.at(1, 0))
        board.getPiece(Square.at(1, 0)).player.should.equal(Player.WHITE)
    });
});
