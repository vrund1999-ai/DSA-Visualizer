import type { LeetCodeProblem } from "../../types";
import type { RemoveOccData } from "./algorithm";
import { removeOccSteps } from "./algorithm";
import { CODE } from "./code";
import { RemoveOccRenderer } from "./RemoveOccRenderer";

interface RemoveOccInput {
  s: string;
  part: string;
}

export const removeAllOccurrencesProblem: LeetCodeProblem<RemoveOccInput, RemoveOccData, Record<string, never>> = {
  id: "remove-all-occurrences-of-a-substring",
  number: 1910,
  title: "Remove All Occurrences of a Substring",
  category: "leetcode",
  difficulty: "medium",
  url: "https://leetcode.com/problems/remove-all-occurrences-of-a-substring/",
  summary: "Delete the leftmost occurrence of part and re-scan, since removals can expose new matches.",
  prompt:
    "Given strings s and part, repeatedly remove the leftmost occurrence of part from s until part " +
    "no longer appears, and return the resulting string.",
  topics: ["String", "Stack", "Simulation"],
  tags: ["String", "Stack", "Simulation"],
  companies: ["Bloomberg"],
  frequency: 24.9,
  code: CODE,
  language: "javascript",
  complexity: { timeAverage: "O(n·m)", timeWorst: "O(n²)", space: "O(n)" },
  inputSchema: [],
  makeDefaultInput: () => ({ s: "daabcbaabcbc", part: "abc" }),
  defaultOptions: {},
  buildSteps: (input) => removeOccSteps(input.s, input.part),
  Renderer: RemoveOccRenderer,
};
