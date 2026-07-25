import type { LeetCodeProblem } from "../../types";
import type { DefangData } from "./algorithm";
import { defangSteps } from "./algorithm";
import { CODE } from "./code";
import { DefangRenderer } from "./DefangRenderer";

export const defangingAnIpAddressProblem: LeetCodeProblem<string, DefangData, Record<string, never>> = {
  id: "defanging-an-ip-address",
  number: 1108,
  title: "Defanging an IP Address",
  category: "leetcode",
  difficulty: "easy",
  url: "https://leetcode.com/problems/defanging-an-ip-address/",
  summary: "Copy each character, expanding every '.' into the literal '[.]'.",
  prompt: "Given a valid IPv4 address, return a defanged version where every period '.' is replaced by '[.]'.",
  topics: ["String"],
  tags: ["String"],
  companies: ["Bloomberg"],
  frequency: 24.9,
  code: CODE,
  language: "javascript",
  complexity: { timeAverage: "O(n)", timeWorst: "O(n)", space: "O(n)" },
  inputSchema: [],
  makeDefaultInput: () => "1.1.1.1",
  defaultOptions: {},
  buildSteps: (input) => defangSteps(input),
  Renderer: DefangRenderer,
};
