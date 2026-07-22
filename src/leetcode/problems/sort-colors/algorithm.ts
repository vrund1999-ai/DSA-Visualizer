import type { Highlight, Step } from "@/core/types";

export interface SortColorsData {
  nums: number[];
  low: number;
  mid: number;
  high: number;
  done: boolean;
}

export type SortColorsStep = Step<SortColorsData>;

/**
 * Dutch national flag: three pointers partition the array into 0s (before low),
 * 1s (low..mid), unknown (mid..high) and 2s (after high). `mid` scans; a 0 swaps
 * down to low, a 2 swaps up to high, a 1 is already placed. `line` indexes CODE.
 */
export function sortColorsSteps(input: number[]): SortColorsStep[] {
  const nums = [...input];
  const steps: SortColorsStep[] = [];
  let low = 0;
  let mid = 0;
  let high = nums.length - 1;

  const snap = (o: Partial<SortColorsData>): SortColorsData => ({
    nums: [...nums],
    low,
    mid,
    high,
    done: false,
    ...o,
  });
  const push = (line: number, explanation: string, data: SortColorsData, highlights: Highlight[]) => {
    steps.push({ id: steps.length, line, explanation, data, highlights });
  };

  push(1, "Three pointers: low, mid (scanner), high. Sort 0/1/2 in one pass.", snap({}), [
    { ref: mid, role: "current" },
  ]);

  while (mid <= high) {
    if (nums[mid] === 0) {
      [nums[low], nums[mid]] = [nums[mid], nums[low]];
      push(4, `nums[${mid}] = 0 — swap to the low region (index ${low}).`, snap({}), [
        { ref: low, role: "swapped" },
        { ref: mid, role: "swapped" },
      ]);
      low++;
      mid++;
    } else if (nums[mid] === 2) {
      [nums[mid], nums[high]] = [nums[high], nums[mid]];
      push(6, `nums[${mid}] = 2 — swap to the high region (index ${high}).`, snap({}), [
        { ref: mid, role: "swapped" },
        { ref: high, role: "swapped" },
      ]);
      high--;
    } else {
      push(8, `nums[${mid}] = 1 — already in place, advance mid.`, snap({}), [{ ref: mid, role: "sorted" }]);
      mid++;
    }
  }

  push(11, "Array sorted into 0s, 1s, then 2s.", snap({ done: true }), nums.map((_, i) => ({ ref: i, role: "sorted" }) as Highlight));
  return steps;
}
