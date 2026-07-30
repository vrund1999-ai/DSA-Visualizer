import type { LeetCodeProblem } from "../../types";
import type { PrinterData } from "./algorithm";
import { printerSteps } from "./algorithm";
import { CODE } from "./code";
import { PrinterRenderer } from "./PrinterRenderer";

export const strangePrinterProblem: LeetCodeProblem<string, PrinterData, Record<string, never>> = {
  id: "strange-printer",
  number: 664,
  title: "Strange Printer",
  category: "leetcode",
  difficulty: "hard",
  url: "https://leetcode.com/problems/strange-printer/",
  summary: "Interval DP: printing s[j] alone costs one turn, but a matching earlier character can share a print.",
  prompt:
    "A printer prints a contiguous run of a single character per turn, overwriting. Return the minimum " +
    "number of turns to print the given string.",
  topics: ["String", "Dynamic Programming"],
  tags: ["Dynamic Programming", "Interval DP"],
  companies: ["Bloomberg"],
  frequency: 18.0,
  code: CODE,
  language: "javascript",
  complexity: { timeAverage: "O(n³)", timeWorst: "O(n³)", space: "O(n²)" },
  inputSchema: [],
  makeDefaultInput: () => "abcba",
  defaultOptions: {},
  buildSteps: (input) => printerSteps(input),
  Renderer: PrinterRenderer,
};
