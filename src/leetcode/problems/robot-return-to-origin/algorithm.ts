import type { Step } from "@/core/types";

export interface RobotData {
  moves: string;
  idx: number | null;
  x: number;
  y: number;
  /** path of positions visited (including start) */
  path: [number, number][];
  answer: boolean | null;
}

export type RobotStep = Step<RobotData>;

/**
 * Track the robot's position as a running (x, y). Each move nudges one coordinate; the robot returns
 * to the origin exactly when the ups cancel the downs and the lefts cancel the rights. `line` indexes CODE.
 */
export function robotSteps(moves: string): RobotStep[] {
  const steps: RobotStep[] = [];
  let x = 0;
  let y = 0;
  const path: [number, number][] = [[0, 0]];

  const snap = (o: Partial<RobotData>): RobotData => ({ moves, idx: null, x, y, path: [...path], answer: null, ...o });
  const push = (line: number, explanation: string, o: Partial<RobotData> = {}) => {
    steps.push({ id: steps.length, line, explanation, data: snap(o), highlights: [] });
  };

  push(1, "Start at the origin; each move shifts x or y.");

  for (let i = 0; i < moves.length; i++) {
    const m = moves[i];
    if (m === "U") y++;
    else if (m === "D") y--;
    else if (m === "R") x++;
    else x--;
    path.push([x, y]);
    push(m === "U" ? 3 : m === "D" ? 4 : m === "R" ? 5 : 6, `'${m}' → position (${x}, ${y}).`, { idx: i });
  }

  const answer = x === 0 && y === 0;
  push(8, `Ends at (${x}, ${y}) → ${answer ? "back at origin" : "not at origin"}.`, { answer });
  return steps;
}
