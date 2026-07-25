import type { Step } from "@/core/types";

/** Nested input: each entry is a value, optionally with a child sublist. */
export interface RawNode {
  val: number;
  child?: RawNode[];
}

interface LNode {
  id: number;
  val: number;
  next: LNode | null;
  child: LNode | null;
  /** original depth, kept only for coloring the visualization */
  depth: number;
}

export interface ChainCell {
  id: number;
  val: number;
  depth: number;
  role: string;
  label: string;
}

export interface FlattenData {
  chain: ChainCell[];
  /** ids that still have an un-spliced child (for the "child" badge) */
  answer: number[] | null;
}

export type FlattenStep = Step<FlattenData>;

let counter = 0;
function build(list: RawNode[], depth: number): LNode | null {
  let head: LNode | null = null;
  let prev: LNode | null = null;
  for (const item of list) {
    const node: LNode = { id: counter++, val: item.val, next: null, child: item.child ? build(item.child, depth + 1) : null, depth };
    if (prev) prev.next = node;
    else head = node;
    prev = node;
  }
  return head;
}

/**
 * The list has next pointers plus occasional child pointers to sub-lists. We walk with `cur`;
 * whenever a node has a child we splice the whole child list between the node and its next,
 * clearing the child pointer, so a later visit finds those nodes already in the main line —
 * a depth-first flatten in one pass. `line` indexes CODE.
 */
export function flattenSteps(input: RawNode[]): FlattenStep[] {
  counter = 0;
  const head = build(input, 0);
  const steps: FlattenStep[] = [];

  const chainFrom = (cur: LNode | null, hi: Set<number>, spliced: Set<number>): ChainCell[] => {
    const cells: ChainCell[] = [];
    let n = head;
    while (n) {
      const role = n === cur ? "current" : spliced.has(n.id) ? "sorted" : hi.has(n.id) ? "compared" : "default";
      const label = n === cur ? "cur" : "";
      cells.push({ id: n.id, val: n.val, depth: n.depth, role, label });
      n = n.next;
    }
    return cells;
  };

  const push = (line: number, explanation: string, cur: LNode | null, hi: Set<number>, spliced: Set<number>, answer: number[] | null = null) => {
    steps.push({ id: steps.length, line, explanation, data: { chain: chainFrom(cur, hi, spliced), answer }, highlights: [] });
  };

  const splicedIds = new Set<number>();
  let cur = head;
  push(1, "Walk with cur; splice any child list into the main chain when found.", cur, new Set(), splicedIds);

  while (cur) {
    if (cur.child) {
      const next = cur.next;
      const child = cur.child;
      cur.next = child;
      cur.child = null;
      let tail = child;
      while (tail.next) tail = tail.next;
      tail.next = next;
      // mark the whole spliced child segment
      let m: LNode | null = child;
      const seg = new Set<number>();
      while (m && m !== next) { splicedIds.add(m.id); seg.add(m.id); m = m.next; }
      push(10, `Node ${cur.val} has a child — splice that sub-list in after it.`, cur, seg, splicedIds);
    } else {
      push(13, `Node ${cur.val} has no child; advance cur.`, cur, new Set(), splicedIds);
    }
    cur = cur.next;
  }

  const finalOrder: number[] = [];
  let n = head;
  while (n) { finalOrder.push(n.val); n = n.next; }
  push(15, `Flattened order: ${finalOrder.join(" → ")}.`, null, new Set(), splicedIds, finalOrder);
  return steps;
}
