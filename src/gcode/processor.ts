import { Range } from "../utils";
import { readFileText } from "./utils";
import {
  TransformVariable,
  GCodeTransformer,
  RetractTransformer,
  TemperatureTransformer,
  AccelerationTransformer,
  JerkTransformer,
  FlowTransformer,
  LinearAdvanceTransformer,
  TransformerActionNoOp,
  TransformerActionReplace,
  TransformerActionSkipToEnd,
  TransformerActionAppend,
} from "./transformers";

export class GCodeFile {
  readonly file: File;
  readonly lines: string[];

  constructor(file: File, lines: string[]) {
    this.file = file;
    this.lines = lines;
  }

  static async fromFile(file: File): Promise<GCodeFile> {
    const text = await readFileText(file);
    const lines = text.split("\n");

    return new GCodeFile(file, lines);
  }
}

export class GCodeLocation {
  readonly layer: number;
  readonly z: number;
  readonly chunk: number | null;

  constructor(layer: number = 0, z: number = 0, chunk: number | null = null) {
    this.layer = layer;
    this.z = z;
    this.chunk = chunk;
  }

  static fromLayer(
    layer: number,
    layerHeight: number,
    chunkHeight: number,
    chunkOffset: number
  ): GCodeLocation {
    const z = layerHeight * (layer + 1);

    let chunk: number | null;
    if (z > chunkOffset) {
      chunk = Math.floor((z - chunkOffset) / chunkHeight);
    } else {
      chunk = null;
    }

    return new GCodeLocation(layer, z, chunk);
  }
}

export interface GCodeSettings {
  layerHeight: number;
  baseHeight: number;
  stepHeight: number;
}

export class GCodeProcessor {
  private layerRegex: RegExp;
  private location: GCodeLocation;
  private settings: GCodeSettings;
  private transformer: GCodeTransformer;

  constructor(opts: {
    settings: GCodeSettings;
    transformer: GCodeTransformer;
  }) {
    this.layerRegex = /;LAYER:(?<layerNum>\d+)/;
    this.location = new GCodeLocation();
    this.settings = opts.settings;
    this.transformer = opts.transformer;
  }

  process(gcode: GCodeFile) {
    const outputLines = [];
    let skippingToEnd = false;

    for (const line of gcode.lines) {
      if (skippingToEnd) {
        if (line === ";PRINT_END") {
          skippingToEnd = false;
        } else {
          continue;
        }
      }

      if (this.updateLocation(line)) {
        const layerAction = this.transformer.onLayer(this.location);
        if (layerAction instanceof TransformerActionAppend) {
          outputLines.push(...layerAction.lines);
        } else if (layerAction instanceof TransformerActionSkipToEnd) {
          skippingToEnd = true;
        }
      }

      const lineAction = this.transformer.onLine(line, this.location);
      if (lineAction instanceof TransformerActionNoOp) {
        outputLines.push(line);
      } else if (lineAction instanceof TransformerActionAppend) {
        outputLines.push(line, ...lineAction.lines);
      } else if (lineAction instanceof TransformerActionReplace) {
        outputLines.push(...lineAction.lines);
      } else if (lineAction instanceof TransformerActionSkipToEnd) {
        skippingToEnd = true;
      }
    }

    return outputLines;
  }

  private updateLocation(line: string): boolean {
    const layerMatch = line.match(this.layerRegex);
    if (layerMatch) {
      const layerNum = Number.parseInt(layerMatch.groups!["layerNum"]);
      if (layerNum !== this.location?.layer) {
        this.location = GCodeLocation.fromLayer(
          layerNum,
          this.settings.layerHeight,
          this.settings.stepHeight,
          this.settings.baseHeight
        );

        return true;
      }
    }

    return false;
  }

  static fromVariable(
    type: TransformVariable,
    settings: GCodeSettings,
    range: Range
  ) {
    let transformer: GCodeTransformer;

    switch (type) {
      case TransformVariable.RetractDistance: {
        transformer = new RetractTransformer({
          distanceRange: range,
        });
        break;
      }

      case TransformVariable.RetractSpeed: {
        transformer = new RetractTransformer({
          speedRange: range,
        });
        break;
      }

      case TransformVariable.Temperature: {
        transformer = new TemperatureTransformer(range);
        break;
      }

      case TransformVariable.Acceleration: {
        transformer = new AccelerationTransformer(range);
        break;
      }

      case TransformVariable.Jerk: {
        transformer = new JerkTransformer(range);
        break;
      }

      case TransformVariable.Flow: {
        transformer = new FlowTransformer(range);
        break;
      }

      case TransformVariable.LinearAdvance: {
        transformer = new LinearAdvanceTransformer(range);
        break;
      }
    }

    return new GCodeProcessor({
      settings,
      transformer,
    });
  }
}
