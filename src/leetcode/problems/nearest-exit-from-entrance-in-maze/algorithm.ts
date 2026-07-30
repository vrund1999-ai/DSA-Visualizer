import type { Step } from "@/core/types";

export interface MazeExitData {
  maze: string[][];
  entrance: number[];
  visited: string[];
  frontier: string[];
  steps: number;
  exit: [number, number] | null;
  answer: number | null;
}

export type MazeExitStep = Step<MazeExitData>;

const DIRS = [
  [-1, 0],
  [1, 0],
  [0, -1],
  [0, 1],
];

/**
 * The nearest exit is the closest border empty cell reachable from the entrance, so BFS expands outward
 * one ring at a time; the first border cell it lands on (other than the entrance) is the answer. `line`
 * indexes CODE.
 */
export function mazeExitSteps(input: string[][], entrance: number[]): MazeExitStep[] {
  const steps: MazeExitStep[] = [];
  const maze = input.map((r) => [...r]);
  const R = maze.length;
  const C = maze[0].length;
  const visited = new Set<string>();
  const [er, ec] = entrance;
  visited.add(`${er},${ec}`);

  const isBorder = (r: number, c: number) => r === 0 || c === 0 || r === R - 1 || c === C - 1;

  const snap = (o: Partial<MazeExitData>): MazeExitData => ({ maze, entrance, visited: [...visited], frontier: [], steps: 0, exit: null, answer: null, ...o });
  const push = (line: number, explanation: string, o: Partial<MazeExitData> = {}) => {
    steps.push({ id: steps.length, line, explanation, data: snap(o), highlights: [] });
  };

  push(3, `BFS from entrance [${entrance}] to the nearest border exit.`);

  let frontier: [number, number][] = [[er, ec]];
  let stepCount = 0;
  while (frontier.length) {
    stepCount++;
    const next: [number, number][] = [];
    for (const [r, c] of frontier) {
      for (const [dr, dc] of DIRS) {
        const nr = r + dr;
        const nc = c + dc;
        if (nr < 0 || nc < 0 || nr >= R || nc >= C || maze[nr][nc] !== "." || visited.has(`${nr},${nc}`)) continue;
        if (isBorder(nr, nc)) {
          push(11, `Reached border cell (${nr},${nc}) after ${stepCount} step(s) → exit found.`, { frontier: [`${nr},${nc}`], steps: stepCount, exit: [nr, nc], answer: stepCount });
          return steps;
        }
        visited.add(`${nr},${nc}`);
        next.push([nr, nc]);
      }
    }
    frontier = next;
    if (next.length) push(15, `Ring ${stepCount}: reached ${next.length} interior cell(s).`, { frontier: next.map(([r, c]) => `${r},${c}`), steps: stepCount });
  }

  push(17, "No reachable exit → -1.", { answer: -1 });
  return steps;
}
