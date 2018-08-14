const Board = require('./index');
const Position = require('../Position');

describe('The board', () => {

  describe('creation', () => {
    it('defaults to a 5x5 board with noArgs', () => {
      const noArgs = new Board();
      expect(noArgs.width).toBe(5);
      expect(noArgs.height).toBe(5);
    })
  });


  describe('validates', () => {
    it('initial values are numeric', () => {
      expect(() => {
        new Board("text", "text");
      }).toThrow('Board must be constructed with numeric values')
    })
  });

  describe('isValidPosition', () => {
    describe('on a 2x2 board', () => {
      const board2x2 = new Board(2, 2);

      it.each([
        [0, 0],
        [0, 1],
        [1, 0],
        [1, 1]
      ],)(
        'marks as valid x:%i, y:i', (x, y) => {
          expect(board2x2.isValidPosition(new Position(x, y))).toBeTruthy()
        }
      );

      it.each([
        // lower
        [-1, 0],
        [0, -1],
        [-1, -1],
        // upper
        [2, 0],
        [0, 2],
        [2, 2],
        // extreme
        [-5, 0],
        [0, -5],
        [-5, -5],
        [8, 0],
        [0, 8],
        [8, 8],

      ])(
        'marks as invalid x:%i, y:%i', (x, y) => {
          expect(board2x2.isValidPosition(new Position(x, y))).toBeFalsy()
        }
      );

    })
  })

});
