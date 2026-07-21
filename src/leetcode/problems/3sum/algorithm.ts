import type { Highlight, Step } from "@/core/types";

export interface ThreeSumData {
  nums: number[];
  i: number | null;
  l: number | null;
  r: number | null;
  sum: number | null;
  triplets: number[][];
}

export type ThreeSumStep = Step<ThreeSumData>;

/**
 * Sort, then fix each index `i` and two-pointer scan the remainder for a pair
 * summing to −nums[i]. Sorting makes duplicates adjacent (skipped) and lets the
 * pointers move greedily. `line` indexes CODE.
 */
export function threeSumSteps(input: number[]): ThreeSumStep[] {
  const nums = [...input].sort((a, b) => a - b);
  const steps: ThreeSumStep[] = [];
  const triplets: number[][] = [];

  const snap = (o: Partial<ThreeSumData>): ThreeSumData => ({
    nums: [...nums],
    i: null,
    l: null,
    r: null,
    sum: null,
    triplets: triplets.map((t) => [...t]),
    ...o,
  });
  const push = (
    line: number,
    explanation: string,
    data: ThreeSumData,
    highlights: Highlight[],
  ) => {
    steps.push({
      id: steps.length,
      line,
      explanation,
      data,
      highlights,
      metrics: { triplets: triplets.length },
    });
  };

  push(1, "Sort the array so equal values sit together and pointers can move greedily.", snap({}), []);

  for (let i = 0; i < nums.length - 2; i++) {
    if (i > 0 && nums[i] === nums[i - 1]) {
      push(4, `Skip nums[${i}] = ${nums[i]} — duplicate of the previous anchor.`, snap({ i }), [
        { ref: i, role: "visited" },
      ]);
      continue;
    }
    let l = i + 1;
    let r = nums.length - 1;
    push(5, `Anchor nums[${i}] = ${nums[i]}. Scan the rest for a pair summing to ${-nums[i]}.`, snap({ i, l, r }), [
      { ref: i, role: "pivot" },
      { ref: l, role: "current" },
      { ref: r, role: "active" },
    ]);

    while (l < r) {
      const sum = nums[i] + nums[l] + nums[r];
      const marks: Highlight[] = [
        { ref: i, role: "pivot" },
        { ref: l, role: "current" },
        { ref: r, role: "active" },
      ];
      push(7, `${nums[i]} + ${nums[l]} + ${nums[r]} = ${sum}.`, snap({ i, l, r, sum }), marks);

      if (sum === 0) {
        triplets.push([nums[i], nums[l], nums[r]]);
        push(9, `Sum is 0 — record [${nums[i]}, ${nums[l]}, ${nums[r]}], then move both pointers.`, snap({ i, l, r, sum }), [
          { ref: i, role: "target" },
          { ref: l, role: "target" },
          { ref: r, role: "target" },
        ]);
        l++;
        r--;
        while (l < r && nums[l] === nums[l - 1]) l++;
        while (l < r && nums[r] === nums[r + 1]) r--;
      } else if (sum < 0) {
        push(11, `Sum ${sum} < 0 — need a bigger value, move left pointer right.`, snap({ i, l, r, sum }), marks);
        l++;
      } else {
        push(12, `Sum ${sum} > 0 — need a smaller value, move right pointer left.`, snap({ i, l, r, sum }), marks);
        r--;
      }
    }
  }

  push(15, `Done — found ${triplets.length} unique triplet(s).`, snap({}), []);
  return steps;
}
