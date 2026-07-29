import type { Step } from "@/core/types";

export interface PopulationData {
  logs: number[][];
  /** [year, delta] pairs, sorted by year */
  deltas: [number, number][];
  /** year currently swept */
  year: number | null;
  pop: number;
  best: number;
  bestYear: number;
  answer: number | null;
}

export type PopulationStep = Step<PopulationData>;

/**
 * Each person adds +1 to their birth year and −1 to their death year (they're not alive in the death
 * year). Sweeping years in order and prefix-summing these deltas gives the living population each year;
 * the earliest peak year is the answer. `line` indexes CODE.
 */
export function populationSteps(logs: number[][]): PopulationStep[] {
  const steps: PopulationStep[] = [];
  const delta = new Map<number, number>();
  for (const [birth, death] of logs) {
    delta.set(birth, (delta.get(birth) ?? 0) + 1);
    delta.set(death, (delta.get(death) ?? 0) - 1);
  }
  const years = [...delta.keys()].sort((a, b) => a - b);

  let pop = 0;
  let best = 0;
  let bestYear = 0;

  const snap = (o: Partial<PopulationData>): PopulationData => ({ logs, deltas: years.map((y) => [y, delta.get(y)!]), year: null, pop, best, bestYear, answer: null, ...o });
  const push = (line: number, explanation: string, o: Partial<PopulationData> = {}) => {
    steps.push({ id: steps.length, line, explanation, data: snap(o), highlights: [] });
  };

  push(4, "Mark +1 at each birth year and −1 at each death year, then prefix-sum.");

  for (const y of years) {
    pop += delta.get(y)!;
    if (pop > best) { best = pop; bestYear = y; }
    push(9, `Year ${y}: population ${pop}${pop === best && bestYear === y ? " → new peak" : ""}.`, { year: y });
  }

  push(11, `Earliest peak-population year: ${bestYear} (population ${best}).`, { answer: bestYear });
  return steps;
}
