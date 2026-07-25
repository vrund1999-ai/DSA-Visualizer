import type { Step } from "@/core/types";

export interface PalinSubseqData {
  s: string;
  /** letter being considered as the outer pair */
  letter: string | null;
  first: number | null;
  last: number | null;
  /** distinct characters between first and last */
  middle: string[];
  added: number | null;
  total: number;
  answer: number | null;
}

export type PalinSubseqStep = Step<PalinSubseqData>;

/**
 * A length-3 palindrome is x·y·x, so its two outer characters are equal. For each letter we take its
 * first and last occurrence as the outer pair; any distinct character strictly between them can be
 * the center, giving that many unique palindromes. Summing over all 26 letters counts them all.
 * `line` indexes CODE.
 */
export function palinSubseqSteps(s: string): PalinSubseqStep[] {
  const steps: PalinSubseqStep[] = [];
  let total = 0;

  const snap = (o: Partial<PalinSubseqData>): PalinSubseqData => ({ s, letter: null, first: null, last: null, middle: [], added: null, total, answer: null, ...o });
  const push = (line: number, explanation: string, o: Partial<PalinSubseqData> = {}) => {
    steps.push({ id: steps.length, line, explanation, data: snap(o), highlights: [] });
  };

  push(1, "For each letter, use its first & last occurrence as the palindrome's outer pair.");

  const present = [...new Set(s.split(""))].sort();
  for (const ch of present) {
    const first = s.indexOf(ch);
    const last = s.lastIndexOf(ch);
    if (last - first < 2) {
      push(6, `'${ch}': occurrences too close (${first}, ${last}) — no room for a center.`, { letter: ch, first, last });
      continue;
    }
    const middle = [...new Set(s.slice(first + 1, last).split(""))].sort();
    total += middle.length;
    push(9, `'${ch}' spans [${first}, ${last}] → ${middle.length} distinct center(s) {${middle.join(", ")}} (total ${total}).`, { letter: ch, first, last, middle, added: middle.length });
  }

  push(11, `Unique length-3 palindromic subsequences: ${total}.`, { answer: total });
  return steps;
}
