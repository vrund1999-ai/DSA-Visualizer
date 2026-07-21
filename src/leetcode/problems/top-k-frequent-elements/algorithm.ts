import type { Step } from "@/core/types";

export interface CountEntry {
  value: number;
  n: number;
}

export interface Bucket {
  freq: number;
  values: number[];
}

export interface TopKData {
  counts: CountEntry[];
  buckets: Bucket[];
  result: number[];
  k: number;
  phase: "count" | "bucket" | "collect" | "done";
  activeFreq: number | null;
}

export type TopKStep = Step<TopKData>;

/**
 * Count frequencies, then bucket values by frequency (index = count). Reading
 * buckets from the highest frequency down yields the k most frequent in O(n) —
 * no full sort needed. `line` indexes CODE.
 */
export function topKSteps(nums: number[], k: number): TopKStep[] {
  const steps: TopKStep[] = [];
  const count = new Map<number, number>();
  const buckets: number[][] = [];
  const result: number[] = [];

  const bucketList = (): Bucket[] => {
    const out: Bucket[] = [];
    for (let c = buckets.length - 1; c >= 1; c--) if (buckets[c]) out.push({ freq: c, values: [...buckets[c]] });
    return out;
  };
  const countList = (): CountEntry[] => [...count.entries()].map(([value, n]) => ({ value, n }));

  const push = (line: number, explanation: string, phase: TopKData["phase"], activeFreq: number | null = null) => {
    steps.push({
      id: steps.length,
      line,
      explanation,
      data: { counts: countList(), buckets: bucketList(), result: [...result], k, phase, activeFreq },
      highlights: [],
    });
  };

  push(1, "Count how often each value appears.", "count");
  for (const x of nums) {
    count.set(x, (count.get(x) ?? 0) + 1);
    push(2, `Count ${x} → ${count.get(x)}.`, "count");
  }

  push(3, "Bucket each value by its frequency (index = count).", "bucket");
  for (const [x, c] of count) {
    (buckets[c] ??= []).push(x);
    push(4, `Value ${x} has frequency ${c} — put it in bucket ${c}.`, "bucket", c);
  }

  push(5, `Read buckets from the highest frequency, taking ${k} values.`, "collect");
  for (let c = buckets.length - 1; c >= 0 && result.length < k; c--) {
    if (buckets[c]) {
      result.push(...buckets[c]);
      push(7, `Take bucket ${c}: ${buckets[c].join(", ")}.`, "collect", c);
    }
  }

  const final = result.slice(0, k);
  result.length = 0;
  result.push(...final);
  push(8, `Top ${k} frequent: ${final.join(", ")}.`, "done");
  return steps;
}
