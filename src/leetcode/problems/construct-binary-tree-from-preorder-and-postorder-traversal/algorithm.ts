import type { Step } from "@/core/types";

export interface PrePostData {
  pre: number[];
  post: number[];
  heap: (number | null)[];
  /** preorder index of the current root */
  rootPre: number | null;
  /** postorder index locating the left-subtree root */
  splitPost: number | null;
  answer: (number | null)[] | null;
}

export type PrePostStep = Step<PrePostData>;

/**
 * In preorder the root comes first and its left child second; that left child appears last in the left
 * subtree's postorder block, which reveals the left/right split. Recursing on the two halves rebuilds a
 * valid tree into a heap array (children of i at 2i+1 / 2i+2). `line` indexes CODE.
 */
export function prePostSteps(pre: number[], post: number[]): PrePostStep[] {
  const steps: PrePostStep[] = [];
  const pos = new Map(post.map((v, i) => [v, i]));
  const heap: (number | null)[] = [];
  const setHeap = (idx: number, v: number) => {
    while (heap.length <= idx) heap.push(null);
    heap[idx] = v;
  };

  const snap = (o: Partial<PrePostData>): PrePostData => ({ pre, post, heap: [...heap], rootPre: null, splitPost: null, answer: null, ...o });
  const push = (line: number, explanation: string, o: Partial<PrePostData> = {}) => {
    steps.push({ id: steps.length, line, explanation, data: snap(o), highlights: [] });
  };

  push(1, "Preorder gives the root; its second value (the left child) locates the split in postorder.");

  function build(preL: number, preR: number, postL: number, heapIdx: number): void {
    setHeap(heapIdx, pre[preL]);
    if (preL === preR) {
      push(4, `Leaf ${pre[preL]}.`, { rootPre: preL });
      return;
    }
    const leftRoot = pre[preL + 1];
    const idx = pos.get(leftRoot)!;
    const leftSize = idx - postL + 1;
    push(7, `Root ${pre[preL]}; left child ${leftRoot} ends the left block at post[${idx}] (${leftSize} node(s)).`, { rootPre: preL, splitPost: idx });
    build(preL + 1, preL + leftSize, postL, 2 * heapIdx + 1);
    build(preL + leftSize + 1, preR, idx + 1, 2 * heapIdx + 2);
  }

  build(0, pre.length - 1, 0, 0);
  push(14, "Tree reconstructed.", { answer: [...heap] });
  return steps;
}
