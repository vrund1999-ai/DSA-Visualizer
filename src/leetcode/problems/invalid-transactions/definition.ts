import type { LeetCodeProblem } from "../../types";
import type { InvalidTxData } from "./algorithm";
import { invalidTxSteps } from "./algorithm";
import { CODE } from "./code";
import { InvalidTxRenderer } from "./InvalidTxRenderer";

export const invalidTransactionsProblem: LeetCodeProblem<
  string[],
  InvalidTxData,
  Record<string, never>
> = {
  id: "invalid-transactions",
  number: 1169,
  title: "Invalid Transactions",
  category: "leetcode",
  difficulty: "medium",
  url: "https://leetcode.com/problems/invalid-transactions/",
  summary: "Flag transactions over $1000 or duplicated across cities.",
  prompt:
    "Each transaction is 'name,time,amount,city'. A transaction is invalid if its " +
    "amount exceeds $1000, or if the same name occurs in a different city within " +
    "60 minutes. Return all invalid transactions.",
  topics: ["Array", "Hash Table", "String", "Sorting"],
  tags: ["Array", "Hash Table", "String", "Sorting"],
  companies: ["Bloomberg"],
  frequency: 79.1,
  code: CODE,
  language: "javascript",
  complexity: { timeAverage: "O(n²)", timeWorst: "O(n²)", space: "O(n)" },
  inputSchema: [],
  makeDefaultInput: () => [
    "alice,20,800,mtv",
    "alice,50,1200,mtv",
    "bob,30,1000,nyc",
    "alice,60,900,ldn",
  ],
  defaultOptions: {},
  buildSteps: (input) => invalidTxSteps(input),
  Renderer: InvalidTxRenderer,
};
