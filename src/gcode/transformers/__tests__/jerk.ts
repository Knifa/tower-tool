import { JerkTransformer } from "../jerk";
import {
  TransformerActionNoOp,
  TransformerActionAppend,
  TransformerActionSkipToEnd,
} from "../actions";

const mockRange = (override: any = {}) => {
  return {
    start: 5,
    step: 5,
    stop: 25,
    ...override,
  };
};

const mockLocation = (chunk: number | null = null) => {
  return {
    chunk: chunk,
    layer: chunk ? 2 + chunk * (4 / 0.25) : 0,
    z: chunk ? 0.5 + chunk * 4 : 0,
  };
};

it("outputs nothing before chunks begin", () => {
  const transformer = new JerkTransformer(mockRange());
  const location = mockLocation();

  expect(transformer.onLine("G0 X0 Y0 E0", location)).toBeInstanceOf(
    TransformerActionNoOp
  );
  expect(transformer.onLayer(location)).toBeInstanceOf(TransformerActionNoOp);
});

it("outputs jerk change on new layer", () => {
  const transformer = new JerkTransformer(mockRange());
  const action = transformer.onLayer(mockLocation(1));

  expect(action).toBeInstanceOf(TransformerActionAppend);
  expect((action as TransformerActionAppend).lines).toMatchObject([
    "M205 X10.000 Y10.000 Z10.000 ; Tower Tool",
  ]);
});

it("triggers end skip after stop has been reached", () => {
  const transformer = new JerkTransformer(mockRange());

  expect(transformer.onLayer(mockLocation(6))).toBeInstanceOf(
    TransformerActionSkipToEnd
  );
});
