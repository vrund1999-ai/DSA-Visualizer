import type { Step } from "@/core/types";

const MAP: [number, string][] = [
  [1000, "M"], [900, "CM"], [500, "D"], [400, "CD"],
  [100, "C"], [90, "XC"], [50, "L"], [40, "XL"],
  [10, "X"], [9, "IX"], [5, "V"], [4, "IV"], [1, "I"],
];

export interface IntToRomanData {
  original: number;
  remaining: number;
  result: string;
  activeValue: number | null;
}

export type IntToRomanStep = Step<IntToRomanData>;

/**
 * Greedy: walk the value→symbol table from largest to smallest, subtracting each
 * value and appending its symbol as many times as it fits. Subtractive pairs
 * (CM, IV, …) are entries in the table, so no special-casing is needed. `line`
 * indexes CODE.
 */
export function intToRomanSteps(num: number): IntToRomanStep[] {
  const steps: IntToRomanStep[] = [];
  const original = num;
  let result = "";

  const snap = (o: Partial<IntToRomanData>): IntToRomanData => ({ original, remaining: num, result, activeValue: null, ...o });
  const push = (line: number, explanation: string, data: IntToRomanData) => {
    steps.push({ id: steps.length, line, explanation, data, highlights: [] });
  };

  push(4, `Convert ${num} greedily using the largest fitting symbols.`, snap({}));

  for (const [v, sym] of MAP) {
    while (num >= v) {
      result += sym;
      num -= v;
      push(6, `${num + v} ≥ ${v} — append "${sym}" (→ "${result}"), remaining ${num}.`, snap({ activeValue: v }));
    }
  }

  push(7, `Roman numeral for ${original} is "${result}".`, snap({}));
  return steps;
}

export { MAP };
