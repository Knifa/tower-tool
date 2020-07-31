import { Range } from "../../utils";
import { GCodeLocation } from "../processor";
import { GCodeTransformer } from "./transformer";
import { TransformerActionSkipToEnd, TransformerActionAppend } from "./actions";

export class TemperatureTransformer extends GCodeTransformer {
  readonly tempRange: Range;

  constructor(tempRange: Range) {
    super();
    this.tempRange = tempRange;
  }

  onLayer(location: GCodeLocation) {
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
