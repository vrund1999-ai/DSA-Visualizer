import type { Step } from "@/core/types";

export interface DuplicateZerosData {
  original: number[];
  result: (number | null)[];
  readPtr: number | null;
  /** highlight result slots written this step */
  wrote: number[];
  done: boolean;
}

export type DuplicateZerosStep = Step<DuplicateZerosData>;

/**
 * Duplicate each zero in place, shifting the rest right and discarding anything past the original length.
 * Building the output left to right, a zero writes itself twice (space permitting); the fixed length caps
 * the total. `line` indexes CODE.
 */
export function duplicateZerosSteps(arr: number[]): DuplicateZerosStep[] {
  const steps: DuplicateZerosStep[] = [];
  const n = arr.length;
  const out: number[] = [];

  const padded = (): (number | null)[] => {
    const r: (number | null)[] = [...out];
    while (r.length < n) r.push(null);
    return r;
  };
  const snap = (o: Partial<DuplicateZerosData>): DuplicateZerosData => ({
    original: arr,
    result: padded(),
    readPtr: null,
    wrote: [],
    done: false,
    ...o,
  });
  const push = (line: number, explanation: string, o: Partial<DuplicateZerosData> = {}) => {
    steps.push({ id: steps.length, line, explanation, data: snap(o), highlights: [] });
  };

  push(2, `Rebuild the array left to right, writing each zero twice.`);

  for (let i = 0; i < arr.length; i++) {
    if (out.length >= n) break;
    const wrote: number[] = [];
    out.push(arr[i]);
    wrote.push(out.length - 1);
    if (arr[i] === 0 && out.length < n) {
      out.push(0);
      wrote.push(out.length - 1);
      push(7, `arr[${i}] = 0 → written twice.`, { readPtr: i, wrote });
    } else {
      push(5, `arr[${i}] = ${arr[i]} → written once.`, { readPtr: i, wrote });
    }
  }

  push(9, `Result: [${out.join(", ")}].`, { done: true });
  return steps;
}
