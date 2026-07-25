import type { Step } from "@/core/types";

export interface BoatsData {
  people: number[];
  limit: number;
  i: number;
  j: number;
  boats: number;
  /** true if the lightest person also boarded this trip */
  paired: boolean | null;
  answer: number | null;
}

export type BoatsStep = Step<BoatsData>;

/**
 * Sort by weight. Each boat carries the heaviest remaining person; if the lightest
 * remaining person also fits within the limit, they share the boat. Two pointers
 * converge, one boat per step. `line` indexes CODE.
 */
export function boatsSteps(peopleIn: number[], limit: number): BoatsStep[] {
  const steps: BoatsStep[] = [];
  const people = [...peopleIn].sort((a, b) => a - b);
  let i = 0;
  let j = people.length - 1;
  let boats = 0;

  const snap = (o: Partial<BoatsData>): BoatsData => ({ people: [...people], limit, i, j, boats, paired: null, answer: null, ...o });
  const push = (line: number, explanation: string, data: BoatsData) => {
    steps.push({ id: steps.length, line, explanation, data, highlights: [] });
  };

  push(2, `Sort by weight; each boat holds at most 2 people ≤ ${limit} kg.`, snap({}));

  while (i <= j) {
    const paired = i !== j && people[i] + people[j] <= limit;
    if (i === j) {
      push(5, `Only ${people[j]} left — takes a boat alone.`, snap({ paired: false }));
    } else if (paired) {
      push(4, `${people[i]} + ${people[j]} = ${people[i] + people[j]} ≤ ${limit} — pair them.`, snap({ paired: true }));
    } else {
      push(5, `${people[i]} + ${people[j]} > ${limit} — ${people[j]} goes alone.`, snap({ paired: false }));
    }
    if (paired) i++;
    j--;
    boats++;
  }

  push(8, `Boats needed: ${boats}.`, snap({ answer: boats }));
  return steps;
}
