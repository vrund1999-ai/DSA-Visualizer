import type { Step } from "@/core/types";

export interface GcdStringsData {
  str1: string;
  str2: string;
  commute: boolean | null;
  /** the euclid steps computing gcd of lengths */
  gcdChain: { a: number; b: number }[];
  g: number | null;
  answer: string | null;
}

export type GcdStringsStep = Step<GcdStringsData>;

/**
 * A common "divisor" string exists iff the two strings commute under concatenation
 * (str1+str2 == str2+str1). When they do, the answer is the prefix whose length is the
 * gcd of the two lengths. `line` indexes CODE.
 */
export function gcdStringsSteps(str1: string, str2: string): GcdStringsStep[] {
  const steps: GcdStringsStep[] = [];

  const snap = (o: Partial<GcdStringsData>): GcdStringsData => ({ str1, str2, commute: null, gcdChain: [], g: null, answer: null, ...o });
  const push = (line: number, explanation: string, data: GcdStringsData) => {
    steps.push({ id: steps.length, line, explanation, data, highlights: [] });
  };

  const commute = str1 + str2 === str2 + str1;
  push(2, `Check commutativity: "${str1}${str2}" ${commute ? "==" : "!="} "${str2}${str1}".`, snap({ commute }));

  if (!commute) {
    push(2, "They don't commute — no common divisor string.", snap({ commute: false, answer: "" }));
    return steps;
  }

  const chain: { a: number; b: number }[] = [];
  let a = str1.length;
  let b = str2.length;
  while (b !== 0) {
    chain.push({ a, b });
    [a, b] = [b, a % b];
    push(3, `gcd step: gcd(${chain[chain.length - 1].a}, ${chain[chain.length - 1].b}) → gcd(${a}, ${b}).`, snap({ commute: true, gcdChain: [...chain] }));
  }
  const g = a;
  push(5, `gcd of lengths = ${g}; take prefix "${str1.slice(0, g)}".`, snap({ commute: true, gcdChain: [...chain], g, answer: str1.slice(0, g) }));
  return steps;
}
