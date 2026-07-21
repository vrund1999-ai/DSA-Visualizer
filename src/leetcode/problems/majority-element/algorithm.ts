import type { Highlight, Step } from "@/core/types";

export interface MajorityData {
  nums: number[];
  i: number | null;
  candidate: number | null;
  count: number;
}

export type MajorityStep = Step<MajorityData>;

/**
 * Boyer–Moore voting: a value matching the current candidate adds a vote, any
 * other value cancels one. Because the majority element occurs more than n/2
 * times, it is the only one that can survive all the cancellations. `line`
 * indexes CODE.
 */
export function majoritySteps(nums: number[]): MajorityStep[] {
  const steps: MajorityStep[] = [];
  let candidate: number | null = null;
  let count = 0;

  const snap = (o: Partial<MajorityData>): MajorityData => ({
    nums: [...nums],
    i: null,
    candidate,
    count,
    ...o,
  });
  const push = (
    line: number,
    explanation: string,
    data: MajorityData,
    highlights: Highlight[],
  ) => {
    steps.push({ id: steps.length, line, explanation, data, highlights, metrics: { count } });
  };

  push(1, "Keep a single candidate and a vote counter.", snap({}), []);

  for (let i = 0; i < nums.length; i++) {
    const x = nums[i];
    if (count === 0) {
      candidate = x;
      push(3, `Count hit 0 — adopt ${x} as the new candidate.`, snap({ i, candidate }), [
        { ref: i, role: "pivot" },
      ]);
    }
    const same = x === candidate;
    count += same ? 1 : -1;
    push(
      4,
      same
        ? `${x} matches the candidate — vote up to ${count}.`
        : `${x} differs — vote down to ${count}.`,
      snap({ i }),
      [{ ref: i, role: same ? "sorted" : "swapped" }],
    );
  }

  push(6, `Majority element is ${candidate}.`, snap({ i: null }), nums.map((v, k) => ({ ref: k, role: v === candidate ? "target" : "default" }) as Highlight));
  return steps;
}
