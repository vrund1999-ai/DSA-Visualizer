import type { LeetCodeProblem } from "../../types";
import type { MailboxesData } from "./algorithm";
import { mailboxesSteps } from "./algorithm";
import { CODE } from "./code";
import { MailboxesRenderer } from "./MailboxesRenderer";

interface MailboxesInput {
  houses: number[];
  k: number;
}

export const allocateMailboxesProblem: LeetCodeProblem<MailboxesInput, MailboxesData, Record<string, never>> = {
  id: "allocate-mailboxes",
  number: 1478,
  title: "Allocate Mailboxes",
  category: "leetcode",
  difficulty: "hard",
  url: "https://leetcode.com/problems/allocate-mailboxes/",
  summary: "Partition sorted houses into k contiguous groups; each group's cost is distance to its median.",
  prompt:
    "Given house positions and k mailboxes, place the mailboxes to minimize the total distance from " +
    "each house to its nearest mailbox, and return that minimum.",
  topics: ["Array", "Math", "Dynamic Programming", "Sorting"],
  tags: ["Array", "Dynamic Programming", "Sorting"],
  companies: ["Bloomberg"],
  frequency: 34.1,
  code: CODE,
  language: "javascript",
  complexity: { timeAverage: "O(n²k)", timeWorst: "O(n²k)", space: "O(nk)" },
  inputSchema: [],
  makeDefaultInput: () => ({ houses: [1, 4, 8, 10, 20], k: 3 }),
  defaultOptions: {},
  buildSteps: (input) => mailboxesSteps(input.houses, input.k),
  Renderer: MailboxesRenderer,
};
