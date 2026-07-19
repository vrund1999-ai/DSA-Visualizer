import type { GridInput, GridStep } from "./types";
import {
  keyOf,
  parseKey,
  neighbors,
  buildHighlights,
  reconstructPath,
} from "./grid";

// Line indices shared by BFS_CODE and DFS_CODE (identical layout).
const LINE_START = 1;
const LINE_TAKE = 4;
const LINE_END = 5;
const LINE_PUSH = 10;
const LINE_PATH = 13;

/**
 * Pure step generator shared by BFS and DFS. The only difference is the
 * frontier discipline: BFS dequeues from the front (queue), DFS pops from the
 * back (stack). BFS therefore finds a shortest path; DFS finds *a* path.
 */
export function frontierSearch(input: GridInput, mode: "bfs" | "dfs"): GridStep[] {
  const container = mode === "bfs" ? "queue" : "stack";
  const pathWord = mode === "bfs" ? "shortest path" : "path";
  const startKey = keyOf(...input.start);
  const endKey = keyOf(...input.end);

  const steps: GridStep[] = [];
  const visited = new Set<string>([startKey]);
  const prev = new Map<string, string>();
  const frontier: string[] = [startKey];
  let found = startKey === endKey;

  const push = (
    line: number,
    explanation: string,
    highlights: GridStep["highlights"],
  ) => {
    steps.push({
      id: steps.length,
      line,
      explanation,
      data: input,
      highlights,
      metrics: { visited: visited.size, frontier: frontier.length },
    });
  };

  push(
    LINE_START,
    `Start at ${startKey}; add it to the ${container}.`,
    buildHighlights({ visited, frontier: new Set(frontier), current: startKey }),
  );

  while (frontier.length > 0) {
    const cellKey = mode === "bfs" ? frontier.shift()! : frontier.pop()!;
    const [r, c] = parseKey(cellKey);
    push(
      LINE_TAKE,
      `Take ${cellKey} from the ${mode === "bfs" ? "front of the queue" : "top of the stack"}.`,
      buildHighlights({ visited, frontier: new Set(frontier), current: cellKey }),
    );

    if (cellKey === endKey) {
      found = true;
      push(
        LINE_END,
        `Reached the target ${endKey}.`,
        buildHighlights({ visited, frontier: new Set(frontier), current: cellKey }),
      );
      break;
    }

    let added = 0;
    for (const [nr, nc] of neighbors(input, r, c)) {
      const nk = keyOf(nr, nc);
      if (visited.has(nk)) continue;
      visited.add(nk);
      prev.set(nk, cellKey);
      frontier.push(nk);
      added++;
    }
    if (added > 0) {
      push(
        LINE_PUSH,
        `Add ${added} unvisited neighbour${added > 1 ? "s" : ""} to the ${container}.`,
        buildHighlights({ visited, frontier: new Set(frontier), current: cellKey }),
      );
    }
  }

  if (found) {
    const path = reconstructPath(prev, startKey, endKey);
    const shown = new Set<string>();
    for (const k of path) {
      shown.add(k);
      push(
        LINE_PATH,
        `Trace the ${pathWord} back from the target (${shown.size}/${path.length}).`,
        buildHighlights({ visited, path: new Set(shown), current: k }),
      );
    }
  } else {
    push(
      LINE_PATH,
      `The ${container} is empty and the target was never reached — no path exists.`,
      buildHighlights({ visited }),
    );
  }

  return steps;
}
