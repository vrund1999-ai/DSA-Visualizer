import type { LeetCodeProblem } from "../../types";
import type { NextLetterData } from "./algorithm";
import { nextLetterSteps } from "./algorithm";
import { CODE } from "./code";
import { NextLetterRenderer } from "./NextLetterRenderer";

interface NextLetterInput {
  letters: string[];
  target: string;
}

export const findSmallestLetterProblem: LeetCodeProblem<NextLetterInput, NextLetterData, Record<string, never>> = {
  id: "find-smallest-letter-greater-than-target",
  number: 744,
  title: "Find Smallest Letter Greater Than Target",
  category: "leetcode",
  difficulty: "easy",
  url: "https://leetcode.com/problems/find-smallest-letter-greater-than-target/",
  summary: "Binary-search the first letter strictly greater than target, wrapping to the first if none.",
  prompt:
    "Given a sorted array of lowercase letters and a target, return the smallest letter that is " +
    "strictly greater than target, wrapping around to the first letter if necessary.",
  topics: ["Array", "Binary Search"],
  tags: ["Array", "Binary Search"],
  companies: ["Bloomberg"],
  frequency: 18.0,
  code: CODE,
  language: "javascript",
  complexity: { timeAverage: "O(log n)", timeWorst: "O(log n)", space: "O(1)" },
  inputSchema: [],
  makeDefaultInput: () => ({ letters: ["c", "f", "j"], target: "c" }),
  defaultOptions: {},
  buildSteps: (input) => nextLetterSteps(input.letters, input.target),
  Renderer: NextLetterRenderer,
};
