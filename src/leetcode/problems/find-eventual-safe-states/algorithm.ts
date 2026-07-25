import type { Step } from "@/core/types";

export interface SafeStatesData {
  graph: number[][];
  /** 0 = unvisited, 1 = visiting, 2 = safe, 3 = unsafe */
  color: number[];
  current: number | null;
  answer: number[] | null;
}

export type SafeStatesStep = Step<SafeStatesData>;

/**
 * A node is eventually safe if every path from it ends at a terminal node (no cycle).
 * DFS with three colors: a node revisited while still "visiting" reveals a cycle,
 * marking that branch unsafe. `line` indexes CODE.
 */
export function safeStatesSteps(graph: number[][]): SafeStatesStep[] {
  const steps: SafeStatesStep[] = [];
  const color = new Array(graph.length).fill(0);

  const snap = (o: Partial<SafeStatesData>): SafeStatesData => ({ graph: graph.map((r) => [...r]), color: [...color], current: null, answer: null, ...o });
  const push = (line: number, explanation: string, data: SafeStatesData) => {
    steps.push({ id: steps.length, line, explanation, data, highlights: [] });
  };

  push(2, "3-color DFS: a node whose every path avoids cycles is safe.", snap({}));

  const dfs = (u: number): boolean => {
    if (color[u] === 2) return true;
    if (color[u] === 1 || color[u] === 3) return false;
    color[u] = 1;
    push(5, `Visit ${u} (mark visiting).`, snap({ current: u }));
    for (const v of graph[u]) {
      if (!dfs(v)) {
        color[u] = 3;
        push(7, `${u} → ${v} leads to a cycle → ${u} is unsafe.`, snap({ current: u }));
        return false;
      }
    }
    color[u] = 2;
    push(8, `${u} — all paths safe.`, snap({ current: u }));
    return true;
  };

  const answer: number[] = [];
  for (let u = 0; u < graph.length; u++) if (dfs(u)) answer.push(u);

  push(12, `Safe nodes: [${answer.join(", ")}].`, snap({ answer }));
  return steps;
}
