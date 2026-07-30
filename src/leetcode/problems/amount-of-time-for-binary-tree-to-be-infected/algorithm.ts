import type { Step } from "@/core/types";

export interface InfectData {
  heap: (number | null)[];
  start: number;
  /** infection minute per heap index, -1 if not yet infected */
  time: number[];
  /** heap indices infected this minute (current frontier) */
  frontier: number[];
  minutes: number;
  answer: number | null;
}

export type InfectStep = Step<InfectData>;

/**
 * Infection spreads to every adjacent node each minute, so the time to infect the whole tree is the
 * greatest distance from the start node — a BFS over the tree treated as an undirected graph (each node
 * linked to its parent and children). `line` indexes CODE.
 */
export function infectSteps(heap: (number | null)[], start: number): InfectStep[] {
  const steps: InfectStep[] = [];
  const n = heap.length;
  const idxOf = new Map<number, number>();
  heap.forEach((v, i) => {
    if (v !== null) idxOf.set(v, i);
  });

  const neighbors = (i: number): number[] => {
    const out: number[] = [];
    const parent = (i - 1) >> 1;
    if (i > 0 && heap[parent] !== null) out.push(parent);
    for (const c of [2 * i + 1, 2 * i + 2]) if (c < n && heap[c] !== null) out.push(c);
    return out;
  };

  const time = new Array(n).fill(-1);
  const startIdx = idxOf.get(start)!;
  const seen = new Set<number>([startIdx]);
  let level = [startIdx];
  let minutes = 0;
  time[startIdx] = 0;

  const snap = (o: Partial<InfectData>): InfectData => ({ heap, start, time: [...time], frontier: [...level], minutes, answer: null, ...o });
  const push = (line: number, explanation: string, o: Partial<InfectData> = {}) => {
    steps.push({ id: steps.length, line, explanation, data: snap(o), highlights: [] });
  };

  push(3, `Infection starts at node ${start}; BFS outward, one ring per minute.`);

  while (level.length) {
    const next: number[] = [];
    for (const v of level) {
      for (const u of neighbors(v)) {
        if (!seen.has(u)) {
          seen.add(u);
          time[u] = minutes + 1;
          next.push(u);
        }
      }
    }
    if (next.length) {
      minutes++;
      level = next;
      push(12, `Minute ${minutes}: infect ${next.map((i) => heap[i]).join(", ")}.`, { frontier: next });
    } else {
      level = next;
    }
  }

  push(14, `Whole tree infected after ${minutes} minute(s).`, { frontier: [], answer: minutes });
  return steps;
}
