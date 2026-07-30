import type { Step } from "@/core/types";

export interface PacAtlData {
  heights: number[][];
  pac: boolean[][];
  atl: boolean[][];
  phase: "pacific" | "atlantic" | "both";
  cur: [number, number] | null;
  answer: number[][] | null;
}

export type PacAtlStep = Step<PacAtlData>;

const DIRS = [
  [-1, 0],
  [1, 0],
  [0, -1],
  [0, 1],
];

/**
 * Rather than tracing where each cell drains, flow backward from each ocean: starting on that ocean's
 * border, water can climb to any neighbor at least as high. Cells reached from both the Pacific and
 * Atlantic sweeps drain to both. `line` indexes CODE.
 */
export function pacAtlSteps(heights: number[][]): PacAtlStep[] {
  const steps: PacAtlStep[] = [];
  const R = heights.length;
  const C = heights[0].length;
  const pac = Array.from({ length: R }, () => new Array(C).fill(false));
  const atl = Array.from({ length: R }, () => new Array(C).fill(false));

  const snap = (o: Partial<PacAtlData>): PacAtlData => ({ heights, pac: pac.map((r) => [...r]), atl: atl.map((r) => [...r]), phase: "pacific", cur: null, answer: null, ...o });
  const push = (line: number, explanation: string, o: Partial<PacAtlData> = {}) => {
    steps.push({ id: steps.length, line, explanation, data: snap(o), highlights: [] });
  };

  const bfs = (seen: boolean[][], sources: [number, number][], phase: "pacific" | "atlantic") => {
    const queue = [...sources];
    for (const [r, c] of sources) seen[r][c] = true;
    while (queue.length) {
      const [r, c] = queue.shift()!;
      push(8, `${phase}: water can reach (${r},${c}) [height ${heights[r][c]}].`, { phase, cur: [r, c] });
      for (const [dr, dc] of DIRS) {
        const nr = r + dr;
        const nc = c + dc;
        if (nr >= 0 && nc >= 0 && nr < R && nc < C && !seen[nr][nc] && heights[nr][nc] >= heights[r][c]) {
          seen[nr][nc] = true;
          queue.push([nr, nc]);
        }
      }
    }
  };

  const pacSrc: [number, number][] = [];
  const atlSrc: [number, number][] = [];
  for (let c = 0; c < C; c++) {
    pacSrc.push([0, c]);
    atlSrc.push([R - 1, c]);
  }
  for (let r = 0; r < R; r++) {
    pacSrc.push([r, 0]);
    atlSrc.push([r, C - 1]);
  }

  push(3, "Flow inward from the Pacific border (top & left edges), climbing to equal-or-higher cells.");
  bfs(pac, pacSrc, "pacific");
  push(3, "Now flow inward from the Atlantic border (bottom & right edges).");
  bfs(atl, atlSrc, "atlantic");

  const answer: number[][] = [];
  for (let r = 0; r < R; r++) for (let c = 0; c < C; c++) if (pac[r][c] && atl[r][c]) answer.push([r, c]);
  push(13, `${answer.length} cell(s) drain to both oceans.`, { phase: "both", answer });
  return steps;
}
