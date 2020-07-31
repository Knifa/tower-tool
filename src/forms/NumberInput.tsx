import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { IconProp } from "@fortawesome/fontawesome-svg-core";

export const NumberInput = (props: {
  onChange?: (value: number) => void;
  onBlur?: () => void;
  min?: number;
  step?: number;
  value?: number;
  label: string;
  labelIcon: IconProp;
  units: string;
}) => {
  return (
    <label>
      <div className="FormContainer__labelText">{props.label}</div>
      <div className="FormContainer__inputContainer">
        <div className="FormContainer__inputIcon">
          <FontAwesomeIcon icon={props.labelIcon} fixedWidth />
        </div>
        <input
          type="number"
          value={props.value}
          step={props.step}
          min={props.min ? props.min : 0}
          onChange={(e) => {
            props.onChange && props.onChange(Number(e.target.value));
          }}
          onBlur={props.onBlur}
        />
        <div className="FormContainer__inputUnits">{props.units}</div>
      </div>
    </label>
  );
};
