import type { Step } from "@/core/types";

export interface CommonData {
  nums1: number[];
  nums2: number[];
  scan1: number | null;
  scan2: number | null;
  matched1: number[];
  matched2: number[];
  count1: number;
  count2: number;
  answer: [number, number] | null;
}

export type CommonStep = Step<CommonData>;

/**
 * Return [count1, count2]: count1 is how many indices of nums1 hold a value present in nums2, and count2 the
 * symmetric count for nums2. Two membership sets make each check O(1). `line` indexes CODE.
 */
export function commonSteps(nums1: number[], nums2: number[]): CommonStep[] {
  const steps: CommonStep[] = [];
  const set1 = new Set(nums1);
  const set2 = new Set(nums2);
  const matched1: number[] = [];
  const matched2: number[] = [];
  let count1 = 0;
  let count2 = 0;

  const snap = (o: Partial<CommonData>): CommonData => ({
    nums1,
    nums2,
    scan1: null,
    scan2: null,
    matched1: [...matched1],
    matched2: [...matched2],
    count1,
    count2,
    answer: null,
    ...o,
  });
  const push = (line: number, explanation: string, o: Partial<CommonData> = {}) => {
    steps.push({ id: steps.length, line, explanation, data: snap(o), highlights: [] });
  };

  push(3, `Count values shared across the two arrays, each direction.`);

  for (let i = 0; i < nums1.length; i++) {
    if (set2.has(nums1[i])) {
      matched1.push(i);
      count1++;
      push(5, `nums1[${i}] = ${nums1[i]} is in nums2 → count1 = ${count1}.`, { scan1: i });
    } else {
      push(5, `nums1[${i}] = ${nums1[i]} not in nums2.`, { scan1: i });
    }
  }

  for (let j = 0; j < nums2.length; j++) {
    if (set1.has(nums2[j])) {
      matched2.push(j);
      count2++;
      push(7, `nums2[${j}] = ${nums2[j]} is in nums1 → count2 = ${count2}.`, { scan2: j });
    } else {
      push(7, `nums2[${j}] = ${nums2[j]} not in nums1.`, { scan2: j });
    }
  }

  push(8, `Answer: [${count1}, ${count2}].`, { answer: [count1, count2] });
  return steps;
}
