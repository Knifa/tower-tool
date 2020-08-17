import React, { FunctionComponent } from "react";
import { useDispatch } from "react-redux";
import {
  faCog,
  faLayerGroup,
  faLevelDownAlt,
  faLevelUpAlt,
} from "@fortawesome/free-solid-svg-icons";

import { Block } from "../Block";
import { FormContainer } from "../forms/FormContainer";
import { NumberInput } from "../forms/NumberInput";

import { gcodeActions } from "../state/gcode";
import { useSelector } from "../state";

export const GCodeSettingsBlock: FunctionComponent = () => {
  const dispatch = useDispatch();
  const gcodeSettings = useSelector((state) => state.gcode.gcodeSettings);

  return (
    <Block title="G-code Settings" titleIcon={faCog}>
      <div className="BlockContent__text">
        <p>
          Customize your <strong>slicer</strong> and <strong>test shape</strong>{" "}
          settings. The defaults here are perfect for our test shapes.
        </p>
      </div>
      <FormContainer>
        <NumberInput
          label="Layer Height"
          labelIcon={faLayerGroup}
          value={gcodeSettings.layerHeight}
          step={0.05}
          min={0}
          units={"mm"}
          onChange={(value) => {
            dispatch(
              gcodeActions.gcodeSettings.set({
                ...gcodeSettings,
                layerHeight: value,
              })
            );
          }}
        />
        <NumberInput
          label="Base Height"
          labelIcon={faLevelDownAlt}
          value={gcodeSettings.baseHeight}
          step={0.25}
          min={0}
          units={"mm"}
          onChange={(value) => {
            dispatch(
              gcodeActions.gcodeSettings.set({
                ...gcodeSettings,
                baseHeight: value,
              })
            );
          }}
        />
        <NumberInput
          label="Step Height"
          labelIcon={faLevelUpAlt}
          value={gcodeSettings.stepHeight}
          step={0.25}
          min={0}
          units={"mm"}
          onChange={(value) => {
            dispatch(
              gcodeActions.gcodeSettings.set({
                ...gcodeSettings,
                stepHeight: value,
              })
            );
          }}
        />
      </FormContainer>
    </Block>
  );
};
