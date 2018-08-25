const { seed } = require("../n-queens-seed");

describe("seed", () => {
  test("seed should be an function", () => {
    expect(seed).toBeInstanceOf(Function);
  });

  test("seed(5) should returns an array of 5 elements", () => {
    const population = seed(5);

    expect(population).toHaveLength(5);
  });

  test("seed(20) should returns an array of 20 elements", () => {
    const population = seed(20);

    expect(population).toHaveLength(20);
  });

  test("seed(1) should returns an matrix", () => {
    const [chromosome] = seed(1);

    expect(chromosome).toBeInstanceOf(Array);
  });

  test("seed(1) returns a list of seed with 8 elements", () => {
    const [chromosome] = seed(1);

    expect(chromosome).toHaveLength(8);
  });
});
