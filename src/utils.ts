import { TransformVariable } from "./gcode/transformers";

export interface Range {
  start: number;
  stop: number;
  step: number;
}

export function snapRange(range: Range): Range {
  let { start, step, stop } = range;
  if (start + step > stop) {
    stop = start + step;
  }

  stop = Math.floor(stop / step) * step;

  return {
    start,
    step,
    stop,
  };
}

export function rangeValues(range: Range): number[] {
  if (range.step <= 0) return [];

  let values = [];

  let x = range.start;
  for (let i = 0; i < 20; i++) {
    if (x > range.stop) {
      break;
    }

    values.push(x);
    x += range.step;
  }

  return values;
}

type VariableCopy = {
  readonly name: string;
  readonly units: string | null;
  readonly step: number;
};
export const variableToCopy: Record<TransformVariable, VariableCopy> = {
  [TransformVariable.RetractDistance]: {
    name: "Retraction Distance",
    units: "mm",
    step: 0.25,
  },
  [TransformVariable.RetractSpeed]: {
    name: "Retraction Speed",
    units: "mm/s",
    step: 10,
  },
  [TransformVariable.Temperature]: {
    name: "Hotend Temperature",
    units: "°C",
    step: 5,
  },
  [TransformVariable.Acceleration]: {
    name: "Acceleration",
    units: "mm/s²",
    step: 100,
  },
  [TransformVariable.Jerk]: {
    name: "Jerk",
    units: "mm/s²",
    step: 5,
  },
  [TransformVariable.Flow]: {
    name: "Flow",
    units: "%",
    step: 1,
  },
  [TransformVariable.LinearAdvance]: {
    name: "Linear Advance (Marlin)",
    units: "K",
    step: 0.1,
  },
};
