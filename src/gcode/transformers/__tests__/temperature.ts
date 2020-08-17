import { TemperatureTransformer } from "../temperature";
import {
  TransformerActionNoOp,
  TransformerActionAppend,
  TransformerActionSkipToEnd,
} from "../actions";

const mockRange = (override: any = {}) => {
  return {
    start: 180,
    step: 10,
    stop: 240,
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
  const transformer = new TemperatureTransformer(mockRange());
  const location = mockLocation();

  expect(transformer.onLine("G0 X0 Y0 E0", location)).toBeInstanceOf(
    TransformerActionNoOp
  );
  expect(transformer.onLayer(location)).toBeInstanceOf(TransformerActionNoOp);
});

it("outputs temperature change on new layer", () => {
  const transformer = new TemperatureTransformer(mockRange());
  const action = transformer.onLayer(mockLocation(3));

  expect(action).toBeInstanceOf(TransformerActionAppend);
  expect((action as TransformerActionAppend).lines).toMatchObject([
    "M104 S210 ; Tower Tool",
  ]);
});

it("triggers end skip after stop has been reached", () => {
  const transformer = new TemperatureTransformer(mockRange());

  expect(transformer.onLayer(mockLocation(8))).toBeInstanceOf(
    TransformerActionSkipToEnd
  );
});
