const Position = require("../Position");

const facings = {
  NORTH: {
    left: 'WEST',
    move: (current) => new Position(current.x, current.y + 1),
    right: 'EAST'
  },
  EAST: {
    left: 'NORTH',
    move: (current) => new Position(current.x + 1, current.y),
    right: 'SOUTH'
  },
  SOUTH: {
    left: 'EAST',
    move: (current) => new Position(current.x, current.y - 1),
    right: 'WEST'
  },
  WEST: {
    left: 'SOUTH',
    move: (current) => new Position(current.x - 1, current.y),
    right: 'NORTH'
  }
};

class Robot {

  constructor(board, x, y, facing) {
    this.setBoard(board);
    this.setFacing(facing);
    this.setPosition(new Position(x, y));
  }

  get position() {
    return this._position;
  }

  get facing() {
    return this._facing;
  }

  setBoard(board) {
    if (!board) {
      throw new Error("A board is required");
    }
    this._board = board;
  }

  /**
   * Update the current position providing it is within the realms of the board
   * @param {Position} position
   */
  setPosition(position) {
    if (this._board.isValidPosition(position)) {
      this._position = position;
    } else {
      throw new Error(`Position ${position} would be out of bounds.`);
    }
  }


  /**
   * Update the current facing to the specified direction
   * @param {NORTH | EAST | SOUTH | WEST} facing
   */
  setFacing(facing) {
    if (!facing) {
      throw new Error("A facing is required to set it");
    }
    const proposedFacing = facing.toUpperCase();
    const isValidFacing = Object.keys(facings).some((facing) => facing === proposedFacing);
    if (!isValidFacing) {
      throw new Error('Unknown initial facing given')
    }
    this._facing = proposedFacing;
  }

  /**
   * Move the robot forward in it's current facing
   */
  move() {
    const newPosition = facings[this.facing].move(this.position);
    this.setPosition(newPosition);
  }

  /**
   * Rotate the robot anti-clockwise in it's current position
   */
  left() {
    this.setFacing(facings[this.facing].left);
  }

  /**
   * Rotate the robot clockwise in it's current position
   */
  right() {
    this.setFacing(facings[this.facing].right);
  }

  toString() {
    return `${this.position.x}, ${this.position.y}, ${this.facing}`;
  }
}

module.exports = Robot;
