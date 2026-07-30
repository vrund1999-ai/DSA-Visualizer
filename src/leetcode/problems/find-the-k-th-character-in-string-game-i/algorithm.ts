import type { Step } from "@/core/types";

export interface KthCharData {
  word: string;
  k: number;
  /** index at which the most recent appended copy begins */
  appendedFrom: number | null;
  answer: string | null;
}

export type KthCharStep = Step<KthCharData>;

/**
 * Start with "a". Each round appends a copy of the whole word with every letter shifted to the next (z→a),
 * doubling the length. Grow until it reaches k, then read the k-th character. `line` indexes CODE.
 */
export function kthCharSteps(k: number): KthCharStep[] {
  const steps: KthCharStep[] = [];
  let word = "a";

  const snap = (o: Partial<KthCharData>): KthCharData => ({ word, k, appendedFrom: null, answer: null, ...o });
  const push = (line: number, explanation: string, o: Partial<KthCharData> = {}) => {
    steps.push({ id: steps.length, line, explanation, data: snap(o), highlights: [] });
  };

  push(1, `Start with "a"; grow until length ≥ ${k}.`);

  while (word.length < k) {
    const from = word.length;
    let next = "";
    for (const c of word) next += c === "z" ? "a" : String.fromCharCode(c.charCodeAt(0) + 1);
    word += next;
    push(8, `Append the shifted copy "${next}" → "${word}" (length ${word.length}).`, { appendedFrom: from });
  }

  push(10, `The ${k}-th character is '${word[k - 1]}'.`, { answer: word[k - 1] });
  return steps;
}
