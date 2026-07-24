import type { Step } from "@/core/types";

export interface ReverseVowelsData {
  chars: string[];
  i: number;
  j: number;
  swapped: [number, number] | null;
}

export type ReverseVowelsStep = Step<ReverseVowelsData>;

const VOWELS = new Set("aeiouAEIOU");

/**
 * Two pointers converge from both ends; each skips non-vowels, and when both land
 * on vowels the pair is swapped. `line` indexes CODE.
 */
export function reverseVowelsSteps(s: string): ReverseVowelsStep[] {
  const steps: ReverseVowelsStep[] = [];
  const a = s.split("");
  let i = 0;
  let j = a.length - 1;

  const snap = (o: Partial<ReverseVowelsData>): ReverseVowelsData => ({ chars: [...a], i, j, swapped: null, ...o });
  const push = (line: number, explanation: string, data: ReverseVowelsData) => {
    steps.push({ id: steps.length, line, explanation, data, highlights: [] });
  };

  push(3, "Two pointers move inward, swapping vowels they meet.", snap({}));

  while (i < j) {
    if (!VOWELS.has(a[i])) {
      push(5, `'${a[i]}' at ${i} is not a vowel — advance i.`, snap({}));
      i++;
      continue;
    }
    if (!VOWELS.has(a[j])) {
      push(6, `'${a[j]}' at ${j} is not a vowel — retreat j.`, snap({}));
      j--;
      continue;
    }
    [a[i], a[j]] = [a[j], a[i]];
    push(7, `Swap vowels '${a[j]}' ↔ '${a[i]}' (positions ${i}, ${j}).`, snap({ swapped: [i, j] }));
    i++;
    j--;
  }

  push(10, `Result: "${a.join("")}".`, snap({ i: -1, j: -1 }));
  return steps;
}
