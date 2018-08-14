## Toy Robot (NodeJS CLI)
A ES6 NodeJS implementation of toy-robot using ES6 classes.

### Built with
* Node 8.0 or above (tested on 8.4.0)
* Jest
* JSDoc

### Executing
| Command | Description |
| --- | --- |
| `npm install` | Install dependencies |
| `npm run start` | Start the robot |
| `npm run test` | Execute the test |
| `npm run test:watch` | Watch and execute tests |

### CLI commands
Once the application is started you can execute the following commands on the cli.

| Command | Example | Action |
| --- | --- | --- |
| `place x y facing` | `place 0 0 NORTH`  | Positions the robot on the board |
| `move` | `move` | Moves the robot 1 grid unit in the direction it is facing unless that movement will cause the robot to fall off the grid |
| `left` | `left` | Rotate the robot 90° anticlockwise/counterclockwise   |
| `right` | `right` |  Rotate the robot 90° clockwise |
| `report` | `report` | Outputs the robot's current grid location and facing direction |
| `exit` | `exit` | Exits the program  |

