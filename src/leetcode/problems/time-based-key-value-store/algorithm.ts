import type { Step } from "@/core/types";

export type TimeOp = ["set", string, string, number] | ["get", string, number];

export interface TimeMapData {
  /** key -> list of [timestamp, value], in insertion (increasing-timestamp) order */
  store: [string, [number, string][]][];
  op: string;
  /** during a get: the array index the binary search is examining */
  mid: number | null;
  /** candidate answer captured so far during a get */
  candidate: string | null;
  result: string | null;
  answer: string[] | null;
}

export type TimeMapStep = Step<TimeMapData>;

/**
 * Timestamps for a key arrive in increasing order, so each key's list stays sorted. A get is then a
 * binary search for the newest entry at or before the query time: whenever an entry qualifies we
 * record it and move to newer ones, otherwise we discard the newer half. `line` indexes CODE.
 */
export function timeMapSteps(ops: TimeOp[]): TimeMapStep[] {
  const steps: TimeMapStep[] = [];
  const store = new Map<string, [number, string][]>();
  const results: string[] = [];

  const entries = (): [string, [number, string][]][] => [...store.entries()].map(([k, v]) => [k, v.map((e) => [...e] as [number, string])]);
  const push = (line: number, explanation: string, op: string, o: Partial<TimeMapData> = {}) => {
    steps.push({ id: steps.length, line, explanation, data: { store: entries(), op, mid: null, candidate: null, result: null, answer: null, ...o }, highlights: [] });
  };

  push(1, "key → timestamp-sorted list; set appends, get binary-searches.", "init");

  for (const op of ops) {
    if (op[0] === "set") {
      const [, key, value, ts] = op;
      if (!store.has(key)) store.set(key, []);
      store.get(key)!.push([ts, value]);
      push(4, `set("${key}", "${value}", ${ts}) → append to "${key}".`, `set("${key}", "${value}", ${ts})`);
    } else {
      const [, key, ts] = op;
      const arr = store.get(key) ?? [];
      let lo = 0;
      let hi = arr.length - 1;
      let ans = "";
      while (lo <= hi) {
        const mid = (lo + hi) >> 1;
        if (arr[mid][0] <= ts) {
          ans = arr[mid][1];
          push(12, `get("${key}", ${ts}): a[${mid}] ts=${arr[mid][0]} ≤ ${ts} → candidate "${ans}", search newer.`, `get("${key}", ${ts})`, { mid, candidate: ans });
          lo = mid + 1;
        } else {
          push(13, `get("${key}", ${ts}): a[${mid}] ts=${arr[mid][0]} > ${ts} → discard newer half.`, `get("${key}", ${ts})`, { mid, candidate: ans || null });
          hi = mid - 1;
        }
      }
      results.push(ans);
      push(15, `get("${key}", ${ts}) → "${ans || "(empty)"}".`, `get("${key}", ${ts})`, { result: ans });
    }
  }

  steps.push({ id: steps.length, line: 17, explanation: `Processed ${ops.length} operations.`, data: { store: entries(), op: "done", mid: null, candidate: null, result: null, answer: results }, highlights: [] });
  return steps;
}
