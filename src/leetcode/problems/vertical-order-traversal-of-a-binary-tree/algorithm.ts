import type { Step } from "@/core/types";

interface NodeRec {
  row: number;
  col: number;
  val: number;
  heapIndex: number;
}

export interface VerticalTraversalData {
  heap: (number | null)[];
  visited: number[];
  current: number | null;
  columns: { col: number; vals: number[] }[];
  sorted: boolean;
}

export type VerticalTraversalStep = Step<VerticalTraversalData>;

/**
 * LC987: collect every node's (row, col, val) via DFS, then order globally by column,
 * then row, then value (the value tie-break is what separates this from a plain
 * column grouping). Group the sorted records by column. `line` indexes CODE.
 */
export function verticalTraversalSteps(heap: (number | null)[]): VerticalTraversalStep[] {
  const steps: VerticalTraversalStep[] = [];
  const nodes: NodeRec[] = [];
  const visited: number[] = [];

  const grouped = (recs: NodeRec[]) => {
    const map = new Map<number, number[]>();
    for (const r of recs) {
      if (!map.has(r.col)) map.set(r.col, []);
      map.get(r.col)!.push(r.val);
    }
    return [...map.keys()].sort((a, b) => a - b).map((col) => ({ col, vals: map.get(col)! }));
  };

  const snap = (o: Partial<VerticalTraversalData>): VerticalTraversalData => ({
    heap: [...heap],
    visited: [...visited],
    current: null,
    columns: grouped(nodes),
    sorted: false,
    ...o,
  });
  const push = (line: number, explanation: string, data: VerticalTraversalData) => {
    steps.push({ id: steps.length, line, explanation, data, highlights: [] });
  };

  push(1, "DFS to record each node's (row, col, value).", snap({}));

  const dfs = (i: number, row: number, col: number) => {
    if (i >= heap.length || heap[i] === null) return;
    nodes.push({ row, col, val: heap[i] as number, heapIndex: i });
    visited.push(i);
    push(4, `Record ${heap[i]} at row ${row}, col ${col}.`, snap({ current: i }));
    dfs(2 * i + 1, row + 1, col - 1);
    dfs(2 * i + 2, row + 1, col + 1);
  };
  dfs(0, 0, 0);

  nodes.sort((a, b) => a.col - b.col || a.row - b.row || a.val - b.val);
  push(10, "Sort by column, then row, then value (ties settled by value).", snap({ sorted: true }));

  push(12, `Group into ${grouped(nodes).length} column(s).`, snap({ sorted: true }));
  return steps;
}
