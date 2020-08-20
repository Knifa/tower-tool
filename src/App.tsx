import React, { useState } from "react";

import { GCodeInputBlock } from "./blocks/GCodeInputBlock";
import { GCodeOutputBlock } from "./blocks/GCodeOutputBlock";
import { GCodeSettingsBlock } from "./blocks/GCodeSettingsBlock";
import { TowerSettings } from "./blocks/TowerSettings";
import { SummaryBlock } from "./blocks/SummaryBlock";
import { Intro } from "./Intro";

import { useSelector } from "./state";
import { GCodeFile, GCodeProcessor, saveLines } from "./gcode";

import "./App.scss";
import { Header } from "./Header";

export const App = () => {
  const [gcodeFile, setGcodeFile] = useState<File | null>(null);
  const state = useSelector((state) => state);

  const processEnabled = gcodeFile !== null;

  const onDragPrevent = (e: React.DragEvent) => {
    e.preventDefault();
  };

  const onFileDrop = (e: React.DragEvent) => {
    const file = e.dataTransfer.files[0];
    setGcodeFile(file);
    e.preventDefault();
  };

  return (
    <div
      className="App"
      onDragEnter={onDragPrevent}
      onDragOver={onDragPrevent}
      onDrop={onFileDrop}
    >
      <Header />

      <div className="AppContainer">
        <Intro />

        <div className="ToolContainer">
          <GCodeInputBlock
            filename={gcodeFile ? gcodeFile.name : undefined}
            onChange={setGcodeFile}
          />
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

                const lines = processor.process(f);
                saveLines(lines);
              });
            }}
            enabled={processEnabled}
          />
        </div>
      </div>
    </div>
  );
};
