import type { Step } from "@/core/types";

export interface GrammarData {
  n: number;
  k: number;
  /** generated rows (strings), when small enough to show */
  rows: string[];
  /** current row being derived, 1-indexed */
  row: number | null;
  /** the position highlighted in `row` (1-indexed) */
  pos: number | null;
  answer: number | null;
}

export type GrammarStep = Step<GrammarData>;

/**
 * Each row doubles the previous, mapping 0→01 and 1→10, so symbol k descends from symbol ⌈k/2⌉ in the row
 * above: it copies that parent when k is odd (first child) and flips it when k is even (second child).
 * `line` indexes CODE.
 */
export function grammarSteps(n: number, k: number): GrammarStep[] {
  const steps: GrammarStep[] = [];
  // build rows if small
  const rows: string[] = [];
  if (n <= 6) {
    let row = "0";
    rows.push(row);
    for (let r = 2; r <= n; r++) {
      row = row
        .split("")
        .map((c) => (c === "0" ? "01" : "10"))
        .join("");
      rows.push(row);
    }
  }

  const snap = (o: Partial<GrammarData>): GrammarData => ({ n, k, rows, row: null, pos: null, answer: null, ...o });
  const push = (line: number, explanation: string, o: Partial<GrammarData> = {}) => {
    steps.push({ id: steps.length, line, explanation, data: snap(o), highlights: [] });
  };

  push(1, `Find symbol ${k} in row ${n}; trace it up to row 1.`);

  // trace up recording (row, pos)
  const trail: [number, number][] = [];
  let r = n;
  let pos = k;
  while (r >= 1) {
    trail.push([r, pos]);
    if (r === 1) break;
    pos = Math.ceil(pos / 2);
    r--;
  }

  for (let t = trail.length - 1; t >= 0; t--) {
    const [rr, pp] = trail[t];
    push(t === trail.length - 1 ? 3 : pp % 2 === 1 ? 6 : 8, `Row ${rr}, position ${pp}: ${rr === 1 ? "base symbol 0" : pp % 2 === 1 ? "first child (copies parent)" : "second child (flips parent)"}.`, { row: rr, pos: pp });
  }

  const answer = grammar(k);
  push(6, `Symbol at row ${n}, position ${k} is ${answer}.`, { row: n, pos: k, answer });
  return steps;
}

function grammar(k: number): number {
  let bits = 0;
  let x = k - 1;
  while (x) {
    bits += x & 1;
    x >>= 1;
  }
  return bits & 1;
}
