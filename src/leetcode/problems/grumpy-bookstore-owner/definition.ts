import type { LeetCodeProblem } from "../../types";
import type { GrumpyData } from "./algorithm";
import { grumpySteps } from "./algorithm";
import { CODE } from "./code";
import { GrumpyRenderer } from "./GrumpyRenderer";

interface GrumpyInput {
  customers: number[];
  grumpy: number[];
  minutes: number;
}

export const grumpyBookstoreProblem: LeetCodeProblem<GrumpyInput, GrumpyData, Record<string, never>> = {
  id: "grumpy-bookstore-owner",
  number: 1052,
  title: "Grumpy Bookstore Owner",
  category: "leetcode",
  difficulty: "medium",
  url: "https://leetcode.com/problems/grumpy-bookstore-owner/",
  summary: "Base satisfaction is fixed; a sliding window finds the best block of grumpy minutes to suppress.",
  prompt:
    "Customers arrive each minute; the owner is grumpy on some minutes, dissatisfying those customers. " +
    "Using one suppression of X consecutive minutes, maximize the total satisfied customers.",
  topics: ["Array", "Sliding Window"],
  tags: ["Sliding Window"],
  companies: ["Bloomberg"],
  frequency: 8.4,
  code: CODE,
  language: "javascript",
  complexity: { timeAverage: "O(n)", timeWorst: "O(n)", space: "O(1)" },
  inputSchema: [],
  makeDefaultInput: () => ({ customers: [1, 0, 1, 2, 1, 1, 7, 5], grumpy: [0, 1, 0, 1, 0, 1, 0, 1], minutes: 3 }),
  defaultOptions: {},
  buildSteps: (input) => grumpySteps(input.customers, input.grumpy, input.minutes),
  Renderer: GrumpyRenderer,
};
