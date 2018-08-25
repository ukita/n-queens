const elitist = quantity => population => {
  const sortedPopulation = population.sort(
    (r, l) => (r.fitness < l.fitness ? -1 : 1)
  );

  return sortedPopulation.slice(0, quantity);
};

module.exports = { elitist };
