import type { Step } from "@/core/types";

export interface MedianInput {
  a: number[];
  b: number[];
}

export interface MedianData {
  a: number[];
  b: number[];
  i: number | null;
  j: number | null;
  aL: number;
  aR: number;
  bL: number;
  bR: number;
  answer: number | null;
}

export type MedianStep = Step<MedianData>;

const NEG = -Infinity;
const POS = Infinity;
const fmt = (x: number) => (x === NEG ? "−∞" : x === POS ? "∞" : String(x));

/**
 * Binary-search a partition of the shorter array so that the left halves of both
 * arrays together hold exactly half the elements and every left value ≤ every
 * right value. That balanced cut sits at the median. `line` indexes CODE.
 */
export function medianSteps(input: MedianInput): MedianStep[] {
  let a = input.a;
  let b = input.b;
  if (a.length > b.length) [a, b] = [b, a];
  const m = a.length;
  const n = b.length;
  const half = (m + n + 1) >> 1;
  const steps: MedianStep[] = [];
  let lo = 0;
  let hi = m;
  let answer: number | null = null;

  const snap = (i: number | null, j: number | null, aL: number, aR: number, bL: number, bR: number): MedianData => ({ a: [...a], b: [...b], i, j, aL, aR, bL, bR, answer });
  const push = (line: number, explanation: string, data: MedianData) => {
    steps.push({ id: steps.length, line, explanation, data, highlights: [] });
  };

  push(3, "Binary-search a partition of the shorter array to balance both halves.", snap(null, null, NEG, POS, NEG, POS));

  while (lo <= hi) {
    const i = (lo + hi) >> 1;
    const j = half - i;
    const aL = i ? a[i - 1] : NEG;
    const aR = i < m ? a[i] : POS;
    const bL = j ? b[j - 1] : NEG;
    const bR = j < n ? b[j] : POS;
    if (aL <= bR && bL <= aR) {
      const total = m + n;
      answer = total % 2 === 1 ? Math.max(aL, bL) : (Math.max(aL, bL) + Math.min(aR, bR)) / 2;
      push(8, `Balanced: max-left ${Math.max(aL, bL)}, min-right ${Math.min(aR, bR)} → median ${answer}.`, snap(i, j, aL, aR, bL, bR));
      return steps;
    } else if (aL > bR) {
      push(9, `aL ${fmt(aL)} > bR ${fmt(bR)} — take fewer from a (move left).`, snap(i, j, aL, aR, bL, bR));
      hi = i - 1;
    } else {
      push(10, `bL ${fmt(bL)} > aR ${fmt(aR)} — take more from a (move right).`, snap(i, j, aL, aR, bL, bR));
      lo = i + 1;
    }
  }

  return steps;
}
