import type { Step } from "@/core/types";

export interface RotateStringData {
  doubled: string[];
  goal: string[];
  n: number;
  /** current shift offset k into `doubled` */
  k: number | null;
  /** per-position match flags for the current window vs goal */
  matches: boolean[];
  found: boolean | null;
}

export type RotateStringStep = Step<RotateStringData>;

/**
 * Key insight: goal is a rotation of s iff goal is a substring of s+s. Slide a
 * length-n window across s+s and compare it to goal. `line` indexes CODE.
 */
export function rotateStringSteps(s: string, goal: string): RotateStringStep[] {
  const steps: RotateStringStep[] = [];
  const n = s.length;
  const doubledStr = s + s;
  const doubled = doubledStr.split("");
  const goalArr = goal.split("");

  const snap = (o: Partial<RotateStringData>): RotateStringData => ({ doubled: [...doubled], goal: [...goalArr], n, k: null, matches: [], found: null, ...o });
  const push = (line: number, explanation: string, data: RotateStringData) => {
    steps.push({ id: steps.length, line, explanation, data, highlights: [] });
  };

  if (s.length !== goal.length) {
    push(1, "Lengths differ — cannot be a rotation.", snap({ found: false }));
    return steps;
  }

  if (n === 0) {
    push(5, "Both strings are empty — trivially a rotation → true.", snap({ found: true }));
    return steps;
  }

  push(2, `Concatenate s with itself; every rotation of s lives inside "${doubledStr}".`, snap({}));

  for (let k = 0; k < n; k++) {
    const window = doubledStr.substr(k, n);
    const matches = goalArr.map((c, idx) => c === window[idx]);
    const ok = window === goal;
    push(5, `Shift k=${k}: "${window}" vs "${goal}"${ok ? " — match!" : ""}.`, snap({ k, matches, found: ok ? true : null }));
    if (ok) {
      push(6, `Found goal at rotation ${k} → true.`, snap({ k, matches, found: true }));
      return steps;
    }
  }

  push(8, "No shift matches — not a rotation → false.", snap({ found: false }));
  return steps;
}
