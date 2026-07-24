import type { Step } from "@/core/types";

export interface LRUOp {
  op: "get" | "put";
  key: number;
  value?: number;
}

export interface LRUEntry {
  key: number;
  value: number;
}

export interface LRUData {
  capacity: number;
  /** Least-recently-used first, most-recently-used last. */
  entries: LRUEntry[];
  op: string;
  result: string | null;
  touched: number | null;
  evicted: number | null;
}

export type LRUStep = Step<LRUData>;

/**
 * A Map preserves insertion order, so it doubles as the recency list: the first
 * key is least-recently-used, the last is most-recent. Every access re-inserts
 * the key at the end; a put past capacity evicts the first key. `line` indexes
 * CODE.
 */
export function lruSteps(capacity: number, ops: LRUOp[]): LRUStep[] {
  const steps: LRUStep[] = [];
  const map = new Map<number, number>();

  const entries = (): LRUEntry[] => [...map.entries()].map(([key, value]) => ({ key, value }));
  const push = (line: number, op: string, result: string | null, touched: number | null = null, evicted: number | null = null) => {
    steps.push({ id: steps.length, line, explanation: result ? `${op} → ${result}` : op, data: { capacity, entries: entries(), op, result, touched, evicted }, highlights: [] });
  };

  push(2, `new LRUCache(${capacity})`, null);

  for (const { op, key, value } of ops) {
    if (op === "get") {
      if (!map.has(key)) {
        push(5, `get(${key})`, "-1 (miss)");
      } else {
        const v = map.get(key)!;
        map.delete(key);
        map.set(key, v);
        push(7, `get(${key})`, `${v} — mark most-recent`, key);
      }
    } else if (value !== undefined) {
      if (map.has(key)) map.delete(key);
      map.set(key, value);
      let evicted: number | null = null;
      if (map.size > capacity) {
        evicted = map.keys().next().value ?? null;
        if (evicted !== null) map.delete(evicted);
      }
      push(evicted !== null ? 14 : 12, `put(${key}, ${value})`, evicted !== null ? `evict LRU key ${evicted}` : "stored", key, evicted);
    }
  }

  return steps;
}
