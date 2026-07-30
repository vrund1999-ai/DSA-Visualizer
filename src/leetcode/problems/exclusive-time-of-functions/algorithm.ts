import type { Step } from "@/core/types";

export interface ExclusiveData {
  n: number;
  logs: string[];
  logIndex: number | null;
  /** call stack of function ids */
  stack: number[];
  /** exclusive time accrued per function */
  times: number[];
  answer: number[] | null;
}

export type ExclusiveStep = Step<ExclusiveData>;

/**
 * Exclusive Time of Functions: a single CPU runs functions that start/end in stack order. Tracking the last
 * timestamp, a start credits the currently-running function with the gap before pushing the new one; an end
 * credits the popped function through the current tick (inclusive) and advances past it. `line` indexes CODE.
 */
export function exclusiveSteps(n: number, logs: string[]): ExclusiveStep[] {
  const steps: ExclusiveStep[] = [];
  const res = new Array(n).fill(0);
  const stack: number[] = [];
  let prev = 0;

  const snap = (o: Partial<ExclusiveData>): ExclusiveData => ({
    n,
    logs,
    logIndex: null,
    stack: [...stack],
    times: [...res],
    answer: null,
    ...o,
  });
  const push = (line: number, explanation: string, o: Partial<ExclusiveData> = {}) => {
    steps.push({ id: steps.length, line, explanation, data: snap(o), highlights: [] });
  };

  push(1, `Simulate the call stack over ${logs.length} log entries.`);

  for (let k = 0; k < logs.length; k++) {
    const [idStr, type, tStr] = logs[k].split(":");
    const id = Number(idStr);
    const t = Number(tStr);
    if (type === "start") {
      if (stack.length) res[stack[stack.length - 1]] += t - prev;
      stack.push(id);
      prev = t;
      push(10, `t=${t}: fn ${id} starts (previous fn credited the gap).`, { logIndex: k });
    } else {
      res[stack.pop()!] += t - prev + 1;
      prev = t + 1;
      push(12, `t=${t}: fn ${id} ends, credited through this tick.`, { logIndex: k });
    }
  }

  push(16, `Exclusive times: [${res.join(", ")}].`, { answer: [...res] });
  return steps;
}
