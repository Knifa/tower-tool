import { snapRange, rangeValues } from "../utils";

describe("range utils", () => {
  it("snaps ranges", () => {
    const mockRange = {
      start: 1,
      step: 0.25,
      stop: 5.37,
    };

    expect(snapRange(mockRange)).toEqual({
      start: 1,
      step: 0.25,
      stop: 5.25,
    });
  });

  it("generates step values", () => {
    const mockRange = {
      start: 1,
      step: 1,
      stop: 5,
    };

    expect(rangeValues(mockRange)).toEqual([1, 2, 3, 4, 5]);
  });
});
