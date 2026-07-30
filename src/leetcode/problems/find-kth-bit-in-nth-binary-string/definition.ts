import type { LeetCodeProblem } from "../../types";
import type { KthBitData } from "./algorithm";
import { kthBitSteps } from "./algorithm";
import { CODE } from "./code";
import { KthBitRenderer } from "./KthBitRenderer";

interface KthBitInput {
  n: number;
  k: number;
}

export const kthBitProblem: LeetCodeProblem<KthBitInput, KthBitData, Record<string, never>> = {
  id: "find-kth-bit-in-nth-binary-string",
  number: 1545,
  title: "Find Kth Bit in Nth Binary String",
  category: "leetcode",
  difficulty: "medium",
  url: "https://leetcode.com/problems/find-kth-bit-in-nth-binary-string/",
  summary: "Each Sₙ = Sₙ₋₁ + '1' + reverse(invert(Sₙ₋₁)); build up to Sₙ and read position k.",
  prompt:
    "S1 = \"0\"; for i > 1, Sᵢ = Sᵢ₋₁ + \"1\" + reverse(invert(Sᵢ₋₁)). Return the k-th bit (1-indexed) of Sₙ.",
  topics: ["String", "Recursion", "Simulation"],
  tags: ["Recursion", "Simulation"],
  companies: ["Bloomberg"],
  frequency: 13.6,
  code: CODE,
  language: "javascript",
  complexity: { timeAverage: "O(2ⁿ)", timeWorst: "O(2ⁿ)", space: "O(2ⁿ)" },
  inputSchema: [],
  makeDefaultInput: () => ({ n: 4, k: 11 }),
  defaultOptions: {},
  buildSteps: (input) => kthBitSteps(input.n, input.k),
  Renderer: KthBitRenderer,
};
