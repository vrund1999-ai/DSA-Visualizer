import type { Step } from "@/core/types";

export interface JewelsData {
  jewels: string;
  stones: string;
  pos: number | null;
  isJewel: boolean | null;
  count: number;
  answer: number | null;
}

export type JewelsStep = Step<JewelsData>;

/**
 * Put the jewel characters into a set for O(1) lookups, then scan the stones counting
 * how many are jewels. `line` indexes CODE.
 */
export function jewelsSteps(jewels: string, stones: string): JewelsStep[] {
  const steps: JewelsStep[] = [];
  const set = new Set(jewels);
  let count = 0;

  const snap = (pos: number, o: Partial<JewelsData>): JewelsData => ({ jewels, stones, pos, isJewel: null, count, answer: null, ...o });
  const push = (line: number, explanation: string, pos: number, o: Partial<JewelsData> = {}) => {
    steps.push({ id: steps.length, line, explanation, data: snap(pos, o), highlights: [] });
  };

  push(1, `Jewel types: {${[...set].join(", ")}}.`, -1);

  for (let i = 0; i < stones.length; i++) {
    const isJewel = set.has(stones[i]);
    if (isJewel) count++;
    push(4, `Stone '${stones[i]}' ${isJewel ? "is a jewel — count " + count : "is not a jewel"}.`, i, { isJewel });
  }

  push(6, `Total jewels: ${count}.`, -1, { answer: count });
  return steps;
}
