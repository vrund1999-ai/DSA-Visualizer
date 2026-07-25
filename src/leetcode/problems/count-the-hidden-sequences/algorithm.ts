import type { Step } from "@/core/types";

export interface HiddenData {
  differences: number[];
  lower: number;
  upper: number;
  /** relative prefix values including the leading 0 */
  prefix: number[];
  idx: number | null;
  min: number;
  max: number;
  span: number | null;
  answer: number | null;
}

export type HiddenStep = Step<HiddenData>;

/**
 * Fixing x[0], every element is x[0] plus a running prefix of the differences, so the whole array
 * shifts rigidly with x[0]. It fits inside [lower, upper] exactly when its internal span (max − min
 * prefix) leaves room; the number of valid starting values is (upper − lower) − span + 1. `line` indexes CODE.
 */
export function hiddenSteps(differences: number[], lower: number, upper: number): HiddenStep[] {
  const steps: HiddenStep[] = [];
  const prefix = [0];
  let min = 0;
  let max = 0;

  const snap = (o: Partial<HiddenData>): HiddenData => ({ differences, lower, upper, prefix: [...prefix], idx: null, min, max, span: null, answer: null, ...o });
  const push = (line: number, explanation: string, o: Partial<HiddenData> = {}) => {
    steps.push({ id: steps.length, line, explanation, data: snap(o), highlights: [] });
  };

  push(1, `Track prefix values relative to x[0]; keep their min and max. Range [${lower}, ${upper}].`);

  let run = 0;
  for (let i = 0; i < differences.length; i++) {
    run += differences[i];
    prefix.push(run);
    min = Math.min(min, run);
    max = Math.max(max, run);
    push(5, `prefix += ${differences[i]} → ${run}; min ${min}, max ${max}.`, { idx: i + 1 });
  }

  const span = max - min;
  push(7, `Array span = max − min = ${max} − ${min} = ${span}.`, { span });

  const room = (upper - lower) - span;
  const answer = Math.max(0, room + 1);
  push(9, `Valid starts = (${upper} − ${lower}) − ${span} + 1 = ${answer}.`, { span, answer });
  return steps;
}
