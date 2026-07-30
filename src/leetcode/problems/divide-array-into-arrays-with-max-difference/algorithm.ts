import type { Step } from "@/core/types";

export interface DivideData {
  sorted: number[];
  k: number;
  /** start index of the triple being checked */
  group: number | null;
  /** true if the current group failed */
  failed: boolean;
  res: number[][];
  answer: number[][] | null;
}

export type DivideStep = Step<DivideData>;

/**
 * After sorting, the tightest way to keep each triple's spread small is to group consecutive elements.
 * A triple works iff its largest minus smallest is ≤ k; if any consecutive triple fails, no arrangement
 * can. `line` indexes CODE.
 */
export function divideSteps(input: number[], k: number): DivideStep[] {
  const steps: DivideStep[] = [];
  const sorted = [...input].sort((a, b) => a - b);
  const res: number[][] = [];

  const snap = (o: Partial<DivideData>): DivideData => ({ sorted, k, group: null, failed: false, res: res.map((g) => [...g]), answer: null, ...o });
  const push = (line: number, explanation: string, o: Partial<DivideData> = {}) => {
    steps.push({ id: steps.length, line, explanation, data: snap(o), highlights: [] });
  };

  push(1, `Sort, then group consecutive triples; each must span ≤ ${k}.`);

  for (let i = 0; i < sorted.length; i += 3) {
    const spread = sorted[i + 2] - sorted[i];
    if (spread > k) {
      push(5, `Triple [${sorted[i]}, ${sorted[i + 1]}, ${sorted[i + 2]}] spans ${spread} > ${k} → impossible.`, { group: i, failed: true, answer: [] });
      return steps;
    }
    res.push([sorted[i], sorted[i + 1], sorted[i + 2]]);
    push(6, `Triple [${sorted[i]}, ${sorted[i + 1]}, ${sorted[i + 2]}] spans ${spread} ≤ ${k} — ok.`, { group: i });
  }

  push(8, `Divided into ${res.length} valid group(s).`, { answer: res.map((g) => [...g]) });
  return steps;
}
