import type { LeetCodeProblem } from "../../types";
import type { KthCharData } from "./algorithm";
import { kthCharSteps } from "./algorithm";
import { CODE } from "./code";
import { KthCharRenderer } from "./KthCharRenderer";

interface KthCharInput {
  k: number;
}

export const kthCharacterGameProblem: LeetCodeProblem<KthCharInput, KthCharData, Record<string, never>> = {
  id: "find-the-k-th-character-in-string-game-i",
  number: 3304,
  title: "Find the K-th Character in String Game I",
  category: "leetcode",
  difficulty: "easy",
  url: "https://leetcode.com/problems/find-the-k-th-character-in-string-game-i/",
  summary: "Repeatedly append a next-letter-shifted copy of the word (doubling it) until it reaches k, then read position k.",
  prompt:
    "Alice starts with word = \"a\". Each operation appends a copy of word with every character changed to " +
    "its next letter (z wraps to a). Return the k-th character (1-indexed) of the final word.",
  topics: ["Math", "Bit Manipulation", "Recursion", "Simulation"],
  tags: ["Simulation", "Recursion"],
  companies: ["Bloomberg"],
  frequency: 21.7,
  code: CODE,
  language: "javascript",
  complexity: { timeAverage: "O(k)", timeWorst: "O(k)", space: "O(k)" },
  inputSchema: [],
  makeDefaultInput: () => ({ k: 5 }),
  defaultOptions: {},
  buildSteps: (input) => kthCharSteps(input.k),
  Renderer: KthCharRenderer,
};
