import type { LeetCodeProblem } from "../../types";
import type { LRUData, LRUOp } from "./algorithm";
import { lruSteps } from "./algorithm";
import { CODE } from "./code";
import { LRURenderer } from "./LRURenderer";

export interface LRUInput {
  capacity: number;
  ops: LRUOp[];
}

export const lruCacheProblem: LeetCodeProblem<
  LRUInput,
  LRUData,
  Record<string, never>
> = {
  id: "lru-cache",
  number: 146,
  title: "LRU Cache",
  category: "leetcode",
  difficulty: "medium",
  url: "https://leetcode.com/problems/lru-cache/",
  summary: "O(1) get/put cache with least-recently-used eviction.",
  prompt:
    "Design a cache with a fixed capacity supporting get and put in O(1). When " +
    "full, evict the least recently used key. An insertion-ordered map doubles " +
    "as the recency list.",
  topics: ["Hash Table", "Linked List", "Design", "Doubly-Linked List"],
  tags: ["Hash Table", "Linked List", "Design", "Doubly-Linked List"],
  companies: ["Bloomberg"],
  frequency: 72.2,
  code: CODE,
  language: "javascript",
  complexity: { timeAverage: "O(1)", timeWorst: "O(1)", space: "O(capacity)" },
  inputSchema: [],
  makeDefaultInput: () => ({
    capacity: 2,
    ops: [
      { op: "put", key: 1, value: 1 },
      { op: "put", key: 2, value: 2 },
      { op: "get", key: 1 },
      { op: "put", key: 3, value: 3 },
      { op: "get", key: 2 },
      { op: "put", key: 4, value: 4 },
      { op: "get", key: 1 },
      { op: "get", key: 3 },
    ],
  }),
  defaultOptions: {},
  buildSteps: (input) => lruSteps(input.capacity, input.ops),
  Renderer: LRURenderer,
};
