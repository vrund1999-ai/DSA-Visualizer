import type { LeetCodeProblem } from "../../types";
import type { TastinessData } from "./algorithm";
import { tastinessSteps } from "./algorithm";
import { CODE } from "./code";
import { TastinessRenderer } from "./TastinessRenderer";

interface TastinessInput {
  price: number[];
  k: number;
}

export const maxTastinessProblem: LeetCodeProblem<TastinessInput, TastinessData, Record<string, never>> = {
  id: "maximum-tastiness-of-candy-basket",
  number: 2517,
  title: "Maximum Tastiness of Candy Basket",
  category: "leetcode",
  difficulty: "medium",
  url: "https://leetcode.com/problems/maximum-tastiness-of-candy-basket/",
  summary: "Binary-search the minimum gap; a greedy sweep checks whether k candies can be chosen with gaps ≥ that value.",
  prompt:
    "Choose k of the given prices so the tastiness — the smallest absolute difference between any two chosen " +
    "prices — is as large as possible. Return that maximum tastiness.",
  topics: ["Array", "Binary Search", "Greedy", "Sorting"],
  tags: ["Binary Search", "Greedy"],
  companies: ["Bloomberg"],
  frequency: 13.6,
  code: CODE,
  language: "javascript",
  complexity: { timeAverage: "O(n log n + n log V)", timeWorst: "O(n log V)", space: "O(n)" },
  inputSchema: [],
  makeDefaultInput: () => ({ price: [13, 5, 1, 8, 21, 2], k: 3 }),
  defaultOptions: {},
  buildSteps: (input) => tastinessSteps(input.price, input.k),
  Renderer: TastinessRenderer,
};
