import type { Highlight, Step } from "@/core/types";

export interface ConsecutiveData {
  values: number[];
  best: number;
  bestRun: number[];
}

export type ConsecutiveStep = Step<ConsecutiveData>;

/**
 * Put every value in a hash set, then only start counting from values with no
 * left neighbour (n−1 absent) — a run's smallest element. Walking n+1, n+2, …
 * from each start visits each value once, so it's O(n). `line` indexes CODE.
 */
export function consecutiveSteps(nums: number[]): ConsecutiveStep[] {
  const set = new Set(nums);
  const values = [...set].sort((a, b) => a - b);
  const steps: ConsecutiveStep[] = [];
  let best = 0;
  let bestRun: number[] = [];

  const push = (line: number, explanation: string, extra: Highlight[]) => {
    const bestHl: Highlight[] = bestRun.map((v) => ({ ref: v, role: "target" }));
    steps.push({
      id: steps.length,
      line,
      explanation,
      data: { values: [...values], best, bestRun: [...bestRun] },
      highlights: [...bestHl, ...extra],
      metrics: { best },
    });
  };

  push(1, "Load every value into a hash set for O(1) membership checks.", []);

  for (const n of set) {
    if (!set.has(n - 1)) {
      let cur = n;
      const run = [n];
      push(4, `${n} has no left neighbour (${n - 1} absent) — it starts a run.`, [{ ref: n, role: "pivot" }]);
      while (set.has(cur + 1)) {
        cur++;
        run.push(cur);
        push(6, `${cur} continues the run (length ${run.length}).`, [
          { ref: n, role: "pivot" },
          ...run.map((v) => ({ ref: v, role: "active" }) as Highlight),
        ]);
      }
      if (run.length > best) {
        best = run.length;
        bestRun = run;
        push(7, `Longest run so far: ${run.join(", ")} (length ${best}).`, run.map((v) => ({ ref: v, role: "target" })));
      }
    } else {
      push(4, `${n} has a left neighbour (${n - 1} present) — skip; not a run start.`, [{ ref: n, role: "visited" }]);
    }
  }

  push(10, `Longest consecutive sequence has length ${best}.`, []);
  return steps;
}
