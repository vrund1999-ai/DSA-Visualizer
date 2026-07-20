import type { GridInput, GridStep } from "../types";
import {
  keyOf,
  parseKey,
  neighbors,
  buildHighlights,
  reconstructPath,
} from "../grid";

/**
 * Pure step generator for A* search on a uniform-cost grid (each move costs 1)
 * with the Manhattan-distance heuristic. Cells are settled in order of
 * f = g + h, so A* is pulled toward the target and typically explores far
 * fewer cells than BFS/Dijkstra. Badges show g (distance from start). `line`
 * points into ASTAR_CODE.
 */
export function aStarSteps(input: GridInput): GridStep[] {
  const startKey = keyOf(...input.start);
  const endKey = keyOf(...input.end);
  const [er, ec] = input.end;
  const h = (r: number, c: number) => Math.abs(r - er) + Math.abs(c - ec);

  const steps: GridStep[] = [];
  const g = new Map<string, number>([[startKey, 0]]);
  const prev = new Map<string, string>();
  const done = new Set<string>();
  // Lazy priority queue of [f, key]; popped by scanning for the minimum f.
  const open: [number, string][] = [[h(...input.start), startKey]];
  let found = startKey === endKey;

  const frontierSet = () =>
    new Set([...g.keys()].filter((k) => !done.has(k)));

  const push = (line: number, explanation: string, current: string | null) => {
    steps.push({
      id: steps.length,
      line,
      explanation,
      data: input,
      highlights: buildHighlights({
        visited: done,
        frontier: frontierSet(),
        current,
        distances: g,
      }),
      metrics: { visited: done.size, frontier: frontierSet().size },
    });
  };

  push(1, `Start at ${startKey}; f = g + h with h = Manhattan distance.`, startKey);

  while (open.length > 0) {
    let minIdx = 0;
    for (let i = 1; i < open.length; i++) {
      if (open[i][0] < open[minIdx][0]) minIdx = i;
    }
    const [, cellKey] = open.splice(minIdx, 1)[0];
    if (done.has(cellKey)) continue;

    const [r, c] = parseKey(cellKey);
    done.add(cellKey);
    const gc = g.get(cellKey)!;
    push(8, `Settle ${cellKey} (g=${gc}, f=${gc + h(r, c)}) — lowest f in the open set.`, cellKey);

    if (cellKey === endKey) {
      found = true;
      push(9, `Reached the target ${endKey} with distance ${gc}.`, cellKey);
      break;
    }

    let relaxed = 0;
    for (const [nr, nc] of neighbors(input, r, c)) {
      const nk = keyOf(nr, nc);
      const ng = gc + 1;
      if (ng < (g.get(nk) ?? Infinity)) {
        g.set(nk, ng);
        prev.set(nk, cellKey);
        open.push([ng + h(nr, nc), nk]);
        relaxed++;
      }
    }
    if (relaxed > 0) {
      push(
        14,
        `Relax ${relaxed} neighbour${relaxed > 1 ? "s" : ""} and push them with their f-score.`,
        cellKey,
      );
    }
  }

  if (found) {
    const path = reconstructPath(prev, startKey, endKey);
    const shown = new Set<string>();
    for (const k of path) {
      shown.add(k);
      steps.push({
        id: steps.length,
        line: 18,
        explanation: `Trace the shortest path back from the target (${shown.size}/${path.length}).`,
        data: input,
        highlights: buildHighlights({
          visited: done,
          path: new Set(shown),
          current: k,
          distances: g,
        }),
        metrics: { visited: done.size, cost: g.get(endKey) ?? 0 },
      });
    }
  } else {
    push(18, `The open set is empty and the target was never reached — no path exists.`, null);
  }

  return steps;
}
