import type { Step } from "@/core/types";

export interface BipartiteData {
  graph: number[][];
  /** 0 uncolored, 1 or -1 for the two sides */
  color: number[];
  cur: number | null;
  /** node just colored */
  colored: number | null;
  /** the conflicting edge, if any */
  conflict: [number, number] | null;
  answer: boolean | null;
}

export type BipartiteStep = Step<BipartiteData>;

/**
 * A graph is bipartite iff it 2-colors with no edge joining same colors. BFS assigns each newly reached
 * node the opposite color of the node that reached it; discovering an edge between two same-colored nodes
 * proves an odd cycle and fails. `line` indexes CODE.
 */
export function bipartiteSteps(graph: number[][]): BipartiteStep[] {
  const steps: BipartiteStep[] = [];
  const color = new Array(graph.length).fill(0);

  const snap = (o: Partial<BipartiteData>): BipartiteData => ({ graph, color: [...color], cur: null, colored: null, conflict: null, answer: null, ...o });
  const push = (line: number, explanation: string, o: Partial<BipartiteData> = {}) => {
    steps.push({ id: steps.length, line, explanation, data: snap(o), highlights: [] });
  };

  push(1, "Try to 2-color the graph; adjacent nodes must differ.");

  for (let s = 0; s < graph.length; s++) {
    if (color[s]) continue;
    const queue = [s];
    color[s] = 1;
    push(4, `Start BFS at node ${s}, color +.`, { cur: s, colored: s });
    while (queue.length) {
      const u = queue.shift()!;
      for (const v of graph[u]) {
        if (color[v] === 0) {
          color[v] = -color[u];
          queue.push(v);
          push(9, `Color node ${v} the opposite of ${u}.`, { cur: u, colored: v });
        } else if (color[v] === color[u]) {
          push(12, `Edge ${u}–${v} joins two same-colored nodes → not bipartite.`, { cur: u, conflict: [u, v], answer: false });
          return steps;
        }
      }
    }
  }

  push(16, "Colored everything with no conflicts — bipartite.", { answer: true });
  return steps;
}
