import type { LeetCodeProblem } from "../../types";
import type { SecretData } from "./algorithm";
import { secretSteps } from "./algorithm";
import { CODE } from "./code";
import { SecretRenderer } from "./SecretRenderer";

interface SecretInput {
  n: number;
  delay: number;
  forget: number;
}

export const peopleAwareSecretProblem: LeetCodeProblem<SecretInput, SecretData, Record<string, never>> = {
  id: "number-of-people-aware-of-a-secret",
  number: 2327,
  title: "Number of People Aware of a Secret",
  category: "leetcode",
  difficulty: "medium",
  url: "https://leetcode.com/problems/number-of-people-aware-of-a-secret/",
  summary: "dp[day] counts new learners; a sliding window of eligible sharers feeds each day, mod 1e9+7.",
  prompt:
    "On day 1 one person learns a secret. Each person shares it daily with a new person from `delay` days " +
    "after learning until they forget it after `forget` days. Return how many know it on day n.",
  topics: ["Dynamic Programming", "Queue", "Simulation"],
  tags: ["Dynamic Programming", "Sliding Window"],
  companies: ["Bloomberg"],
  frequency: 18.0,
  code: CODE,
  language: "javascript",
  complexity: { timeAverage: "O(n)", timeWorst: "O(n)", space: "O(n)" },
  inputSchema: [],
  makeDefaultInput: () => ({ n: 6, delay: 2, forget: 4 }),
  defaultOptions: {},
  buildSteps: (input) => secretSteps(input.n, input.delay, input.forget),
  Renderer: SecretRenderer,
};
