import type { Step } from "@/core/types";

export interface ReorderData {
  values: number[];
  phase: "split" | "reverse" | "weave" | "done";
  front: number[];
  back: number[];
  result: number[];
}

export type ReorderStep = Step<ReorderData>;

/**
 * Reorder L0→L1→…→Ln into L0→Ln→L1→Ln-1→…: split the list in half, reverse the
 * second half, then weave the two halves together alternately. `line` indexes
 * CODE.
 */
export function reorderSteps(values: number[]): ReorderStep[] {
  const steps: ReorderStep[] = [];
  const n = values.length;
  const mid = Math.ceil(n / 2);
  const front = values.slice(0, mid);
  const back = values.slice(mid).reverse();

  const push = (line: number, explanation: string, phase: ReorderData["phase"], result: number[]) => {
    steps.push({ id: steps.length, line, explanation, data: { values: [...values], phase, front: [...front], back: [...back], result: [...result] }, highlights: [] });
  };

  push(1, "Reorder to L0 → Ln → L1 → Ln-1 → … in three moves.", "split", []);
  push(5, `Split into front [${front.join(", ")}] and reverse the back half → [${back.join(", ")}].`, "reverse", []);

  const result: number[] = [];
  let i = 0;
  let j = 0;
  let takeFront = true;
  while (i < front.length || j < back.length) {
    if (takeFront && i < front.length) {
      result.push(front[i++]);
    } else if (!takeFront && j < back.length) {
      result.push(back[j++]);
    }
    takeFront = !takeFront;
    push(9, `Weave: current order [${result.join(", ")}].`, "weave", result);
  }

  push(12, `Reordered list: [${result.join(", ")}].`, "done", result);
  return steps;
}
