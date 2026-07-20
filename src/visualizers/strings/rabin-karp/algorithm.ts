import type { Highlight } from "@/core/types";
import { patRef, type StringInput, type StringStep } from "../types";

const code = (ch: string) => ch.charCodeAt(0);
/** Simple additive hash — collisions are possible, which shows spurious hits. */
const hashOf = (s: string) => s.split("").reduce((h, ch) => h + code(ch), 0);

/**
 * Pure step generator for Rabin–Karp matching. Compares a rolling hash of each
 * window against the pattern's hash; only on a hash hit does it verify the
 * characters (catching spurious hits). `line` points into RABIN_KARP_CODE.
 */
export function rabinKarpSteps(input: StringInput): StringStep[] {
  const { text, pattern } = input;
  const n = text.length;
  const m = pattern.length;
  const steps: StringStep[] = [];
  const found: number[] = [];
  let hashHits = 0;

  const ph = hashOf(pattern);
  let th = hashOf(text.slice(0, m));

  const windowHl = (s: number, role: Highlight["role"]): Highlight[] => [
    ...Array.from({ length: m }, (_, k) => ({ ref: s + k, role })),
    ...Array.from({ length: m }, (_, k) => ({ ref: patRef(k), role })),
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
      metrics: { hashHits, matches: found.length },
    });
  };

  push(0, `Pattern hash = ${ph}; first window hash = ${th}.`, 0, [
    ...windowHl(0, "compared"),
  ]);

  for (let s = 0; s <= n - m; s++) {
    if (th === ph) {
      hashHits++;
      const slice = text.slice(s, s + m);
      if (slice === pattern) {
        found.push(s);
        push(3, `Hashes match at shift ${s} and characters confirm — match!`, s, [
          ...windowHl(s, "sorted"),
        ]);
      } else {
        push(2, `Hashes match at shift ${s} (${th}) but characters differ — spurious hit.`, s, [
          ...windowHl(s, "swapped"),
        ]);
      }
    } else {
      push(1, `Shift ${s}: window hash ${th} ≠ pattern hash ${ph} — skip.`, s, [
        ...windowHl(s, "compared"),
      ]);
    }
    if (s < n - m) {
      th = th - code(text[s]) + code(text[s + m]);
    }
  }

  push(
    6,
    found.length ? `Done — matches at ${found.join(", ")}.` : `Done — no match found.`,
    0,
    found.flatMap((s) => windowHl(s, "sorted")),
  );

  return steps;
}
