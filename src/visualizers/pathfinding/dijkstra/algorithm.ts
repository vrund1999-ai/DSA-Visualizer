import type { GridInput, GridStep } from "../types";
import {
  keyOf,
  parseKey,
  neighbors,
  buildHighlights,
  reconstructPath,
} from "../grid";

/**
 * Pure step generator for Dijkstra's algorithm on a uniform-cost grid (each
 * move costs 1). Settled cells carry their shortest distance as a badge. With
 * unit weights this explores like BFS, but the distance labels make the
 * "closest-first" ordering explicit. `line` points into DIJKSTRA_CODE.
 */
export function dijkstraSteps(input: GridInput): GridStep[] {
  const startKey = keyOf(...input.start);
  const endKey = keyOf(...input.end);

  const steps: GridStep[] = [];
  const dist = new Map<string, number>([[startKey, 0]]);
  const prev = new Map<string, string>();
  const done = new Set<string>();
  // Lazy priority queue: array of [distance, key], popped by scanning for min.
  const pq: [number, string][] = [[0, startKey]];
  let found = startKey === endKey;

  const frontierSet = () =>
    new Set([...dist.keys()].filter((k) => !done.has(k)));

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
        distances: dist,
      }),
      metrics: { visited: done.size, frontier: frontierSet().size },
    });
  };

  push(1, `Start at ${startKey} with distance 0.`, startKey);

  while (pq.length > 0) {
    // pop the minimum-distance entry
    let minIdx = 0;
    for (let i = 1; i < pq.length; i++) {
      if (pq[i][0] < pq[minIdx][0]) minIdx = i;
    }
    const [d, cellKey] = pq.splice(minIdx, 1)[0];
    if (done.has(cellKey)) continue;

    const [r, c] = parseKey(cellKey);
    done.add(cellKey);
    push(8, `Settle ${cellKey} at distance ${d} (closest unsettled cell).`, cellKey);

    if (cellKey === endKey) {
      found = true;
      push(9, `Reached the target ${endKey} with distance ${d}.`, cellKey);
      break;
    }

    let relaxed = 0;
    for (const [nr, nc] of neighbors(input, r, c)) {
      const nk = keyOf(nr, nc);
      const nd = d + 1;
      if (nd < (dist.get(nk) ?? Infinity)) {
        dist.set(nk, nd);
        prev.set(nk, cellKey);
        pq.push([nd, nk]);
        relaxed++;
      }
    }
    if (relaxed > 0) {
      push(
        14,
        `Update ${relaxed} neighbour${relaxed > 1 ? "s" : ""} with tentative distance ${d + 1}.`,
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
          distances: dist,
        }),
        metrics: { visited: done.size, cost: dist.get(endKey) ?? 0 },
      });
    }
  } else {
    push(18, `The queue is empty and the target was never reached — no path exists.`, null);
  }

  return steps;
}
