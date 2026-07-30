import type { Step } from "@/core/types";

export interface HireData {
  costs: number[];
  /** unfilled middle region is [lo, hi]; left pool is [0,lo), right pool is (hi, n) minus hired */
  lo: number;
  hi: number;
  leftPool: number[];
  rightPool: number[];
  hired: number[];
  justHired: number | null;
  total: number;
  answer: number | null;
}

export type HireStep = Step<HireData>;

/** Min-heap of [cost, index] keyed on cost then index. */
class MinHeap {
  private a: [number, number][] = [];
  size() {
    return this.a.length;
  }
  private less(i: number, j: number) {
    return this.a[i][0] !== this.a[j][0] ? this.a[i][0] < this.a[j][0] : this.a[i][1] < this.a[j][1];
  }
  push(v: [number, number]) {
    const a = this.a;
    a.push(v);
    let i = a.length - 1;
    while (i > 0) {
      const p = (i - 1) >> 1;
      if (!this.less(i, p)) break;
      [a[p], a[i]] = [a[i], a[p]];
      i = p;
    }
  }
  peek() {
    return this.a.length ? this.a[0] : null;
  }
  pop(): [number, number] {
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
        if (l < a.length && this.less(l, s)) s = l;
        if (r < a.length && this.less(r, s)) s = r;
        if (s === i) break;
        [a[s], a[i]] = [a[i], a[s]];
        i = s;
      }
    }
    return top;
  }
  indices() {
    return this.a.map(([, idx]) => idx);
  }
}

/**
 * Each round hires the cheapest worker among the first and last `candidates` still available, ties going
 * to the lower index. Two min-heaps — one growing from each end — expose those cheapest fronts in
 * O(log) time, refilling from the shrinking middle as workers are taken. `line` indexes CODE.
 */
export function hireSteps(costs: number[], k: number, candidates: number): HireStep[] {
  const steps: HireStep[] = [];
  const n = costs.length;
  let lo = 0;
  let hi = n - 1;
  const L = new MinHeap();
  const R = new MinHeap();
  const hired: number[] = [];
  let total = 0;

  const snap = (o: Partial<HireData>): HireData => ({ costs, lo, hi, leftPool: L.indices(), rightPool: R.indices(), hired: [...hired], justHired: null, total, answer: null, ...o });
  const push = (line: number, explanation: string, o: Partial<HireData> = {}) => {
    steps.push({ id: steps.length, line, explanation, data: snap(o), highlights: [] });
  };

  push(2, `Hire ${k} worker(s), each round choosing the cheapest of the first/last ${candidates}.`);

  for (let h = 0; h < k; h++) {
    while (L.size() < candidates && lo <= hi) L.push([costs[lo], lo++]);
    while (R.size() < candidates && lo <= hi) R.push([costs[hi], hi--]);
    const l = L.peek();
    const r = R.peek();
    const lCost = l ? l[0] : Infinity;
    const rCost = r ? r[0] : Infinity;
    let picked: [number, number];
    if (lCost <= rCost) picked = L.pop();
    else picked = R.pop();
    total += picked[0];
    hired.push(picked[1]);
    push(lCost <= rCost ? 10 : 11, `Hire #${h + 1}: worker ${picked[1]} (cost ${picked[0]}); total ${total}.`, { justHired: picked[1] });
  }

  push(13, `Total cost to hire ${k}: ${total}.`, { answer: total });
  return steps;
}
