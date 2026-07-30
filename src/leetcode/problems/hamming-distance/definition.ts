import type { LeetCodeProblem } from "../../types";
import type { HammingData } from "./algorithm";
import { hammingSteps } from "./algorithm";
import { CODE } from "./code";
import { HammingRenderer } from "./HammingRenderer";

interface HammingInput {
  x: number;
  y: number;
}

export const hammingDistanceProblem: LeetCodeProblem<HammingInput, HammingData, Record<string, never>> = {
  id: "hamming-distance",
  number: 461,
  title: "Hamming Distance",
  category: "leetcode",
  difficulty: "easy",
  url: "https://leetcode.com/problems/hamming-distance/",
  summary: "The Hamming distance is the number of set bits in x XOR y, since XOR marks the differing positions.",
  prompt: "Return the Hamming distance between two integers — the number of positions at which their bits differ.",
  topics: ["Bit Manipulation"],
  tags: ["Bit Manipulation"],
  companies: ["Bloomberg"],
  frequency: 13.6,
  code: CODE,
  language: "javascript",
  complexity: { timeAverage: "O(1)", timeWorst: "O(1)", space: "O(1)" },
  inputSchema: [],
  makeDefaultInput: () => ({ x: 93, y: 73 }),
  defaultOptions: {},
  buildSteps: (input) => hammingSteps(input.x, input.y),
  Renderer: HammingRenderer,
};
