import React, { useState } from "react";

import { GCodeInputBlock } from "./blocks/GCodeInputBlock";
import { GCodeOutputBlock } from "./blocks/GCodeOutputBlock";
import { GCodeSettingsBlock } from "./blocks/GCodeSettingsBlock";
import { TowerSettings } from "./blocks/TowerSettings";
import { SummaryBlock } from "./blocks/SummaryBlock";
import { Intro } from "./Intro";

import { useSelector } from "./state";
import { GCodeFile, GCodeProcessor } from "./gcode";

import "./App.scss";
import { Header } from "./Header";

export const App = () => {
  const [gcodeFile, setGcodeFile] = useState<File | null>(null);
  const state = useSelector((state) => state);

  const processEnabled = gcodeFile !== null;

  return (
    <div className="App">
      <Header />

      <div className="IntroContainer">
        <Intro />
      </div>

      <div className="ToolContainer">
        <GCodeInputBlock onChange={setGcodeFile} />
        <GCodeSettingsBlock />
        <TowerSettings />
        <SummaryBlock />
        <GCodeOutputBlock
          onProcessClick={() => {
            GCodeFile.fromFile(gcodeFile!).then((f) => {
              const processor = GCodeProcessor.fromVariable(
                state.gcode.variable.type,
                state.gcode.gcodeSettings,
                state.gcode.variable.range
              );

              processor.process(f);
            });
          }}
          enabled={processEnabled}
        />
      </div>
    </div>
  );
};
