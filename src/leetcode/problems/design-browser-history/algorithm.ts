import type { Step } from "@/core/types";

export type BrowserOp =
  | { type: "visit"; url: string }
  | { type: "back"; steps: number }
  | { type: "forward"; steps: number };

export interface BrowserHistoryData {
  stack: string[];
  cur: number;
  /** entries beyond `cur` that are still stored but "forward" (greyed) */
  liveLength: number;
  op: string;
  result: string | null;
}

export type BrowserHistoryStep = Step<BrowserHistoryData>;

/**
 * A browser history is an array of visited pages plus a cursor. Visiting truncates
 * any forward history and appends; back/forward just clamp the cursor. `line`
 * indexes CODE.
 */
export function browserHistorySteps(homepage: string, ops: BrowserOp[]): BrowserHistoryStep[] {
  const steps: BrowserHistoryStep[] = [];
  const stack = [homepage];
  let cur = 0;
  let liveLength = 1;

  const snap = (o: Partial<BrowserHistoryData>): BrowserHistoryData => ({ stack: [...stack], cur, liveLength, op: "", result: null, ...o });
  const push = (line: number, explanation: string, data: BrowserHistoryData) => {
    steps.push({ id: steps.length, line, explanation, data, highlights: [] });
  };

  push(3, `Start at "${homepage}".`, snap({ op: `init(${homepage})` }));

  for (const op of ops) {
    if (op.type === "visit") {
      // drop forward history, then append
      stack.length = cur + 1;
      stack.push(op.url);
      cur++;
      liveLength = stack.length;
      push(8, `visit("${op.url}") — drops forward pages, now at index ${cur}.`, snap({ op: `visit("${op.url}")` }));
    } else if (op.type === "back") {
      cur = Math.max(0, cur - op.steps);
      push(12, `back(${op.steps}) → "${stack[cur]}".`, snap({ op: `back(${op.steps})`, result: stack[cur] }));
    } else {
      cur = Math.min(liveLength - 1, cur + op.steps);
      push(16, `forward(${op.steps}) → "${stack[cur]}".`, snap({ op: `forward(${op.steps})`, result: stack[cur] }));
    }
  }

  return steps;
}
