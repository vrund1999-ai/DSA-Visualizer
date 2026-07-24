import { describe, it, expect } from "vitest";
import { browserHistorySteps, type BrowserOp } from "./algorithm";
import { CODE } from "./code";

const results = (homepage: string, ops: BrowserOp[]) =>
  browserHistorySteps(homepage, ops)
    .map((s) => s.data.result)
    .filter((r): r is string => r !== null);

describe("browserHistorySteps", () => {
  it("navigates back and forward with truncation", () => {
    const ops: BrowserOp[] = [
      { type: "visit", url: "google" },
      { type: "visit", url: "facebook" },
      { type: "visit", url: "youtube" },
      { type: "back", steps: 1 }, // facebook
      { type: "back", steps: 1 }, // google
      { type: "forward", steps: 1 }, // facebook
      { type: "visit", url: "linkedin" },
      { type: "forward", steps: 2 }, // linkedin (clamped)
      { type: "back", steps: 2 }, // google
      { type: "back", steps: 7 }, // leetcode (clamped)
    ];
    expect(results("leetcode", ops)).toEqual(["facebook", "google", "facebook", "linkedin", "google", "leetcode"]);
  });

  it("emits steps whose lines all index into the displayed code", () => {
    for (const s of browserHistorySteps("home", [{ type: "visit", url: "a" }, { type: "back", steps: 1 }])) {
      expect(s.line).toBeGreaterThanOrEqual(0);
      expect(s.line).toBeLessThan(CODE.length);
    }
  });
});
