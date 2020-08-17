import { readFileText } from "../utils";
import { GCodeFile } from "../processor";

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
