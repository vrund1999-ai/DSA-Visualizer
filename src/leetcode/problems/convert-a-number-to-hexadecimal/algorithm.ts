import type { Step } from "@/core/types";

export interface HexData {
  num: number;
  /** current unsigned value being consumed */
  n: number;
  /** low nibble value 0-15 this step */
  nibble: number | null;
  /** hex digit produced */
  digit: string | null;
  hex: string;
  answer: string | null;
}

export type HexStep = Step<HexData>;

const DIGITS = "0123456789abcdef";

/**
 * Hexadecimal groups bits four at a time, so we repeatedly take the low nibble (n & 15) as one hex
 * digit and shift right by four. Negative inputs are first reinterpreted as an unsigned 32-bit value
 * (two's complement) via `>>> 0`. `line` indexes CODE.
 */
export function hexSteps(num: number): HexStep[] {
  const steps: HexStep[] = [];

  const snap = (n: number, hex: string, o: Partial<HexData>): HexData => ({ num, n, nibble: null, digit: null, hex, answer: null, ...o });
  const push = (line: number, explanation: string, n: number, hex: string, o: Partial<HexData> = {}) => {
    steps.push({ id: steps.length, line, explanation, data: snap(n, hex, o), highlights: [] });
  };

  if (num === 0) {
    push(1, "num is 0 → hexadecimal '0'.", 0, "0", { answer: "0" });
    return steps;
  }

  let n = num >>> 0;
  let hex = "";
  push(3, `Interpret ${num} as unsigned 32-bit: ${n}.`, n, hex);

  while (n > 0) {
    const nibble = n & 15;
    const digit = DIGITS[nibble];
    hex = digit + hex;
    push(6, `${n} & 15 = ${nibble} → '${digit}'. hex = "${hex}".`, n, hex, { nibble, digit });
    n >>>= 4;
    push(7, `Shift right 4 bits → ${n}.`, n, hex, { nibble, digit });
  }

  push(9, `Hexadecimal: "${hex}".`, n, hex, { answer: hex });
  return steps;
}
