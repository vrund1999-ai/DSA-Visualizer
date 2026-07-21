import type { Highlight, Step } from "@/core/types";

export interface MoveZeroesData {
  nums: number[];
  /** Scanner pointer. */
  i: number | null;
  /** Write pointer: index of the next non-zero slot. */
  slow: number;
}

export type MoveZeroesStep = Step<MoveZeroesData>;

/**
 * Two-pointer partition: `slow` marks where the next non-zero value goes. When
 * the scanner `i` finds a non-zero, it is swapped down to `slow`. Zeros bubble
 * to the end while relative order of non-zeros is preserved. `line` indexes CODE.
 */
export function moveZeroesSteps(input: number[]): MoveZeroesStep[] {
  const nums = [...input];
  const steps: MoveZeroesStep[] = [];
  let slow = 0;
  let swaps = 0;

  const snap = (o: Partial<MoveZeroesData>): MoveZeroesData => ({
    nums: [...nums],
    i: null,
    slow,
    ...o,
  });
  const push = (
    line: number,
    explanation: string,
    data: MoveZeroesData,
    highlights: Highlight[],
  ) => {
    steps.push({ id: steps.length, line, explanation, data, highlights, metrics: { swaps } });
  };

  push(1, "Use a write pointer `slow` for the next spot a non-zero should land in.", snap({}), []);

  for (let i = 0; i < nums.length; i++) {
    push(
      3,
      `Scan index ${i} (value ${nums[i]}). Is it non-zero?`,
      snap({ i }),
      [
        { ref: slow, role: "active" },
        { ref: i, role: "current" },
      ],
    );

    if (nums[i] !== 0) {
      if (i !== slow) {
        [nums[slow], nums[i]] = [nums[i], nums[slow]];
        swaps++;
        push(
          4,
          `Non-zero — swap it down to the write pointer (slot ${slow}).`,
          snap({ i }),
          [
            { ref: slow, role: "swapped" },
            { ref: i, role: "swapped" },
          ],
        );
      } else {
        push(4, `Non-zero and already in place at slot ${slow}.`, snap({ i }), [
          { ref: slow, role: "sorted" },
        ]);
      }
      slow++;
      push(5, `Advance the write pointer to ${slow}.`, snap({ i }), [
        ...Array.from({ length: slow }, (_, k) => ({ ref: k, role: "sorted" as const })),
        { ref: i, role: "current" },
      ]);
    } else {
      push(3, `Zero — leave the write pointer at ${slow} and keep scanning.`, snap({ i }), [
        { ref: slow, role: "active" },
        { ref: i, role: "visited" },
      ]);
    }
  }

  push(
    8,
    `Done — the first ${slow} slots hold the non-zeros in order; the rest are zeros.`,
    snap({ i: null }),
    nums.map((v, k) => ({ ref: k, role: v === 0 ? "visited" : "sorted" }) as Highlight),
  );

  return steps;
}
