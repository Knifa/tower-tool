import { Range } from "../../utils";
import { GCodeLocation } from "../processor";
import { GCodeTransformer } from "./transformer";
import {
  TransformerActionNoOp,
  TransformerActionSkipToEnd,
  TransformerActionAppend,
} from "./actions";

export class JerkTransformer extends GCodeTransformer {
  readonly accelRange: Range;

  constructor(accelRange: Range) {
    super();
    this.accelRange = accelRange;
  }

  onLayer(location: GCodeLocation) {
    if (location.chunk == null) return new TransformerActionNoOp();

    const newJerk = Math.floor(
      this.accelRange.start + location.chunk! * this.accelRange.step
    );
    if (newJerk > this.accelRange.stop) {
      return new TransformerActionSkipToEnd();
    }

    return new TransformerActionAppend([
      `M205 X${newJerk.toFixed(3)} Y${newJerk.toFixed(3)} Z${newJerk.toFixed(
        3
      )} ; Tower Tool`,
    ]);
  }
}
