import type { LeetCodeProblem } from "../../types";
import type { TimeMapData, TimeOp } from "./algorithm";
import { timeMapSteps } from "./algorithm";
import { CODE } from "./code";
import { TimeMapRenderer } from "./TimeMapRenderer";

export const timeBasedKeyValueStoreProblem: LeetCodeProblem<TimeOp[], TimeMapData, Record<string, never>> = {
  id: "time-based-key-value-store",
  number: 981,
  title: "Time Based Key-Value Store",
  category: "leetcode",
  difficulty: "medium",
  url: "https://leetcode.com/problems/time-based-key-value-store/",
  summary: "Store timestamp-sorted values per key; get binary-searches for the newest at-or-before time.",
  prompt:
    "Design a store with set(key, value, timestamp) and get(key, timestamp) returning the value " +
    "set at the greatest timestamp ≤ the query time (or empty string if none).",
  topics: ["Hash Table", "String", "Binary Search", "Design"],
  tags: ["Hash Table", "Binary Search", "Design"],
  companies: ["Bloomberg"],
  frequency: 24.9,
  code: CODE,
  language: "javascript",
  complexity: { timeAverage: "O(log n) get", timeWorst: "O(log n) get", space: "O(n)" },
  inputSchema: [],
  makeDefaultInput: () => [
    ["set", "foo", "bar", 1],
    ["get", "foo", 1],
    ["get", "foo", 3],
    ["set", "foo", "bar2", 4],
    ["get", "foo", 4],
    ["get", "foo", 5],
  ],
  defaultOptions: {},
  buildSteps: (input) => timeMapSteps(input),
  Renderer: TimeMapRenderer,
};
