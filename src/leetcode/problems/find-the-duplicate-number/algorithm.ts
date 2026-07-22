import type { Highlight, Step } from "@/core/types";

export interface DuplicateData {
  nums: number[];
  slow: number;
  fast: number;
  phase: "meet" | "find" | "done";
  answer: number | null;
}

export type DuplicateStep = Step<DuplicateData>;

/**
 * Treat each value as a "next index" pointer; because a value repeats, the
 * functional graph has a cycle whose entrance is the duplicate. Floyd's tortoise
 * & hare finds the meeting point, then a second walk from the start locates the
 * entrance. `line` indexes CODE.
 */
export function duplicateSteps(nums: number[]): DuplicateStep[] {
  const steps: DuplicateStep[] = [];
  let slow = nums[0];
  let fast = nums[0];
  let answer: number | null = null;

  const snap = (o: Partial<DuplicateData>): DuplicateData => ({
    nums: [...nums],
    slow,
    fast,
    phase: "meet",
    answer,
    ...o,
  });
  const push = (line: number, explanation: string, data: DuplicateData, highlights: Highlight[]) => {
    steps.push({ id: steps.length, line, explanation, data, highlights });
  };

  const marks = (): Highlight[] => [
    { ref: slow, role: "current" },
    { ref: fast, role: "active" },
  ];

  push(1, "Follow value→index pointers; the repeated value creates a cycle.", snap({}), marks());

  do {
    slow = nums[slow];
    fast = nums[nums[fast]];
    push(4, `Advance: slow → ${slow} (1 step), fast → ${fast} (2 steps).`, snap({}), marks());
  } while (slow !== fast);

  push(5, `slow and fast met at ${slow} — inside the cycle.`, snap({}), [{ ref: slow, role: "compared" }]);

  slow = nums[0];
  push(6, "Reset slow to the start; move both one step until they meet again.", snap({ phase: "find" }), [
    { ref: slow, role: "current" },
    { ref: fast, role: "active" },
  ]);

  while (slow !== fast) {
    slow = nums[slow];
    fast = nums[fast];
    push(9, `slow → ${slow}, fast → ${fast}.`, snap({ phase: "find" }), [
      { ref: slow, role: "current" },
      { ref: fast, role: "active" },
    ]);
  }

  answer = slow;
  push(11, `They meet at the cycle entrance ${slow} — that's the duplicate.`, snap({ phase: "done", answer }), [
    { ref: slow, role: "target" },
  ]);
  return steps;
}
