import type { Step } from "@/core/types";

export interface MazeData {
  maze: number[][];
  start: number[];
  dest: number[];
  /** stop positions already reached */
  seen: string[];
  /** current ball position */
  cur: [number, number] | null;
  /** cells traversed while rolling this step */
  rolling: string[];
  answer: boolean | null;
}

export type MazeStep = Step<MazeData>;

const DIRS = [
  [-1, 0],
  [1, 0],
  [0, -1],
  [0, 1],
];

/**
 * The ball only stops against a wall, so the graph's nodes are stop-positions, not cells. BFS from the
 * start rolls in each direction until blocked; if a stop equals the destination the maze is solvable.
 * `line` indexes CODE.
 */
export function mazeSteps(maze: number[][], start: number[], dest: number[]): MazeStep[] {
  const steps: MazeStep[] = [];
  const R = maze.length;
  const C = maze[0].length;
  const seen = new Set<string>([start.join(",")]);
  const queue: [number, number][] = [[start[0], start[1]]];

  const snap = (o: Partial<MazeData>): MazeData => ({ maze, start, dest, seen: [...seen], cur: null, rolling: [], answer: null, ...o });
  const push = (line: number, explanation: string, o: Partial<MazeData> = {}) => {
    steps.push({ id: steps.length, line, explanation, data: snap(o), highlights: [] });
  };

  push(2, `BFS from [${start}] rolling until a wall; can the ball stop at [${dest}]?`);

  while (queue.length) {
    const [r, c] = queue.shift()!;
    if (r === dest[0] && c === dest[1]) {
      push(5, `Ball can stop at the destination [${dest}] → true.`, { cur: [r, c], answer: true });
      return steps;
    }
    push(4, `Roll from stop position [${r}, ${c}].`, { cur: [r, c] });
    for (const [dr, dc] of DIRS) {
      let nr = r;
      let nc = c;
      const rolling: string[] = [];
      while (nr + dr >= 0 && nr + dr < R && nc + dc >= 0 && nc + dc < C && maze[nr + dr][nc + dc] === 0) {
        nr += dr;
        nc += dc;
        rolling.push(`${nr},${nc}`);
      }
      const key = `${nr},${nc}`;
      if (!seen.has(key)) {
        seen.add(key);
        queue.push([nr, nc]);
        push(12, `Rolled to a new stop [${nr}, ${nc}].`, { cur: [r, c], rolling });
      }
    }
  }

  push(16, "No rolling path stops at the destination → false.", { answer: false });
  return steps;
}
