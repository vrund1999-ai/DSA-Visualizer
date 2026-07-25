import type { Step } from "@/core/types";

export interface RankData {
  arr: number[];
  sorted: number[];
  /** value -> rank pairs assigned so far */
  rank: [number, number][];
  /** index into `arr` being replaced during the map phase */
  mapIdx: number | null;
  result: (number | null)[];
  phase: "sort" | "rank" | "map" | "done";
  answer: number[] | null;
}

export type RankStep = Step<RankData>;

/**
 * A value's rank is its position among the sorted distinct values (smallest = 1, ties equal). So we
 * sort the unique values, record each one's 1-based rank, then replace every element by its stored
 * rank. `line` indexes CODE.
 */
export function rankSteps(arr: number[]): RankStep[] {
  const steps: RankStep[] = [];
  const sorted = [...new Set(arr)].sort((a, b) => a - b);
  const rank = new Map<number, number>();
  const result: (number | null)[] = new Array(arr.length).fill(null);

  const snap = (o: Partial<RankData>): RankData => ({ arr, sorted, rank: [...rank.entries()], mapIdx: null, result: [...result], phase: "sort", answer: null, ...o });
  const push = (line: number, explanation: string, o: Partial<RankData> = {}) => {
    steps.push({ id: steps.length, line, explanation, data: snap(o), highlights: [] });
  };

  push(1, `Sort distinct values: [${sorted.join(", ")}].`, { phase: "sort" });

  sorted.forEach((v, i) => {
    rank.set(v, i + 1);
    push(3, `${v} is the ${i + 1}${i === 0 ? "st" : i === 1 ? "nd" : i === 2 ? "rd" : "th"} smallest → rank ${i + 1}.`, { phase: "rank" });
  });

  for (let i = 0; i < arr.length; i++) {
    result[i] = rank.get(arr[i])!;
    push(4, `arr[${i}] = ${arr[i]} → rank ${result[i]}.`, { phase: "map", mapIdx: i });
  }

  push(4, `Ranks: [${result.join(", ")}].`, { phase: "done", answer: result.map((x) => x!) });
  return steps;
}
