import type { Step } from "@/core/types";

export interface Person {
  a: number;
  b: number;
}

export interface TwoCityData {
  people: Person[];
  i: number | null;
  n: number;
  total: number;
  phase: "sort" | "assign" | "done";
}

export type TwoCityStep = Step<TwoCityData>;

/**
 * Everyone flies somewhere; sorting by (costA − costB) puts the people who save
 * the most by choosing A first. Sending the cheaper-for-A half to city A and the
 * rest to city B minimises the total. `line` indexes CODE.
 */
export function twoCitySteps(costs: [number, number][]): TwoCityStep[] {
  const people: Person[] = costs
    .map(([a, b]) => ({ a, b }))
    .sort((x, y) => x.a - x.b - (y.a - y.b));
  const n = people.length / 2;
  const steps: TwoCityStep[] = [];
  let total = 0;

  const snap = (line: number, explanation: string, i: number | null, phase: TwoCityData["phase"]) => {
    steps.push({ id: steps.length, line, explanation, data: { people: people.map((p) => ({ ...p })), i, n, total, phase }, highlights: [], metrics: { total } });
  };

  snap(2, "Sort by (cost to A − cost to B): biggest A-savers first.", null, "sort");

  for (let i = 0; i < people.length; i++) {
    if (i < n) {
      total += people[i].a;
      snap(5, `Person ${i} → City A for ${people[i].a} (saves most vs B). Total ${total}.`, i, "assign");
    } else {
      total += people[i].b;
      snap(6, `Person ${i} → City B for ${people[i].b}. Total ${total}.`, i, "assign");
    }
  }

  snap(7, `Minimum total cost is ${total}.`, null, "done");
  return steps;
}
