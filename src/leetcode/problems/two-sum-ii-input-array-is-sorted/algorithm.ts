import type { Highlight, Step } from "@/core/types";

export interface TwoSumIIInput {
  numbers: number[];
  target: number;
}

export interface TwoSumIIData {
  numbers: number[];
  target: number;
  l: number;
  r: number;
  sum: number | null;
  found: [number, number] | null;
}

export type TwoSumIIStep = Step<TwoSumIIData>;

/**
 * Because the array is sorted, two pointers converge on the answer: a sum below
 * the target must grow (move left pointer right); a sum above it must shrink
 * (move right pointer left). `line` indexes CODE.
 */
export function twoSumIISteps(input: TwoSumIIInput): TwoSumIIStep[] {
  const { numbers, target } = input;
  const steps: TwoSumIIStep[] = [];
  let l = 0;
  let r = numbers.length - 1;
  let found: [number, number] | null = null;

  const snap = (o: Partial<TwoSumIIData>): TwoSumIIData => ({
    numbers: [...numbers],
    target,
    l,
    r,
    sum: null,
    found,
    ...o,
  });
  const push = (line: number, explanation: string, data: TwoSumIIData, highlights: Highlight[]) => {
    steps.push({ id: steps.length, line, explanation, data, highlights });
  };

  push(1, "Two pointers at the ends of the sorted array.", snap({}), [
    { ref: l, role: "current" },
    { ref: r, role: "active" },
  ]);

  while (l < r) {
    const sum = numbers[l] + numbers[r];
    const marks: Highlight[] = [
      { ref: l, role: "current" },
      { ref: r, role: "active" },
    ];
    if (sum === target) {
      found = [l + 1, r + 1];
      push(4, `${numbers[l]} + ${numbers[r]} = ${target} — found (1-indexed [${l + 1}, ${r + 1}]).`, snap({ sum, found }), [
        { ref: l, role: "target" },
        { ref: r, role: "target" },
      ]);
      return steps;
    }
    if (sum < target) {
      push(5, `${numbers[l]} + ${numbers[r]} = ${sum} < ${target} — need larger, move left pointer right.`, snap({ sum }), marks);
      l++;
    } else {
      push(6, `${numbers[l]} + ${numbers[r]} = ${sum} > ${target} — need smaller, move right pointer left.`, snap({ sum }), marks);
      r--;
    }
  }

  push(8, "Pointers met without a match.", snap({}), []);
  return steps;
}
