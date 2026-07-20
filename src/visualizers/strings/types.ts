import type { Step } from "@/core/types";

export interface StringData {
  text: string;
  pattern: string;
  /** current alignment offset of the pattern under the text. */
  shift: number;
  /** start indices where a full match was reported. */
  found: number[];
}

export interface StringInput {
  text: string;
  pattern: string;
}

export type StringOptions = Record<string, never>;
export type StringStep = Step<StringData>;

/** Highlight ref for a pattern cell (text cells use their numeric index). */
export const patRef = (j: number) => `p:${j}`;
