import type { Step } from "@/core/types";

export interface DedupListData {
  values: number[];
  cur: number | null;
  removed: number | null;
  done: boolean;
}

export type DedupListStep = Step<DedupListData>;

/**
 * The list is sorted, so duplicates are adjacent: keep a cursor and, whenever the
 * next node equals the current value, splice it out; otherwise advance. `line`
 * indexes CODE.
 */
export function dedupListSteps(input: number[]): DedupListStep[] {
  const values = [...input];
  const steps: DedupListStep[] = [];

  const snap = (o: Partial<DedupListData>): DedupListData => ({ values: [...values], cur: null, removed: null, done: false, ...o });
  const push = (line: number, explanation: string, data: DedupListData) => {
    steps.push({ id: steps.length, line, explanation, data, highlights: [] });
  };

  push(1, "Walk the sorted list; drop any node equal to the current one.", snap({ cur: values.length ? 0 : null }));

  let i = 0;
  while (i < values.length - 1) {
    if (values[i + 1] === values[i]) {
      push(4, `Next value ${values[i + 1]} duplicates ${values[i]} — remove it.`, snap({ cur: i, removed: i + 1 }));
      values.splice(i + 1, 1);
    } else {
      i++;
      push(6, `${values[i]} is new — advance the cursor.`, snap({ cur: i }));
    }
  }

  push(8, "No adjacent duplicates remain.", snap({ cur: null, done: true }));
  return steps;
}
