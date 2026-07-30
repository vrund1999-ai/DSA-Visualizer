import type { Step } from "@/core/types";

export interface RobotData {
  instructions: string;
  i: number | null;
  x: number;
  y: number;
  d: number;
  /** visited positions in order */
  trail: [number, number][];
  answer: boolean | null;
}

export type RobotStep = Step<RobotData>;

const DIRS = [
  [0, 1],
  [1, 0],
  [0, -1],
  [-1, 0],
];

/**
 * After one pass of the instructions the robot is bounded iff it either returns to the origin or ends up
 * facing a direction other than north. In the latter case repeating the cycle rotates the whole path,
 * confining it to a circle. `line` indexes CODE.
 */
export function robotSteps(instructions: string): RobotStep[] {
  const steps: RobotStep[] = [];
  let x = 0;
  let y = 0;
  let d = 0;
  const trail: [number, number][] = [[0, 0]];

  const snap = (o: Partial<RobotData>): RobotData => ({ instructions, i: null, x, y, d, trail: trail.map((p) => [...p] as [number, number]), answer: null, ...o });
  const push = (line: number, explanation: string, o: Partial<RobotData> = {}) => {
    steps.push({ id: steps.length, line, explanation, data: snap(o), highlights: [] });
  };

  const NAMES = ["north", "east", "south", "west"];
  push(2, "Simulate one pass of the instructions from the origin facing north.");

  for (let i = 0; i < instructions.length; i++) {
    const ch = instructions[i];
    if (ch === "G") {
      x += DIRS[d][0];
      y += DIRS[d][1];
      trail.push([x, y]);
      push(5, `G: move ${NAMES[d]} to (${x}, ${y}).`, { i });
    } else if (ch === "L") {
      d = (d + 3) % 4;
      push(7, `L: turn left, now facing ${NAMES[d]}.`, { i });
    } else {
      d = (d + 1) % 4;
      push(9, `R: turn right, now facing ${NAMES[d]}.`, { i });
    }
  }

  const answer = (x === 0 && y === 0) || d !== 0;
  push(13, answer ? `Bounded: ${x === 0 && y === 0 ? "returned to origin" : `not facing north (${NAMES[d]})`}.` : "Escapes: ends at a new spot still facing north.", { answer });
  return steps;
}
