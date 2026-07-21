import type { Highlight, Step } from "@/core/types";

const VAL: Record<string, number> = { I: 1, V: 5, X: 10, L: 50, C: 100, D: 500, M: 1000 };

export interface RomanData {
  chars: string[];
  i: number | null;
  total: number;
}

export type RomanStep = Step<RomanData>;

/**
 * Left to right: a smaller symbol before a larger one is subtractive (IV = 4),
 * otherwise additive. `line` indexes CODE.
 */
export function romanSteps(s: string): RomanStep[] {
  const chars = [...s];
  const steps: RomanStep[] = [];
  let total = 0;

  const snap = (o: Partial<RomanData>): RomanData => ({ chars: [...chars], i: null, total, ...o });
  const push = (line: number, explanation: string, data: RomanData, highlights: Highlight[]) => {
    steps.push({ id: steps.length, line, explanation, data, highlights, metrics: { total } });
  };

  push(2, "Scan the numerals, adding each value unless it precedes a larger one.", snap({}), []);

  for (let i = 0; i < chars.length; i++) {
    const cur = VAL[chars[i]];
    const subtractive = i + 1 < chars.length && cur < VAL[chars[i + 1]];
    if (subtractive) {
      total -= cur;
      push(5, `${chars[i]}(${cur}) < ${chars[i + 1]}(${VAL[chars[i + 1]]}) — subtract ${cur}. Total ${total}.`, snap({ i }), [
        { ref: i, role: "swapped" },
        { ref: i + 1, role: "compared" },
      ]);
    } else {
      total += cur;
      push(7, `Add ${chars[i]} = ${cur}. Total ${total}.`, snap({ i }), [{ ref: i, role: "sorted" }]);
    }
  }

  push(9, `Value is ${total}.`, snap({ i: null }), []);
  return steps;
}
