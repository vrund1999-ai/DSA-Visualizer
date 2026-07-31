import type { LeetCodeProblem } from "../../types";
import type { CandySwapData } from "./algorithm";
import { candySwapSteps } from "./algorithm";
import { CODE } from "./code";
import { CandySwapRenderer } from "./CandySwapRenderer";

interface CandySwapInput {
  alice: number[];
  bob: number[];
}

export const fairCandySwapProblem: LeetCodeProblem<CandySwapInput, CandySwapData, Record<string, never>> = {
  id: "fair-candy-swap",
  number: 888,
  title: "Fair Candy Swap",
  category: "leetcode",
  difficulty: "easy",
  url: "https://leetcode.com/problems/fair-candy-swap/",
  summary: "Swapping boxes a and b equalizes the totals iff a − b equals half the difference of sums; check each of Alice's boxes.",
  prompt:
    "Alice and Bob each have candy boxes. They swap exactly one box each so both end with the same total " +
    "amount. Return [aliceBox, bobBox] to swap.",
  topics: ["Array", "Hash Table", "Binary Search", "Sorting"],
  tags: ["Hash Table", "Math"],
  companies: ["Bloomberg"],
  frequency: 13.6,
  code: CODE,
  language: "javascript",
  complexity: { timeAverage: "O(m + n)", timeWorst: "O(m + n)", space: "O(n)" },
  inputSchema: [],
  makeDefaultInput: () => ({ alice: [1, 2, 5], bob: [2, 4] }),
  defaultOptions: {},
  buildSteps: (input) => candySwapSteps(input.alice, input.bob),
  Renderer: CandySwapRenderer,
};
