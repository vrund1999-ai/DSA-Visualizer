import type { LeetCodeProblem } from "../../types";
import type { KokoData, KokoInput } from "./algorithm";
import { kokoSteps } from "./algorithm";
import { CODE } from "./code";
import { KokoRenderer } from "./KokoRenderer";

export const kokoEatingBananasProblem: LeetCodeProblem<
  KokoInput,
  KokoData,
  Record<string, never>
> = {
  id: "koko-eating-bananas",
  number: 875,
  title: "Koko Eating Bananas",
  category: "leetcode",
  difficulty: "medium",
  url: "https://leetcode.com/problems/koko-eating-bananas/",
  summary: "Binary-search the slowest eating speed that fits in h hours.",
  prompt:
    "Koko eats bananas at speed k per hour, finishing at most one pile each " +
    "hour. Given `piles` and `h` hours, return the minimum integer speed k that " +
    "lets her eat all bananas within h hours.",
  topics: ["Array", "Binary Search"],
  tags: ["Array", "Binary Search"],
  companies: ["Bloomberg"],
  frequency: 63.3,
  code: CODE,
  language: "javascript",
  complexity: { timeAverage: "O(n log m)", timeWorst: "O(n log m)", space: "O(1)" },
  inputSchema: [],
  makeDefaultInput: () => ({ piles: [3, 6, 7, 11], h: 8 }),
  defaultOptions: {},
  buildSteps: (input) => kokoSteps(input),
  Renderer: KokoRenderer,
};
