import type { Step } from "@/core/types";

export type FizzKind = "num" | "fizz" | "buzz" | "fizzbuzz";

export interface FizzCell {
  i: number;
  text: string;
  kind: FizzKind;
}

export interface FizzData {
  n: number;
  i: number | null;
  cells: FizzCell[];
}

export type FizzStep = Step<FizzData>;

/**
 * Classic divisibility check per number: multiples of both 3 and 5 (i.e. 15) are
 * "FizzBuzz", of 3 alone "Fizz", of 5 alone "Buzz", else the number itself.
 * Testing 15 first is essential. `line` indexes CODE.
 */
export function fizzSteps(n: number): FizzStep[] {
  const steps: FizzStep[] = [];
  const cells: FizzCell[] = [];

  const snap = (line: number, explanation: string, i: number | null) => {
    steps.push({ id: steps.length, line, explanation, data: { n, i, cells: [...cells] }, highlights: [] });
  };

  snap(1, "Emit Fizz/Buzz/FizzBuzz or the number for each i from 1 to n.", null);

  for (let i = 1; i <= n; i++) {
    let text: string;
    let kind: FizzKind;
    let line: number;
    if (i % 15 === 0) {
      text = "FizzBuzz";
      kind = "fizzbuzz";
      line = 3;
    } else if (i % 3 === 0) {
      text = "Fizz";
      kind = "fizz";
      line = 4;
    } else if (i % 5 === 0) {
      text = "Buzz";
      kind = "buzz";
      line = 5;
    } else {
      text = String(i);
      kind = "num";
      line = 6;
    }
    cells.push({ i, text, kind });
    snap(line, `${i} → ${text}.`, i);
  }

  snap(8, `Produced ${n} entries.`, null);
  return steps;
}
