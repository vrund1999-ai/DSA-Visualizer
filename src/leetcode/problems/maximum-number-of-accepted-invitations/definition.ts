import type { LeetCodeProblem } from "../../types";
import type { InvitationsData } from "./algorithm";
import { invitationsSteps } from "./algorithm";
import { CODE } from "./code";
import { InvitationsRenderer } from "./InvitationsRenderer";

export const maximumAcceptedInvitationsProblem: LeetCodeProblem<number[][], InvitationsData, Record<string, never>> = {
  id: "maximum-number-of-accepted-invitations",
  number: 1820,
  title: "Maximum Number of Accepted Invitations",
  category: "leetcode",
  difficulty: "medium",
  url: "https://leetcode.com/problems/maximum-number-of-accepted-invitations/",
  summary: "Maximum bipartite matching: each boy runs an augmenting-path search over invitable girls.",
  prompt:
    "grid[i][j] = 1 means boy i can invite girl j to the party. Each person accepts at most one " +
    "invitation. Return the maximum number of invitations that can be accepted.",
  topics: ["Array", "Depth-First Search", "Graph", "Matrix"],
  tags: ["Graph", "Depth-First Search", "Matrix"],
  companies: ["Bloomberg"],
  frequency: 34.1,
  code: CODE,
  language: "javascript",
  complexity: { timeAverage: "O(V·E)", timeWorst: "O(V·E)", space: "O(V)" },
  inputSchema: [],
  makeDefaultInput: () => [
    [1, 1, 1],
    [1, 0, 1],
    [0, 0, 1],
  ],
  defaultOptions: {},
  buildSteps: (input) => invitationsSteps(input),
  Renderer: InvitationsRenderer,
};
