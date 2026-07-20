import type { Highlight } from "@/core/types";
import { patRef, type StringInput, type StringStep } from "../types";

/** Longest proper prefix that is also a suffix, for each pattern prefix. */
function buildLPS(pat: string): number[] {
  const lps = Array(pat.length).fill(0);
  let len = 0;
  for (let i = 1; i < pat.length; ) {
    if (pat[i] === pat[len]) lps[i++] = ++len;
    else if (len > 0) len = lps[len - 1];
    else lps[i++] = 0;
  }
  return lps;
}

/**
 * Pure step generator for Knuth–Morris–Pratt matching. On a mismatch it reuses
 * the LPS table to skip ahead without re-checking known-matching characters.
 * `line` points into KMP_CODE.
 */
export function kmpSearchSteps(input: StringInput): StringStep[] {
  const { text, pattern } = input;
  const n = text.length;
  const m = pattern.length;
  const lps = buildLPS(pattern);
  const steps: StringStep[] = [];
  const found: number[] = [];
  let comparisons = 0;

  const matched = (shift: number, count: number): Highlight[] => [
    ...Array.from({ length: count }, (_, k) => ({ ref: shift + k, role: "sorted" as const })),
    ...Array.from({ length: count }, (_, k) => ({ ref: patRef(k), role: "sorted" as const })),
  ];

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

  push(0, `Precompute the LPS table for "${pattern}": [${lps.join(", ")}].`, 0, []);

  let i = 0;
  let j = 0;
  while (i < n) {
    const shift = i - j;
    comparisons++;
    if (text[i] === pattern[j]) {
      push(3, `text[${i}] = '${text[i]}' matches pattern[${j}] — advance both.`, shift, [
        ...matched(shift, j),
        { ref: i, role: "current" },
        { ref: patRef(j), role: "current" },
      ]);
      i++;
      j++;
      if (j === m) {
        found.push(i - m);
        push(6, `Full match at index ${i - m}; fall back via LPS to keep scanning.`, i - m, matched(i - m, m));
        j = lps[j - 1];
      }
    } else {
      push(j > 0 ? 4 : 5, `Mismatch at pattern[${j}]${j > 0 ? ` — jump to lps[${j - 1}] = ${lps[j - 1]}` : ""}.`, shift, [
        ...matched(shift, j),
        { ref: i, role: "swapped" },
        { ref: patRef(j), role: "swapped" },
      ]);
      if (j > 0) j = lps[j - 1];
      else i++;
    }
  }

  push(
    7,
    found.length ? `Done — matches at ${found.join(", ")}.` : `Done — no match found.`,
    0,
    found.flatMap((s) => matched(s, m).filter((h) => typeof h.ref === "number")),
  );

  return steps;
}
