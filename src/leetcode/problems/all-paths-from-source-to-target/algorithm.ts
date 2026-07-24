import type { Step } from "@/core/types";

export interface AllPathsData {
  graph: number[][];
  path: number[];
  current: number | null;
  results: number[][];
}

export type AllPathsStep = Step<AllPathsData>;

/**
 * The graph is a DAG, so DFS from node 0 can't cycle: extend the path to each
 * neighbour, and whenever it reaches the last node, record it. Backtracking pops
 * the node to explore the next branch. `line` indexes CODE.
 */
export function allPathsSteps(graph: number[][]): AllPathsStep[] {
  const steps: AllPathsStep[] = [];
  const results: number[][] = [];
  const target = graph.length - 1;
  const path: number[] = [0];

  const snap = (current: number | null): AllPathsData => ({
    graph: graph.map((row) => [...row]),
    path: [...path],
    current,
    results: results.map((r) => [...r]),
  });
  const push = (line: number, explanation: string, current: number | null) => {
    steps.push({ id: steps.length, line, explanation, data: snap(current), highlights: [], metrics: { found: results.length } });
  };

  const bt = (node: number) => {
    if (node === target) {
      results.push([...path]);
      push(3, `Reached target ${target} — record path [${path.join(" → ")}].`, node);
      return;
    }
    for (const next of graph[node]) {
      path.push(next);
      push(5, `From ${node}, go to ${next}.`, next);
      bt(next);
      path.pop();
    }
  };

  push(1, `DFS every path from node 0 to node ${target}.`, 0);
  bt(0);
  push(11, `Found ${results.length} path(s).`, null);
  return steps;
}
