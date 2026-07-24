import type { Step } from "@/core/types";

export interface NestingData {
  chars: string[];
  pos: number;
  depth: number;
  max: number;
  /** true on the step where max increased */
  newMax: boolean;
}

export type NestingStep = Step<NestingData>;

/**
 * Track the running parenthesis depth: '(' increments it (and may raise the max),
 * ')' decrements it. The answer is the peak depth. `line` indexes CODE.
 */
export function nestingSteps(s: string): NestingStep[] {
  const steps: NestingStep[] = [];
  const chars = s.split("");
  let depth = 0;
  let max = 0;

  const snap = (pos: number, o: Partial<NestingData>): NestingData => ({ chars: [...chars], pos, depth, max, newMax: false, ...o });
  const push = (line: number, pos: number, explanation: string, o: Partial<NestingData> = {}) => {
    steps.push({ id: steps.length, line, explanation, data: snap(pos, o), highlights: [] });
  };

  push(1, -1, "Sweep left to right, tracking current and peak nesting depth.");

  for (let i = 0; i < chars.length; i++) {
    const ch = chars[i];
    if (ch === "(") {
      depth++;
      const isNew = depth > max;
      if (isNew) max = depth;
      push(5, i, `'(' → depth ${depth}${isNew ? ` (new max ${max})` : ""}.`, { newMax: isNew });
    } else if (ch === ")") {
      depth--;
      push(7, i, `')' → depth ${depth}.`);
    } else {
      push(2, i, `'${ch}' — not a bracket, depth unchanged.`);
    }
  }

  push(10, -1, `Maximum nesting depth: ${max}.`, {});
  return steps;
}
