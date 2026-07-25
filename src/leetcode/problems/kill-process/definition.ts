import type { LeetCodeProblem } from "../../types";
import type { KillProcessData } from "./algorithm";
import { killProcessSteps } from "./algorithm";
import { CODE } from "./code";
import { KillProcessRenderer } from "./KillProcessRenderer";

interface KillProcessInput {
  pid: number[];
  ppid: number[];
  kill: number;
}

export const killProcessProblem: LeetCodeProblem<KillProcessInput, KillProcessData, Record<string, never>> = {
  id: "kill-process",
  number: 582,
  title: "Kill Process",
  category: "leetcode",
  difficulty: "medium",
  url: "https://leetcode.com/problems/kill-process/",
  summary: "Build the process tree, then BFS the subtree rooted at the killed PID.",
  prompt:
    "Each process has an id (pid) and parent id (ppid). When a process is killed, all its " +
    "descendants are killed too. Return the list of processes that will be killed.",
  topics: ["Array", "Hash Table", "Tree", "Depth-First Search", "Breadth-First Search"],
  tags: ["Hash Table", "Tree", "Breadth-First Search"],
  companies: ["Bloomberg"],
  frequency: 40.4,
  code: CODE,
  language: "javascript",
  complexity: { timeAverage: "O(n)", timeWorst: "O(n)", space: "O(n)" },
  inputSchema: [],
  makeDefaultInput: () => ({ pid: [1, 3, 10, 5], ppid: [3, 0, 5, 3], kill: 5 }),
  defaultOptions: {},
  buildSteps: (input) => killProcessSteps(input.pid, input.ppid, input.kill),
  Renderer: KillProcessRenderer,
};
