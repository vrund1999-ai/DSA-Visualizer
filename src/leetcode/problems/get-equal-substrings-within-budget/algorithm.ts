import type { Step } from "@/core/types";

export interface EqualSubData {
  s: string;
  t: string;
  costs: number[];
  maxCost: number;
  left: number;
  right: number | null;
  cost: number;
  best: number;
  answer: number | null;
}

export type EqualSubStep = Step<EqualSubData>;

/**
 * Converting s[i] to t[i] costs the letters' distance. The longest convertible substring within the
 * budget is a sliding window: extend the right edge, and whenever the running cost exceeds maxCost,
 * shrink from the left. `line` indexes CODE.
 */
export function equalSubSteps(s: string, t: string, maxCost: number): EqualSubStep[] {
  const steps: EqualSubStep[] = [];
  const costs = [...s].map((ch, i) => Math.abs(ch.charCodeAt(0) - t.charCodeAt(i)));
  let left = 0;
  let cost = 0;
  let best = 0;

  const snap = (o: Partial<EqualSubData>): EqualSubData => ({ s, t, costs, maxCost, left, right: null, cost, best, answer: null, ...o });
  const push = (line: number, explanation: string, o: Partial<EqualSubData> = {}) => {
    steps.push({ id: steps.length, line, explanation, data: snap(o), highlights: [] });
  };

  push(1, `Cost to convert each char = letter distance; budget ${maxCost}.`);

  for (let right = 0; right < s.length; right++) {
    cost += costs[right];
    push(4, `Extend to index ${right}: add cost ${costs[right]} → total ${cost}.`, { right });
    while (cost > maxCost) {
      cost -= costs[left];
      left++;
      push(8, `Over budget — drop index ${left - 1}; cost now ${cost}.`, { right });
    }
    best = Math.max(best, right - left + 1);
    push(10, `Window [${left}, ${right}] costs ${cost} ≤ ${maxCost}; best length ${best}.`, { right });
  }

  push(12, `Longest convertible substring: ${best}.`, { answer: best });
  return steps;
}
