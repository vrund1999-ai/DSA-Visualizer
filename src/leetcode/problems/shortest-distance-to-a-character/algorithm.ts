import type { Step } from "@/core/types";

export interface ShortCharData {
  s: string;
  c: string;
  ans: number[];
  i: number | null;
  phase: "left" | "right" | "done";
  /** last seen position of c in this pass */
  prev: number | null;
  answer: number[] | null;
}

export type ShortCharStep = Step<ShortCharData>;

/**
 * The nearest target char is either to the left or to the right. A left-to-right pass records the
 * distance to the most recent occurrence seen so far, and a right-to-left pass takes the minimum with
 * the nearest occurrence ahead. `line` indexes CODE.
 */
export function shortCharSteps(s: string, c: string): ShortCharStep[] {
  const steps: ShortCharStep[] = [];
  const n = s.length;
  const ans = new Array(n).fill(Infinity);

  const snap = (o: Partial<ShortCharData>): ShortCharData => ({ s, c, ans: ans.map((v) => (v === Infinity ? -1 : v)), i: null, phase: "left", prev: null, answer: null, ...o });
  const push = (line: number, explanation: string, o: Partial<ShortCharData> = {}) => {
    steps.push({ id: steps.length, line, explanation, data: snap(o), highlights: [] });
  };

  let prev = -Infinity;
  push(3, `Left→right: track distance to the most recent '${c}'.`, { phase: "left" });
  for (let i = 0; i < n; i++) {
    if (s[i] === c) prev = i;
    ans[i] = Math.abs(i - prev);
    push(5, `Index ${i} ('${s[i]}'): nearest '${c}' so far is ${prev === -Infinity ? "none" : `at ${prev}`} → ${ans[i] === Infinity ? "∞" : ans[i]}.`, { i, phase: "left", prev: prev === -Infinity ? null : prev });
  }

  prev = Infinity;
  push(7, `Right→left: take the minimum with the nearest '${c}' ahead.`, { phase: "right" });
  for (let i = n - 1; i >= 0; i--) {
    if (s[i] === c) prev = i;
    ans[i] = Math.min(ans[i], Math.abs(i - prev));
    push(10, `Index ${i}: min(prev, ${prev === Infinity ? "∞" : Math.abs(i - prev)}) → ${ans[i]}.`, { i, phase: "right", prev: prev === Infinity ? null : prev });
  }

  push(12, `Distances: [${ans.join(", ")}].`, { phase: "done", answer: [...ans] });
  return steps;
}
