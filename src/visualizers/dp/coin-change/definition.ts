import type { VisualizerDefinition } from "@/core/types";
import type { TableData } from "../types";
import { TableRenderer } from "../TableRenderer";
import { coinChangeSteps, type CoinChangeInput } from "./algorithm";
import { COIN_CHANGE_CODE } from "./code";

const COIN_SETS = [
  [1, 3, 4],
  [1, 2, 5],
  [2, 3, 7],
  [1, 4, 5],
];
const randInt = (min: number, max: number) =>
  Math.floor(Math.random() * (max - min + 1)) + min;

function makeCoinChangeInput(): CoinChangeInput {
  return {
    coins: COIN_SETS[randInt(0, COIN_SETS.length - 1)],
    amount: randInt(8, 12),
  };
}

export const coinChangeDefinition: VisualizerDefinition<
  CoinChangeInput,
  TableData,
  Record<string, never>
> = {
  id: "coin-change",
  title: "Coin Change (Min Coins)",
  category: "dp",
  summary: "Finds the fewest coins to make an amount, building up from smaller amounts.",
  tags: ["1D table", "unbounded"],
  code: COIN_CHANGE_CODE,
  language: "typescript",
  complexity: {
    timeBest: "O(amount × coins)",
    timeAverage: "O(amount × coins)",
    timeWorst: "O(amount × coins)",
    space: "O(amount)",
  },
  inputSchema: [{ kind: "custom" }],
  makeDefaultInput: makeCoinChangeInput,
  defaultOptions: {},
  buildSteps: (input) => coinChangeSteps(input),
  Renderer: TableRenderer,
};
