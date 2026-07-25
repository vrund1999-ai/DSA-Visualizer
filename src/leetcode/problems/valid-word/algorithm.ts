import type { Step } from "@/core/types";

export type CharKind = "vowel" | "consonant" | "digit" | "illegal";

export interface ValidWordData {
  word: string;
  idx: number | null;
  kinds: (CharKind | null)[];
  hasVowel: boolean;
  hasConsonant: boolean;
  lengthOk: boolean;
  answer: boolean | null;
}

export type ValidWordStep = Step<ValidWordData>;

const classify = (ch: string): CharKind => {
  if (/[a-z]/i.test(ch)) return "aeiou".includes(ch.toLowerCase()) ? "vowel" : "consonant";
  if (/[0-9]/.test(ch)) return "digit";
  return "illegal";
};

/**
 * A word is valid when it has at least 3 characters, contains only letters and digits, and includes
 * at least one vowel and one consonant. We classify each character, failing fast on an illegal one.
 * `line` indexes CODE.
 */
export function validWordSteps(word: string): ValidWordStep[] {
  const steps: ValidWordStep[] = [];
  const kinds: (CharKind | null)[] = new Array(word.length).fill(null);
  let hasVowel = false;
  let hasConsonant = false;
  const lengthOk = word.length >= 3;

  const snap = (o: Partial<ValidWordData>): ValidWordData => ({ word, idx: null, kinds: [...kinds], hasVowel, hasConsonant, lengthOk, answer: null, ...o });
  const push = (line: number, explanation: string, o: Partial<ValidWordData> = {}) => {
    steps.push({ id: steps.length, line, explanation, data: snap(o), highlights: [] });
  };

  if (!lengthOk) {
    push(1, `Length ${word.length} < 3 → invalid.`, { answer: false });
    return steps;
  }
  push(2, "Length ≥ 3; scan for a vowel, a consonant, and any illegal character.");

  for (let i = 0; i < word.length; i++) {
    const kind = classify(word[i]);
    kinds[i] = kind;
    if (kind === "illegal") {
      push(9, `'${word[i]}' is neither a letter nor a digit → invalid.`, { idx: i, answer: false });
      return steps;
    }
    if (kind === "vowel") hasVowel = true;
    if (kind === "consonant") hasConsonant = true;
    push(kind === "digit" ? 3 : kind === "vowel" ? 6 : 7, `'${word[i]}' is a ${kind}.`, { idx: i });
  }

  const answer = hasVowel && hasConsonant;
  push(12, `Vowel: ${hasVowel}, consonant: ${hasConsonant} → ${answer}.`, { answer });
  return steps;
}
