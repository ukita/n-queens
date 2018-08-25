const { parents } = require("../n-queens-parents");
const { seed } = require("../n-queens-seed");

describe("parents", () => {
  test("parents should be an function", () => {
    expect(parents).toBeInstanceOf(Function);
  });

  test("parents should return an array", () => {
    const chromossomes = seed(5);
    const selectedParents = parents(chromossomes);

    expect(selectedParents).toHaveLength(2);
  });

  test("parents should be different", () => {
    const chromossomes = seed(5);
    const selectedParents = parents(chromossomes);

    expect(selectedParents[0]).not.toEqual(selectedParents[1]);
  });
});
