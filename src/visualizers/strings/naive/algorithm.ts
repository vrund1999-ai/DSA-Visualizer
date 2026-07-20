import type { Highlight } from "@/core/types";
import { patRef, type StringInput, type StringStep } from "../types";

/**
 * Pure step generator for naive (brute-force) string matching: try every
 * alignment, comparing left to right until a mismatch. `line` points into
 * NAIVE_CODE.
 */
export function naiveSearchSteps(input: StringInput): StringStep[] {
  const { text, pattern } = input;
  const n = text.length;
  const m = pattern.length;
  const steps: StringStep[] = [];
  const found: number[] = [];
  let comparisons = 0;

  const push = (
    line: number,
    explanation: string,
    shift: number,
    highlights: Highlight[],
  ) => {
    steps.push({
      id: steps.length,
      line,
      explanation,
      data: { text, pattern, shift, found: [...found] },
      highlights,
      metrics: { comparisons, matches: found.length },
    });
  };

  for (let s = 0; s <= n - m; s++) {
    push(0, `Align the pattern at shift ${s}.`, s, []);
    let j = 0;
    const matched: Highlight[] = [];
    while (j < m) {
      comparisons++;
      const cmp: Highlight[] = [
        { ref: s + j, role: "current" },
        { ref: patRef(j), role: "current" },
      ];
      if (text[s + j] === pattern[j]) {
        push(2, `text[${s + j}] = '${text[s + j]}' matches pattern[${j}].`, s, [
          ...matched,
          ...cmp,
        ]);
        matched.push(
          { ref: s + j, role: "sorted" },
          { ref: patRef(j), role: "sorted" },
        );
        j++;
      } else {
        push(2, `text[${s + j}] = '${text[s + j]}' ≠ pattern[${j}] = '${pattern[j]}' — mismatch.`, s, [
          ...matched,
          { ref: s + j, role: "swapped" },
          { ref: patRef(j), role: "swapped" },
        ]);
        break;
      }
    }
    if (j === m) {
      found.push(s);
      push(3, `Full match at index ${s}.`, s, [
        ...Array.from({ length: m }, (_, k) => ({ ref: s + k, role: "sorted" as const })),
        ...Array.from({ length: m }, (_, k) => ({ ref: patRef(k), role: "sorted" as const })),
      ]);
    }
  }

  push(
    4,
    found.length ? `Done — matches at ${found.join(", ")}.` : `Done — no match found.`,
    0,
    found.flatMap((s) =>
      Array.from({ length: m }, (_, k) => ({ ref: s + k, role: "sorted" as const })),
    ),
  );

  return steps;
}
