
/**
 * A location on a board
 */
class Position {

  constructor(x, y) {
    this.x = parseInt(x, 10);
    this.y = parseInt(y, 10);
  }

  toString() {
    return JSON.stringify(this);
  }

}
module.exports = Position;
