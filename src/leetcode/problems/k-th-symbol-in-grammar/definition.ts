import type { LeetCodeProblem } from "../../types";
import type { GrammarData } from "./algorithm";
import { grammarSteps } from "./algorithm";
import { CODE } from "./code";
import { GrammarRenderer } from "./GrammarRenderer";

interface GrammarInput {
  n: number;
  k: number;
}

export const kthGrammarProblem: LeetCodeProblem<GrammarInput, GrammarData, Record<string, never>> = {
  id: "k-th-symbol-in-grammar",
  number: 779,
  title: "K-th Symbol in Grammar",
  category: "leetcode",
  difficulty: "medium",
  url: "https://leetcode.com/problems/k-th-symbol-in-grammar/",
  summary: "Symbol k descends from symbol ⌈k/2⌉ above — copied when k is odd, flipped when even.",
  prompt:
    "Row 1 is '0'. Each subsequent row replaces every 0 with 01 and every 1 with 10. Return the k-th symbol " +
    "(1-indexed) in row n.",
  topics: ["Math", "Bit Manipulation", "Recursion"],
  tags: ["Recursion", "Bit Manipulation"],
  companies: ["Bloomberg"],
  frequency: 13.6,
  code: CODE,
  language: "javascript",
  complexity: { timeAverage: "O(n)", timeWorst: "O(n)", space: "O(1)" },
  inputSchema: [],
  makeDefaultInput: () => ({ n: 5, k: 11 }),
  defaultOptions: {},
  buildSteps: (input) => grammarSteps(input.n, input.k),
  Renderer: GrammarRenderer,
};
