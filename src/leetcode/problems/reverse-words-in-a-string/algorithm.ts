import type { Step } from "@/core/types";

export interface ReverseWordsData {
  raw: string;
  words: string[];
  phase: "split" | "reverse" | "done";
  result: string;
}

export type ReverseWordsStep = Step<ReverseWordsData>;

/**
 * Trim, split on runs of whitespace to get the words, reverse the word order, and
 * rejoin with single spaces. `line` indexes CODE.
 */
export function reverseWordsSteps(s: string): ReverseWordsStep[] {
  const steps: ReverseWordsStep[] = [];
  const words = s.trim().split(/\s+/).filter(Boolean);

  const push = (line: number, explanation: string, wordsNow: string[], phase: ReverseWordsData["phase"], result: string) => {
    steps.push({ id: steps.length, line, explanation, data: { raw: s, words: [...wordsNow], phase, result }, highlights: [] });
  };

  push(2, "Trim outer whitespace.", words, "split", "");
  push(3, `Split into ${words.length} word(s): [${words.map((w) => `"${w}"`).join(", ")}].`, words, "split", "");

  const reversed = [...words].reverse();
  push(4, "Reverse the word order.", reversed, "reverse", "");

  const result = reversed.join(" ");
  push(5, `Join with single spaces → "${result}".`, reversed, "done", result);
  return steps;
}
