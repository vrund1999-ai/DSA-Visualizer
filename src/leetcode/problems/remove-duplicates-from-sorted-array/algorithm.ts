import type { Highlight, Step } from "@/core/types";

export interface DedupData {
  nums: number[];
  slow: number;
  fast: number | null;
  length: number;
}

export type DedupStep = Step<DedupData>;

/**
 * Two pointers on a sorted array: `slow` marks the end of the unique prefix.
 * When `fast` finds a value different from nums[slow], it is copied just past
 * the prefix. Sortedness guarantees duplicates are adjacent. `line` indexes CODE.
 */
export function dedupSteps(input: number[]): DedupStep[] {
  const nums = [...input];
  const steps: DedupStep[] = [];
  let slow = 0;

  const snap = (o: Partial<DedupData>): DedupData => ({
    nums: [...nums],
    slow,
    fast: null,
    length: slow + 1,
    ...o,
  });
  const push = (
    line: number,
    explanation: string,
    data: DedupData,
    highlights: Highlight[],
  ) => {
    steps.push({ id: steps.length, line, explanation, data, highlights, metrics: { unique: slow + 1 } });
  };

  if (nums.length === 0) {
    push(1, "Empty array — length 0.", { nums: [], slow: 0, fast: null, length: 0 }, []);
    return steps;
  }

  const prefix = (): Highlight[] =>
    Array.from({ length: slow + 1 }, (_, k) => ({ ref: k, role: "sorted" as const }));

  push(2, "The unique values grow at the front; `slow` is the last unique index.", snap({}), prefix());

  for (let fast = 1; fast < nums.length; fast++) {
    const same = nums[fast] === nums[slow];
    push(
      4,
      same
        ? `nums[${fast}] = ${nums[fast]} duplicates nums[${slow}] — skip it.`
        : `nums[${fast}] = ${nums[fast]} is new.`,
      snap({ fast }),
      [...prefix(), { ref: fast, role: same ? "visited" : "current" }],
    );
    if (!same) {
      slow++;
      nums[slow] = nums[fast];
      push(6, `Write it to slot ${slow}. Unique count is now ${slow + 1}.`, snap({ fast }), [
        ...prefix(),
        { ref: fast, role: "current" },
      ]);
    }
  }

  push(9, `Done — the first ${slow + 1} elements are the unique values.`, snap({ fast: null }), prefix());
  return steps;
}
