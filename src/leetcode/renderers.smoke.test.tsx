import { describe, it, expect } from "vitest";
import { render, screen, cleanup } from "@testing-library/react";
import { MemoryRouter, Routes, Route } from "react-router-dom";
import { LeetCodeProblemPage } from "@/pages/LeetCodeProblemPage";
import { leetcodeProblems } from "./problems";

/**
 * Every hand-built problem must (a) generate at least one step from its default
 * input and (b) mount its detail page without throwing. This catches renderer
 * runtime bugs (bad indexing, undefined access) that the pure-algorithm tests
 * can't see.
 */
describe("bespoke LeetCode renderers", () => {
  for (const problem of leetcodeProblems) {
    it(`mounts "${problem.title}" and renders its first frame`, () => {
      const steps = problem.buildSteps(problem.makeDefaultInput(), problem.defaultOptions);
      expect(steps.length).toBeGreaterThan(0);

      render(
        <MemoryRouter initialEntries={[`/leetcode/${problem.id}`]}>
          <Routes>
            <Route path="/leetcode/:id" element={<LeetCodeProblemPage />} />
          </Routes>
        </MemoryRouter>,
      );

      // The shared player header renders the title; its presence means the
      // stage + code panel + narration all mounted without throwing.
      expect(
        screen.getByRole("heading", { name: problem.title }),
      ).toBeInTheDocument();
      cleanup();
    });

    it(`renders every frame of "${problem.title}" without throwing`, () => {
      const Renderer = problem.Renderer;
      const steps = problem.buildSteps(problem.makeDefaultInput(), problem.defaultOptions);
      for (let i = 0; i < steps.length; i++) {
        // Each step's data + highlights must render safely on its own.
        render(<Renderer step={steps[i]} frameIndex={i} frameCount={steps.length} />);
        cleanup();
      }
      expect(steps.every((s) => s.line >= 0 && s.line < problem.code.length)).toBe(true);
    });
  }
});
