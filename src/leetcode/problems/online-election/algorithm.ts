import type { Step } from "@/core/types";

export interface ElectionData {
  persons: number[];
  times: number[];
  /** leader after each vote (built during preprocessing) */
  leaders: number[];
  /** index highlighted during preprocessing */
  buildIndex: number | null;
  /** the query time and the resolved slot */
  queryTime: number | null;
  querySlot: number | null;
  result: number | null;
  phase: "build" | "query";
}

export type ElectionStep = Step<ElectionData>;

/**
 * Online Election: precompute the leading candidate right after each vote (ties go to the most recent
 * leader). A query at time t binary-searches the last vote time ≤ t and returns that slot's leader. `line`
 * indexes CODE.
 */
export function electionSteps(persons: number[], times: number[], queries: number[]): ElectionStep[] {
  const steps: ElectionStep[] = [];
  const leaders: number[] = [];
  const count = new Map<number, number>();
  let lead = -1;

  const snap = (o: Partial<ElectionData>): ElectionData => ({
    persons,
    times,
    leaders: [...leaders],
    buildIndex: null,
    queryTime: null,
    querySlot: null,
    result: null,
    phase: "build",
    ...o,
  });
  const push = (line: number, explanation: string, o: Partial<ElectionData> = {}) => {
    steps.push({ id: steps.length, line, explanation, data: snap(o), highlights: [] });
  };

  push(4, `Precompute the leader after each vote.`);
  for (let i = 0; i < persons.length; i++) {
    const p = persons[i];
    count.set(p, (count.get(p) ?? 0) + 1);
    if (count.get(p)! >= (count.get(lead) ?? 0)) lead = p;
    leaders.push(lead);
    push(11, `After vote ${i} (person ${p}) leader is ${lead}.`, { buildIndex: i });
  }

  for (const t of queries) {
    let lo = 0;
    let hi = times.length - 1;
    while (lo < hi) {
      const mid = (lo + hi + 1) >> 1;
      if (times[mid] <= t) lo = mid;
      else hi = mid - 1;
    }
    push(21, `q(${t}): last vote ≤ ${t} is at slot ${lo} → leader ${leaders[lo]}.`, {
      phase: "query",
      queryTime: t,
      querySlot: lo,
      result: leaders[lo],
    });
  }

  return steps;
}
