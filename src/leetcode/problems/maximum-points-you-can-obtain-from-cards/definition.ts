import type { LeetCodeProblem } from "../../types";
import type { MaxScoreData } from "./algorithm";
import { maxScoreSteps } from "./algorithm";
import { CODE } from "./code";
import { MaxScoreRenderer } from "./MaxScoreRenderer";

interface MaxScoreInput {
  cardPoints: number[];
  k: number;
}

export const maximumPointsFromCardsProblem: LeetCodeProblem<MaxScoreInput, MaxScoreData, Record<string, never>> = {
  id: "maximum-points-you-can-obtain-from-cards",
  number: 1423,
  title: "Maximum Points You Can Obtain from Cards",
  category: "leetcode",
  difficulty: "medium",
  url: "https://leetcode.com/problems/maximum-points-you-can-obtain-from-cards/",
  summary: "Taking k cards from the ends leaves an (n−k)-window; minimize it and subtract from the total.",
  prompt:
    "You take exactly k cards from either end of the row, maximizing the sum of the card points taken. " +
    "Return that maximum score.",
  topics: ["Array", "Sliding Window", "Prefix Sum"],
  tags: ["Array", "Sliding Window", "Prefix Sum"],
  companies: ["Bloomberg"],
  frequency: 21.7,
  code: CODE,
  language: "javascript",
  complexity: { timeAverage: "O(n)", timeWorst: "O(n)", space: "O(1)" },
  inputSchema: [],
  makeDefaultInput: () => ({ cardPoints: [1, 2, 3, 4, 5, 6, 1], k: 3 }),
  defaultOptions: {},
  buildSteps: (input) => maxScoreSteps(input.cardPoints, input.k),
  Renderer: MaxScoreRenderer,
};
