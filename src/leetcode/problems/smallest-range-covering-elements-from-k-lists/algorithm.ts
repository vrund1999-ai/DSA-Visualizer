import type { Step } from "@/core/types";

export interface RangeData {
  lists: number[][];
  ptr: number[];
  lo: number | null;
  hi: number | null;
  minList: number | null;
  best: [number, number];
  answer: [number, number] | null;
}

export type RangeStep = Step<RangeData>;

/**
 * Any valid range must span from the smallest to the largest of one chosen element per list. Keeping a
 * pointer in each list and always advancing the one at the current minimum shrinks the span greedily:
 * only moving the minimum can reduce the window without dropping a list. `line` indexes CODE.
 */
export function rangeSteps(lists: number[][]): RangeStep[] {
  const steps: RangeStep[] = [];
  const ptr = lists.map(() => 0);
  let best: [number, number] = [-1e9, 1e9];

  const snap = (o: Partial<RangeData>): RangeData => ({ lists, ptr: [...ptr], lo: null, hi: null, minList: null, best: [...best] as [number, number], answer: null, ...o });
  const push = (line: number, explanation: string, o: Partial<RangeData> = {}) => {
    steps.push({ id: steps.length, line, explanation, data: snap(o), highlights: [] });
  };

  push(1, "One pointer per list; always advance the list holding the current minimum.");

  for (;;) {
    let lo = Infinity;
    let hi = -Infinity;
    let minList = 0;
    for (let i = 0; i < lists.length; i++) {
      const v = lists[i][ptr[i]];
      if (v < lo) {
        lo = v;
        minList = i;
      }
      if (v > hi) hi = v;
    }
    if (hi - lo < best[1] - best[0]) {
      best = [lo, hi];
      push(10, `Window [${lo}, ${hi}] (span ${hi - lo}) is the new smallest.`, { lo, hi, minList, best });
    } else {
      push(8, `Window [${lo}, ${hi}] (span ${hi - lo}) ≥ best span ${best[1] - best[0]}.`, { lo, hi, minList });
    }
    if (++ptr[minList] === lists[minList].length) {
      push(12, `List ${minList} exhausted — no smaller window possible.`, { lo, hi, minList, best });
      break;
    }
    push(11, `Advance list ${minList} to raise the minimum.`, { minList });
  }

  push(14, `Smallest range: [${best[0]}, ${best[1]}].`, { answer: [...best] as [number, number] });
  return steps;
}
