import type { Step } from "@/core/types";

export interface MoveBallsData {
  boxes: string;
  ans: number[];
  i: number | null;
  dir: "right" | "left" | null;
  count: number;
  ops: number;
  answer: number[] | null;
}

export type MoveBallsStep = Step<MoveBallsData>;

/**
 * The cost for each box is the summed distance to every ball. Sweeping left-to-right accumulates the
 * pull from all balls already passed (each extra step moves every seen ball one more), and a mirror
 * sweep adds the pull from the right. Two linear passes replace the O(n²) pairwise sum. `line` indexes CODE.
 */
export function moveBallsSteps(boxes: string): MoveBallsStep[] {
  const steps: MoveBallsStep[] = [];
  const n = boxes.length;
  const ans = new Array(n).fill(0);
  let count = 0;
  let ops = 0;

  const snap = (o: Partial<MoveBallsData>): MoveBallsData => ({ boxes, ans: [...ans], i: null, dir: null, count, ops, answer: null, ...o });
  const push = (line: number, explanation: string, o: Partial<MoveBallsData> = {}) => {
    steps.push({ id: steps.length, line, explanation, data: snap(o), highlights: [] });
  };

  push(1, "Two directional sweeps accumulate the pull from balls on each side.");

  for (let i = 0; i < n; i++) {
    ans[i] += ops;
    count += boxes[i] === "1" ? 1 : 0;
    ops += count;
    push(6, `Box ${i}: +${ops - count} from the left (${count} ball(s) seen).`, { i, dir: "right" });
  }

  count = 0;
  ops = 0;
  push(8, "Reset and sweep right-to-left.");
  for (let i = n - 1; i >= 0; i--) {
    ans[i] += ops;
    count += boxes[i] === "1" ? 1 : 0;
    ops += count;
    push(10, `Box ${i}: add ${ops - count} from the right → total ${ans[i]}.`, { i, dir: "left" });
  }

  push(14, `Operations per box: [${ans.join(", ")}].`, { answer: [...ans] });
  return steps;
}
