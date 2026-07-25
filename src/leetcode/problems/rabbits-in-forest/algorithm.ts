import type { Step } from "@/core/types";

export interface RabbitsData {
  answers: number[];
  /** [answerValue, count] pairs */
  freq: [number, number][];
  /** answer value currently being processed */
  cur: number | null;
  groupSize: number | null;
  groups: number | null;
  added: number | null;
  total: number;
  answer: number | null;
}

export type RabbitsStep = Step<RabbitsData>;

/**
 * A rabbit answering "a" shares its color with exactly a others, so its color group holds a+1
 * rabbits. Rabbits giving the same answer can share a group, but only a+1 fit per group — so ceil
 * (count/(a+1)) groups are needed, each contributing a+1 rabbits. `line` indexes CODE.
 */
export function rabbitsSteps(answers: number[]): RabbitsStep[] {
  const steps: RabbitsStep[] = [];
  const freq = new Map<number, number>();
  for (const a of answers) freq.set(a, (freq.get(a) ?? 0) + 1);
  let total = 0;

  const snap = (o: Partial<RabbitsData>): RabbitsData => ({ answers, freq: [...freq.entries()], cur: null, groupSize: null, groups: null, added: null, total, answer: null, ...o });
  const push = (line: number, explanation: string, o: Partial<RabbitsData> = {}) => {
    steps.push({ id: steps.length, line, explanation, data: snap(o), highlights: [] });
  };

  push(2, "Group rabbits by their answer; each answer a means a color herd of a+1.");

  for (const [a, count] of freq.entries()) {
    const groupSize = a + 1;
    const groups = Math.ceil(count / groupSize);
    const added = groups * groupSize;
    total += added;
    push(7, `Answer ${a}: ${count} rabbit(s), herd size ${groupSize} → ${groups} herd(s) = ${added} rabbits (total ${total}).`, { cur: a, groupSize, groups, added });
  }

  push(9, `Minimum rabbits in the forest: ${total}.`, { answer: total });
  return steps;
}
