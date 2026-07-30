import type { Step } from "@/core/types";

export type ProductOp = { type: "add"; num: number } | { type: "getProduct"; k: number };

export interface ProductData {
  ops: string[];
  opIndex: number | null;
  /** prefix products (resets to [1] on a zero) */
  prefix: number[];
  result: number | null;
  answers: (number | null)[];
}

export type ProductStep = Step<ProductData>;

/**
 * Product of the Last K Numbers: keep a running array of prefix products so getProduct(k) is
 * prefix[n−1] / prefix[n−1−k]. A zero resets the prefix (since any window spanning it is 0), and getProduct
 * returns 0 whenever k reaches back past the reset. `line` indexes CODE.
 */
export function productSteps(ops: ProductOp[]): ProductStep[] {
  const steps: ProductStep[] = [];
  let prefix = [1];
  const opLabels = ops.map((o) => (o.type === "add" ? `add(${o.num})` : `getProduct(${o.k})`));
  const answers: (number | null)[] = ops.map(() => null);

  const snap = (o: Partial<ProductData>): ProductData => ({
    ops: opLabels,
    opIndex: null,
    prefix: [...prefix],
    result: null,
    answers: [...answers],
    ...o,
  });
  const push = (line: number, explanation: string, o: Partial<ProductData> = {}) => {
    steps.push({ id: steps.length, line, explanation, data: snap(o), highlights: [] });
  };

  push(1, `Maintain prefix products; a zero resets them.`);

  for (let k = 0; k < ops.length; k++) {
    const op = ops[k];
    if (op.type === "add") {
      if (op.num === 0) {
        prefix = [1];
        push(3, `add(0) → reset prefix products.`, { opIndex: k });
      } else {
        prefix.push(prefix[prefix.length - 1] * op.num);
        push(4, `add(${op.num}) → append prefix product ${prefix[prefix.length - 1]}.`, { opIndex: k });
      }
    } else {
      const n = prefix.length;
      const result = op.k >= n ? 0 : prefix[n - 1] / prefix[n - 1 - op.k];
      answers[k] = result;
      push(op.k >= n ? 8 : 9, `getProduct(${op.k}) = ${result}.`, { opIndex: k, result });
    }
  }

  return steps;
}
