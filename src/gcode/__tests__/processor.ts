import { readFileText } from "../utils";
import {
  TransformVariable,
  RetractTransformer,
  TemperatureTransformer,
  AccelerationTransformer,
  JerkTransformer,
  FlowTransformer,
} from "../transformers";
import { GCodeFile, GCodeLocation } from "../processor";
import { GCodeProcessor } from "..";

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
  it("can be created from layer details", () => {
    const loc = GCodeLocation.fromLayer(4, 0.25, 4, 0.5);

    expect(loc.layer).toEqual(4);
    expect(loc.z).toEqual(5 * 0.25);
    expect(loc.chunk).toEqual(0);
  });

  it("meets chunk boundary", () => {
    const locA = GCodeLocation.fromLayer(2, 0.25, 4, 0.5);
    expect(locA.layer).toEqual(2);
    expect(locA.z).toEqual(3 * 0.25);
    expect(locA.chunk).toEqual(0);

    const locB = GCodeLocation.fromLayer(18, 0.25, 4, 0.5);
    expect(locB.layer).toEqual(18);
    expect(locB.z).toEqual(19 * 0.25);
    expect(locB.chunk).toEqual(1);
  });
});

describe("GCodeProcessor", () => {
  const mockSettings = {
    layerHeight: 0.25,
    baseHeight: 0.5,
    stepHeight: 4,
  };

  it("processes with layer-based (temp)", () => {
    const mockRange = {
      start: 180,
      step: 5,
      stop: 200,
    };

    const mockFile = {
      file: {} as File,
      lines: [";LAYER:0", ";LAYER:1", ";LAYER:2", ";LAYER:3"],
    } as GCodeFile;

    const processor = GCodeProcessor.fromVariable(
      TransformVariable.Temperature,
      mockSettings,
      mockRange
    );

    const lines = processor.process(mockFile);
    expect(lines).toEqual([
      ";LAYER:0",
      ";LAYER:1",
      "M104 S180 ; Tower Tool",
      ";LAYER:2",
      "M104 S180 ; Tower Tool",
      ";LAYER:3",
    ]);
  });

  it("processes with line-based (retract)", () => {
    const mockRange = {
      start: 1,
      step: 1,
      stop: 5,
    };

    const mockFile = {
      file: {} as File,
      lines: [
        ";LAYER:0",
        ";LAYER:1",
        ";LAYER:2",
        "G1 E-0.1 F300",
        ";...",
        "G1 E0.1 F300",
        ";LAYER:3",
      ],
    } as GCodeFile;

    const processor = GCodeProcessor.fromVariable(
      TransformVariable.RetractDistance,
      mockSettings,
      mockRange
    );

    const lines = processor.process(mockFile);
    expect(lines).toEqual([
      ";LAYER:0",
      ";LAYER:1",
      ";LAYER:2",
      "M83 ; Tower Tool",
      "G1 E-1.000 F300.000 ; Tower Tool",
      "M82 ; Tower Tool",
      ";...",
      "M83 ; Tower Tool",
      "G1 E1.000 F300.000 ; Tower Tool",
      "M82 ; Tower Tool",
      ";LAYER:3",
    ]);
  });
});
