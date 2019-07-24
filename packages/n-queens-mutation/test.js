const { mutate, operators } = require("../n-queens-mutation");
const { seed } = require("../n-queens-seed");

describe("mutate", () => {
  test("mutate should be an function", () => {
    expect(mutate).toBeInstanceOf(Function);
  });

  test("operator swap should swap two positions", () => {
    const [chromosome] = seed(1);

    const newChromosome = operators.swap(chromosome);

    expect(newChromosome).not.toEqual(chromosome);
  });

  test("should mutate at least one chromosome", () => {
    const chromosomes = seed(5);

    const newChromosomes = mutate(chromosomes);

    expect(newChromosomes).not.toEqual(chromosomes);
  });
});
