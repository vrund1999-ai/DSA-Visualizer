import type { LeetCodeProblem } from "../../types";
import type { SwapBalanceData } from "./algorithm";
import { swapBalanceSteps } from "./algorithm";
import { CODE } from "./code";
import { SwapBalanceRenderer } from "./SwapBalanceRenderer";

export const minSwapsBalancedProblem: LeetCodeProblem<string, SwapBalanceData, Record<string, never>> = {
  id: "minimum-number-of-swaps-to-make-the-string-balanced",
  number: 1963,
  title: "Minimum Number of Swaps to Make the String Balanced",
  category: "leetcode",
  difficulty: "medium",
  url: "https://leetcode.com/problems/minimum-number-of-swaps-to-make-the-string-balanced/",
  summary: "Count closing brackets with no open match; each swap repairs two, so the answer is ⌈unmatched/2⌉.",
  prompt:
    "Given a balanced-count string of '[' and ']', each swap exchanges any two characters. Return the " +
    "minimum swaps to make the string a balanced bracket sequence.",
  topics: ["Two Pointers", "String", "Stack", "Greedy"],
  tags: ["Greedy", "Stack"],
  companies: ["Bloomberg"],
  frequency: 13.6,
  code: CODE,
  language: "javascript",
  complexity: { timeAverage: "O(n)", timeWorst: "O(n)", space: "O(1)" },
  inputSchema: [],
  makeDefaultInput: () => "]]][[[",
  defaultOptions: {},
  buildSteps: (input) => swapBalanceSteps(input),
  Renderer: SwapBalanceRenderer,
};
