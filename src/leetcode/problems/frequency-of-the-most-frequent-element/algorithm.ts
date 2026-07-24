import type { Highlight, Step } from "@/core/types";

export interface FreqInput {
  nums: number[];
  k: number;
}

export interface FreqData {
  nums: number[];
  k: number;
  left: number;
  right: number | null;
  cost: number;
  best: number;
}

export type FreqStep = Step<FreqData>;

/**
 * Sort so a window can be levelled up to its maximum (rightmost) value. The cost
 * to do that is max×windowSize − windowSum; while it exceeds k, shrink from the
 * left. The largest affordable window is the answer. `line` indexes CODE.
 */
export function freqSteps(input: FreqInput): FreqStep[] {
  const nums = [...input.nums].sort((a, b) => a - b);
  const k = input.k;
  const steps: FreqStep[] = [];
  let left = 0;
  let sum = 0;
  let best = 1;

  const win = (l: number, r: number, extra: Highlight[] = []): Highlight[] => {
    const hl: Highlight[] = [];
    for (let j = l; j <= r; j++) hl.push({ ref: j, role: "active" });
    return [...hl, ...extra];
  };
  const snap = (o: Partial<FreqData>): FreqData => ({ nums: [...nums], k, left, right: null, cost: 0, best, ...o });
  const push = (line: number, explanation: string, data: FreqData, highlights: Highlight[]) => {
    steps.push({ id: steps.length, line, explanation, data, highlights, metrics: { best } });
  };

  push(1, `Sort, then find the widest window levellable to its max within +${k}.`, snap({}), []);

  for (let right = 0; right < nums.length; right++) {
    sum += nums[right];
    let cost = nums[right] * (right - left + 1) - sum;
    push(4, `Extend to ${nums[right]}. Cost to level window = ${cost}.`, snap({ right, cost }), win(left, right, [{ ref: right, role: "current" }]));
    while (cost > k) {
      sum -= nums[left];
      left++;
      cost = nums[right] * (right - left + 1) - sum;
      push(6, `Cost > k=${k} — drop the left; new cost ${cost}.`, snap({ right, cost }), win(left, right, [{ ref: left - 1, role: "swapped" }]));
    }
    if (right - left + 1 > best) best = right - left + 1;
    push(8, `Window [${left}..${right}] is affordable — size ${right - left + 1} (best ${best}).`, snap({ right, cost }), win(left, right, [{ ref: right, role: "target" }]));
  }

  push(10, `Maximum achievable frequency is ${best}.`, snap({ right: null }), []);
  return steps;
}
