import type { LeetCodeProblem } from "../../types";
import type { ExcelData } from "./algorithm";
import { excelSteps } from "./algorithm";
import { CODE } from "./code";
import { ExcelRenderer } from "./ExcelRenderer";

export const excelColumnProblem: LeetCodeProblem<
  string,
  ExcelData,
  Record<string, never>
> = {
  id: "excel-sheet-column-number",
  number: 171,
  title: "Excel Sheet Column Number",
  category: "leetcode",
  difficulty: "easy",
  url: "https://leetcode.com/problems/excel-sheet-column-number/",
  summary: "Convert a spreadsheet column title to its number (base 26).",
  prompt:
    "Given a column title as it appears in a spreadsheet (A, B, …, Z, AA, AB, …), " +
    "return its corresponding column number.",
  topics: ["Math", "String"],
  tags: ["Math", "String"],
  companies: ["Bloomberg"],
  frequency: 18,
  code: CODE,
  language: "javascript",
  complexity: { timeAverage: "O(n)", timeWorst: "O(n)", space: "O(1)" },
  inputSchema: [],
  makeDefaultInput: () => "ZY",
  defaultOptions: {},
  buildSteps: (input) => excelSteps(input),
  Renderer: ExcelRenderer,
};
