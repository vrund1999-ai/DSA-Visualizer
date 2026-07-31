import type { Step } from "@/core/types";

export interface NaryNode {
  val: number;
  children: number[];
}

export interface FindRootData {
  nodes: NaryNode[];
  active: number | null;
  xorSum: number;
  answer: number | null;
}

export type FindRootStep = Step<FindRootData>;

/**
 * Find Root of N-Ary Tree: XOR together every node value and every child value. Each non-root value appears
 * exactly twice (once as a node, once as some parent's child) and cancels; the root appears only once, so
 * the surviving XOR is the root's value. `line` indexes CODE.
 */
export function findRootSteps(nodes: NaryNode[]): FindRootStep[] {
  const steps: FindRootStep[] = [];
  let xorSum = 0;

  const snap = (o: Partial<FindRootData>): FindRootData => ({ nodes, active: null, xorSum, answer: null, ...o });
  const push = (line: number, explanation: string, o: Partial<FindRootData> = {}) => {
    steps.push({ id: steps.length, line, explanation, data: snap(o), highlights: [] });
  };

  push(1, `XOR every node value and every child value; the root survives.`);

  for (let i = 0; i < nodes.length; i++) {
    xorSum ^= nodes[i].val;
    for (const c of nodes[i].children) xorSum ^= c;
    push(7, `XOR node ${nodes[i].val}${nodes[i].children.length ? ` and children ${nodes[i].children.join(", ")}` : ""} → running XOR ${xorSum}.`, { active: i });
  }

  push(10, `Root value = ${xorSum}.`, { answer: xorSum });
  return steps;
}
