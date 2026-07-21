import { twoSumProblem } from "./two-sum/definition";
import { validParenthesesProblem } from "./valid-parentheses/definition";
import { mergeIntervalsProblem } from "./merge-intervals/definition";
import { bestTimeToBuyStockProblem } from "./best-time-to-buy-and-sell-stock/definition";
import { moveZeroesProblem } from "./move-zeroes/definition";
import { containerWithMostWaterProblem } from "./container-with-most-water/definition";
import { threeSumProblem } from "./3sum/definition";
import { trappingRainWaterProblem } from "./trapping-rain-water/definition";
import { longestSubstringProblem } from "./longest-substring-without-repeating-characters/definition";
import { binarySearchProblem } from "./binary-search/definition";
import { maximumSubarrayProblem } from "./maximum-subarray/definition";
import { productExceptSelfProblem } from "./product-of-array-except-self/definition";
import { climbingStairsProblem } from "./climbing-stairs/definition";
import { validAnagramProblem } from "./valid-anagram/definition";
import { longestCommonPrefixProblem } from "./longest-common-prefix/definition";
import { longestPalindromicSubstringProblem } from "./longest-palindromic-substring/definition";
import { groupAnagramsProblem } from "./group-anagrams/definition";
import { reverseLinkedListProblem } from "./reverse-linked-list/definition";
import { mergeTwoSortedListsProblem } from "./merge-two-sorted-lists/definition";
import { addTwoNumbersProblem } from "./add-two-numbers/definition";
import { numberOfIslandsProblem } from "./number-of-islands/definition";
import { wordSearchProblem } from "./word-search/definition";
import type { AnyLeetCodeProblem } from "../types";

/**
 * Hand-built LeetCode problems (each with a bespoke visualizer). Every other
 * Bloomberg-tagged problem is imported in bulk (see bulkProblems.ts) and shown
 * via the PlaceholderRenderer until a bespoke visual is added here.
 *
 * Add a new problem by creating src/leetcode/problems/<slug>/ (code, algorithm,
 * Renderer, definition) and appending its definition to this list.
 */
export const leetcodeProblems: AnyLeetCodeProblem[] = [
  twoSumProblem,
  validParenthesesProblem,
  mergeIntervalsProblem,
  bestTimeToBuyStockProblem,
  moveZeroesProblem,
  containerWithMostWaterProblem,
  threeSumProblem,
  trappingRainWaterProblem,
  longestSubstringProblem,
  binarySearchProblem,
  maximumSubarrayProblem,
  productExceptSelfProblem,
  climbingStairsProblem,
  validAnagramProblem,
  longestCommonPrefixProblem,
  longestPalindromicSubstringProblem,
  groupAnagramsProblem,
  reverseLinkedListProblem,
  mergeTwoSortedListsProblem,
  addTwoNumbersProblem,
  numberOfIslandsProblem,
  wordSearchProblem,
];
