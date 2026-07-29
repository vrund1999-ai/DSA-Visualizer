import type { Step } from "@/core/types";

export interface LockData {
  deadends: string[];
  target: string;
  /** BFS frontier states this level (capped for display) */
  frontier: string[];
  frontierSize: number;
  /** whether the target appeared in this frontier */
  reached: boolean;
  moves: number;
  answer: number | null;
}

export type LockStep = Step<LockData>;

const neighbors = (s: string): string[] => {
  const out: string[] = [];
  for (let i = 0; i < 4; i++) {
    const d = Number(s[i]);
    for (const nd of [(d + 1) % 10, (d + 9) % 10]) out.push(s.slice(0, i) + nd + s.slice(i + 1));
  }
  return out;
};

/**
 * Each single-wheel turn is one move, so the fewest turns to reach the target is a breadth-first search
 * over the 10⁴ lock states, skipping deadends and visited states. BFS explores level by level, so the
 * first level containing the target gives the answer. `line` indexes CODE.
 */
export function lockSteps(deadends: string[], target: string): LockStep[] {
  const steps: LockStep[] = [];
  const dead = new Set(deadends);

  const snap = (o: Partial<LockData>): LockData => ({ deadends, target, frontier: [], frontierSize: 0, reached: false, moves: 0, answer: null, ...o });
  const push = (line: number, explanation: string, o: Partial<LockData> = {}) => {
    steps.push({ id: steps.length, line, explanation, data: snap(o), highlights: [] });
  };

  if (dead.has("0000")) {
    push(2, "Start '0000' is a deadend → impossible (-1).", { answer: -1 });
    return steps;
  }

  const seen = new Set(["0000"]);
  let queue = ["0000"];
  let moves = 0;
  push(4, `BFS from '0000' toward '${target}', avoiding deadends.`, { frontier: ["0000"], frontierSize: 1, moves });

  while (queue.length) {
    if (queue.includes(target)) {
      push(8, `Target '${target}' reached in ${moves} move(s).`, { frontier: queue.slice(0, 8), frontierSize: queue.length, reached: true, moves, answer: moves });
      return steps;
    }
    const next: string[] = [];
    for (const state of queue) {
      for (const nb of neighbors(state)) {
        if (!dead.has(nb) && !seen.has(nb)) { seen.add(nb); next.push(nb); }
      }
    }
    queue = next;
    moves++;
    if (queue.length) push(14, `After ${moves} move(s): ${queue.length} new state(s) reachable.`, { frontier: queue.slice(0, 8), frontierSize: queue.length, moves });
  }

  push(16, `Target '${target}' unreachable → -1.`, { answer: -1 });
  return steps;
}
