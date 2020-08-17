import React, { FunctionComponent } from "react";
import CopyCode from "./CopyCode";
import { TestShapes } from "./TestShapes";
import "./Intro.scss";

export const Intro: FunctionComponent = () => {
  return (
    <div className="Intro">
      <h2>Hello!</h2>
      <p>
        This tool can generate sweet <strong>calibration towers</strong> for
        your 3D printer. All you need to do is slice your test shape, upload it
        here, configure your options, and hit go!
      </p>
      <p>
        If you're a keen bean, please{" "}
        <a href="https://github.com/Knifa/tower-tool">
          check out Tower Tool on GitHub!
        </a>
      </p>
      <h2>Test Shapes</h2>
      <p>Try out these test shapes! They're compact and quick to print.</p>
      <TestShapes />
      <p>
        They each have a <strong>0.5mm tall base</strong> with{" "}
        <strong>20x 4mm tall steps</strong>. Slice them with a layer height of{" "}
        <strong>0.25mm</strong>.
      </p>
      <h2>Slicer Setup</h2>
      <p>
        We need to be able to figure out when a new layer starts and when the
        print is over. You'll need to make a couple of changes to your slicer to
        get going.
      </p>
      <h3>Layer Change</h3>
      <p>
        Using <strong>Cura</strong>? You're all set.
      </p>
      <p>
        Using <strong>PrusaSlicer</strong> or <strong>Slic3r</strong>? Add the
        line below to the start of the textbox under{" "}
        <em>Printer Settings ➤ Custom G-code ➤ Before Layer Change G-code</em>.
      </p>
      <CopyCode>;LAYER:[layer_num]</CopyCode>
      <p>
        Using <strong>something else</strong>? Something like the line above
        needs to appear after every layer change with the new layer number,
        starting from zero.
      </p>
      <h3>Print End</h3>
      <p>
        Using <strong>Cura</strong>? Add the line below to the start of the
        textbox under{" "}
        <em>
          Preferences ➤ Printers ➤ [your printer] ➤ Machine Settings ➤ End
          G-code
        </em>
        .
      </p>
      <p>
        Using <strong>PrusaSlicer</strong> or <strong>Slic3r</strong>? Add the
        line below to the start of the textbox under{" "}
        <em>Printer Settings ➤ Custom G-code ➤ End G-code</em>.
      </p>
      <CopyCode>;PRINT_END</CopyCode>
      <p>
        Using <strong>something else</strong>? Something like the line above
        needs to appear just as the print is about to end, before any actions
        like homing or turning off fans.
      </p>
    </div>
  );
};
