const Robot = require('../Robot');
const Board = require('../Board');

/**
 *  Executes the movements of the robot on the board
 */
class Simulator {

  constructor() {
    this.board = new Board(5, 5);
  }

  /**
   * Create a Robot and position it on the board
   * @param {number} x position
   * @param {number} y position
   * @param { NORTH | EAST | SOUTH | WEST} facing initial direction
   */
  place(x, y, facing) {
    try {
      this.robot = new Robot(this.board, x, y, facing);
      console.log(`Placed robot at ${this.robot}`)
    } catch (err) {
      console.error('Cannot place robot.', err.message);
    }
  }

  /**
   * Move robot within simulation
   */
  move() {
    this.ensureRobotPlaced();
    try {
      this.robot.move();
      console.log(`Moved to ${this.robot}`)
    } catch (err) {
      console.error('Cannot move robot.', err.message);
    }
  }

  /**
   * Request robot rotate left
   */
  left() {
    this.ensureRobotPlaced();
    this.robot.left();
    console.log(`Rotated left to ${this.robot}`)
  }

  /**
   * Request robot rotate right
   */
  right() {
    this.ensureRobotPlaced();
    this.robot.right();
    console.log(`Rotated right to ${this.robot}`)
  }

  /**
   * Report the current state of the robot
   */
  report() {
    this.ensureRobotPlaced();
    console.log(`Robots status is: ${this.robot}`);
  }

  ensureRobotPlaced() {
    if(this.robot) {
      return true;
    } else {
      throw new Error('No robot has been placed! Place the robot before using it');
    }

  }
}

module.exports = Simulator;
