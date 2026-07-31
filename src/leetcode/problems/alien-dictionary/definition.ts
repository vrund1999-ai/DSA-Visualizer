import type { LeetCodeProblem } from "../../types";
import type { AlienData } from "./algorithm";
import { alienSteps } from "./algorithm";
import { CODE } from "./code";
import { AlienRenderer } from "./AlienRenderer";

interface AlienInput {
  words: string[];
}

export const alienDictionaryProblem: LeetCodeProblem<AlienInput, AlienData, Record<string, never>> = {
  id: "alien-dictionary",
  number: 269,
  title: "Alien Dictionary",
  category: "leetcode",
  difficulty: "hard",
  url: "https://leetcode.com/problems/alien-dictionary/",
  summary: "Adjacent words' first differing letters give edges; a topological sort (Kahn's) yields a valid character order.",
  prompt:
    "Given a list of words sorted lexicographically by the rules of an unknown alien language, derive a " +
    "valid ordering of its characters, or \"\" if none exists.",
  topics: ["Array", "String", "Depth-First Search", "Breadth-First Search", "Graph Theory", "Topological Sort"],
  tags: ["Topological Sort", "Graph"],
  companies: ["Bloomberg"],
  frequency: 8.4,
  code: CODE,
  language: "javascript",
  complexity: { timeAverage: "O(C)", timeWorst: "O(C)", space: "O(1)" },
  inputSchema: [],
  makeDefaultInput: () => ({ words: ["wrt", "wrf", "er", "ett", "rftt"] }),
  defaultOptions: {},
  buildSteps: (input) => alienSteps(input.words),
  Renderer: AlienRenderer,
};
