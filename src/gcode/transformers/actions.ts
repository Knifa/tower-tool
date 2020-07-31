export abstract class TransformerAction {}
export abstract class TransformerActionWithLines extends TransformerAction {
  readonly lines: string[];

  constructor(lines: string[]) {
    super();
    this.lines = lines;
  }
}

export class TransformerActionNoOp extends TransformerAction {}
export class TransformerActionSkipToEnd extends TransformerAction {}
export class TransformerActionReplace extends TransformerActionWithLines {}
export class TransformerActionAppend extends TransformerActionWithLines {}
