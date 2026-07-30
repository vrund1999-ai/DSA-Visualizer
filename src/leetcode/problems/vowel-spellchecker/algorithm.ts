import type { Step } from "@/core/types";

export interface SpellData {
  wordlist: string[];
  queries: string[];
  qIndex: number | null;
  /** which rule matched: "exact" | "caps" | "vowel" | "none" */
  rule: string | null;
  result: string | null;
  answers: (string | null)[];
}

export type SpellStep = Step<SpellData>;

const devowel = (w: string) => w.toLowerCase().replace(/[aeiou]/g, "*");

/**
 * Vowel Spellchecker: resolve each query by precedence — exact (case-sensitive) match, else case-insensitive
 * match, else vowel-error match (all vowels interchangeable, case-insensitive), else "". The first wordlist
 * word wins for the fuzzy maps. `line` indexes CODE.
 */
export function spellSteps(wordlist: string[], queries: string[]): SpellStep[] {
  const steps: SpellStep[] = [];
  const exact = new Set(wordlist);
  const caps = new Map<string, string>();
  const vowel = new Map<string, string>();
  for (const w of wordlist) {
    const lo = w.toLowerCase();
    if (!caps.has(lo)) caps.set(lo, w);
    const dv = devowel(w);
    if (!vowel.has(dv)) vowel.set(dv, w);
  }

  const answers: (string | null)[] = queries.map(() => null);
  const snap = (o: Partial<SpellData>): SpellData => ({
    wordlist,
    queries,
    qIndex: null,
    rule: null,
    result: null,
    answers: [...answers],
    ...o,
  });
  const push = (line: number, explanation: string, o: Partial<SpellData> = {}) => {
    steps.push({ id: steps.length, line, explanation, data: snap(o), highlights: [] });
  };

  push(5, `Built exact set, lowercase map and de-voweled map from the wordlist.`);

  for (let i = 0; i < queries.length; i++) {
    const q = queries[i];
    let rule: string;
    let result: string;
    let line: number;
    if (exact.has(q)) {
      rule = "exact";
      result = q;
      line = 12;
    } else if (caps.has(q.toLowerCase())) {
      rule = "caps";
      result = caps.get(q.toLowerCase())!;
      line = 13;
    } else if (vowel.has(devowel(q))) {
      rule = "vowel";
      result = vowel.get(devowel(q))!;
      line = 14;
    } else {
      rule = "none";
      result = "";
      line = 14;
    }
    answers[i] = result;
    push(line, `"${q}" → ${rule === "none" ? 'no match → ""' : `${rule} match → "${result}"`}.`, { qIndex: i, rule, result });
  }

  return steps;
}
