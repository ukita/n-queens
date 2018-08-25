const { elitist } = require("../n-queens-selection");
const { seed } = require("../n-queens-seed");

describe("elitist", () => {
  test("elitist should be a function", () => {
    expect(elitist).toBeInstanceOf(Function);
  });

  test("elitist(2) should returns a function", () => {
    expect(elitist).toBeInstanceOf(Function);
  });

  test("elitist(5) returns the five best", () => {
    const population = seed(20);
    const elitistFn = elitist(5);

    expect(elitistFn(population)).toHaveLength(5);
  });
});
