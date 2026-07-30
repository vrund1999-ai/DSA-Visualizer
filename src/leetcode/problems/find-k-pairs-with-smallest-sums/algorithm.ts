import type { Step } from "@/core/types";

export interface KPairsData {
  nums1: number[];
  nums2: number[];
  k: number;
  /** frontier cells currently in the heap: "i,j" */
  frontier: string[];
  /** cell just popped */
  popped: [number, number] | null;
  /** result pairs as [i,j] index cells */
  result: [number, number][];
  answer: number[][] | null;
}

export type KPairsStep = Step<KPairsData>;

/** Min-heap keyed on the first tuple element (sum). */
class MinHeap {
  private a: [number, number, number][] = [];
  size() {
    return this.a.length;
  }
  push(v: [number, number, number]) {
    const a = this.a;
    a.push(v);
    let i = a.length - 1;
    while (i > 0) {
      const p = (i - 1) >> 1;
      if (a[p][0] <= a[i][0]) break;
      [a[p], a[i]] = [a[i], a[p]];
      i = p;
    }
  }
  pop(): [number, number, number] {
    const a = this.a;
    const top = a[0];
    const last = a.pop()!;
    if (a.length) {
      a[0] = last;
      let i = 0;
      for (;;) {
        const l = 2 * i + 1;
        const r = 2 * i + 2;
        let s = i;
        if (l < a.length && a[l][0] < a[s][0]) s = l;
        if (r < a.length && a[r][0] < a[s][0]) s = r;
        if (s === i) break;
        [a[s], a[i]] = [a[i], a[s]];
        i = s;
      }
    }
    return top;
  }
  keys() {
    return this.a.map(([, i, j]) => `${i},${j}`);
  }
}

/**
 * Both arrays are sorted, so the smallest pair sum is (0,0), and after taking cell (i,j) the only new
 * candidates are its right and down neighbors. A min-heap over these frontier cells yields the pairs in
 * increasing sum order, exactly k times. `line` indexes CODE.
 */
export function kPairsSteps(nums1: number[], nums2: number[], k: number): KPairsStep[] {
  const steps: KPairsStep[] = [];
  const heap = new MinHeap();
  const result: [number, number][] = [];
  const seen = new Set<string>();

  const snap = (o: Partial<KPairsData>): KPairsData => ({ nums1, nums2, k, frontier: heap.keys(), popped: null, result: result.map((p) => [...p] as [number, number]), answer: null, ...o });
  const push = (line: number, explanation: string, o: Partial<KPairsData> = {}) => {
    steps.push({ id: steps.length, line, explanation, data: snap(o), highlights: [] });
  };

  if (nums1.length === 0 || nums2.length === 0) {
    push(16, "One array is empty — no pairs.", { answer: [] });
    return steps;
  }

  heap.push([nums1[0] + nums2[0], 0, 0]);
  seen.add("0,0");
  push(2, "Seed the heap with the smallest possible pair (0,0).");

  while (result.length < k && heap.size()) {
    const [, i, j] = heap.pop();
    result.push([i, j]);
    push(6, `Take pair (${nums1[i]}, ${nums2[j]}) sum ${nums1[i] + nums2[j]}.`, { popped: [i, j] });
    for (const [di, dj] of [
      [1, 0],
      [0, 1],
    ]) {
      const ni = i + di;
      const nj = j + dj;
      const key = `${ni},${nj}`;
      if (ni < nums1.length && nj < nums2.length && !seen.has(key)) {
        seen.add(key);
        heap.push([nums1[ni] + nums2[nj], ni, nj]);
      }
    }
  }

  const answer = result.map(([i, j]) => [nums1[i], nums2[j]]);
  push(16, `The ${answer.length} smallest-sum pair(s) found.`, { answer });
  return steps;
}
