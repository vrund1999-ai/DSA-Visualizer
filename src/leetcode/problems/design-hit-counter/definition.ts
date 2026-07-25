import type { LeetCodeProblem } from "../../types";
import type { HitCounterData, HitOp } from "./algorithm";
import { hitCounterSteps } from "./algorithm";
import { CODE } from "./code";
import { HitCounterRenderer } from "./HitCounterRenderer";

export const designHitCounterProblem: LeetCodeProblem<HitOp[], HitCounterData, Record<string, never>> = {
  id: "design-hit-counter",
  number: 362,
  title: "Design Hit Counter",
  category: "leetcode",
  difficulty: "medium",
  url: "https://leetcode.com/problems/design-hit-counter/",
  summary: "A queue of timestamps evicts entries older than 300 seconds.",
  prompt:
    "Design a HitCounter that records hits (timestamps in seconds, non-decreasing) and, " +
    "for getHits(t), returns the number of hits in the past 300 seconds (t − 299 … t).",
  topics: ["Design", "Queue", "Data Stream"],
  tags: ["Design", "Queue", "Data Stream"],
  companies: ["Bloomberg"],
  frequency: 35.9,
  code: CODE,
  language: "javascript",
  complexity: { timeAverage: "O(1) amortized", timeWorst: "O(n)", space: "O(n)" },
  inputSchema: [],
  makeDefaultInput: () => [
    { type: "hit", t: 1 },
    { type: "hit", t: 2 },
    { type: "hit", t: 3 },
    { type: "getHits", t: 4 },
    { type: "hit", t: 300 },
    { type: "getHits", t: 300 },
    { type: "getHits", t: 301 },
  ],
  defaultOptions: {},
  buildSteps: (input) => hitCounterSteps(input),
  Renderer: HitCounterRenderer,
};
