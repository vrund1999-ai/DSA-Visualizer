import type { LeetCodeProblem } from "../../types";
import type { HammingData } from "./algorithm";
import { hammingSteps } from "./algorithm";
import { CODE } from "./code";
import { HammingRenderer } from "./HammingRenderer";

export const totalHammingDistanceProblem: LeetCodeProblem<number[], HammingData, Record<string, never>> = {
  id: "total-hamming-distance",
  number: 477,
  title: "Total Hamming Distance",
  category: "leetcode",
  difficulty: "medium",
  url: "https://leetcode.com/problems/total-hamming-distance/",
  summary: "For each bit column, ones × zeros pairs differ there; summing over columns avoids all-pairs comparison.",
  prompt:
    "The Hamming distance between two integers is the number of differing bits. Return the sum of Hamming " +
    "distances over all pairs in the array.",
  topics: ["Array", "Math", "Bit Manipulation"],
  tags: ["Bit Manipulation", "Math"],
  companies: ["Bloomberg"],
  frequency: 8.4,
  code: CODE,
  language: "javascript",
  complexity: { timeAverage: "O(n · B)", timeWorst: "O(n · B)", space: "O(1)" },
  inputSchema: [],
  makeDefaultInput: () => [4, 14, 2],
  defaultOptions: {},
  buildSteps: (input) => hammingSteps(input),
  Renderer: HammingRenderer,
};
