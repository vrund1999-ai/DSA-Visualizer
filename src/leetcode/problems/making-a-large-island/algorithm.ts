import type { Step } from "@/core/types";

export interface LargeIslandData {
  /** working grid: 0 = water, ≥2 = island id */
  grid: number[][];
  phase: "label" | "flip" | "done";
  cur: [number, number] | null;
  /** neighbor cells contributing to the current flip */
  contributors: string[];
  candidate: number | null;
  best: number;
  answer: number | null;
}

export type LargeIslandStep = Step<LargeIslandData>;

/**
 * First flood-fill every island with a unique id, recording each id's area. Then a single 0-cell
 * flip can merge all *distinct* island ids touching it, so for each water cell we sum the sizes of
 * its unique neighbor islands plus one. The best such total (or the largest existing island) wins.
 * `line` indexes CODE.
 */
export function largeIslandSteps(input: number[][]): LargeIslandStep[] {
  const steps: LargeIslandStep[] = [];
  const grid = input.map((r) => [...r]);
  const rows = grid.length;
  const cols = grid[0].length;
  const size = new Map<number, number>();

  const snap = (o: Partial<LargeIslandData>): LargeIslandData => ({ grid: grid.map((r) => [...r]), phase: "label", cur: null, contributors: [], candidate: null, best: 0, answer: null, ...o });
  const push = (line: number, explanation: string, o: Partial<LargeIslandData> = {}) => {
    steps.push({ id: steps.length, line, explanation, data: snap(o), highlights: [] });
  };

  const fill = (r: number, c: number, id: number): number => {
    if (r < 0 || c < 0 || r >= rows || c >= cols || grid[r][c] !== 1) return 0;
    grid[r][c] = id;
    return 1 + fill(r + 1, c, id) + fill(r - 1, c, id) + fill(r, c + 1, id) + fill(r, c - 1, id);
  };

  push(1, "Phase 1: label each island with a unique id and record its size.");

  let id = 2;
  for (let r = 0; r < rows; r++) {
    for (let c = 0; c < cols; c++) {
      if (grid[r][c] === 1) {
        const area = fill(r, c, id);
        size.set(id, area);
        push(3, `Island id ${id} at (${r}, ${c}) has size ${area}.`, { phase: "label", cur: [r, c] });
        id++;
      }
    }
  }

  let best = 0;
  for (const s of size.values()) best = Math.max(best, s);
  push(4, `Largest existing island: ${best} (used if no useful flip exists).`, { best });

  const neighborIds = (r: number, c: number): number[] => {
    const ids: number[] = [];
    for (const [dr, dc] of [[1, 0], [-1, 0], [0, 1], [0, -1]]) {
      const nr = r + dr;
      const nc = c + dc;
      if (nr >= 0 && nc >= 0 && nr < rows && nc < cols && grid[nr][nc] >= 2) ids.push(grid[nr][nc]);
    }
    return ids;
  };

  for (let r = 0; r < rows; r++) {
    for (let c = 0; c < cols; c++) {
      if (grid[r][c] === 0) {
        const seen = new Set(neighborIds(r, c));
        let total = 1;
        const contributors: string[] = [];
        for (let dr = -1; dr <= 1; dr++) for (let dc = -1; dc <= 1; dc++) {
          if (Math.abs(dr) + Math.abs(dc) !== 1) continue;
          const nr = r + dr;
          const nc = c + dc;
          if (nr >= 0 && nc >= 0 && nr < rows && nc < cols && seen.has(grid[nr][nc])) contributors.push(`${nr},${nc}`);
        }
        for (const k of seen) total += size.get(k)!;
        best = Math.max(best, total);
        push(9, `Flip (${r}, ${c}): merges islands {${[...seen].join(", ") || "none"}} → size ${total} (best ${best}).`, { phase: "flip", cur: [r, c], contributors, candidate: total, best });
      }
    }
  }

  push(11, `Largest island achievable by flipping one 0: ${best}.`, { phase: "done", best, answer: best });
  return steps;
}
