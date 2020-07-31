import React from "react";
import { useDispatch } from "react-redux";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faStream, faAtom } from "@fortawesome/free-solid-svg-icons";

import { Block } from "../Block";
import { FormContainer } from "../forms/FormContainer";
import { RangeGroup } from "../forms/RangeGroup";
import { TransformVariable } from "../gcode/transformers";

import { snapRange, variableToCopy } from "../utils";
import { useSelector } from "../state";
import { gcodeActions } from "../state/gcode";

const VariableSelector = (props: {
  type: TransformVariable;
  onChange: (type: TransformVariable) => void;
}) => {
  const options = Object.entries(variableToCopy).map(([v, c]) => {
    return (
      <option value={v} key={v}>
        {c.name}
      </option>
    );
  });

  return (
    <label>
      <div className="FormContainer__labelText">Variable</div>
      <div className="FormContainer__inputContainer">
        <div className="FormContainer__inputIcon">
          <FontAwesomeIcon icon={faAtom} fixedWidth />
        </div>
        <select
          value={props.type}
          onChange={(e) => {
            props.onChange(Number(e.target.value) as TransformVariable);
          }}
        >
          {options}
        </select>
      </div>
    </label>
  );
};

export const TowerSettings = () => {
  const variable = useSelector((state) => state.gcode.variable);
  const dispatch = useDispatch();
  //onst variable = TransformVariable.RetractSpeed;
  const variableCopy = variableToCopy[variable.type];

  return (
    <Block title="Tower Settings" titleIcon={faStream}>
      <div className="BlockContent__text">
        <p>
          Configure your <strong>tower settings</strong>.
        </p>
        <p>
          The print will begin with <strong>[variable]</strong> set to{" "}
          <strong>[start]</strong>, increasing by <strong>[step]</strong> each
          step. The print will finish early automatically after{" "}
          <strong>[stop]</strong> inclusive.
        </p>
      </div>

      <FormContainer>
        <VariableSelector
          type={variable.type}
          onChange={(type) => {
            dispatch(gcodeActions.variable.setType(type));
          }}
        />
        <RangeGroup
          range={variable.range}
          units={variableCopy.units!}
          step={variableCopy.step}
          onChange={(range) => {
            dispatch(gcodeActions.variable.setRange(range));
          }}
          onBlur={() => {
            dispatch(gcodeActions.variable.setRange(snapRange(variable.range)));
          }}
        />
      </FormContainer>
    </Block>
  );
};
