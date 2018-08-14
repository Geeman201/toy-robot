const ConsoleToSimulatorAdapter = require('./index');
const Simulator = require('../Simulator');
jest.mock('../Simulator');

describe(('The ConsoleToSimulatorAdapter'), () => {
  let sim = new Simulator();
  let adapter = new ConsoleToSimulatorAdapter(sim);

  beforeEach(() => {
    Simulator.mockClear();
  });

  describe('parses and executes commands', () => {
    it('place', () => {
      adapter.execute('place 0 0 NORTH');
      expect(sim.place).toHaveBeenCalledTimes(1);
      expect(sim.place).toHaveBeenCalledWith(0, 0, 'NORTH');
    });

    it.each([
      'move',
      'left',
      'right',
      'report'
    ])('%i', (command) => {
      adapter.execute(command);
      expect(sim[command]).toHaveBeenCalledTimes(1);

      adapter.execute(command);
      expect(sim[command]).toHaveBeenCalledTimes(2);
    });
  })
});
