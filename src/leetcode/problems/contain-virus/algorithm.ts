import type { Step } from "@/core/types";

export interface ContainVirusData {
  /** grid values: 0 uninfected, 1 infected, 2 sealed/quarantined */
  grid: number[][];
  /** cells of the region being sealed this step */
  sealing: [number, number][];
  /** cells newly infected by spread this step */
  spread: [number, number][];
  walls: number;
  answer: number | null;
}

export type ContainVirusStep = Step<ContainVirusData>;

const MAX_STEPS = 300;

interface Region {
  cells: [number, number][];
  threat: Set<string>;
  wallCount: number;
}

/**
 * Contain Virus: each night the viral region threatening the most uninfected cells is walled off (its
 * perimeter with uninfected neighbours is added to the wall total and its cells are sealed), then every
 * other region spreads one cell. Repeat until nothing threatens an uninfected cell. `line` indexes CODE.
 */
export function containVirusSteps(initial: number[][]): ContainVirusStep[] {
  const steps: ContainVirusStep[] = [];
  const grid = initial.map((row) => [...row]);
  const rows = grid.length;
  const cols = grid[0].length;
  let walls = 0;

  const clone = () => grid.map((r) => [...r]);
  const snap = (o: Partial<ContainVirusData>): ContainVirusData => ({
    grid: clone(),
    sealing: [],
    spread: [],
    walls,
    answer: null,
    ...o,
  });
  const push = (line: number, explanation: string, o: Partial<ContainVirusData> = {}) => {
    if (steps.length < MAX_STEPS) steps.push({ id: steps.length, line, explanation, data: snap(o), highlights: [] });
  };

  const findRegions = (): Region[] => {
    const seen = Array.from({ length: rows }, () => Array<boolean>(cols).fill(false));
    const regions: Region[] = [];
    for (let r = 0; r < rows; r++) {
      for (let c = 0; c < cols; c++) {
        if (grid[r][c] === 1 && !seen[r][c]) {
          const cells: [number, number][] = [];
          const threat = new Set<string>();
          let wallCount = 0;
          const stack: [number, number][] = [[r, c]];
          seen[r][c] = true;
          while (stack.length) {
            const [cr, cc] = stack.pop()!;
            cells.push([cr, cc]);
            for (const [dr, dc] of [[-1, 0], [1, 0], [0, -1], [0, 1]] as const) {
              const nr = cr + dr;
              const nc = cc + dc;
              if (nr < 0 || nr >= rows || nc < 0 || nc >= cols) continue;
              if (grid[nr][nc] === 0) {
                threat.add(`${nr},${nc}`);
                wallCount++;
              } else if (grid[nr][nc] === 1 && !seen[nr][nc]) {
                seen[nr][nc] = true;
                stack.push([nr, nc]);
              }
            }
          }
          regions.push({ cells, threat, wallCount });
        }
      }
    }
    return regions;
  };

  push(1, `Simulate the outbreak; count walls used to seal the worst region each night.`);

  while (true) {
    const regions = findRegions();
    if (regions.length === 0 || regions.every((r) => r.threat.size === 0)) break;

    regions.sort((a, b) => b.threat.size - a.threat.size);
    const worst = regions[0];
    walls += worst.wallCount;
    for (const [r, c] of worst.cells) grid[r][c] = 2;

    const spread: [number, number][] = [];
    for (const region of regions.slice(1)) {
      for (const key of region.threat) {
        const [r, c] = key.split(",").map(Number);
        if (grid[r][c] === 0) {
          grid[r][c] = 1;
          spread.push([r, c]);
        }
      }
    }

    push(11, `Seal the region threatening ${worst.threat.size} cell(s) with ${worst.wallCount} wall(s); others spread. Total walls = ${walls}.`, {
      sealing: worst.cells,
      spread,
    });
  }

  push(13, `No region threatens an uninfected cell — total walls used: ${walls}.`, { answer: walls });
  return steps;
}
