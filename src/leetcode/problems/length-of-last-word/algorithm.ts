import type { Highlight, Step } from "@/core/types";

export interface LastWordData {
  chars: string[];
  i: number | null;
  len: number;
  phase: "trailing" | "count" | "done";
}

export type LastWordStep = Step<LastWordData>;

/**
 * Scan from the right: first skip trailing spaces, then count characters until the
 * next space (or the start). That run is the last word. `line` indexes CODE.
 */
export function lastWordSteps(s: string): LastWordStep[] {
  const chars = [...s];
  const steps: LastWordStep[] = [];
  let i = chars.length - 1;
  let len = 0;

  const counted = (): Highlight[] => {
    const hl: Highlight[] = [];
    for (let k = 0; k < len; k++) hl.push({ ref: i + 1 + k, role: "sorted" });
    return hl;
  };
  const snap = (phase: LastWordData["phase"]): LastWordData => ({ chars: [...chars], i, len, phase });
  const push = (line: number, explanation: string, data: LastWordData, highlights: Highlight[]) => {
    steps.push({ id: steps.length, line, explanation, data, highlights, metrics: { len } });
  };

  push(1, "Scan from the right, skipping trailing spaces then counting the last word.", snap("trailing"), i >= 0 ? [{ ref: i, role: "current" }] : []);

  while (i >= 0 && chars[i] === " ") {
    push(2, `Index ${i} is a trailing space — skip.`, snap("trailing"), [{ ref: i, role: "visited" }]);
    i--;
  }

  while (i >= 0 && chars[i] !== " ") {
    len++;
    push(4, `Count '${chars[i]}' — length ${len}.`, snap("count"), [...counted(), { ref: i, role: "current" }]);
    i--;
  }

  push(6, `The last word has length ${len}.`, snap("done"), counted());
  return steps;
}
