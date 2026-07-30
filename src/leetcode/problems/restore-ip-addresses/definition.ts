import type { LeetCodeProblem } from "../../types";
import type { IpData } from "./algorithm";
import { ipSteps } from "./algorithm";
import { CODE } from "./code";
import { IpRenderer } from "./IpRenderer";

export const restoreIpAddressesProblem: LeetCodeProblem<string, IpData, Record<string, never>> = {
  id: "restore-ip-addresses",
  number: 93,
  title: "Restore IP Addresses",
  category: "leetcode",
  difficulty: "medium",
  url: "https://leetcode.com/problems/restore-ip-addresses/",
  summary: "Backtrack over 1–3 digit segments, pruning parts with leading zeros or values above 255.",
  prompt:
    "Given a string of digits, return every valid IPv4 address formable by inserting three dots. Each " +
    "of the four parts must be 0–255 with no leading zeros; digits may not be reordered or removed.",
  topics: ["String", "Backtracking"],
  tags: ["String", "Backtracking"],
  companies: ["Bloomberg"],
  frequency: 18.0,
  code: CODE,
  language: "javascript",
  complexity: { timeAverage: "O(1)", timeWorst: "O(1)", space: "O(1)" },
  inputSchema: [],
  makeDefaultInput: () => "25525511135",
  defaultOptions: {},
  buildSteps: (input) => ipSteps(input),
  Renderer: IpRenderer,
};
