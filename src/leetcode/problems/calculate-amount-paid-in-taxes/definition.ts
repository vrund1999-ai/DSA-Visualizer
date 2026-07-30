import type { LeetCodeProblem } from "../../types";
import type { TaxData } from "./algorithm";
import { taxSteps } from "./algorithm";
import { CODE } from "./code";
import { TaxRenderer } from "./TaxRenderer";

interface TaxInput {
  brackets: [number, number][];
  income: number;
}

export const calculateTaxProblem: LeetCodeProblem<TaxInput, TaxData, Record<string, never>> = {
  id: "calculate-amount-paid-in-taxes",
  number: 2303,
  title: "Calculate Amount Paid in Taxes",
  category: "leetcode",
  difficulty: "easy",
  url: "https://leetcode.com/problems/calculate-amount-paid-in-taxes/",
  summary: "Progressive brackets: tax only the slice of income within each band at its percent, stopping once income runs out.",
  prompt:
    "Given tax brackets [upperᵢ, percentᵢ] (sorted) and an income, compute the total tax, where the income " +
    "between consecutive upper bounds is taxed at that bracket's percent.",
  topics: ["Array", "Simulation"],
  tags: ["Simulation", "Math"],
  companies: ["Bloomberg"],
  frequency: 13.6,
  code: CODE,
  language: "javascript",
  complexity: { timeAverage: "O(n)", timeWorst: "O(n)", space: "O(1)" },
  inputSchema: [],
  makeDefaultInput: () => ({ brackets: [[3, 50], [7, 10], [12, 25]], income: 10 }),
  defaultOptions: {},
  buildSteps: (input) => taxSteps(input.brackets, input.income),
  Renderer: TaxRenderer,
};
