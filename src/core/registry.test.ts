import { describe, it, expect } from "vitest";
import { registry } from "./registry";

/**
 * Contract tests that run over EVERY registered visualizer. New visualizers
 * inherit these checks for free.
 */
describe("registry contract", () => {
  const all = registry.all();

  it("has at least one visualizer", () => {
    expect(all.length).toBeGreaterThan(0);
  });

  it("has no duplicate ids", () => {
    const ids = all.map((d) => d.id);
    expect(new Set(ids).size).toBe(ids.length);
  });

  for (const def of all) {
    describe(def.id, () => {
      it("has non-empty code", () => {
        expect(def.code.length).toBeGreaterThan(0);
      });

      it("produces at least one step from its default input", () => {
        const steps = def.buildSteps(def.makeDefaultInput(), def.defaultOptions);
        expect(steps.length).toBeGreaterThan(0);
      });

      it("keeps every step's line within its code bounds", () => {
        const steps = def.buildSteps(def.makeDefaultInput(), def.defaultOptions);
        for (const s of steps) {
          expect(s.line).toBeGreaterThanOrEqual(0);
          expect(s.line).toBeLessThan(def.code.length);
        }
      });
    });
  }
});
