import { describe, it, expect } from "vitest";
import { justifySteps } from "./algorithm";
import { CODE } from "./code";

const justify = (words: string[], maxWidth: number) => {
  const steps = justifySteps(words, maxWidth);
  return steps[steps.length - 1].data.answer;
};

describe("justifySteps", () => {
  it("fully justifies text to the given width", () => {
    expect(justify(["This", "is", "an", "example", "of", "text", "justification."], 16)).toEqual([
      "This    is    an",
      "example  of text",
      "justification.  ",
    ]);
  });

  it("left-justifies single-word and last lines", () => {
    expect(justify(["What", "must", "be", "acknowledgment", "shall", "be"], 16)).toEqual([
      "What   must   be",
      "acknowledgment  ",
      "shall be        ",
    ]);
  });

  it("produces lines exactly maxWidth wide", () => {
    for (const ln of justify(["Science", "is", "what", "we", "understand"], 20)!) {
      expect(ln.length).toBe(20);
    }
  });

  it("emits steps whose lines all index into the displayed code", () => {
    for (const s of justifySteps(["This", "is", "an", "example"], 16)) {
      expect(s.line).toBeGreaterThanOrEqual(0);
      expect(s.line).toBeLessThan(CODE.length);
    }
  });
});
