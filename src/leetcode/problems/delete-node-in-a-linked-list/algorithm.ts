import type { Step } from "@/core/types";

export interface DeleteNodeData {
  values: number[];
  /** index of the node handed to deleteNode */
  target: number;
  /** index whose value is being copied in (successor) */
  successor: number | null;
  /** index removed from the chain */
  removed: number | null;
  phase: "start" | "copy" | "unlink" | "done";
}

export type DeleteNodeStep = Step<DeleteNodeData>;

/**
 * The classic trick: without access to the head we can't unlink the target directly,
 * so we overwrite it with its successor's value and then unlink the successor — the
 * list ends up correct. `line` indexes CODE.
 */
export function deleteNodeSteps(values: number[], target: number): DeleteNodeStep[] {
  const steps: DeleteNodeStep[] = [];
  const arr = [...values];

  const snap = (o: Partial<DeleteNodeData>): DeleteNodeData => ({ values: [...arr], target, successor: null, removed: null, phase: "start", ...o });
  const push = (line: number, explanation: string, data: DeleteNodeData) => {
    steps.push({ id: steps.length, line, explanation, data, highlights: [] });
  };

  push(0, `Delete node ${arr[target]} given only a pointer to it.`, snap({ phase: "start" }));

  const succVal = arr[target + 1];
  arr[target] = succVal;
  push(3, `Copy successor's value ${succVal} into the target node.`, snap({ successor: target + 1, phase: "copy" }));

  arr.splice(target + 1, 1);
  push(4, `Unlink the (now duplicate) successor node.`, snap({ removed: target + 1, phase: "unlink" }));

  push(5, `List after deletion: [${arr.join(", ")}].`, snap({ phase: "done" }));
  return steps;
}
