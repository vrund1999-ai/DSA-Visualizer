import type { Step } from "@/core/types";

export type LinkedListOp =
  | { type: "addAtHead"; val: number }
  | { type: "addAtTail"; val: number }
  | { type: "addAtIndex"; index: number; val: number }
  | { type: "get"; index: number }
  | { type: "deleteAtIndex"; index: number };

export interface LinkedListData {
  ops: string[];
  opIndex: number;
  list: number[];
  /** node position touched this step */
  highlight: number | null;
  /** value returned by a get, if any */
  returned: number | null;
  answers: (number | null)[];
}

export type LinkedListStep = Step<LinkedListData>;

const label = (op: LinkedListOp): string =>
  op.type === "get"
    ? `get(${op.index})`
    : op.type === "deleteAtIndex"
      ? `deleteAtIndex(${op.index})`
      : op.type === "addAtIndex"
        ? `addAtIndex(${op.index}, ${op.val})`
        : `${op.type}(${op.val})`;

/**
 * A linked list backed by an ordered list of node values, supporting get / addAtHead / addAtTail /
 * addAtIndex / deleteAtIndex with the standard bounds rules. Each op emits a frame. `line` indexes CODE.
 */
export function linkedListSteps(ops: LinkedListOp[]): LinkedListStep[] {
  const steps: LinkedListStep[] = [];
  const list: number[] = [];
  const opLabels = ops.map(label);
  const answers: (number | null)[] = ops.map(() => null);

  const snap = (o: Partial<LinkedListData>): LinkedListData => ({
    ops: opLabels,
    opIndex: -1,
    list: [...list],
    highlight: null,
    returned: null,
    answers: [...answers],
    ...o,
  });
  const push = (line: number, explanation: string, o: Partial<LinkedListData> = {}) => {
    steps.push({ id: steps.length, line, explanation, data: snap(o), highlights: [] });
  };

  push(0, `Empty list; run ${ops.length} operation(s).`);

  for (let k = 0; k < ops.length; k++) {
    const op = ops[k];
    if (op.type === "addAtHead") {
      list.unshift(op.val);
      push(6, `addAtHead(${op.val}) → prepend.`, { opIndex: k, highlight: 0 });
    } else if (op.type === "addAtTail") {
      list.push(op.val);
      push(7, `addAtTail(${op.val}) → append.`, { opIndex: k, highlight: list.length - 1 });
    } else if (op.type === "addAtIndex") {
      if (op.index <= list.length) {
        const at = Math.max(0, op.index);
        list.splice(at, 0, op.val);
        push(10, `addAtIndex(${op.index}, ${op.val}) → insert at position ${at}.`, { opIndex: k, highlight: at });
      } else {
        push(9, `addAtIndex(${op.index}, ${op.val}) → index > length, skip.`, { opIndex: k });
      }
    } else if (op.type === "deleteAtIndex") {
      if (op.index >= 0 && op.index < list.length) {
        list.splice(op.index, 1);
        push(14, `deleteAtIndex(${op.index}) → remove node.`, { opIndex: k, highlight: op.index < list.length ? op.index : null });
      } else {
        push(13, `deleteAtIndex(${op.index}) → out of range, skip.`, { opIndex: k });
      }
    } else {
      const val = op.index >= 0 && op.index < list.length ? list[op.index] : -1;
      answers[k] = val;
      push(4, `get(${op.index}) → ${val}.`, { opIndex: k, highlight: val === -1 ? null : op.index, returned: val });
    }
  }

  return steps;
}
