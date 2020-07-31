import React, { FunctionComponent } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLayerGroup, faAtom } from "@fortawesome/free-solid-svg-icons";
import { round } from "lodash";

import { useSelector } from "../state";
import { rangeValues, variableToCopy } from "../utils";

import "./SummaryBlock.scss";

function SummaryBlockStep(props: { step: number; value: number }) {
  return (
    <tr className="SummaryBlockStep">
      <td className="SummaryBlockStep__step">{props.step}</td>
      <td className="SummaryBlockStep__value">{round(props.value, 2)}</td>
    </tr>
  );
}

export const SummaryBlock: FunctionComponent = () => {
  const { type, range } = useSelector((state) => state.gcode.variable);
  const stepValues = rangeValues(range);
  stepValues.reverse();

  const copy = variableToCopy[type];

  return (
    <table className="SummaryBlock__table">
      <thead>
        <tr>
          <td className="SummaryBlock__stepHeader">
            <FontAwesomeIcon icon={faLayerGroup} fixedWidth /> Step
          </td>
          <td className="SummaryBlock__valueHeader">
            <FontAwesomeIcon icon={faAtom} fixedWidth /> {copy.name} (
            {copy.units})
          </td>
        </tr>
      </thead>
      <tbody>
        {stepValues.map((v, i) => (
          <SummaryBlockStep step={stepValues.length - i} value={v} key={i} />
        ))}
      </tbody>
    </table>
  );
};
