const clear = require("clear");
const chart = require("chart");
const CliTable = require("cli-table");

const { seed } = require("../n-queens-seed");
const { fitness } = require("../n-queens-fitness");
const { elitist } = require("../n-queens-selection");
const { parents } = require("../n-queens-parents");
const { cross } = require("../n-queens-cross");
const { mutate } = require("../n-queens-mutation");

const bestTen = elitist(10);
const bestOne = elitist(1);

const chromosomesToPopulation = chromosome => ({
  chromosome,
  fitness: fitness(chromosome)
});

const generations = [];

let population;
let lastBetterFitness;
let shouldMutate = false;

for (let run = 0; run < 1000; run++) {
  if (run === 0) {
    population = seed(20).map(chromosomesToPopulation);
  } else {
    let chromosomes = bestTen(population).map(c => c.chromosome);

    while (chromosomes.length < 20) {
      const [firstParent, secondParent] = parents(chromosomes);
      const [firstChild, secondChild] = cross(firstParent, secondParent);

      chromosomes.push(firstChild, secondChild);
    }

    if (shouldMutate) {
      chromosomes = mutate(chromosomes, 2);
      shouldMutate = false;
    }

    population = chromosomes.map(chromosomesToPopulation);
  }

  const average =
    population.reduce((acc, p) => acc + p.fitness, 0) / population.length;

  generations.push({
    run: run + 1,
    population,
    average
  });

  const [best] = bestOne(population);
  if (best.fitness === 0) {
    break;
  }

  shouldMutate = lastBetterFitness === best.fitness;
  lastBetterFitness = best.fitness;
}

const run = generations.length;
const data = generations.map(g => g.average);
const lastGeneration = generations[run - 1];
const [best] = bestOne(lastGeneration.population);

const table = new CliTable();

best.chromosome.forEach(c => {
  const arr = Array.from(best.chromosome).map(() => 0);
  arr[c] = "♕";
  table.push(arr);
});

clear();

console.log("🤷");
console.log("Runs: ", run);
console.log("Best: ", best);
console.log(
  chart(data, {
    pointChar: "█",
    negativePointChar: "░"
  })
);
console.log(table.toString());
