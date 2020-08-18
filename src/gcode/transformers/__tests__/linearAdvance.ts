import { LinearAdvanceTransformer } from "../linearAdvance";
import {
  TransformerActionNoOp,
  TransformerActionAppend,
  TransformerActionSkipToEnd,
} from "../actions";

const mockRange = (override: any = {}) => {
  return {
    start: 1,
    step: 0.1,
    stop: 1.5,
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
  const transformer = new LinearAdvanceTransformer(mockRange());
  const location = mockLocation();

  expect(transformer.onLine("G0 X0 Y0 E0", location)).toBeInstanceOf(
    TransformerActionNoOp
  );
  expect(transformer.onLayer(location)).toBeInstanceOf(TransformerActionNoOp);
});

it("outputs K change on new layer", () => {
  const transformer = new LinearAdvanceTransformer(mockRange());
  const action = transformer.onLayer(mockLocation(3));

  expect(action).toBeInstanceOf(TransformerActionAppend);
  expect((action as TransformerActionAppend).lines).toMatchObject([
    "M900 K1.3 ; Tower Tool",
  ]);
});

it("triggers end skip after stop has been reached", () => {
  const transformer = new LinearAdvanceTransformer(mockRange());

  expect(transformer.onLayer(mockLocation(6))).toBeInstanceOf(
    TransformerActionSkipToEnd
  );
});
