import { readFileText } from "../utils";
import { GCodeFile, GCodeLocation } from "../processor";

jest.mock("../utils");

describe("GCodeFile", () => {
  it("can be created from a File", async () => {
    const mockFile = {} as File;

    (readFileText as jest.Mock).mockResolvedValue(
      "a line\nanother line\na third line"
    );
    const gcodeFile = await GCodeFile.fromFile(mockFile);

    expect(gcodeFile.file).toBe(mockFile);
    expect(gcodeFile.lines).toEqual(["a line", "another line", "a third line"]);
  });
});

describe("GCodeLocation", () => {
  it("can be created from layer details", async () => {
    const loc = GCodeLocation.fromLayer(4, 0.25, 4, 0.5);

    expect(loc.layer).toEqual(4);
    expect(loc.z).toEqual(5 * 0.25);
    expect(loc.chunk).toEqual(0);
  });
});
