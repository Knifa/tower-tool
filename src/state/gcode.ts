import { createReducer, createAction } from "@reduxjs/toolkit";

import { Range } from "../utils";
import { TransformVariable } from "../gcode/transformers";
import { GCodeSettings } from "../gcode/processor";

const variableDefaultRanges: Record<TransformVariable, Range> = {
  [TransformVariable.RetractDistance]: {
    start: 1,
    step: 0.25,
    stop: 5,
  },
  [TransformVariable.RetractSpeed]: {
    start: 10,
    step: 10,
    stop: 100,
  },
  [TransformVariable.Temperature]: {
    start: 180,
    step: 10,
    stop: 240,
  },
  [TransformVariable.Acceleration]: {
    start: 500,
    step: 100,
    stop: 2000,
  },
  [TransformVariable.Jerk]: {
    start: 5,
    step: 5,
    stop: 50,
  },
  [TransformVariable.Flow]: {
    start: 95,
    step: 1,
    stop: 105,
  },
};

export interface GcodeReducerState {
  variable: {
    type: TransformVariable;
    range: Range;
  };
  gcodeSettings: GCodeSettings;
}

export const gcodeActions = {
  variable: {
    setType: createAction<TransformVariable>("variable/setType"),
    setRange: createAction<Range>("variable/setRange"),
  },
  gcodeSettings: {
    set: createAction<GCodeSettings>("gcodeSettings/set"),
  },
};

const getInitialState = (): GcodeReducerState => {
  const state: Omit<GcodeReducerState, "processor"> = {
    variable: {
      type: TransformVariable.RetractDistance,
      range: variableDefaultRanges[TransformVariable.RetractDistance],
    },
    gcodeSettings: {
      baseHeight: 0.5,
      layerHeight: 0.25,
      stepHeight: 4,
    },
  };

  return {
    ...state,
  };
};

export const gcodeReducer = createReducer(getInitialState(), (builder) => {
  builder
    .addCase(gcodeActions.gcodeSettings.set, (state, action) => {
      state.gcodeSettings = action.payload;
    })
    .addCase(gcodeActions.variable.setType, (state, action) => {
      state.variable.type = action.payload;
      state.variable.range = variableDefaultRanges[state.variable.type];
    })
    .addCase(gcodeActions.variable.setRange, (state, action) => {
      state.variable.range = action.payload;
    });
});
