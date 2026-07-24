import type { Step } from "@/core/types";

export interface DedupListData {
  /** live list of {id, v} */
  nodes: { id: number; v: number }[];
  /** ids being inspected as a duplicate run */
  inspecting: number[];
  /** ids kept so far */
  kept: number[];
  done: boolean;
}

export type DedupListStep = Step<DedupListData>;

/**
 * Since the list is sorted, equal values are adjacent. When a run of length > 1 is
 * found, every node in it is dropped; otherwise the single node is kept. `line`
 * indexes CODE.
 */
export function dedupListSteps(values: number[]): DedupListStep[] {
  const steps: DedupListStep[] = [];
  const list = values.map((v, i) => ({ id: i, v }));
  const kept: number[] = [];

  const snap = (o: Partial<DedupListData>): DedupListData => ({ nodes: list.map((n) => ({ ...n })), inspecting: [], kept: [...kept], done: false, ...o });
  const push = (line: number, explanation: string, data: DedupListData) => {
    steps.push({ id: steps.length, line, explanation, data, highlights: [] });
  };

  push(2, "Sorted list — drop every value that appears more than once.", snap({}));

  let idx = 0;
  while (idx < list.length) {
    const v = list[idx].v;
    let end = idx;
    while (end + 1 < list.length && list[end + 1].v === v) end++;
    const runIds = list.slice(idx, end + 1).map((n) => n.id);
    if (end > idx) {
      push(6, `Value ${v} repeats ${runIds.length}× — remove the whole run.`, snap({ inspecting: runIds }));
      list.splice(idx, end - idx + 1);
    } else {
      kept.push(list[idx].id);
      push(9, `Value ${v} is unique — keep it.`, snap({ inspecting: [list[idx].id] }));
      idx++;
    }
  }

  push(12, `Result: [${list.map((n) => n.v).join(", ")}].`, snap({ done: true }));
  return steps;
}
