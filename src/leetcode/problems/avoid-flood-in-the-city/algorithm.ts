import type { Step } from "@/core/types";

export interface FloodData {
  rains: number[];
  day: number | null;
  full: { lake: number; day: number }[];
  dryDays: number[];
  ans: number[];
  flooded: boolean;
  done: boolean;
}

export type FloodStep = Step<FloodData>;

/**
 * Avoid Flood: a positive rain fills a lake; a 0 is a dry day that can empty one lake. When a lake would
 * overflow (rains while full), greedily spend the earliest dry day that falls after it last filled. If none
 * exists, a flood is unavoidable. `line` indexes CODE.
 */
export function floodSteps(rains: number[]): FloodStep[] {
  const steps: FloodStep[] = [];
  const ans = new Array(rains.length).fill(1);
  const full = new Map<number, number>();
  const dry: number[] = [];

  const fullView = () => [...full.entries()].map(([lake, day]) => ({ lake, day }));
  const snap = (o: Partial<FloodData>): FloodData => ({
    rains,
    day: null,
    full: fullView(),
    dryDays: [...dry],
    ans: [...ans],
    flooded: false,
    done: false,
    ...o,
  });
  const push = (line: number, explanation: string, o: Partial<FloodData> = {}) => {
    steps.push({ id: steps.length, line, explanation, data: snap(o), highlights: [] });
  };

  push(1, `Walk the days; spend dry days to empty lakes before they overflow.`);

  for (let i = 0; i < rains.length; i++) {
    const lake = rains[i];
    if (lake === 0) {
      dry.push(i);
      push(6, `Day ${i}: dry day available.`, { day: i });
      continue;
    }
    ans[i] = -1;
    if (full.has(lake)) {
      const k = dry.findIndex((d) => d > full.get(lake)!);
      if (k === -1) {
        push(10, `Day ${i}: lake ${lake} rains again with no dry day to empty it → flood!`, { day: i, ans: [], flooded: true, done: true });
        return steps;
      }
      ans[dry[k]] = lake;
      push(11, `Day ${i}: lake ${lake} full — empty it on dry day ${dry[k]}.`, { day: i });
      dry.splice(k, 1);
    } else {
      push(14, `Day ${i}: lake ${lake} fills.`, { day: i });
    }
    full.set(lake, i);
  }

  push(16, `Survived with no flood: [${ans.join(", ")}].`, { done: true });
  return steps;
}
