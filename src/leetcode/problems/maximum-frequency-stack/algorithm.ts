import type { Step } from "@/core/types";

export type FreqOp = { op: "push"; val: number } | { op: "pop" };

export interface FreqStackData {
  /** group[f] = stack of values currently at frequency f (index 0 = f=1) */
  groups: number[][];
  maxFreq: number;
  /** the op just performed */
  op: string;
  /** value pushed or popped */
  active: number | null;
  results: (number | null)[];
  done: boolean;
}

export type FreqStackStep = Step<FreqStackData>;

/**
 * A FreqStack pops the most frequent value, breaking ties by recency. Keeping one stack per frequency
 * level, a push lands on the stack for its new count, and a pop always takes the top of the highest
 * non-empty level — automatically the most-frequent, most-recent value. `line` indexes CODE.
 */
export function freqStackSteps(ops: FreqOp[]): FreqStackStep[] {
  const steps: FreqStackStep[] = [];
  const freq = new Map<number, number>();
  const group = new Map<number, number[]>();
  let maxFreq = 0;
  const results: (number | null)[] = [];

  const groupsSnapshot = () => {
    const out: number[][] = [];
    for (let f = 1; f <= maxFreq; f++) out.push([...(group.get(f) ?? [])]);
    return out;
  };

  const snap = (o: Partial<FreqStackData>): FreqStackData => ({ groups: groupsSnapshot(), maxFreq, op: "", active: null, results: [...results], done: false, ...o });
  const push = (line: number, explanation: string, o: Partial<FreqStackData> = {}) => {
    steps.push({ id: steps.length, line, explanation, data: snap(o), highlights: [] });
  };

  push(4, "Maintain one stack per frequency level; always pop from the highest.");

  for (const action of ops) {
    if (action.op === "push") {
      const f = (freq.get(action.val) || 0) + 1;
      freq.set(action.val, f);
      maxFreq = Math.max(maxFreq, f);
      if (!group.has(f)) group.set(f, []);
      group.get(f)!.push(action.val);
      push(11, `push(${action.val}) → now frequency ${f}; place on stack ${f}.`, { op: `push(${action.val})`, active: action.val });
    } else {
      const x = group.get(maxFreq)!.pop()!;
      freq.set(x, (freq.get(x) || 0) - 1);
      results.push(x);
      const emptied = group.get(maxFreq)!.length === 0;
      if (emptied) maxFreq--;
      push(17, `pop() → ${x} (top of stack ${maxFreq + (emptied ? 1 : 0)}).`, { op: "pop()", active: x });
    }
  }

  push(17, "All operations processed.", { done: true });
  return steps;
}
