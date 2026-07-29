import type { Step } from "@/core/types";

export interface DeleteMiddleData {
  list: number[];
  slow: number | null;
  fast: number | null;
  /** index removed once found */
  removed: number | null;
  answer: number[] | null;
}

export type DeleteMiddleStep = Step<DeleteMiddleData>;

/**
 * A fast pointer moving two steps for every one of the slow pointer reaches the end just as the slow
 * pointer reaches the middle. Tracking the node before slow lets us unlink the middle in a single pass.
 * `line` indexes CODE.
 */
export function deleteMiddleSteps(input: number[]): DeleteMiddleStep[] {
  const steps: DeleteMiddleStep[] = [];
  const list = [...input];

  const snap = (o: Partial<DeleteMiddleData>): DeleteMiddleData => ({ list: [...list], slow: null, fast: null, removed: null, answer: null, ...o });
  const push = (line: number, explanation: string, o: Partial<DeleteMiddleData> = {}) => {
    steps.push({ id: steps.length, line, explanation, data: snap(o), highlights: [] });
  };

  if (list.length === 1) {
    push(1, "Single node → deleting the middle empties the list.", { answer: [] });
    return steps;
  }

  push(2, "Slow moves 1 step, fast moves 2 — slow lands on the middle.");

  let slow = 0;
  let fast = 0;
  while (fast < list.length && fast + 1 < list.length) {
    slow = slow + 1;
    fast = fast + 2;
    push(6, `slow → ${slow} (${list[slow]}), fast → ${fast <= list.length - 1 ? `${fast} (${list[fast]})` : "past end"}.`, { slow, fast: fast <= list.length - 1 ? fast : null });
  }

  push(8, `Middle is index ${slow} (value ${list[slow]}) → unlink it.`, { slow, removed: slow });
  list.splice(slow, 1);
  push(9, `Result: ${list.join(" → ")}.`, { answer: [...list] });
  return steps;
}
