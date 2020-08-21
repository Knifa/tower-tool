import { GCodeLocation } from "../../processor";
import { RetractTransformer } from "../retract";
import {
  TransformerActionNoOp,
  TransformerActionReplace,
  TransformerActionSkipToEnd,
} from "../actions";

const mockLocation = (chunk: number | null = null) => {
  return {
    chunk: chunk,
    layer: chunk ? 2 + chunk * (4 / 0.25) : 0,
    z: chunk ? 0.5 + chunk * 4 : 0,
  };
};

describe("retract distance", () => {
  it("outputs nothing before chunks begin", () => {
    const transformer = new RetractTransformer({
      distanceRange: { start: 1, step: 0.25, stop: 5 },
    });

    const location = mockLocation();

    expect(transformer.onLine("G0 X0 Y0 E0", location)).toBeInstanceOf(
      TransformerActionNoOp
    );
    expect(transformer.onLayer(location)).toBeInstanceOf(TransformerActionNoOp);
  });

  it("replaces retraction in either order", () => {
    const transformer = new RetractTransformer({
      distanceRange: { start: 1, step: 0.25, stop: 5 },
    });

    const location: GCodeLocation = mockLocation(0);

    transformer.onLine("M82", location);
    const actionBack = transformer.onLine("G1 E-69.69 F420", location);
    const actionForward = transformer.onLine("G1 F420 E69.69", location);

    expect(actionBack).toBeInstanceOf(TransformerActionReplace);
    expect((actionBack as TransformerActionReplace).lines).toMatchObject([
      "M83 ; Tower Tool",
      "G1 E-1.000 F420.000 ; Tower Tool",
      "M82 ; Tower Tool",
    ]);

    expect(actionForward).toBeInstanceOf(TransformerActionReplace);
    expect((actionForward as TransformerActionReplace).lines).toMatchObject([
      "M83 ; Tower Tool",
      "G1 E1.000 F420.000 ; Tower Tool",
      "M82 ; Tower Tool",
    ]);
  });

  it("triggers end skip after stop has been reached", () => {
    const transformer = new RetractTransformer({
      distanceRange: { start: 1, step: 1, stop: 5 },
    });

    const location = mockLocation(5);

    expect(transformer.onLayer(location)).toBeInstanceOf(
      TransformerActionSkipToEnd
    );
  });
});

describe("retract speed", () => {
  it("outputs nothing before chunks begin", () => {
    const transformer = new RetractTransformer({
      distanceRange: { start: 1, step: 0.25, stop: 5 },
    });

    const location: GCodeLocation = mockLocation();

    expect(transformer.onLine("G0 X0 Y0 E0", location)).toBeInstanceOf(
      TransformerActionNoOp
    );
    expect(transformer.onLayer(location)).toBeInstanceOf(TransformerActionNoOp);
  });

  it("replaces retraction", () => {
    const transformer = new RetractTransformer({
      speedRange: { start: 10, step: 10, stop: 100 },
    });

    const location: GCodeLocation = {
      chunk: 0,
      layer: 2,
      z: 0.25,
    };

    transformer.onLine("M82", location);
    const actionBack = transformer.onLine("G1 E-69.69 F420", location);
    const actionForward = transformer.onLine("G1 E69.69 F420", location);

    expect(actionBack).toBeInstanceOf(TransformerActionReplace);
    expect((actionBack as TransformerActionReplace).lines).toMatchObject([
      "M83 ; Tower Tool",
      "G1 E-69.690 F600.000 ; Tower Tool",
      "M82 ; Tower Tool",
    ]);

    expect(actionForward).toBeInstanceOf(TransformerActionReplace);
    expect((actionForward as TransformerActionReplace).lines).toMatchObject([
      "M83 ; Tower Tool",
      "G1 E69.690 F600.000 ; Tower Tool",
      "M82 ; Tower Tool",
    ]);
  });

  it("triggers end skip after stop has been reached", () => {
    const transformer = new RetractTransformer({
      speedRange: { start: 10, step: 10, stop: 100 },
    });

    const location: GCodeLocation = mockLocation(10);

    expect(transformer.onLayer(location)).toBeInstanceOf(
      TransformerActionSkipToEnd
    );
  });
});

describe("absolute vs. relative retraction", () => {
  it("reverts to absolute", () => {
    const transformer = new RetractTransformer({
      distanceRange: { start: 1, step: 0.25, stop: 5 },
    });

    const location: GCodeLocation = mockLocation(0);

    transformer.onLine("M83", location);
    transformer.onLine("M82", location);
    const action = transformer.onLine("G1 E-69.69 F420", location);

    expect(action).toBeInstanceOf(TransformerActionReplace);
    expect((action as TransformerActionReplace).lines).toMatchObject([
      "M83 ; Tower Tool",
      "G1 E-1.000 F420.000 ; Tower Tool",
      "M82 ; Tower Tool",
    ]);
  });

  it("reverts to relative", () => {
    const transformer = new RetractTransformer({
      distanceRange: { start: 1, step: 0.25, stop: 5 },
    });

    const location: GCodeLocation = mockLocation(0);

    transformer.onLine("M82", location);
    transformer.onLine("M83", location);
    const action = transformer.onLine("G1 E-69.69 F420", location);

    expect(action).toBeInstanceOf(TransformerActionReplace);
    expect((action as TransformerActionReplace).lines).toMatchObject([
      "M83 ; Tower Tool",
      "G1 E-1.000 F420.000 ; Tower Tool",
      "M83 ; Tower Tool",
    ]);
  });
});
