import type { Highlight, Step } from "@/core/types";

export interface SingleNumberData {
  nums: number[];
  i: number | null;
  acc: number;
}

export type SingleNumberStep = Step<SingleNumberData>;

/**
 * XOR is associative and self-cancelling (x ^ x = 0, x ^ 0 = x), so XOR-ing the
 * whole array makes every duplicated pair vanish, leaving only the lone value.
 * `line` indexes CODE.
 */
export function singleNumberSteps(nums: number[]): SingleNumberStep[] {
  const steps: SingleNumberStep[] = [];
  let acc = 0;

  const snap = (o: Partial<SingleNumberData>): SingleNumberData => ({ nums: [...nums], i: null, acc, ...o });
  const push = (line: number, explanation: string, data: SingleNumberData, highlights: Highlight[]) => {
    steps.push({ id: steps.length, line, explanation, data, highlights, metrics: { acc } });
  };

  push(1, "Accumulate the XOR of every element, starting at 0.", snap({}), []);

  for (let i = 0; i < nums.length; i++) {
    const prev = acc;
    acc ^= nums[i];
    push(3, `acc ${prev} ^ ${nums[i]} = ${acc}.`, snap({ i }), [
      ...Array.from({ length: i }, (_, k) => ({ ref: k, role: "visited" as const })),
      { ref: i, role: "current" },
    ]);
  }

  push(4, `Every pair cancelled — the unique number is ${acc}.`, snap({ i: null }), []);
  return steps;
}
