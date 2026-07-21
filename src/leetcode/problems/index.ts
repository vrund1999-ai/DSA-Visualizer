import { twoSumProblem } from "./two-sum/definition";
import { validParenthesesProblem } from "./valid-parentheses/definition";
import { mergeIntervalsProblem } from "./merge-intervals/definition";
import type { AnyLeetCodeProblem } from "../types";

/** Every LeetCode problem. Add new problems to this list. */
export const leetcodeProblems: AnyLeetCodeProblem[] = [
  twoSumProblem,
  validParenthesesProblem,
  mergeIntervalsProblem,
];
