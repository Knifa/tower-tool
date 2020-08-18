import { Range } from "../../utils";
import { GCodeLocation } from "../processor";
import { GCodeTransformer } from "./transformer";
import {
  TransformerActionNoOp,
  TransformerActionSkipToEnd,
  TransformerActionAppend,
} from "./actions";

export class LinearAdvanceTransformer extends GCodeTransformer {
  readonly accelRange: Range;

  constructor(accelRange: Range) {
    super();
    this.accelRange = accelRange;
  }

  onLayer(location: GCodeLocation) {
    if (location.chunk == null) return new TransformerActionNoOp();

    const newK = this.accelRange.start + location.chunk! * this.accelRange.step;
    if (newK > this.accelRange.stop) {
      return new TransformerActionSkipToEnd();
    }

    return new TransformerActionAppend([`M900 K${newK} ; Tower Tool`]);
  }
}
