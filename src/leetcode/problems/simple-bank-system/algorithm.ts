import type { Step } from "@/core/types";

export type BankOp =
  | { type: "withdraw"; a: number; money: number }
  | { type: "deposit"; a: number; money: number }
  | { type: "transfer"; a1: number; a2: number; money: number };

export interface BankData {
  ops: string[];
  opIndex: number | null;
  balance: number[];
  /** 0-indexed accounts changed this step */
  touched: number[];
  result: boolean | null;
  answers: (boolean | null)[];
}

export type BankStep = Step<BankData>;

const label = (op: BankOp): string =>
  op.type === "transfer" ? `transfer(${op.a1}, ${op.a2}, ${op.money})` : `${op.type}(${op.a}, ${op.money})`;

/**
 * Simple Bank System: operations succeed only when the account number is in range (1..n) and, for
 * withdraw/transfer, the source has enough money. `line` indexes CODE.
 */
export function bankSteps(initial: number[], ops: BankOp[]): BankStep[] {
  const steps: BankStep[] = [];
  const b = [...initial];
  const n = b.length;
  const opLabels = ops.map(label);
  const answers: (boolean | null)[] = ops.map(() => null);
  const valid = (a: number) => a >= 1 && a <= n;

  const snap = (o: Partial<BankData>): BankData => ({
    ops: opLabels,
    opIndex: null,
    balance: [...b],
    touched: [],
    result: null,
    answers: [...answers],
    ...o,
  });
  const push = (line: number, explanation: string, o: Partial<BankData> = {}) => {
    steps.push({ id: steps.length, line, explanation, data: snap(o), highlights: [] });
  };

  push(1, `Start with balances [${b.join(", ")}].`);

  for (let k = 0; k < ops.length; k++) {
    const op = ops[k];
    let result = false;
    const touched: number[] = [];
    if (op.type === "withdraw") {
      if (valid(op.a) && b[op.a - 1] >= op.money) {
        b[op.a - 1] -= op.money;
        touched.push(op.a - 1);
        result = true;
      }
      answers[k] = result;
      push(result ? 5 : 4, `withdraw(${op.a}, ${op.money}) → ${result}.`, { opIndex: k, touched, result });
    } else if (op.type === "deposit") {
      if (valid(op.a)) {
        b[op.a - 1] += op.money;
        touched.push(op.a - 1);
        result = true;
      }
      answers[k] = result;
      push(result ? 9 : 8, `deposit(${op.a}, ${op.money}) → ${result}.`, { opIndex: k, touched, result });
    } else {
      if (valid(op.a2) && valid(op.a1) && b[op.a1 - 1] >= op.money) {
        b[op.a1 - 1] -= op.money;
        b[op.a2 - 1] += op.money;
        touched.push(op.a1 - 1, op.a2 - 1);
        result = true;
      }
      answers[k] = result;
      push(result ? 14 : 13, `transfer(${op.a1}, ${op.a2}, ${op.money}) → ${result}.`, { opIndex: k, touched, result });
    }
  }

  return steps;
}
