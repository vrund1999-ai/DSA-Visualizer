import type { Step } from "@/core/types";

export interface MinAddData {
  s: string;
  idx: number | null;
  open: number;
  add: number;
  /** classification of the current char */
  kind: "open" | "match" | "stray" | null;
  answer: number | null;
}

export type MinAddStep = Step<MinAddData>;

/**
 * Sweep left to right keeping `open` = count of unmatched '(' seen so far. A ')' either
 * cancels an open '(' or, if none, is a stray needing an inserted '('. The answer is the
 * strays plus the '(' still unmatched at the end. `line` indexes CODE.
 */
export function minAddSteps(s: string): MinAddStep[] {
  const steps: MinAddStep[] = [];
  let open = 0;
  let add = 0;

  const snap = (o: Partial<MinAddData>): MinAddData => ({ s, idx: null, open, add, kind: null, answer: null, ...o });
  const push = (line: number, explanation: string, o: Partial<MinAddData> = {}) => {
    steps.push({ id: steps.length, line, explanation, data: snap(o), highlights: [] });
  };

  push(2, "Track unmatched '(' as open; count inserts needed in add.");

  for (let i = 0; i < s.length; i++) {
    const ch = s[i];
    if (ch === "(") {
      open++;
      push(4, `'(' at ${i}: one more unmatched open (open = ${open}).`, { idx: i, kind: "open" });
    } else if (open > 0) {
      open--;
      push(5, `')' at ${i}: matches an earlier '(' (open = ${open}).`, { idx: i, kind: "match" });
    } else {
      add++;
      push(6, `')' at ${i}: stray, needs a '(' inserted (add = ${add}).`, { idx: i, kind: "stray" });
    }
  }

  const answer = add + open;
  push(8, `Total insertions = ${add} strays + ${open} leftover '(' = ${answer}.`, { answer });
  return steps;
}
