import type { Highlight, Step } from "@/core/types";

export interface ReverseStringData {
  chars: string[];
  l: number | null;
  r: number | null;
  done: boolean;
}

export type ReverseStringStep = Step<ReverseStringData>;

/**
 * Two pointers swap the ends and move inward, reversing the array in-place with
 * O(1) extra space. `line` indexes CODE.
 */
export function reverseStringSteps(input: string[]): ReverseStringStep[] {
  const chars = [...input];
  const steps: ReverseStringStep[] = [];
  let l = 0;
  let r = chars.length - 1;

  const snap = (o: Partial<ReverseStringData>): ReverseStringData => ({ chars: [...chars], l: null, r: null, done: false, ...o });
  const push = (line: number, explanation: string, data: ReverseStringData, highlights: Highlight[]) => {
    steps.push({ id: steps.length, line, explanation, data, highlights });
  };

  push(1, "Two pointers at the ends, swapping toward the middle.", snap({ l, r }), [
    { ref: l, role: "current" },
    { ref: r, role: "active" },
  ]);

  while (l < r) {
    [chars[l], chars[r]] = [chars[r], chars[l]];
    push(3, `Swap positions ${l} and ${r}.`, snap({ l, r }), [
      { ref: l, role: "swapped" },
      { ref: r, role: "swapped" },
    ]);
    l++;
    r--;
  }

  push(6, "Pointers met — the string is reversed.", snap({ done: true }), chars.map((_, i) => ({ ref: i, role: "sorted" }) as Highlight));
  return steps;
}
