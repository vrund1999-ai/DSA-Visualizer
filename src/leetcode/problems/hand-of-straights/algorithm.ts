import type { Step } from "@/core/types";

export interface StraightsData {
  hand: number[];
  groupSize: number;
  /** [card, remaining count] pairs, sorted by card */
  count: [number, number][];
  /** the run of cards being formed this step */
  group: number[];
  fail: boolean;
  answer: boolean | null;
}

export type StraightsStep = Step<StraightsData>;

/**
 * Process cards from smallest to largest: the lowest card left can only be the start of a group, so it
 * forces that many consecutive runs. Consuming those cards greedily and checking each next value exists
 * decides whether every card fits into a straight. `line` indexes CODE.
 */
export function straightsSteps(hand: number[], groupSize: number): StraightsStep[] {
  const steps: StraightsStep[] = [];
  const count = new Map<number, number>();
  for (const c of hand) count.set(c, (count.get(c) ?? 0) + 1);

  const entries = (): [number, number][] => [...count.entries()].sort((a, b) => a[0] - b[0]);
  const snap = (o: Partial<StraightsData>): StraightsData => ({ hand, groupSize, count: entries(), group: [], fail: false, answer: null, ...o });
  const push = (line: number, explanation: string, o: Partial<StraightsData> = {}) => {
    steps.push({ id: steps.length, line, explanation, data: snap(o), highlights: [] });
  };

  if (hand.length % groupSize !== 0) {
    push(1, `${hand.length} cards can't split into groups of ${groupSize} → false.`, { answer: false });
    return steps;
  }

  push(4, `Group ${hand.length} cards into consecutive runs of ${groupSize}.`);

  for (const card of [...count.keys()].sort((a, b) => a - b)) {
    const need = count.get(card)!;
    if (need <= 0) continue;
    const group: number[] = [];
    for (let x = card; x < card + groupSize; x++) {
      if ((count.get(x) ?? 0) < need) {
        push(9, `Need ${need}× card ${x} but only ${count.get(x) ?? 0} available → false.`, { group: [...group, x], fail: true, answer: false });
        return steps;
      }
      count.set(x, count.get(x)! - need);
      group.push(x);
    }
    push(10, `Form ${need} run(s) starting at ${card}: [${group.join(", ")}].`, { group });
  }

  push(13, "Every card fits a straight → true.", { answer: true });
  return steps;
}
