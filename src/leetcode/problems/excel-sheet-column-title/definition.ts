import type { LeetCodeProblem } from "../../types";
import type { ColTitleData } from "./algorithm";
import { colTitleSteps } from "./algorithm";
import { CODE } from "./code";
import { ColTitleRenderer } from "./ColTitleRenderer";

export const excelSheetColumnTitleProblem: LeetCodeProblem<number, ColTitleData, Record<string, never>> = {
  id: "excel-sheet-column-title",
  number: 168,
  title: "Excel Sheet Column Title",
  category: "leetcode",
  difficulty: "easy",
  url: "https://leetcode.com/problems/excel-sheet-column-title/",
  summary: "Repeatedly decrement, take mod 26 for a letter, and divide — bijective base-26.",
  prompt:
    "Given a positive integer columnNumber, return its Excel column title (1 → 'A', 26 → " +
    "'Z', 27 → 'AA', 28 → 'AB', …).",
  topics: ["Math", "String"],
  tags: ["Math", "String"],
  companies: ["Bloomberg"],
  frequency: 27.6,
  code: CODE,
  language: "javascript",
  complexity: { timeAverage: "O(log n)", timeWorst: "O(log n)", space: "O(log n)" },
  inputSchema: [],
  makeDefaultInput: () => 701,
  defaultOptions: {},
  buildSteps: (input) => colTitleSteps(input),
  Renderer: ColTitleRenderer,
};
