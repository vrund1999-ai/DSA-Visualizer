import type { Step } from "@/core/types";

export interface BinarySubstrData {
  s: string;
  idx: number | null;
  prev: number;
  cur: number;
  count: number;
  /** min(prev, cur) just added at a run boundary */
  added: number | null;
  answer: number | null;
}

export type BinarySubstrStep = Step<BinarySubstrData>;

/**
 * Valid substrings (equal blocks of 0s then 1s, or 1s then 0s) sit exactly at the boundary
 * between two adjacent runs, and each such boundary contributes min(prevRun, curRun) of them.
 * Tracking just the two most recent run lengths gives the total in one pass. `line` indexes CODE.
 */
export function binarySubstrSteps(s: string): BinarySubstrStep[] {
  const steps: BinarySubstrStep[] = [];
  let prev = 0;
  let cur = 1;
  let count = 0;

  const snap = (o: Partial<BinarySubstrData>): BinarySubstrData => ({ s, idx: null, prev, cur, count, added: null, answer: null, ...o });
  const push = (line: number, explanation: string, o: Partial<BinarySubstrData> = {}) => {
    steps.push({ id: steps.length, line, explanation, data: snap(o), highlights: [] });
  };

  push(1, "Count valid substrings at each boundary as min(previous run, current run).");

  for (let i = 1; i < s.length; i++) {
    if (s[i] === s[i - 1]) {
      cur++;
      push(4, `s[${i}] = '${s[i]}' continues the run (length ${cur}).`, { idx: i });
    } else {
      const added = Math.min(prev, cur);
      count += added;
      push(6, `Boundary at ${i}: add min(${prev}, ${cur}) = ${added} (count ${count}).`, { idx: i, added });
      prev = cur;
      cur = 1;
      push(7, `New run of '${s[i]}' begins; prev = ${prev}, cur = 1.`, { idx: i });
    }
  }

  const finalAdd = Math.min(prev, cur);
  count += finalAdd;
  push(10, `Final boundary adds min(${prev}, ${cur}) = ${finalAdd} → total ${count}.`, { added: finalAdd, answer: count });
  return steps;
}
