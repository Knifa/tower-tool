import React from "react";
import { NumberInput } from "./NumberInput";
import {
  faPlay,
  faStepForward,
  faStop,
} from "@fortawesome/free-solid-svg-icons";

import { Range } from "../utils";

export const RangeGroup = (props: {
  onChange: (range: Range) => void;
  onBlur: () => void;
  range: Range;
  units: string;
  step: number;
}) => {
  function onInputChange(key: "start" | "step" | "stop", value: number) {
    props.onChange({
      ...props.range,
      [key]: value,
    });
  }

  return (
    <>
      <NumberInput
        label="Start"
        units={props.units}
        labelIcon={faPlay}
        value={props.range.start}
        step={props.range.step}
        min={0}
        onChange={(v) => onInputChange("start", v)}
        onBlur={props.onBlur}
      />
      <NumberInput
        label="Step"
        units={props.units}
        labelIcon={faStepForward}
        value={props.range.step}
        step={props.step}
        min={props.step}
        onChange={(v) => onInputChange("step", v)}
        onBlur={props.onBlur}
      />
      <NumberInput
        label="Stop"
        units={props.units}
        labelIcon={faStop}
        value={props.range.stop}
        step={props.range.step}
        min={0}
        onChange={(v) => onInputChange("stop", v)}
        onBlur={props.onBlur}
      />
    </>
  );
};
