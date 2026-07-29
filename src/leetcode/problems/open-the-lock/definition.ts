import type { LeetCodeProblem } from "../../types";
import type { LockData } from "./algorithm";
import { lockSteps } from "./algorithm";
import { CODE } from "./code";
import { LockRenderer } from "./LockRenderer";

interface LockInput {
  deadends: string[];
  target: string;
}

export const openTheLockProblem: LeetCodeProblem<LockInput, LockData, Record<string, never>> = {
  id: "open-the-lock",
  number: 752,
  title: "Open the Lock",
  category: "leetcode",
  difficulty: "medium",
  url: "https://leetcode.com/problems/open-the-lock/",
  summary: "BFS over 4-wheel lock states (each turn = one move), skipping deadends, until the target appears.",
  prompt:
    "A 4-wheel lock starts at '0000'. Each move turns one wheel one slot. Given deadend states to avoid, " +
    "return the minimum moves to reach target, or -1 if impossible.",
  topics: ["Array", "Hash Table", "String", "Breadth-First Search"],
  tags: ["Hash Table", "String", "Breadth-First Search"],
  companies: ["Bloomberg"],
  frequency: 18.0,
  code: CODE,
  language: "javascript",
  complexity: { timeAverage: "O(10⁴)", timeWorst: "O(10⁴)", space: "O(10⁴)" },
  inputSchema: [],
  makeDefaultInput: () => ({ deadends: ["0201", "0101", "0102", "1212", "2002"], target: "0202" }),
  defaultOptions: {},
  buildSteps: (input) => lockSteps(input.deadends, input.target),
  Renderer: LockRenderer,
};
