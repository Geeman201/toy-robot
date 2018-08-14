
class Board {

  constructor(width = 5, height = 5) {
    if(typeof width !== 'number' && typeof height !== 'number') {
      throw new Error('Board must be constructed with numeric values')
    }
    this.width = width;
    this.height = height;
  }

  /**
   * @param position the position to verify is on the board
   * @returns {boolean} true if it's a valid position
   */
  isValidPosition(position) {
    return this.isGreaterThanEqualTo0(position) && this.isLessThanMaxes(position);
  }

  isGreaterThanEqualTo0(position) {
    return position.x >= 0 && position.y >= 0;
  }

  isLessThanMaxes(position) {
    return position.x < this.width && position.y < this.height;
  }

}

module.exports = Board;
