const { fitness } = require("../n-queens-fitness");

describe("fitness", () => {
  test("fitness to be an function", () => {
    expect(fitness).toBeInstanceOf(Function);
  });

  test("fitness([1, 2, 3, 4, 5, 6, 7, 8]) should return 56 colisions", () => {
    const clashes = fitness([1, 2, 3, 4, 5, 6, 7, 8]);

    expect(clashes).toBe(56);
  });

  test("fitness([1, 3, 2, 4, 7, 8, 5, 6]) should return 12 colisions", () => {
    const clashes = fitness([1, 3, 2, 4, 7, 8, 5, 6]);

    expect(clashes).toBe(12);
  });

  test("fitness([1, 7, 5, 8, 2, 4, 6, 3]) should return 0 colisions", () => {
    const clashes = fitness([1, 7, 5, 8, 2, 4, 6, 3]);

    expect(clashes).toBe(0);
  });

  test("fitness([1, 6, 8, 3, 7, 4, 2, 5]) should return 0 colisions", () => {
    const clashes = fitness([1, 6, 8, 3, 7, 4, 2, 5]);

    expect(clashes).toBe(0);
  });

  test("fitness([1, 6, 8, 3, 7, 5, 2, 4]) should return 6 colisions", () => {
    const clashes = fitness([1, 6, 8, 3, 7, 5, 2, 4]);

    expect(clashes).toBe(6);
  });

  test("fitness([1, 1, 1, 1, 1, 1, 1, 1]) should return 7 colisions", () => {
    const clashes = fitness([1, 1, 1, 1, 1, 1, 1, 1]);

    expect(clashes).toBe(7);
  });
});
