import type { Highlight, Step } from "@/core/types";

export interface RansomInput {
  ransom: string;
  magazine: string;
}

export interface CountEntry {
  char: string;
  n: number;
}

export interface RansomData {
  ransom: string[];
  magazine: string[];
  i: number | null;
  counts: CountEntry[];
  phase: "count" | "spend" | "done";
  result: boolean | null;
}

export type RansomStep = Step<RansomData>;

const toEntries = (m: Map<string, number>): CountEntry[] => [...m.entries()].map(([char, n]) => ({ char, n }));

/**
 * Tally the magazine's letters, then "spend" one per ransom letter. Running out
 * of any letter means the note can't be built. `line` indexes CODE.
 */
export function ransomSteps(input: RansomInput): RansomStep[] {
  const ransom = [...input.ransom];
  const magazine = [...input.magazine];
  const steps: RansomStep[] = [];
  const count = new Map<string, number>();
  let result: boolean | null = null;

  const snap = (o: Partial<RansomData>): RansomData => ({
    ransom: [...ransom],
    magazine: [...magazine],
    i: null,
    counts: toEntries(count),
    phase: "count",
    result,
    ...o,
  });
  const push = (line: number, explanation: string, data: RansomData, highlights: Highlight[]) => {
    steps.push({ id: steps.length, line, explanation, data, highlights });
  };

  push(1, "Count the magazine's letters, then spend them on the ransom note.", snap({}), []);
  for (let i = 0; i < magazine.length; i++) {
    count.set(magazine[i], (count.get(magazine[i]) ?? 0) + 1);
    push(3, `Count '${magazine[i]}' → ${count.get(magazine[i])}.`, snap({ i, phase: "count" }), [{ ref: `m${i}`, role: "current" }]);
  }

  push(4, "Now consume one letter per ransom character.", snap({ phase: "spend" }), []);
  for (let i = 0; i < ransom.length; i++) {
    const c = ransom[i];
    if (!count.get(c)) {
      result = false;
      push(5, `No '${c}' left in the magazine — can't build the note.`, snap({ i, phase: "spend", result: false }), [{ ref: `r${i}`, role: "swapped" }]);
      return steps;
    }
    count.set(c, count.get(c)! - 1);
    push(6, `Use '${c}' → ${count.get(c)} remaining.`, snap({ i, phase: "spend" }), [{ ref: `r${i}`, role: "sorted" }]);
  }

  result = true;
  push(8, "Every ransom letter was covered — the note can be built.", snap({ phase: "done", result: true }), []);
  return steps;
}
