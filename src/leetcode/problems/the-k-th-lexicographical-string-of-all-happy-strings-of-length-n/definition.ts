import type { LeetCodeProblem } from "../../types";
import type { HappyData } from "./algorithm";
import { happySteps } from "./algorithm";
import { CODE } from "./code";
import { HappyStringRenderer } from "./HappyStringRenderer";

interface HappyInput {
  n: number;
  k: number;
}

export const kthHappyStringProblem: LeetCodeProblem<HappyInput, HappyData, Record<string, never>> = {
  id: "the-k-th-lexicographical-string-of-all-happy-strings-of-length-n",
  number: 1415,
  title: "The k-th Lexicographical String of All Happy Strings of Length n",
  category: "leetcode",
  difficulty: "medium",
  url: "https://leetcode.com/problems/the-k-th-lexicographical-string-of-all-happy-strings-of-length-n/",
  summary: "DFS generates happy strings (a<b<c, no adjacent repeats) in order, stopping at the k-th.",
  prompt:
    "A happy string uses only 'a','b','c' with no two adjacent characters equal. List all happy strings of " +
    "length n in lexicographical order and return the k-th, or \"\" if fewer than k exist.",
  topics: ["String", "Backtracking"],
  tags: ["Backtracking", "String"],
  companies: ["Bloomberg"],
  frequency: 21.7,
  code: CODE,
  language: "javascript",
  complexity: { timeAverage: "O(k·n)", timeWorst: "O(k·n)", space: "O(k·n)" },
  inputSchema: [],
  makeDefaultInput: () => ({ n: 3, k: 9 }),
  defaultOptions: {},
  buildSteps: (input) => happySteps(input.n, input.k),
  Renderer: HappyStringRenderer,
};
