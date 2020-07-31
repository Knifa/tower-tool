import { GCodeLocation } from "../processor";
import { TransformerAction, TransformerActionNoOp } from "./actions";

export abstract class GCodeTransformer {
  onLine(line: string, location: GCodeLocation): TransformerAction {
    return new TransformerActionNoOp();
  }

  onLayer(location: GCodeLocation): TransformerAction {
    return new TransformerActionNoOp();
  }
}
