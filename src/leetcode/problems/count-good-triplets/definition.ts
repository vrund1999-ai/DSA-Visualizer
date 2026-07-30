import type { LeetCodeProblem } from "../../types";
import type { GoodTripletsData } from "./algorithm";
import { goodTripletsSteps } from "./algorithm";
import { CODE } from "./code";
import { GoodTripletsRenderer } from "./GoodTripletsRenderer";

interface GoodTripletsInput {
  arr: number[];
  a: number;
  b: number;
  c: number;
}

export const countGoodTripletsProblem: LeetCodeProblem<GoodTripletsInput, GoodTripletsData, Record<string, never>> = {
  id: "count-good-triplets",
  number: 1534,
  title: "Count Good Triplets",
  category: "leetcode",
  difficulty: "easy",
  url: "https://leetcode.com/problems/count-good-triplets/",
  summary: "Brute triple loop counting triplets whose three pairwise absolute differences all stay within a, b, c.",
  prompt:
    "Given an array arr and thresholds a, b, c, count triplets (i<j<k) with |arr[i]−arr[j]|≤a, " +
    "|arr[j]−arr[k]|≤b and |arr[i]−arr[k]|≤c.",
  topics: ["Array", "Enumeration"],
  tags: ["Enumeration", "Array"],
  companies: ["Bloomberg"],
  frequency: 13.6,
  code: CODE,
  language: "javascript",
  complexity: { timeAverage: "O(n³)", timeWorst: "O(n³)", space: "O(1)" },
  inputSchema: [],
  makeDefaultInput: () => ({ arr: [3, 0, 1, 1, 9, 7], a: 7, b: 2, c: 3 }),
  defaultOptions: {},
  buildSteps: (input) => goodTripletsSteps(input.arr, input.a, input.b, input.c),
  Renderer: GoodTripletsRenderer,
};
