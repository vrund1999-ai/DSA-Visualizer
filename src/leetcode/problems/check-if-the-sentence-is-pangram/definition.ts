import type { LeetCodeProblem } from "../../types";
import type { PangramData } from "./algorithm";
import { pangramSteps } from "./algorithm";
import { CODE } from "./code";
import { PangramRenderer } from "./PangramRenderer";

export const pangramProblem: LeetCodeProblem<string, PangramData, Record<string, never>> = {
  id: "check-if-the-sentence-is-pangram",
  number: 1832,
  title: "Check if the Sentence Is Pangram",
  category: "leetcode",
  difficulty: "easy",
  url: "https://leetcode.com/problems/check-if-the-sentence-is-pangram/",
  summary: "A set of distinct letters reaching size 26 means every letter appears.",
  prompt: "A pangram contains every letter a–z at least once. Given a lowercase sentence, return whether it is a pangram.",
  topics: ["Hash Table", "String"],
  tags: ["Hash Table", "String"],
  companies: ["Bloomberg"],
  frequency: 27.6,
  code: CODE,
  language: "javascript",
  complexity: { timeAverage: "O(n)", timeWorst: "O(n)", space: "O(1)" },
  inputSchema: [],
  makeDefaultInput: () => "thequickbrownfoxjumpsoverthelazydog",
  defaultOptions: {},
  buildSteps: (input) => pangramSteps(input),
  Renderer: PangramRenderer,
};
