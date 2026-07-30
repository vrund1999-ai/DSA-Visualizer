import type { Step } from "@/core/types";

export interface IpoData {
  /** projects sorted by capital, with live status */
  projects: { capital: number; profit: number; picked: boolean; unlocked: boolean }[];
  /** profits currently in the max-heap (affordable, not yet taken) */
  heap: number[];
  w: number;
  round: number;
  k: number;
  /** profit chosen this round */
  chosen: number | null;
  answer: number | null;
}

export type IpoStep = Step<IpoData>;

class MaxHeap {
  private a: number[] = [];
  get size() {
    return this.a.length;
  }
  push(v: number) {
    const a = this.a;
    a.push(v);
    let i = a.length - 1;
    while (i > 0) {
      const p = (i - 1) >> 1;
      if (a[p] >= a[i]) break;
      [a[p], a[i]] = [a[i], a[p]];
      i = p;
    }
  }
  pop(): number {
    const a = this.a;
    const top = a[0];
    const last = a.pop()!;
    if (a.length) {
      a[0] = last;
      let i = 0;
      for (;;) {
        const l = 2 * i + 1;
        const r = 2 * i + 2;
        let big = i;
        if (l < a.length && a[l] > a[big]) big = l;
        if (r < a.length && a[r] > a[big]) big = r;
        if (big === i) break;
        [a[big], a[i]] = [a[i], a[big]];
        i = big;
      }
    }
    return top;
  }
  values() {
    return [...this.a];
  }
}

/**
 * IPO: with starting capital w, do up to k projects; each project needs some capital and yields a profit
 * added to w. Greedily, among all projects you can currently afford, take the highest profit (a max-heap),
 * unlock newly-affordable projects as w grows, and repeat. `line` indexes CODE.
 */
export function ipoSteps(k: number, w0: number, profits: number[], capital: number[]): IpoStep[] {
  const steps: IpoStep[] = [];
  const projects = profits
    .map((p, i) => ({ capital: capital[i], profit: p, picked: false, unlocked: false }))
    .sort((a, b) => a.capital - b.capital);
  const heap = new MaxHeap();
  let w = w0;
  let i = 0;

  const snap = (o: Partial<IpoData>): IpoData => ({
    projects: projects.map((p) => ({ ...p })),
    heap: heap.values(),
    w,
    round: 0,
    k,
    chosen: null,
    answer: null,
    ...o,
  });
  const push = (line: number, explanation: string, o: Partial<IpoData> = {}) => {
    steps.push({ id: steps.length, line, explanation, data: snap(o), highlights: [] });
  };

  push(2, `Sorted ${projects.length} project(s) by capital; start with w = ${w}, up to ${k} project(s).`);

  for (let t = 0; t < k; t++) {
    while (i < projects.length && projects[i].capital <= w) {
      projects[i].unlocked = true;
      heap.push(projects[i].profit);
      i++;
    }
    push(7, `Round ${t + 1}: unlock projects with capital ≤ ${w}; heap = [${heap.values().join(", ")}].`, { round: t + 1 });

    if (heap.size === 0) {
      push(8, `No affordable project left — stop early.`, { round: t + 1 });
      break;
    }

    const best = heap.pop();
    w += best;
    const target = projects.find((p) => !p.picked && p.profit === best && p.unlocked);
    if (target) target.picked = true;
    push(9, `Take profit ${best}; capital grows to w = ${w}.`, { round: t + 1, chosen: best });
  }

  push(11, `Maximum capital after ${k} project(s): ${w}.`, { answer: w });
  return steps;
}
