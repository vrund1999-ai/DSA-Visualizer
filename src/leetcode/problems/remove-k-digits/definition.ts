import type { LeetCodeProblem } from "../../types";
import type { RemoveKData } from "./algorithm";
import { removeKSteps } from "./algorithm";
import { CODE } from "./code";
import { RemoveKRenderer } from "./RemoveKRenderer";

interface RemoveKInput {
  num: string;
  k: number;
}

export const removeKDigitsProblem: LeetCodeProblem<RemoveKInput, RemoveKData, Record<string, never>> = {
  id: "remove-k-digits",
  number: 402,
  title: "Remove K Digits",
  category: "leetcode",
  difficulty: "medium",
  url: "https://leetcode.com/problems/remove-k-digits/",
  summary: "Monotonic stack removes larger left-digits to minimize the number.",
  prompt:
    "Given a non-negative integer as a string num and an integer k, remove k digits so " +
    "the remaining number is the smallest possible. Return it as a string (no leading " +
    "zeros).",
  topics: ["String", "Stack", "Greedy", "Monotonic Stack"],
  tags: ["String", "Stack", "Greedy", "Monotonic Stack"],
  companies: ["Bloomberg"],
  frequency: 40.4,
  code: CODE,
  language: "javascript",
  complexity: { timeAverage: "O(n)", timeWorst: "O(n)", space: "O(n)" },
  inputSchema: [],
  makeDefaultInput: () => ({ num: "1432219", k: 3 }),
  defaultOptions: {},
  buildSteps: (input) => removeKSteps(input.num, input.k),
  Renderer: RemoveKRenderer,
};
