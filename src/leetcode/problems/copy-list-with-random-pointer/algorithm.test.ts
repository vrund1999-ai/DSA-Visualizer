import { describe, it, expect } from "vitest";
import { copyListSteps, type CopyNodeView } from "./algorithm";
import { CODE } from "./code";

const list: CopyNodeView[] = [
  { val: 7, random: null },
  { val: 13, random: 0 },
  { val: 11, random: 4 },
  { val: 10, random: 2 },
  { val: 1, random: 0 },
];

describe("copyListSteps", () => {
  it("clones then wires every node", () => {
    const steps = copyListSteps(list);
    const final = steps[steps.length - 1].data;
    expect(final.phase).toBe("done");
    expect(final.cloned).toEqual([0, 1, 2, 3, 4]);
    expect(final.wired).toEqual([0, 1, 2, 3, 4]);
  });

  it("handles the empty list", () => {
    const steps = copyListSteps([]);
    expect(steps[steps.length - 1].data.cloned).toEqual([]);
  });

  it("emits steps whose lines all index into the displayed code", () => {
    for (const s of copyListSteps(list)) {
      expect(s.line).toBeGreaterThanOrEqual(0);
      expect(s.line).toBeLessThan(CODE.length);
    }
  });
});
