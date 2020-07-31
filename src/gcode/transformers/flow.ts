import { Range } from "../../utils";
import { GCodeLocation } from "../processor";
import { GCodeTransformer } from "./transformer";
import {
  TransformerActionNoOp,
  TransformerActionSkipToEnd,
  TransformerActionAppend,
} from "./actions";

export class FlowTransformer extends GCodeTransformer {
  readonly flowRange: Range;

  constructor(flowRange: Range) {
    super();
    this.flowRange = flowRange;
  }

  onLayer(location: GCodeLocation) {
    if (location.chunk == null) return new TransformerActionNoOp();

    const newFlow = Math.floor(
      this.flowRange.start + location.chunk! * this.flowRange.step
    );
    if (newFlow > this.flowRange.stop) {
      return new TransformerActionSkipToEnd();
    }

    return new TransformerActionAppend([
      `M221 S${newFlow.toFixed(0)} ; Tower Tool`,
    ]);
  }
}
