import type { Highlight } from "@/core/types";
import type { MapEntry, TwoSumData, TwoSumInput, TwoSumStep } from "./types";

/**
 * Pure step generator for the one-pass hash-map solution to Two Sum. As it
 * scans, each value's complement (target − value) is looked up in a map of
 * previously-seen values; the first hit is the answer. `line` indexes into
 * TWO_SUM_CODE.
 */
export function twoSumSteps(input: TwoSumInput): TwoSumStep[] {
  const { nums, target } = input;
  const steps: TwoSumStep[] = [];
  const map: MapEntry[] = [];
  let lookups = 0;

  const snapshot = (over: Partial<TwoSumData>): TwoSumData => ({
    nums: [...nums],
    target,
    map: map.map((e) => ({ ...e })),
    current: null,
    complement: null,
    activeMapIndex: null,
    found: null,
    status: "searching",
    ...over,
  });

  const push = (
    line: number,
    explanation: string,
    data: TwoSumData,
    highlights: Highlight[],
  ) => {
    steps.push({
      id: steps.length,
      line,
      explanation,
      data,
      highlights,
      metrics: { lookups, seen: map.length },
    });
  };

  /** Every index already stored in the map, marked as processed. */
  const visited = (): Highlight[] =>
    map.map((e) => ({ ref: e.index, role: "visited" as const }));

  push(
    1,
    "Start with an empty hash map that remembers each value we've seen and its index.",
    snapshot({}),
    [],
  );

  for (let i = 0; i < nums.length; i++) {
    const x = nums[i];
    const complement = target - x;

    push(
      3,
      `Look at nums[${i}] = ${x}. Its complement is target − ${x} = ${complement}.`,
      snapshot({ current: i, complement }),
      [...visited(), { ref: i, role: "current" }],
    );

    lookups++;
    const match = map.find((e) => e.value === complement);

    if (match) {
      push(
        4,
        `Is ${complement} in the map? Yes — it was stored at index ${match.index}.`,
        snapshot({ current: i, complement, activeMapIndex: match.index }),
        [
          ...visited().filter((h) => h.ref !== match.index),
          { ref: match.index, role: "compared" },
          { ref: i, role: "current" },
        ],
      );
      const found: [number, number] = [match.index, i];
      push(
        5,
        `Found the pair: indices ${match.index} and ${i} (${nums[match.index]} + ${x} = ${target}).`,
        snapshot({
          current: i,
          complement,
          activeMapIndex: match.index,
          found,
          status: "found",
        }),
        [
          { ref: match.index, role: "target" },
          { ref: i, role: "target" },
        ],
      );
      return steps;
    }

    push(
      4,
      `Is ${complement} in the map? No — not yet.`,
      snapshot({ current: i, complement }),
      [...visited(), { ref: i, role: "current" }],
    );

    map.push({ value: x, index: i });
    push(
      7,
      `Store ${x} → index ${i} in the map, then move on.`,
      snapshot({ current: i, activeMapIndex: i }),
      [...visited()],
    );
  }

  push(
    9,
    "Scanned the whole array without finding a matching complement — no solution, return [].",
    snapshot({ status: "none" }),
    [...visited()],
  );

  return steps;
}
