const readline = require('readline');
const Simulator = require("./Simulator");
const ConsoleToSimulatorAdapter = require("./ConsoleToSimulatorAdapter");

console.log('Starting robot simulator');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

const sim = new Simulator();
const adapter = new ConsoleToSimulatorAdapter(sim);

rl.setPrompt(adapter.prompt);
rl.prompt();

rl.on('line', (input) => {
  adapter.execute(input)
});

rl.on('SIGINT', () => {
  console.log('\nThanks for playing! Bye');
  rl.close();
});
