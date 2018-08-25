const BOARD_ROW_SIZE = 8;

const generateChromosome = () => {
  const row = [];

  while (row.length < BOARD_ROW_SIZE) {
    const number = Math.floor(Math.random() * BOARD_ROW_SIZE);

    if (!row.includes(number)) {
      row.push(number);
    }
  }

  return row;
};

const seed = size => {
  return new Array(size).fill(null).map(() => generateChromosome());
};

module.exports = { seed, generateChromosome };
