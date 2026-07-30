import type { LeetCodeProblem } from "../../types";
import type { TwitterData, TwitterOp } from "./algorithm";
import { twitterSteps } from "./algorithm";
import { CODE } from "./code";
import { TwitterRenderer } from "./TwitterRenderer";

interface TwitterInput {
  ops: TwitterOp[];
}

export const designTwitterProblem: LeetCodeProblem<TwitterInput, TwitterData, Record<string, never>> = {
  id: "design-twitter",
  number: 355,
  title: "Design Twitter",
  category: "leetcode",
  difficulty: "medium",
  url: "https://leetcode.com/problems/design-twitter/",
  summary: "Timestamped tweets plus follow sets; a feed merges the 10 most recent tweets from a user and their followees.",
  prompt:
    "Design Twitter supporting postTweet, getNewsFeed (10 most recent tweets from the user and those they " +
    "follow, newest first), follow and unfollow.",
  topics: ["Hash Table", "Linked List", "Design", "Heap (Priority Queue)"],
  tags: ["Design", "Heap"],
  companies: ["Bloomberg"],
  frequency: 13.6,
  code: CODE,
  language: "javascript",
  complexity: { timeAverage: "O(n log n) per feed", timeWorst: "O(n log n)", space: "O(n)" },
  inputSchema: [],
  makeDefaultInput: () => ({
    ops: [
      { type: "postTweet", user: 1, tweet: 5 },
      { type: "getNewsFeed", user: 1 },
      { type: "follow", a: 1, b: 2 },
      { type: "postTweet", user: 2, tweet: 6 },
      { type: "getNewsFeed", user: 1 },
      { type: "unfollow", a: 1, b: 2 },
      { type: "getNewsFeed", user: 1 },
    ],
  }),
  defaultOptions: {},
  buildSteps: (input) => twitterSteps(input.ops),
  Renderer: TwitterRenderer,
};
