import type { StringInput } from "./types";

const randInt = (min: number, max: number) =>
  Math.floor(Math.random() * (max - min + 1)) + min;

/**
 * A fresh (text, pattern) pair over a small alphabet so partial matches occur
 * often (interesting for KMP). The pattern is guaranteed to appear at least
 * once by planting it at a random position in the text.
 */
export function makeStringInput(): StringInput {
  const alphabet = "ABC";
  const rand = (len: number) =>
    Array.from({ length: len }, () => alphabet[randInt(0, alphabet.length - 1)]);

  const textLen = 16;
  const patLen = 3;
  const text = rand(textLen);
  const pattern = rand(patLen);
  const at = randInt(0, textLen - patLen);
  for (let j = 0; j < patLen; j++) text[at + j] = pattern[j];

  return { text: text.join(""), pattern: pattern.join("") };
}
