const cross = (firstChromosome, secondChromosome) => {
  const cut = Math.floor(Math.random() * 3 + 1);

  const firstChild = firstChromosome.slice(0, cut);
  const secondChild = secondChromosome.slice(0, cut);

  for (let i = 0; i < firstChromosome.length; i++) {
    if (!secondChild.includes(firstChromosome[i]) && secondChild.length < 8) {
      secondChild.push(firstChromosome[i]);
    }

    if (!firstChild.includes(secondChromosome[i]) && firstChild.length < 8) {
      firstChild.push(secondChromosome[i]);
    }
  }

  return [firstChild, secondChild];
};

module.exports = { cross };
