import type { Step } from "@/core/types";

export interface RemoveScoreData {
  s: string;
  x: number;
  y: number;
  /** the pair being removed this phase */
  pair: string;
  pts: number;
  /** current stack contents */
  stack: string[];
  /** char index being processed within the phase input */
  i: number | null;
  removed: boolean;
  score: number;
  answer: number | null;
}

export type RemoveScoreStep = Step<RemoveScoreData>;

/**
 * Removing the more valuable pair first never blocks a better removal, so greedily strip the higher-point
 * pair with a stack (a top+current match cancels), then repeat for the other pair on what remains. `line`
 * indexes CODE.
 */
export function removeScoreSteps(s: string, x: number, y: number): RemoveScoreStep[] {
  const steps: RemoveScoreStep[] = [];
  let hi = "ab";
  let lo = "ba";
  let hp = x;
  let lp = y;
  if (y > x) {
    hi = "ba";
    lo = "ab";
    hp = y;
    lp = x;
  }
  let score = 0;

  const snap = (o: Partial<RemoveScoreData>): RemoveScoreData => ({ s, x, y, pair: "", pts: 0, stack: [], i: null, removed: false, score, answer: null, ...o });
  const push = (line: number, explanation: string, o: Partial<RemoveScoreData> = {}) => {
    steps.push({ id: steps.length, line, explanation, data: snap(o), highlights: [] });
  };

  push(3, `Remove "${hi}" (worth ${hp}) first, then "${lo}" (worth ${lp}).`);

  const pass = (str: string, pair: string, pts: number): string => {
    const st: string[] = [];
    for (let i = 0; i < str.length; i++) {
      const ch = str[i];
      if (st.length && st[st.length - 1] === pair[0] && ch === pair[1]) {
        st.pop();
        score += pts;
        push(9, `Match "${pair}" → remove, +${pts} (score ${score}).`, { pair, pts, stack: [...st], i, removed: true });
      } else {
        st.push(ch);
        push(10, `Push '${ch}'.`, { pair, pts, stack: [...st], i });
      }
    }
    return st.join("");
  };

  const afterHi = pass(s, hi, hp);
  pass(afterHi, lo, lp);

  push(15, `Maximum score: ${score}.`, { answer: score });
  return steps;
}
