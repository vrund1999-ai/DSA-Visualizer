import type { Step } from "@/core/types";

export interface TaxData {
  brackets: [number, number][];
  income: number;
  activeBracket: number | null;
  prev: number;
  taxable: number | null;
  tax: number;
  answer: number | null;
}

export type TaxStep = Step<TaxData>;

/**
 * Progressive tax: each bracket [upper, percent] taxes only the income between the previous upper bound and
 * this one, at the given percent. Once income is exhausted the remaining brackets contribute nothing. `line`
 * indexes CODE.
 */
export function taxSteps(brackets: [number, number][], income: number): TaxStep[] {
  const steps: TaxStep[] = [];
  let tax = 0;
  let prev = 0;

  const snap = (o: Partial<TaxData>): TaxData => ({
    brackets,
    income,
    activeBracket: null,
    prev,
    taxable: null,
    tax,
    answer: null,
    ...o,
  });
  const push = (line: number, explanation: string, o: Partial<TaxData> = {}) => {
    steps.push({ id: steps.length, line, explanation, data: snap(o), highlights: [] });
  };

  push(1, `Tax income ${income} bracket by bracket.`);

  for (let i = 0; i < brackets.length; i++) {
    const [upper, percent] = brackets[i];
    const taxable = Math.min(income, upper) - prev;
    if (taxable <= 0) {
      push(4, `Income already exhausted at bracket ${i} → stop.`, { activeBracket: i, taxable: 0 });
      break;
    }
    tax += (taxable * percent) / 100;
    push(5, `Bracket ${i}: tax ${taxable} at ${percent}% = ${((taxable * percent) / 100).toFixed(2)}. Total ${tax.toFixed(2)}.`, {
      activeBracket: i,
      taxable,
    });
    prev = upper;
  }

  push(8, `Total tax = ${tax.toFixed(5).replace(/\.?0+$/, "")}.`, { answer: tax });
  return steps;
}
