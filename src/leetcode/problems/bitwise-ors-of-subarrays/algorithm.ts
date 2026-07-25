import type { Step } from "@/core/types";

export interface BitwiseOrsData {
  arr: number[];
  idx: number | null;
  /** ORs of subarrays ending at idx */
  cur: number[];
  /** all distinct ORs seen so far */
  result: number[];
  answer: number | null;
}

export type BitwiseOrsStep = Step<BitwiseOrsData>;

/**
 * The set of ORs of subarrays ending at position i is exactly {arr[i]} together with arr[i] OR'd
 * into each OR ending at i−1. Because OR only sets bits, this frontier stays small (O(32)), and the
 * union of all frontiers is every distinct subarray OR. `line` indexes CODE.
 */
export function bitwiseOrsSteps(arr: number[]): BitwiseOrsStep[] {
  const steps: BitwiseOrsStep[] = [];
  const result = new Set<number>();
  let cur = new Set<number>();

  const snap = (o: Partial<BitwiseOrsData>): BitwiseOrsData => ({ arr, idx: null, cur: [...cur].sort((a, b) => a - b), result: [...result].sort((a, b) => a - b), answer: null, ...o });
  const push = (line: number, explanation: string, o: Partial<BitwiseOrsData> = {}) => {
    steps.push({ id: steps.length, line, explanation, data: snap(o), highlights: [] });
  };

  push(2, "Keep the ORs of subarrays ending at each index; union them for all distinct ORs.");

  for (let i = 0; i < arr.length; i++) {
    const x = arr[i];
    const next = new Set<number>([x]);
    for (const y of cur) next.add(x | y);
    cur = next;
    for (const v of cur) result.add(v);
    push(7, `arr[${i}] = ${x}: ORs ending here = {${[...cur].sort((a, b) => a - b).join(", ")}}; total distinct ${result.size}.`, { idx: i });
  }

  push(9, `Distinct subarray ORs: ${result.size}.`, { answer: result.size });
  return steps;
}
