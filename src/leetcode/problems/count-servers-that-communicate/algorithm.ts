import type { Step } from "@/core/types";

export interface ServersData {
  grid: number[][];
  rows: number[];
  cols: number[];
  phase: "count" | "check" | "done";
  cur: [number, number] | null;
  /** whether the current server communicates */
  communicates: boolean | null;
  count: number;
  answer: number | null;
}

export type ServersStep = Step<ServersData>;

/**
 * Two servers communicate iff they share a row or column, so a server can talk to *someone* exactly
 * when its row or column holds more than one server. We tally per-row and per-column counts, then a
 * server qualifies if either count exceeds one. `line` indexes CODE.
 */
export function serversSteps(input: number[][]): ServersStep[] {
  const steps: ServersStep[] = [];
  const grid = input.map((r) => [...r]);
  const m = grid.length;
  const n = grid[0].length;
  const rows = new Array(m).fill(0);
  const cols = new Array(n).fill(0);
  for (let r = 0; r < m; r++) for (let c = 0; c < n; c++) if (grid[r][c]) { rows[r]++; cols[c]++; }

  const snap = (o: Partial<ServersData>): ServersData => ({ grid, rows, cols, phase: "count", cur: null, communicates: null, count: 0, answer: null, ...o });
  const push = (line: number, explanation: string, o: Partial<ServersData> = {}) => {
    steps.push({ id: steps.length, line, explanation, data: snap(o), highlights: [] });
  };

  push(5, `Row/column server counts computed. A server communicates if its row or column has > 1.`);

  let count = 0;
  for (let r = 0; r < m; r++) {
    for (let c = 0; c < n; c++) {
      if (!grid[r][c]) continue;
      const communicates = rows[r] > 1 || cols[c] > 1;
      if (communicates) count++;
      push(10, `Server (${r}, ${c}): row ${rows[r]}, col ${cols[c]} → ${communicates ? "communicates" : "isolated"} (count ${count}).`, { phase: "check", cur: [r, c], communicates, count });
    }
  }

  push(11, `Communicating servers: ${count}.`, { phase: "done", count, answer: count });
  return steps;
}
