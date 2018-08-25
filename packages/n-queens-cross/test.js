const { cross } = require("../n-queens-cross");

describe("cross", () => {
  test("cross should be an function", () => {
    expect(cross).toBeInstanceOf(Function);
  });

  test("cross should recombine two chromosomes", () => {
    const firstParent = [6, 3, 4, 7, 2, 0, 1, 5];
    const secondParent = [0, 2, 3, 7, 6, 5, 4, 1];

    const [firstChild, secondChild] = cross(firstParent, secondParent);

    expect(firstChild).toHaveLength(8);
    expect(secondChild).toHaveLength(8);
  });
});
