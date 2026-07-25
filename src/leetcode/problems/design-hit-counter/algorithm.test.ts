import { describe, it, expect } from "vitest";
import { hitCounterSteps, type HitOp } from "./algorithm";
import { CODE } from "./code";

const results = (ops: HitOp[]) =>
  hitCounterSteps(ops)
    .filter((s) => s.data.result !== null && s.data.op.startsWith("getHits"))
    .map((s) => s.data.result);

describe("hitCounterSteps", () => {
  it("counts hits within the 300s window", () => {
    const ops: HitOp[] = [
      { type: "hit", t: 1 },
      { type: "hit", t: 2 },
      { type: "hit", t: 3 },
      { type: "getHits", t: 4 }, // 3
      { type: "hit", t: 300 },
      { type: "getHits", t: 300 }, // 4
      { type: "getHits", t: 301 }, // 3 (t=1 drops)
    ];
    expect(results(ops)).toEqual([3, 4, 3]);
  });

  it("emits steps whose lines all index into the displayed code", () => {
    for (const s of hitCounterSteps([{ type: "hit", t: 1 }, { type: "getHits", t: 2 }])) {
      expect(s.line).toBeGreaterThanOrEqual(0);
      expect(s.line).toBeLessThan(CODE.length);
    }
  });
});
