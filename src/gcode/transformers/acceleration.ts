import { Range } from "../../utils";
import { GCodeLocation } from "../processor";
import { GCodeTransformer } from "./transformer";
import {
  TransformerActionNoOp,
  TransformerActionSkipToEnd,
  TransformerActionAppend,
} from "./actions";

export class AccelerationTransformer extends GCodeTransformer {
  readonly accelRange: Range;

  constructor(accelRange: Range) {
    super();
    this.accelRange = accelRange;
  }

  onLayer(location: GCodeLocation) {
    if (location.chunk == null) return new TransformerActionNoOp();

    const newAccel = Math.floor(
      this.accelRange.start + location.chunk! * this.accelRange.step
    );
    if (newAccel > this.accelRange.stop) {
      return new TransformerActionSkipToEnd();
    }

    return new TransformerActionAppend([`M204 P${newAccel} ; Tower Tool`]);
  }
}
