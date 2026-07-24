import type { Step } from "@/core/types";

export interface CopyNodeView {
  val: number;
  /** index of this node's random target, or null */
  random: number | null;
}

export interface CopyListData {
  original: CopyNodeView[];
  /** indices that have been cloned so far */
  cloned: number[];
  /** indices whose copy has next+random wired */
  wired: number[];
  cur: number | null;
  phase: "clone" | "wire" | "done";
}

export type CopyListStep = Step<CopyListData>;

/**
 * Deep-copy a linked list whose nodes also carry an arbitrary `random` pointer.
 * Pass 1 clones every node's value into a map; pass 2 uses that map to translate
 * each original next/random into the corresponding copy. `line` indexes CODE.
 */
export function copyListSteps(nodes: CopyNodeView[]): CopyListStep[] {
  const steps: CopyListStep[] = [];
  const cloned: number[] = [];
  const wired: number[] = [];

  const snap = (o: Partial<CopyListData>): CopyListData => ({ original: nodes.map((n) => ({ ...n })), cloned: [...cloned], wired: [...wired], cur: null, phase: "clone", ...o });
  const push = (line: number, explanation: string, data: CopyListData) => {
    steps.push({ id: steps.length, line, explanation, data, highlights: [] });
  };

  push(1, "Map each original node to a fresh copy so pointers can be translated.", snap({}));

  for (let i = 0; i < nodes.length; i++) {
    cloned.push(i);
    push(4, `Pass 1 — clone value ${nodes[i].val}.`, snap({ cur: i, phase: "clone" }));
  }

  for (let i = 0; i < nodes.length; i++) {
    wired.push(i);
    const r = nodes[i].random;
    const nextTxt = i + 1 < nodes.length ? `copy of ${nodes[i + 1].val}` : "null";
    const randTxt = r !== null ? `copy of ${nodes[r].val}` : "null";
    push(10, `Pass 2 — copy ${nodes[i].val}: next → ${nextTxt}, random → ${randTxt}.`, snap({ cur: i, phase: "wire" }));
  }

  push(13, "Deep copy complete — no copy points back at an original.", snap({ phase: "done" }));
  return steps;
}
