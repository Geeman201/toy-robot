class ConsoleToSimulatorAdapter {

  constructor(simulator) {
    this._simulator = simulator;
    this.prompt = `Enter a command: 
    - place x y facing - e.g. 'place 0 0 NORTH' - positions the robot on the board
    - move - moves 1 position in the current direction 
    - left - turn the robot left 
    - right - turn the robot right
    - report - get the current location of the robot
    - exit - quits the program\n`;
  }

  execute(input) {
    try {
      const start = input.split(' ');
      const command = start[0].toLowerCase();
      switch (command) {
        case 'place':
          if (start.length !== 4) {
            console.log('place should be called with the following construct "place x y facing" e.g. "place 0 0 NORTH"');
            break;
          }
          this._simulator.place(parseInt(start[1], 10), parseInt(start[2], 10), start[3]);
          break;
        case 'move':
          this._simulator.move();
          break;
        case 'left':
          this._simulator.left();
          break;
        case 'right':
          this._simulator.right();
          break;
        case 'report':
          this._simulator.report();
          break;
        case 'exit':
          process.exit(0);
          break;
        default:
          console.log(this.prompt);
      }
    } catch(err) {
      console.log(err.message);
    }
  }
}

module.exports = ConsoleToSimulatorAdapter;
