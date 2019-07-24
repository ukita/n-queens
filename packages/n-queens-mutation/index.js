const swap = chromosome => {
  const length = chromosome.length;

  let firstIndex = 0;
  let secondIndex = 0;
  while (firstIndex === secondIndex) {
    firstIndex = Math.floor(Math.random() * length);
    secondIndex = Math.floor(Math.random() * length);
  }

  const newChromosome = [...chromosome];

  newChromosome[firstIndex] = chromosome[secondIndex];
  newChromosome[secondIndex] = chromosome[firstIndex];

  return newChromosome;
};

const mutate = (chromosomes, quantity = 1, operator = swap) => {
  const chromosomesClone = [...chromosomes];

  for (let index = 0; index < quantity; index++) {
    const randomPosition = Math.floor(Math.random() * chromosomes.length);

    chromosomesClone[randomPosition] = operator(chromosomes[randomPosition]);
  }

  return chromosomesClone;
};

module.exports = { mutate, operators: { swap } };
