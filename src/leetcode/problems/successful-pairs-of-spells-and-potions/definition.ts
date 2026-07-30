import type { LeetCodeProblem } from "../../types";
import type { PairsData } from "./algorithm";
import { pairsSteps } from "./algorithm";
import { CODE } from "./code";
import { PairsRenderer } from "./PairsRenderer";

interface PairsInput {
  spells: number[];
  potions: number[];
  success: number;
}

export const successfulPairsProblem: LeetCodeProblem<PairsInput, PairsData, Record<string, never>> = {
  id: "successful-pairs-of-spells-and-potions",
  number: 2300,
  title: "Successful Pairs of Spells and Potions",
  category: "leetcode",
  difficulty: "medium",
  url: "https://leetcode.com/problems/successful-pairs-of-spells-and-potions/",
  summary: "Sort potions once; each spell's count is a binary-searched threshold above which all products succeed.",
  prompt:
    "Given spells and potions arrays and a success value, for each spell count the potions where " +
    "spell × potion ≥ success.",
  topics: ["Array", "Two Pointers", "Binary Search", "Sorting"],
  tags: ["Binary Search", "Sorting"],
  companies: ["Bloomberg"],
  frequency: 18.0,
  code: CODE,
  language: "javascript",
  complexity: { timeAverage: "O((n+m) log m)", timeWorst: "O((n+m) log m)", space: "O(m)" },
  inputSchema: [],
  makeDefaultInput: () => ({ spells: [5, 1, 3], potions: [1, 2, 3, 4, 5], success: 7 }),
  defaultOptions: {},
  buildSteps: (input) => pairsSteps(input.spells, input.potions, input.success),
  Renderer: PairsRenderer,
};
