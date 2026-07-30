import type { LeetCodeProblem } from "../../types";
import type { KthProductData } from "./algorithm";
import { kthProductSteps } from "./algorithm";
import { CODE } from "./code";
import { KthProductRenderer } from "./KthProductRenderer";

interface KthProductInput {
  nums1: number[];
  nums2: number[];
  k: number;
}

export const kthSmallestProductProblem: LeetCodeProblem<KthProductInput, KthProductData, Record<string, never>> = {
  id: "kth-smallest-product-of-two-sorted-arrays",
  number: 2040,
  title: "Kth Smallest Product of Two Sorted Arrays",
  category: "leetcode",
  difficulty: "hard",
  url: "https://leetcode.com/problems/kth-smallest-product-of-two-sorted-arrays/",
  summary: "Binary-search the product value; a sign-aware counter of pairs with product ≤ x pins down the k-th.",
  prompt:
    "Given two sorted arrays nums1 and nums2 (values may be negative), return the k-th smallest product " +
    "nums1[i] · nums2[j] over all pairs.",
  topics: ["Array", "Binary Search"],
  tags: ["Binary Search"],
  companies: ["Bloomberg"],
  frequency: 24.9,
  code: CODE,
  language: "javascript",
  complexity: { timeAverage: "O(m log n log V)", timeWorst: "O(m log n log V)", space: "O(1)" },
  inputSchema: [],
  makeDefaultInput: () => ({ nums1: [2, 5], nums2: [3, 4], k: 2 }),
  defaultOptions: {},
  buildSteps: (input) => kthProductSteps(input.nums1, input.nums2, input.k),
  Renderer: KthProductRenderer,
};
