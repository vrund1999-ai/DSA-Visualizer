import type { GridInput, GridStep } from "../types";
import {
  keyOf,
  parseKey,
  neighbors,
  buildHighlights,
  reconstructPath,
} from "../grid";

/**
 * Pure step generator for greedy best-first search: always expand the frontier
 * cell that *looks* closest to the target (lowest heuristic h), ignoring the
 * cost so far. Fast, but the path it finds is not guaranteed to be shortest.
 * `line` points into GREEDY_CODE.
 */
export function greedySteps(input: GridInput): GridStep[] {
  const startKey = keyOf(...input.start);
  const endKey = keyOf(...input.end);
  const [er, ec] = input.end;
  const h = (r: number, c: number) => Math.abs(r - er) + Math.abs(c - ec);

  const steps: GridStep[] = [];
  const prev = new Map<string, string>();
  const seen = new Set<string>([startKey]);
  const done = new Set<string>();
  const open: [number, string][] = [[h(...input.start), startKey]];
  let found = startKey === endKey;

  const frontierSet = () => new Set([...seen].filter((k) => !done.has(k)));

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
      }),
      metrics: { visited: done.size, frontier: frontierSet().size },
    });
  };

  push(2, `Start at ${startKey}; prioritize purely by h (distance to target).`, startKey);

  while (open.length > 0) {
    let minIdx = 0;
    for (let i = 1; i < open.length; i++) {
      if (open[i][0] < open[minIdx][0]) minIdx = i;
    }
    const [, cellKey] = open.splice(minIdx, 1)[0];
    if (done.has(cellKey)) continue;

    const [r, c] = parseKey(cellKey);
    done.add(cellKey);
    push(7, `Expand ${cellKey} (h = ${h(r, c)}) — the most promising frontier cell.`, cellKey);

    if (cellKey === endKey) {
      found = true;
      push(8, `Reached the target ${endKey}.`, cellKey);
      break;
    }

    let added = 0;
    for (const [nr, nc] of neighbors(input, r, c)) {
      const nk = keyOf(nr, nc);
      if (seen.has(nk)) continue;
      seen.add(nk);
      prev.set(nk, cellKey);
      open.push([h(nr, nc), nk]);
      added++;
    }
    if (added > 0) {
      push(12, `Add ${added} neighbour${added > 1 ? "s" : ""} ordered by h.`, cellKey);
    }
  }

  if (found) {
    const path = reconstructPath(prev, startKey, endKey);
    const shown = new Set<string>();
    for (const k of path) {
      shown.add(k);
      steps.push({
        id: steps.length,
        line: 16,
        explanation: `Trace the path back from the target (${shown.size}/${path.length}).`,
        data: input,
        highlights: buildHighlights({ visited: done, path: new Set(shown), current: k }),
        metrics: { visited: done.size, pathLength: path.length },
      });
    }
  } else {
    push(16, `The open set is empty and the target was never reached — no path exists.`, null);
  }

  return steps;
}
