import type { Step } from "@/core/types";

export interface RemoveElementsData {
  values: number[];
  val: number;
  /** index of prev.next (the node under inspection), null when done */
  inspecting: number | null;
  /** index just unlinked (shown struck through for one step) */
  removed: number | null;
  /** indices confirmed kept */
  kept: number[];
  done: boolean;
}

export type RemoveElementsStep = Step<RemoveElementsData>;

/**
 * A dummy head lets us delete the real head uniformly: walk with prev, and whenever
 * prev.next holds the target value, splice it out; otherwise advance prev. `line`
 * indexes CODE.
 */
export function removeElementsSteps(values: number[], val: number): RemoveElementsStep[] {
  const steps: RemoveElementsStep[] = [];
  // model the list as a live array of {id, v}
  const list = values.map((v, i) => ({ id: i, v }));
  const kept: number[] = [];

  const snap = (o: Partial<RemoveElementsData>): RemoveElementsData => ({ values: list.map((n) => n.v), val, inspecting: null, removed: null, kept: [...kept], done: false, ...o });
  const push = (line: number, explanation: string, data: RemoveElementsData) => {
    steps.push({ id: steps.length, line, explanation, data, highlights: [] });
  };

  push(2, `Remove every node equal to ${val} using a dummy head.`, snap({}));

  let idx = 0; // index into current list of the node prev.next points to
  while (idx < list.length) {
    const node = list[idx];
    if (node.v === val) {
      push(4, `Node ${node.v} == ${val} — unlink it.`, snap({ inspecting: idx, removed: idx }));
      list.splice(idx, 1);
    } else {
      kept.push(node.id);
      push(7, `Node ${node.v} ≠ ${val} — keep and advance.`, snap({ inspecting: idx }));
      idx++;
    }
  }

  push(10, `Result: [${list.map((n) => n.v).join(", ")}].`, snap({ done: true }));
  return steps;
}
