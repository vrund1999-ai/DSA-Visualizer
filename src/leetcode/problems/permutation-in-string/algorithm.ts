import type { Step } from "@/core/types";

export interface PermStringData {
  s1: string;
  s2: string;
  /** [lo, hi] of the current fixed-size window in s2 */
  lo: number;
  hi: number;
  match: boolean;
  answer: boolean | null;
}

export type PermStringStep = Step<PermStringData>;

const countStr = (s: string): Record<string, number> => {
  const m: Record<string, number> = {};
  for (const c of s) m[c] = (m[c] ?? 0) + 1;
  return m;
};

const sameCounts = (a: Record<string, number>, b: Record<string, number>): boolean => {
  const keys = new Set([...Object.keys(a), ...Object.keys(b)]);
  for (const k of keys) if ((a[k] ?? 0) !== (b[k] ?? 0)) return false;
  return true;
};

/**
 * A permutation of s1 is any length-|s1| substring of s2 with the same character
 * counts. Slide a fixed-size window over s2, updating counts in O(1), and check for a
 * match each step. `line` indexes CODE.
 */
export function permStringSteps(s1: string, s2: string): PermStringStep[] {
  const steps: PermStringStep[] = [];
  const k = s1.length;

  const snap = (lo: number, hi: number, o: Partial<PermStringData>): PermStringData => ({ s1, s2, lo, hi, match: false, answer: null, ...o });
  const push = (line: number, lo: number, hi: number, explanation: string, o: Partial<PermStringData> = {}) => {
    steps.push({ id: steps.length, line, explanation, data: snap(lo, hi, o), highlights: [] });
  };

  if (k > s2.length) {
    push(1, 0, -1, "s1 is longer than s2 — impossible.", { answer: false });
    return steps;
  }

  const need = countStr(s1);
  const win: Record<string, number> = {};

  push(2, 0, -1, `Need counts ${JSON.stringify(need)}; slide a window of size ${k}.`);

  for (let i = 0; i < s2.length; i++) {
    win[s2[i]] = (win[s2[i]] ?? 0) + 1;
    if (i >= k) win[s2[i - k]]--;
    const lo = Math.max(0, i - k + 1);
    const match = i >= k - 1 && sameCounts(win, need);
    push(8, lo, i, `Window "${s2.slice(lo, i + 1)}"${i >= k - 1 ? (match ? " — counts match!" : " — no match") : " (filling)"}.`, { match, answer: match ? true : null });
    if (match) return steps;
  }

  push(10, 0, -1, "No window matches — false.", { answer: false });
  return steps;
}
