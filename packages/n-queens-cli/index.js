const clear = require("clear");
const chart = require("chart");

const { seed } = require("../n-queens-seed");
const { fitness } = require("../n-queens-fitness");
const { elitist } = require("../n-queens-selection");
const { parents } = require("../n-queens-parents");
const { cross } = require("../n-queens-cross");

const bestTen = elitist(10);
const bestOne = elitist(1);

const chromosomesToPopulation = chromosome => ({
  chromosome,
  fitness: fitness(chromosome)
});

const generations = [];

let population;
for (let run = 0; run < 500; run++) {
  if (run === 0) {
    population = seed(20).map(chromosomesToPopulation);
  } else {
    const chromosomes = bestTen(population).map(c => c.chromosome);

    while (chromosomes.length < 20) {
      const [firstParent, secondParent] = parents(chromosomes);
      const [firstChild, secondChild] = cross(firstParent, secondParent);

      chromosomes.push(firstChild, secondChild);
    }

    population = chromosomes.map(chromosomesToPopulation);
  }

  const average =
    population.reduce((acc, p) => {
      acc += p.fitness;
      return acc;
    }, 0) / population.length;

  generations.push({
    run: run + 1,
    population,
    average
  });

  const [best] = bestOne(population);
  if (best.fitness === 0) {
    break;
  }
}

const run = generations.length;
const data = generations.map(g => g.average);
const lastGeneration = generations[run - 1];
const [best] = bestOne(lastGeneration.population);

clear();
console.log("Runs: ", run);
console.log("Best: ", best);
console.log(
  chart(data, {
    pointChar: "█",
    negativePointChar: "░"
  })
);
