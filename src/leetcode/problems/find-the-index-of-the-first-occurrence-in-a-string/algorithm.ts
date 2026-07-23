import type { Highlight, Step } from "@/core/types";

export interface StrStrInput {
  haystack: string;
  needle: string;
}

export interface StrStrData {
  haystack: string[];
  needle: string;
  i: number | null;
  j: number | null;
  answer: number | null;
}

export type StrStrStep = Step<StrStrData>;

/**
 * Brute-force scan: at each start position i, compare the needle character by
 * character; a full match returns i, a mismatch slides the window right. `line`
 * indexes CODE.
 */
export function strStrSteps(input: StrStrInput): StrStrStep[] {
  const haystack = [...input.haystack];
  const needle = input.needle;
  const m = needle.length;
  const n = haystack.length;
  const steps: StrStrStep[] = [];
  let answer: number | null = null;

  const snap = (o: Partial<StrStrData>): StrStrData => ({ haystack: [...haystack], needle, i: null, j: null, answer, ...o });
  const push = (line: number, explanation: string, data: StrStrData, highlights: Highlight[]) => {
    steps.push({ id: steps.length, line, explanation, data, highlights });
  };

  const window = (i: number, matched: number, mismatch: number | null): Highlight[] => {
    const hl: Highlight[] = [];
    for (let k = 0; k < m; k++) {
      const role = k < matched ? "sorted" : k === mismatch ? "swapped" : "active";
      hl.push({ ref: i + k, role });
    }
    return hl;
  };

  push(2, `Search "${input.haystack}" for "${needle}".`, snap({}), []);

  for (let i = 0; i + m <= n; i++) {
    let j = 0;
    while (j < m && haystack[i + j] === needle[j]) j++;
    if (j === m) {
      answer = i;
      push(5, `Full match of "${needle}" at index ${i}.`, snap({ i, j, answer }), window(i, m, null));
      return steps;
    }
    push(4, `At i=${i}: matched ${j}/${m} chars, mismatch at '${haystack[i + j]}' ≠ '${needle[j]}'.`, snap({ i, j }), window(i, j, j));
  }

  answer = -1;
  push(7, `"${needle}" not found — return -1.`, snap({ i: null, answer: -1 }), []);
  return steps;
}
