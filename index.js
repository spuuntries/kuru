const Piscina = require('piscina');
const path = require('path');

const numberOfWorkers = 16; // Adjust this number according to your needs
const pool = new Piscina({
  filename: path.resolve(__dirname, 'worker.js'),
  maxThreads: numberOfWorkers,
});

async function main() {
  const tasks = new Array(numberOfWorkers).fill(null).map(() => pool.runTask());
  await Promise.all(tasks);
}

main().catch((error) => {
  console.error(`Error: ${error.message}`);
});
