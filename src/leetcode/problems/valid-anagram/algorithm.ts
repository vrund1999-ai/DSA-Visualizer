import type { Highlight, Step } from "@/core/types";

export interface CountEntry {
  char: string;
  n: number;
}

export interface AnagramData {
  s: string[];
  t: string[];
  counts: CountEntry[];
  phase: "count" | "check" | "done";
  result: boolean | null;
  activeChar: string | null;
}

export type AnagramStep = Step<AnagramData>;

const toEntries = (m: Map<string, number>): CountEntry[] =>
  [...m.entries()].map(([char, n]) => ({ char, n }));

/**
 * Count each letter of `s`, then cancel them out with the letters of `t`. If any
 * letter runs out (or the lengths differ), the strings aren't anagrams. `line`
 * indexes CODE.
 */
export function anagramSteps(s: string, t: string): AnagramStep[] {
  const steps: AnagramStep[] = [];
  const sc = [...s];
  const tc = [...t];
  const count = new Map<string, number>();
  let result: boolean | null = null;

  const snap = (o: Partial<AnagramData>): AnagramData => ({
    s: [...sc],
    t: [...tc],
    counts: toEntries(count),
    phase: "count",
    result,
    activeChar: null,
    ...o,
  });
  const push = (
    line: number,
    explanation: string,
    data: AnagramData,
    highlights: Highlight[],
  ) => {
    steps.push({ id: steps.length, line, explanation, data, highlights });
  };

  if (sc.length !== tc.length) {
    result = false;
    push(1, `Lengths differ (${sc.length} vs ${tc.length}) — cannot be anagrams.`, snap({ result: false, phase: "done" }), []);
    return steps;
  }

  push(2, "Tally how many of each letter `s` contains.", snap({ phase: "count" }), []);
  for (let i = 0; i < sc.length; i++) {
    count.set(sc[i], (count.get(sc[i]) ?? 0) + 1);
    push(3, `Count '${sc[i]}' → ${count.get(sc[i])}.`, snap({ phase: "count", activeChar: sc[i] }), [
      { ref: `s${i}`, role: "current" },
    ]);
  }

  push(4, "Now cancel each letter of `t` against the tally.", snap({ phase: "check" }), []);
  for (let i = 0; i < tc.length; i++) {
    const c = tc[i];
    if (!count.get(c)) {
      result = false;
      push(5, `No '${c}' left in the tally — not an anagram.`, snap({ phase: "check", activeChar: c, result: false }), [
        { ref: `t${i}`, role: "swapped" },
      ]);
      return steps;
    }
    count.set(c, count.get(c)! - 1);
    push(6, `Cancel '${c}' → ${count.get(c)} remaining.`, snap({ phase: "check", activeChar: c }), [
      { ref: `t${i}`, role: "sorted" },
    ]);
  }

  result = true;
  push(8, "Every letter cancelled cleanly — the strings are anagrams.", snap({ phase: "done", result: true }), []);
  return steps;
}
