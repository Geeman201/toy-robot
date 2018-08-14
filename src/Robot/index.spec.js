const Robot = require('./index');
const Board = require('../Board');


describe(('The Robot'), () => {
  let n00Robot;
  let n11Robot;

  beforeEach(() => {
    n00Robot = new Robot(new Board(), 0, 0, 'north');
    n11Robot = new Robot(new Board(), 1, 1, 'north');
  });

  describe('validates', () => {
    it('when initial values are null', () => {
      expect(() => {
        new Robot(null, 0, 0, 'UNKNOWN');
      }).toThrow('board is required');

      expect(() => {
        new Robot(new Board(), 0, 0, null);
      }).toThrow('facing is required');
    });


    it('when initial facing is invalid', () => {
      expect(() => {
        new Robot(new Board(), 0, 0, 'UNKNOWN');
      }).toThrow('Unknown initial facing given')
    });

    it('when position is out of bounds', () => {
      const board1x1 = new Board(1, 1)
      expect(() => {
        new Robot(board1x1, 2, 1, 'NORTH');
      }).toThrow('out of bounds');

      expect(() => {
        new Robot(board1x1, 1, 2, 'NORTH');
      }).toThrow('out of bounds');
    });

  });

  describe('turns', () => {

    it('right through all points from NORTH to NORTH', () => {
      expect(n00Robot.facing).toBe('NORTH');

      n00Robot.right();
      expect(n00Robot.facing).toBe('EAST');

      n00Robot.right();
      expect(n00Robot.facing).toBe('SOUTH');

      n00Robot.right();
      expect(n00Robot.facing).toBe('WEST');

      n00Robot.right();
      expect(n00Robot.facing).toBe('NORTH');
    });

    it('left through all points from NORTH to NORTH', () => {
      expect(n00Robot.facing).toBe('NORTH');

      n00Robot.left();
      expect(n00Robot.facing).toBe('WEST');

      n00Robot.left();
      expect(n00Robot.facing).toBe('SOUTH');

      n00Robot.left();
      expect(n00Robot.facing).toBe('EAST');

      n00Robot.left();
      expect(n00Robot.facing).toBe('NORTH');
    });
  });

  describe('moves', () => {
    it('in a northernly direction', () => {
      n00Robot.move();
      expect(n00Robot.position.x).toBe(0);
      expect(n00Robot.position.y).toBe(1);
    });

    it('in a easterly direction', () => {
      n00Robot.right();
      n00Robot.move();
      expect(n00Robot.position.x).toBe(1);
      expect(n00Robot.position.y).toBe(0);
    });

    it('in a southernly direction', () => {
      n11Robot.right();
      n11Robot.right();
      n11Robot.move();
      expect(n11Robot.position.x).toBe(1);
      expect(n11Robot.position.y).toBe(0);
    });

    it('in a westerly direction', () => {
      n11Robot.left();
      n11Robot.move();
      expect(n11Robot.position.x).toBe(0);
      expect(n11Robot.position.y).toBe(1);
    });
  });

  describe('refuses to move', () => {
    it('at easternly boundary', () => {
      n00Robot.left();
      expect(() => {
        n00Robot.move()
      }).toThrow('out of bounds')
    });

    it('at southernly boundary', () => {
      n00Robot.left();
      n00Robot.left();
      expect(() => {
        n00Robot.move()
      }).toThrow('out of bounds')
    });

    it('at westernly boundary', () => {
      const w00Robot = new Robot(new Board(1, 1), 0, 0, 'WEST');
      expect(() => {
        w00Robot.move();
      }).toThrow('out of bounds')
    });

    it('at northernly boundary', () => {
      const n00Robot = new Robot(new Board(1, 1), 0, 0, 'NORTH');
      expect(() => {
        n00Robot.move();
      }).toThrow('out of bounds')
    });
  });

  describe('reports', () => {
    it('the current position and facing', () => {
      expect(n00Robot.toString()).toBe('0, 0, NORTH');

      n00Robot.move();
      expect(n00Robot.toString()).toBe('0, 1, NORTH');

      n00Robot.right();
      expect(n00Robot.toString()).toBe('0, 1, EAST');

      n00Robot.move();
      expect(n00Robot.toString()).toBe('1, 1, EAST');
    })
  })

});
