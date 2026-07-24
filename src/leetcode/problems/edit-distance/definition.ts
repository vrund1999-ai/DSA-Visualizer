import type { LeetCodeProblem } from "../../types";
import type { EditDistanceData, EditDistanceInput } from "./algorithm";
import { editDistanceSteps } from "./algorithm";
import { CODE } from "./code";
import { EditDistanceRenderer } from "./EditDistanceRenderer";

export const editDistanceProblem: LeetCodeProblem<
  EditDistanceInput,
  EditDistanceData,
  Record<string, never>
> = {
  id: "edit-distance",
  number: 72,
  title: "Edit Distance",
  category: "leetcode",
  difficulty: "medium",
  url: "https://leetcode.com/problems/edit-distance/",
  summary: "Min insert/delete/replace edits between two strings (DP grid).",
  prompt:
    "Given two strings `word1` and `word2`, return the minimum number of " +
    "single-character insertions, deletions, or replacements to turn one into " +
    "the other.",
  topics: ["String", "Dynamic Programming"],
  tags: ["String", "Dynamic Programming"],
  companies: ["Bloomberg"],
  frequency: 49.7,
  code: CODE,
  language: "javascript",
  complexity: { timeAverage: "O(m·n)", timeWorst: "O(m·n)", space: "O(m·n)" },
  inputSchema: [],
  makeDefaultInput: () => ({ a: "horse", b: "ros" }),
  defaultOptions: {},
  buildSteps: (input) => editDistanceSteps(input),
  Renderer: EditDistanceRenderer,
};
