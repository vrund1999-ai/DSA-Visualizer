import type { Step } from "@/core/types";

export interface SortPeopleData {
  /** the people in current display order (name + height) */
  people: { name: string; height: number }[];
  /** indices compared/placed this step */
  highlight: number[];
  phase: "pair" | "sort" | "done";
  answer: string[] | null;
}

export type SortPeopleStep = Step<SortPeopleData>;

/**
 * Sort the People: pair each name with its height, sort by height descending, and read out the names. `line`
 * indexes CODE.
 */
export function sortPeopleSteps(names: string[], heights: number[]): SortPeopleStep[] {
  const steps: SortPeopleStep[] = [];
  let people = names.map((name, i) => ({ name, height: heights[i] }));

  const snap = (o: Partial<SortPeopleData>): SortPeopleData => ({
    people: people.map((p) => ({ ...p })),
    highlight: [],
    phase: "pair",
    answer: null,
    ...o,
  });
  const push = (line: number, explanation: string, o: Partial<SortPeopleData> = {}) => {
    steps.push({ id: steps.length, line, explanation, data: snap(o), highlights: [] });
  };

  push(2, `Pair each name with its height.`);

  people = [...people].sort((a, b) => b.height - a.height);
  push(3, `Sort by height descending.`, { phase: "sort" });

  push(4, `Result: [${people.map((p) => p.name).join(", ")}].`, { phase: "done", answer: people.map((p) => p.name) });
  return steps;
}
