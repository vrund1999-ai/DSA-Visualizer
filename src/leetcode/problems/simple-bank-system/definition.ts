import type { LeetCodeProblem } from "../../types";
import type { BankData, BankOp } from "./algorithm";
import { bankSteps } from "./algorithm";
import { CODE } from "./code";
import { BankRenderer } from "./BankRenderer";

interface BankInput {
  balance: number[];
  ops: BankOp[];
}

export const simpleBankSystemProblem: LeetCodeProblem<BankInput, BankData, Record<string, never>> = {
  id: "simple-bank-system",
  number: 2043,
  title: "Simple Bank System",
  category: "leetcode",
  difficulty: "medium",
  url: "https://leetcode.com/problems/simple-bank-system/",
  summary: "withdraw/deposit/transfer succeed only with a valid account number and (for outflows) sufficient balance.",
  prompt:
    "Implement a bank with n accounts supporting transfer, deposit and withdraw. Each operation returns " +
    "whether it succeeded (valid account numbers and enough money).",
  topics: ["Array", "Hash Table", "Design", "Simulation"],
  tags: ["Design", "Simulation"],
  companies: ["Bloomberg"],
  frequency: 13.6,
  code: CODE,
  language: "javascript",
  complexity: { timeAverage: "O(1) per op", timeWorst: "O(1)", space: "O(n)" },
  inputSchema: [],
  makeDefaultInput: () => ({
    balance: [10, 100, 20, 50, 30],
    ops: [
      { type: "withdraw", a: 3, money: 10 },
      { type: "transfer", a1: 5, a2: 1, money: 20 },
      { type: "deposit", a: 5, money: 20 },
      { type: "transfer", a1: 3, a2: 4, money: 15 },
      { type: "withdraw", a: 10, money: 50 },
    ],
  }),
  defaultOptions: {},
  buildSteps: (input) => bankSteps(input.balance, input.ops),
  Renderer: BankRenderer,
};
