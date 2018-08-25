const fitness = chromosome => {
  let clashes = 0;

  const unique = [...new Set(chromosome)];
  clashes += Math.abs(chromosome.length - unique.length);

  for (let i = 0; i < chromosome.length; i++) {
    for (let j = 0; j < chromosome.length; j++) {
      if (i !== j) {
        const dx = Math.abs(i - j);
        const dy = Math.abs(chromosome[i] - chromosome[j]);

        if (dx === dy) {
          clashes += 1;
        }
      }
    }
  }

  return clashes;
};

module.exports = { fitness };
