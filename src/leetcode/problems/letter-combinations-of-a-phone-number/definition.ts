import type { LeetCodeProblem } from "../../types";
import type { LetterComboData } from "./algorithm";
import { letterComboSteps } from "./algorithm";
import { CODE } from "./code";
import { LetterComboRenderer } from "./LetterComboRenderer";

export const letterCombinationsProblem: LeetCodeProblem<
  string,
  LetterComboData,
  Record<string, never>
> = {
  id: "letter-combinations-of-a-phone-number",
  number: 17,
  title: "Letter Combinations of a Phone Number",
  category: "leetcode",
  difficulty: "medium",
  url: "https://leetcode.com/problems/letter-combinations-of-a-phone-number/",
  summary: "All letter strings a digit sequence can spell (backtracking).",
  prompt:
    "Given a string of digits 2–9, return all letter combinations the number " +
    "could spell on a phone keypad (2→abc, 3→def, …), in any order.",
  topics: ["Hash Table", "String", "Backtracking"],
  tags: ["Hash Table", "String", "Backtracking"],
  companies: ["Bloomberg"],
  frequency: 53.5,
  code: CODE,
  language: "javascript",
  complexity: { timeAverage: "O(4ⁿ)", timeWorst: "O(4ⁿ)", space: "O(n)" },
  inputSchema: [],
  makeDefaultInput: () => "23",
  defaultOptions: {},
  buildSteps: (input) => letterComboSteps(input),
  Renderer: LetterComboRenderer,
};
