import type { Step } from "@/core/types";

export interface DoubledData {
  sorted: number[];
  /** role per index: "base" | "double" | "" */
  roles: string[];
  base: number | null;
  dbl: number | null;
  res: number[];
  answer: number[] | null;
  failed: boolean;
}

export type DoubledStep = Step<DoubledData>;

/**
 * In a sorted doubled array the smallest unused value must be an original (nothing halves to it), so it
 * pairs with the earliest unused copy of its double. Consuming pairs greedily from small to large either
 * uses everything (a valid original) or gets stuck (impossible). `line` indexes CODE.
 */
export function doubledSteps(changed: number[]): DoubledStep[] {
  const steps: DoubledStep[] = [];
  const sorted = [...changed].sort((a, b) => a - b);
  const n = sorted.length;
  const roles = new Array(n).fill("");
  const res: number[] = [];

  const snap = (o: Partial<DoubledData>): DoubledData => ({ sorted, roles: [...roles], base: null, dbl: null, res: [...res], answer: null, failed: false, ...o });
  const push = (line: number, explanation: string, o: Partial<DoubledData> = {}) => {
    steps.push({ id: steps.length, line, explanation, data: snap(o), highlights: [] });
  };

  if (n % 2) {
    push(1, "Odd length can't be a doubled array → [].", { answer: [], failed: true });
    return steps;
  }

  // index queues per value with a moving pointer
  const pos = new Map<number, number[]>();
  sorted.forEach((v, i) => {
    if (!pos.has(v)) pos.set(v, []);
    pos.get(v)!.push(i);
  });
  const ptr = new Map<number, number>();
  const used = new Array(n).fill(false);

  push(2, `Sort ascending: [${sorted.join(", ")}]. Pair each smallest unused value with its double.`);

  for (let i = 0; i < n; i++) {
    if (used[i]) continue;
    const x = sorted[i];
    used[i] = true;
    const list = pos.get(2 * x) ?? [];
    let p = ptr.get(2 * x) ?? 0;
    while (p < list.length && (used[list[p]] || list[p] === i)) p++;
    ptr.set(2 * x, p);
    if (p >= list.length) {
      roles[i] = "base";
      push(9, `No unused ${2 * x} to double ${x} → impossible, return [].`, { base: i, answer: [], failed: true });
      return steps;
    }
    const k = list[p];
    used[k] = true;
    roles[i] = "base";
    roles[k] = "double";
    res.push(x);
    push(12, `Pair ${x} (base) with ${2 * x} at index ${k} → original gets ${x}.`, { base: i, dbl: k });
  }

  push(14, `Original array: [${res.join(", ")}].`, { answer: [...res] });
  return steps;
}
