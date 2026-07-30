import type { LeetCodeProblem } from "../../types";
import type { CandiesData } from "./algorithm";
import { candiesSteps } from "./algorithm";
import { CODE } from "./code";
import { CandiesRenderer } from "./CandiesRenderer";

interface CandiesInput {
  candies: number[];
  k: number;
}

export const maximumCandiesProblem: LeetCodeProblem<CandiesInput, CandiesData, Record<string, never>> = {
  id: "maximum-candies-allocated-to-k-children",
  number: 2226,
  title: "Maximum Candies Allocated to K Children",
  category: "leetcode",
  difficulty: "medium",
  url: "https://leetcode.com/problems/maximum-candies-allocated-to-k-children/",
  summary: "Feasible pile sizes are monotonic, so binary-search the largest size whose total sub-piles reach k.",
  prompt:
    "You have piles of candies and must give k children equal-size piles (a pile may only be split, not " +
    "merged). Return the maximum pile size each child can get, or 0 if impossible.",
  topics: ["Array", "Binary Search"],
  tags: ["Binary Search"],
  companies: ["Bloomberg"],
  frequency: 21.7,
  code: CODE,
  language: "javascript",
  complexity: { timeAverage: "O(n log maxC)", timeWorst: "O(n log maxC)", space: "O(1)" },
  inputSchema: [],
  makeDefaultInput: () => ({ candies: [5, 8, 6], k: 3 }),
  defaultOptions: {},
  buildSteps: (input) => candiesSteps(input.candies, input.k),
  Renderer: CandiesRenderer,
};
