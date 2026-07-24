import type { Step } from "@/core/types";

export interface OrderedStreamData {
  /** slots 1..n (index 0 unused), null = not yet inserted */
  data: (string | null)[];
  ptr: number;
  /** id just inserted */
  inserted: number | null;
  /** chunk returned by this insert */
  emitted: string[];
}

export type OrderedStreamStep = Step<OrderedStreamData>;

/**
 * Values arrive out of order but each has a fixed id. Store each at its slot; a
 * pointer marks the next id still owed. After an insert, emit the now-contiguous run
 * starting at the pointer. `line` indexes CODE.
 */
export function orderedStreamSteps(n: number, inserts: [number, string][]): OrderedStreamStep[] {
  const steps: OrderedStreamStep[] = [];
  const data: (string | null)[] = new Array(n + 1).fill(null);
  let ptr = 1;

  const snap = (o: Partial<OrderedStreamData>): OrderedStreamData => ({ data: [...data], ptr, inserted: null, emitted: [], ...o });
  const push = (line: number, explanation: string, data: OrderedStreamData) => {
    steps.push({ id: steps.length, line, explanation, data, highlights: [] });
  };

  push(3, "Store values by id; a pointer marks the next id still owed.", snap({}));

  for (const [idKey, value] of inserts) {
    data[idKey] = value;
    push(6, `insert(${idKey}, "${value}") — place at slot ${idKey}.`, snap({ inserted: idKey }));
    const emitted: string[] = [];
    while (ptr <= n && data[ptr] != null) {
      emitted.push(data[ptr] as string);
      ptr++;
    }
    push(12, emitted.length ? `Emit contiguous run: [${emitted.join(", ")}].` : "Nothing to emit yet (gap before pointer).", snap({ inserted: idKey, emitted }));
  }

  return steps;
}
