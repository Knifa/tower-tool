import { configureStore, combineReducers } from "@reduxjs/toolkit";
import {
  useSelector as useUntypedSelector,
  TypedUseSelectorHook,
} from "react-redux";

import { gcodeReducer } from "./gcode";

const rootReducer = combineReducers({
  gcode: gcodeReducer,
});

export const store = configureStore({
  reducer: rootReducer,
});

export type RootState = ReturnType<typeof rootReducer>;
export const useSelector: TypedUseSelectorHook<RootState> = useUntypedSelector;
