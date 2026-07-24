import type { Step } from "@/core/types";

export interface CircularGameData {
  circle: number[];
  /** index into `circle` where counting starts this round */
  start: number | null;
  /** index into `circle` being eliminated */
  out: number | null;
  k: number;
}

export type CircularGameStep = Step<CircularGameData>;

/**
 * Josephus problem by direct simulation: keep the live players in an array, count
 * k positions (wrapping) from the current start, remove that player, and resume
 * counting from the vacated slot. `line` indexes CODE.
 */
export function circularGameSteps(n: number, k: number): CircularGameStep[] {
  const steps: CircularGameStep[] = [];
  const circle: number[] = [];
  for (let i = 1; i <= n; i++) circle.push(i);
  let start = 0;

  const snap = (o: Partial<CircularGameData>): CircularGameData => ({ circle: [...circle], start: null, out: null, k, ...o });
  const push = (line: number, explanation: string, data: CircularGameData) => {
    steps.push({ id: steps.length, line, explanation, data, highlights: [] });
  };

  push(2, `${n} players in a circle; every ${k}th player is eliminated.`, snap({}));

  while (circle.length > 1) {
    const out = (start + k - 1) % circle.length;
    push(6, `Count ${k} from player ${circle[start]} → player ${circle[out]} is out.`, snap({ start, out }));
    circle.splice(out, 1);
    start = out % circle.length;
    push(8, `Eliminated. ${circle.length} player(s) remain.`, snap({ start }));
  }

  push(10, `Winner: player ${circle[0]}.`, snap({ start: 0 }));
  return steps;
}
