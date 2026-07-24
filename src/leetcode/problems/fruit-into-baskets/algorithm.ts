import type { Step } from "@/core/types";

export interface FruitData {
  fruits: number[];
  left: number;
  right: number;
  /** distinct fruit types currently in the window */
  basket: number[];
  best: number;
  /** window is the current best */
  isBest: boolean;
  answer: number | null;
}

export type FruitStep = Step<FruitData>;

/**
 * "At most two fruit types" = longest subarray with ≤ 2 distinct values. Grow the
 * window on the right; whenever a third type enters, shrink from the left until only
 * two remain. `line` indexes CODE.
 */
export function fruitSteps(fruits: number[]): FruitStep[] {
  const steps: FruitStep[] = [];
  const count = new Map<number, number>();
  let left = 0;
  let best = 0;

  const snap = (right: number, o: Partial<FruitData>): FruitData => ({ fruits: [...fruits], left, right, basket: [...count.keys()], best, isBest: false, answer: null, ...o });
  const push = (line: number, right: number, explanation: string, o: Partial<FruitData> = {}) => {
    steps.push({ id: steps.length, line, explanation, data: snap(right, o), highlights: [] });
  };

  push(2, -1, "Sliding window keeping at most two fruit types.");

  for (let right = 0; right < fruits.length; right++) {
    const f = fruits[right];
    count.set(f, (count.get(f) ?? 0) + 1);
    push(5, right, `Pick fruit ${f} at ${right}; basket has ${count.size} type(s).`);
    while (count.size > 2) {
      const g = fruits[left++];
      count.set(g, count.get(g)! - 1);
      if (count.get(g) === 0) count.delete(g);
      push(8, right, `Third type — drop fruit ${g}, advance left to ${left}.`);
    }
    const len = right - left + 1;
    const isBest = len > best;
    if (isBest) best = len;
    push(11, right, `Window [${left}, ${right}] length ${len}${isBest ? ` — new best ${best}` : ""}.`, { isBest });
  }

  push(13, -1, `Most fruit collected: ${best}.`, { answer: best });
  return steps;
}
