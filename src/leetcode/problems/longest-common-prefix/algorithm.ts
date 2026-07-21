import type { Highlight, Step } from "@/core/types";

export interface LCPData {
  words: string[];
  col: number | null;
  row: number | null;
  prefixLen: number;
  done: boolean;
}

export type LCPStep = Step<LCPData>;

const cell = (r: number, c: number) => `${r}-${c}`;

/**
 * Vertical scanning: fix a column and confirm every word shares the first
 * word's character there. The first mismatch (or a word that ends) fixes the
 * prefix length. `line` indexes CODE.
 */
export function lcpSteps(words: string[]): LCPStep[] {
  const steps: LCPStep[] = [];
  let prefixLen = 0;

  const confirmed = (): Highlight[] => {
    const hl: Highlight[] = [];
    for (let r = 0; r < words.length; r++) {
      for (let c = 0; c < prefixLen; c++) hl.push({ ref: cell(r, c), role: "target" });
    }
    return hl;
  };
  const snap = (o: Partial<LCPData>): LCPData => ({
    words: [...words],
    col: null,
    row: null,
    prefixLen,
    done: false,
    ...o,
  });
  const push = (
    line: number,
    explanation: string,
    data: LCPData,
    highlights: Highlight[],
  ) => {
    steps.push({ id: steps.length, line, explanation, data, highlights, metrics: { prefixLen } });
  };

  if (words.length === 0) {
    push(1, "No strings — the common prefix is empty.", snap({ done: true }), []);
    return steps;
  }

  push(2, "Scan column by column; every word must match the first word's letter.", snap({}), []);

  for (let col = 0; col < words[0].length; col++) {
    const c = words[0][col];
    for (let row = 1; row < words.length; row++) {
      const mismatch = col >= words[row].length || words[row][col] !== c;
      push(
        5,
        mismatch
          ? `'${words[row][col] ?? "∅"}' in "${words[row]}" ≠ '${c}' — stop. Prefix length is ${col}.`
          : `Column ${col}: '${words[row][col]}' in "${words[row]}" matches '${c}'.`,
        snap({ col, row }),
        [
          ...confirmed(),
          { ref: cell(0, col), role: "current" },
          { ref: cell(row, col), role: mismatch ? "swapped" : "compared" },
        ],
      );
      if (mismatch) {
        return finish(steps, snap, prefixLen);
      }
    }
    prefixLen = col + 1;
  }

  return finish(steps, snap, prefixLen, true);
}

function finish(
  steps: LCPStep[],
  snap: (o: Partial<LCPData>) => LCPData,
  prefixLen: number,
  full = false,
): LCPStep[] {
  const data = snap({ done: true, prefixLen });
  const hl: Highlight[] = [];
  for (let r = 0; r < data.words.length; r++) {
    for (let c = 0; c < prefixLen; c++) hl.push({ ref: `${r}-${c}`, role: "target" });
  }
  steps.push({
    id: steps.length,
    line: full ? 10 : 6,
    explanation:
      prefixLen === 0
        ? "No common prefix."
        : `Longest common prefix is "${data.words[0].slice(0, prefixLen)}".`,
    data,
    highlights: hl,
    metrics: { prefixLen },
  });
  return steps;
}
