import type { Step } from "@/core/types";

export interface DiffData {
  nums1: number[];
  nums2: number[];
  scan: number | null;
  scanSide: 1 | 2 | null;
  only1: number[];
  only2: number[];
  done: boolean;
}

export type DiffStep = Step<DiffData>;

/**
 * Return the distinct values present in exactly one array: only1 (in nums1 but not nums2) and only2 (in
 * nums2 but not nums1). Two membership sets make each check O(1). `line` indexes CODE.
 */
export function diffSteps(nums1: number[], nums2: number[]): DiffStep[] {
  const steps: DiffStep[] = [];
  const s1 = new Set(nums1);
  const s2 = new Set(nums2);
  const only1: number[] = [];
  const only2: number[] = [];

  const snap = (o: Partial<DiffData>): DiffData => ({
    nums1,
    nums2,
    scan: null,
    scanSide: null,
    only1: [...only1],
    only2: [...only2],
    done: false,
    ...o,
  });
  const push = (line: number, explanation: string, o: Partial<DiffData> = {}) => {
    steps.push({ id: steps.length, line, explanation, data: snap(o), highlights: [] });
  };

  push(2, `Find distinct values unique to each array.`);

  for (const x of s1) {
    if (!s2.has(x)) {
      only1.push(x);
      push(4, `${x} is in nums1 but not nums2 → only1.`, { scan: x, scanSide: 1 });
    }
  }
  for (const x of s2) {
    if (!s1.has(x)) {
      only2.push(x);
      push(6, `${x} is in nums2 but not nums1 → only2.`, { scan: x, scanSide: 2 });
    }
  }

  push(7, `Difference = [[${only1.join(", ")}], [${only2.join(", ")}]].`, { done: true });
  return steps;
}
