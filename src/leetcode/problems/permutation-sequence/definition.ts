import type { LeetCodeProblem } from "../../types";
import type { PermSeqData } from "./algorithm";
import { permSeqSteps } from "./algorithm";
import { CODE } from "./code";
import { PermSeqRenderer } from "./PermSeqRenderer";

interface PermSeqInput {
  n: number;
  k: number;
}

export const permutationSequenceProblem: LeetCodeProblem<PermSeqInput, PermSeqData, Record<string, never>> = {
  id: "permutation-sequence",
  number: 60,
  title: "Permutation Sequence",
  category: "leetcode",
  difficulty: "hard",
  url: "https://leetcode.com/problems/permutation-sequence/",
  summary: "Read k in the factorial number system to pick each digit directly.",
  prompt:
    "Return the kth permutation sequence of the numbers 1..n (1-indexed), computed " +
    "directly without enumerating all permutations.",
  topics: ["Math", "Recursion"],
  tags: ["Math", "Recursion"],
  companies: ["Bloomberg"],
  frequency: 32.2,
  code: CODE,
  language: "javascript",
  complexity: { timeAverage: "O(n²)", timeWorst: "O(n²)", space: "O(n)" },
  inputSchema: [],
  makeDefaultInput: () => ({ n: 4, k: 9 }),
  defaultOptions: {},
  buildSteps: (input) => permSeqSteps(input.n, input.k),
  Renderer: PermSeqRenderer,
};
