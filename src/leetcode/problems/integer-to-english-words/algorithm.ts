import type { Step } from "@/core/types";

export interface EnglishData {
  num: number;
  /** three-digit groups, most-significant first */
  chunks: { value: number; scale: string; words: string }[];
  /** index of chunk being converted (into chunks[]) */
  activeChunk: number | null;
  /** partial phrase built so far */
  partial: string;
  answer: string | null;
}

export type EnglishStep = Step<EnglishData>;

const BELOW20 = ["", "One", "Two", "Three", "Four", "Five", "Six", "Seven", "Eight", "Nine", "Ten", "Eleven", "Twelve", "Thirteen", "Fourteen", "Fifteen", "Sixteen", "Seventeen", "Eighteen", "Nineteen"];
const TENS = ["", "", "Twenty", "Thirty", "Forty", "Fifty", "Sixty", "Seventy", "Eighty", "Ninety"];
const SCALE = ["", "Thousand", "Million", "Billion"];

const three = (n: number): string => {
  if (n === 0) return "";
  if (n < 20) return BELOW20[n];
  if (n < 100) return (TENS[Math.floor(n / 10)] + " " + three(n % 10)).trim();
  return (BELOW20[Math.floor(n / 100)] + " Hundred " + three(n % 100)).trim();
};

/**
 * Convert a non-negative integer to English words by splitting it into three-digit groups (ones, thousands,
 * millions, …) and naming each group followed by its scale word. `line` indexes CODE.
 */
export function englishWordsSteps(num: number): EnglishStep[] {
  const steps: EnglishStep[] = [];

  // build groups least-significant first, then reverse to most-significant first
  const raw: { value: number; scale: string; words: string }[] = [];
  let t = num;
  let i = 0;
  while (t > 0) {
    const v = t % 1000;
    raw.push({ value: v, scale: SCALE[i], words: three(v) });
    t = Math.floor(t / 1000);
    i++;
  }
  const chunks = raw.reverse();

  const snap = (o: Partial<EnglishData>): EnglishData => ({
    num,
    chunks,
    activeChunk: null,
    partial: "",
    answer: null,
    ...o,
  });
  const push = (line: number, explanation: string, o: Partial<EnglishData> = {}) => {
    steps.push({ id: steps.length, line, explanation, data: snap(o), highlights: [] });
  };

  if (num === 0) {
    push(4, `The number is 0 → "Zero".`, { answer: "Zero" });
    return steps;
  }

  push(11, `Split ${num.toLocaleString("en-US")} into ${chunks.length} three-digit group(s).`);

  const parts: string[] = [];
  for (let c = 0; c < chunks.length; c++) {
    const { value, scale, words } = chunks[c];
    if (value !== 0) {
      const phrase = (words + (scale ? " " + scale : "")).trim();
      parts.push(phrase);
    }
    push(13, value === 0 ? `Group ${value.toString().padStart(3, "0")} is empty — skip.` : `Group ${value} → "${(words + (scale ? " " + scale : "")).trim()}".`, {
      activeChunk: c,
      partial: parts.join(" "),
    });
  }

  const answer = parts.join(" ");
  push(16, `Result: "${answer}".`, { answer, partial: answer });
  return steps;
}
