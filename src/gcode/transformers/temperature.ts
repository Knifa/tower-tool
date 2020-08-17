import { Range } from "../../utils";
import { GCodeLocation } from "../processor";
import { GCodeTransformer } from "./transformer";
import {
  TransformerActionSkipToEnd,
  TransformerActionAppend,
  TransformerActionNoOp,
} from "./actions";

export class TemperatureTransformer extends GCodeTransformer {
  readonly tempRange: Range;

  constructor(tempRange: Range) {
    super();
    this.tempRange = tempRange;
  }

  onLayer(location: GCodeLocation) {
    if (location.chunk === null) return new TransformerActionNoOp();

    const newTemp = Math.floor(
      this.tempRange.start + location.chunk! * this.tempRange.step
    );
    if (newTemp > this.tempRange.stop) {
      return new TransformerActionSkipToEnd();
    }

    return new TransformerActionAppend([
      `M104 S${newTemp.toFixed(0)} ; Tower Tool`,
    ]);
  }
}
