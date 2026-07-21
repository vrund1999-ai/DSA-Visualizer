import { makePlaceholderProblem } from "../../placeholder";

export const validParenthesesProblem = makePlaceholderProblem({
  id: "valid-parentheses",
  number: 20,
  title: "Valid Parentheses",
  difficulty: "easy",
  url: "https://leetcode.com/problems/valid-parentheses/",
  summary: "Decide if a string of brackets is correctly matched.",
  prompt:
    "Given a string `s` containing just the characters `()[]{}`, determine if " +
    "the input is valid. Brackets must be closed by the same type and in the " +
    "correct order, and every closing bracket must have a matching opener.",
  topics: ["Stack", "String"],
});
