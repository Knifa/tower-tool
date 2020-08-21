import { Range } from "../../utils";
import { GCodeLocation } from "../processor";
import {
  TransformerActionNoOp,
  TransformerActionSkipToEnd,
  TransformerAction,
  TransformerActionReplace,
} from "./actions";
import { GCodeTransformer } from "./transformer";

enum RetractMode {
  Absolute,
  Relative,
}

export class RetractTransformer extends GCodeTransformer {
  readonly distanceRange?: Range;
  readonly speedRange?: Range;

  private retractMode: RetractMode;

  private readonly retractRegex: RegExp;
  private readonly relativeRegex: RegExp;
  private readonly absoluteRegex: RegExp;

  constructor(opts: {
    distanceRange?: Range;
    speedRange?: Range;
    retractRegex?: RegExp;
  }) {
    super();

    this.distanceRange = opts.distanceRange;
    this.speedRange = opts.speedRange;
    this.retractRegex = opts.retractRegex
      ? opts.retractRegex
      : /G(0|1)((?=.*\bE(?<distance>(-|\d|\.)+)\b)(?=.*\bF(?<speed>(\d|\.)+)\b))(?!.*(X|Y|Z))/;

    this.retractMode = RetractMode.Absolute;

    this.relativeRegex = /M83/;
    this.absoluteRegex = /M82/;
  }

  onLine(line: string, location: GCodeLocation): TransformerAction {
    if (line.match(this.absoluteRegex)) {
      this.retractMode = RetractMode.Absolute;
    } else if (line.match(this.relativeRegex)) {
      this.retractMode = RetractMode.Relative;
    }

    if (location.chunk === null) return new TransformerActionNoOp();

    const retractMatch = line.match(this.retractRegex);
    if (!retractMatch) return new TransformerActionNoOp();

    const distance = Number.parseFloat(retractMatch.groups!["distance"]);
    const speed = Number.parseFloat(retractMatch.groups!["speed"]);
    const direction = distance > 0 ? 1 : -1;

    let newDistance = distance;
    let newSpeed = speed;

    if (this.distanceRange) {
      newDistance =
        this.distanceRange.start + location.chunk * this.distanceRange.step;

      if (newDistance > this.distanceRange.stop) {
        return new TransformerActionSkipToEnd();
      }
      newDistance = newDistance * direction;
    }

    if (this.speedRange) {
      newSpeed = this.speedRange.start + location.chunk * this.speedRange.step;
      if (newSpeed > this.speedRange.stop) {
        return new TransformerActionSkipToEnd();
      }
      newSpeed = newSpeed * 60;
    }

    return new TransformerActionReplace([
      "M83 ; Tower Tool",
      `G1 E${newDistance.toFixed(3)} F${newSpeed.toFixed(3)} ; Tower Tool`,
      this.retractMode === RetractMode.Absolute
        ? "M82 ; Tower Tool"
        : "M83 ; Tower Tool",
    ]);
  }

  onLayer(location: GCodeLocation): TransformerAction {
    if (location.chunk === null) return new TransformerActionNoOp();

    if (this.distanceRange) {
      const endChunk =
        (this.distanceRange.stop - this.distanceRange.start) /
        this.distanceRange.step;

      if (location.chunk > endChunk) {
        return new TransformerActionSkipToEnd();
      }
    }

    if (this.speedRange) {
      const endChunk =
        (this.speedRange.stop - this.speedRange.start) / this.speedRange.step;

      if (location.chunk > endChunk) {
        return new TransformerActionSkipToEnd();
      }
    }

    return new TransformerActionNoOp();
  }
}
