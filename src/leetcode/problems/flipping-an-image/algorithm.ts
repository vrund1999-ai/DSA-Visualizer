import type { Step } from "@/core/types";

export interface FlipData {
  original: number[][];
  image: number[][];
  /** row currently processed */
  row: number | null;
  /** the two columns being swapped */
  pair: [number, number] | null;
  answer: number[][] | null;
}

export type FlipStep = Step<FlipData>;

/**
 * Flipping horizontally reverses each row, and inverting swaps 0s and 1s. Both happen in one two-pointer
 * sweep per row: swap the end values while flipping each bit. `line` indexes CODE.
 */
export function flipSteps(input: number[][]): FlipStep[] {
  const steps: FlipStep[] = [];
  const original = input.map((r) => [...r]);
  const image = input.map((r) => [...r]);

  const snap = (o: Partial<FlipData>): FlipData => ({ original, image: image.map((r) => [...r]), row: null, pair: null, answer: null, ...o });
  const push = (line: number, explanation: string, o: Partial<FlipData> = {}) => {
    steps.push({ id: steps.length, line, explanation, data: snap(o), highlights: [] });
  };

  push(1, "For each row, reverse it and invert every bit in one two-pointer pass.");

  for (let r = 0; r < image.length; r++) {
    let l = 0;
    let ri = image[r].length - 1;
    while (l <= ri) {
      const tmp = image[r][l] ^ 1;
      image[r][l] = image[r][ri] ^ 1;
      image[r][ri] = tmp;
      push(7, `Row ${r}: swap+invert columns ${l} and ${ri}.`, { row: r, pair: [l, ri] });
      l++;
      ri--;
    }
  }

  push(11, "Image flipped and inverted.", { answer: image.map((r) => [...r]) });
  return steps;
}
