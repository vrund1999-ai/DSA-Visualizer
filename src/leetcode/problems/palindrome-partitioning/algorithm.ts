import type { Highlight, Step } from "@/core/types";

export interface PalPartData {
  chars: string[];
  current: string[];
  candidate: [number, number] | null;
  candidateIsPal: boolean | null;
  results: string[][];
}

export type PalPartStep = Step<PalPartData>;

const isPal = (t: string) => {
  for (let i = 0, j = t.length - 1; i < j; i++, j--) if (t[i] !== t[j]) return false;
  return true;
};

/**
 * Backtracking: from each start, try every prefix; if it's a palindrome, take it
 * and recurse on the remainder. Reaching the end records one full partition.
 * `line` indexes CODE.
 */
export function palPartSteps(s: string): PalPartStep[] {
  const chars = [...s];
  const steps: PalPartStep[] = [];
  const results: string[][] = [];
  const cur: string[] = [];

  const covered = (): Highlight[] => {
    let idx = 0;
    const hl: Highlight[] = [];
    for (const piece of cur) {
      for (let k = 0; k < piece.length; k++) hl.push({ ref: idx + k, role: "path" });
      idx += piece.length;
    }
    return hl;
  };
  const snap = (o: Partial<PalPartData>): PalPartData => ({ chars: [...chars], current: [...cur], candidate: null, candidateIsPal: null, results: results.map((r) => [...r]), ...o });
  const push = (line: number, explanation: string, data: PalPartData, extra: Highlight[]) => {
    steps.push({ id: steps.length, line, explanation, data, highlights: [...covered(), ...extra], metrics: { found: results.length } });
  };

  const bt = (start: number) => {
    if (start === s.length) {
      results.push([...cur]);
      push(3, `Reached the end — record [${cur.map((p) => `"${p}"`).join(", ")}].`, snap({}), []);
      return;
    }
    for (let end = start + 1; end <= s.length; end++) {
      const piece = s.slice(start, end);
      const ok = isPal(piece);
      const span: Highlight[] = [];
      for (let k = start; k < end; k++) span.push({ ref: k, role: ok ? "sorted" : "swapped" });
      if (ok) {
        cur.push(piece);
        push(7, `"${piece}" is a palindrome — take it and recurse.`, snap({ candidate: [start, end - 1], candidateIsPal: true }), span);
        bt(end);
        cur.pop();
      } else {
        push(6, `"${piece}" is not a palindrome — skip.`, snap({ candidate: [start, end - 1], candidateIsPal: false }), span);
      }
    }
  };

  push(1, "Split into palindromic pieces via backtracking.", snap({}), []);
  bt(0);
  push(14, `Found ${results.length} partition(s).`, snap({}), []);
  return steps;
}
