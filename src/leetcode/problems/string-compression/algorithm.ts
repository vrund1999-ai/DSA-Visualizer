import type { Highlight, Step } from "@/core/types";

export interface CompressData {
  chars: string[];
  write: number;
  read: number | null;
  length: number;
}

export type CompressStep = Step<CompressData>;

/**
 * Two pointers: `read` scans runs of equal characters while `write` overwrites
 * the array in place with each character followed by its count (when > 1). The
 * returned length is where `write` stops. `line` indexes CODE.
 */
export function compressSteps(input: string[]): CompressStep[] {
  const chars = [...input];
  const steps: CompressStep[] = [];
  let write = 0;
  let read = 0;

  const snap = (o: Partial<CompressData>): CompressData => ({ chars: [...chars], write, read: null, length: write, ...o });
  const push = (line: number, explanation: string, data: CompressData, highlights: Highlight[]) => {
    steps.push({ id: steps.length, line, explanation, data, highlights });
  };

  push(1, "Overwrite the array in place with each run's char + count.", snap({}), []);

  while (read < chars.length) {
    const c = chars[read];
    let count = 0;
    const runStart = read;
    while (read < chars.length && chars[read] === c) {
      read++;
      count++;
    }
    push(4, `Run of '${c}' × ${count} (indices ${runStart}..${read - 1}).`, snap({ read }), [{ ref: runStart, role: "compared" }]);
    chars[write] = c;
    push(5, `Write '${c}' at position ${write}.`, snap({ read }), [{ ref: write, role: "sorted" }]);
    write++;
    if (count > 1) {
      for (const d of String(count)) {
        chars[write] = d;
        push(8, `Write count digit '${d}' at position ${write}.`, snap({ read }), [{ ref: write, role: "swapped" }]);
        write++;
      }
    }
  }

  push(10, `Compressed length is ${write}.`, snap({ read: null }), Array.from({ length: write }, (_, k) => ({ ref: k, role: "target" }) as Highlight));
  return steps;
}
