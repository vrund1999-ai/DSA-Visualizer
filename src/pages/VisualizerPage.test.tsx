import { describe, it, expect } from "vitest";
import { render, screen } from "@testing-library/react";
import { MemoryRouter, Routes, Route } from "react-router-dom";
import { VisualizerPage } from "./VisualizerPage";

function renderAt(path: string) {
  return render(
    <MemoryRouter initialEntries={[path]}>
      <Routes>
        <Route path="/v/:id" element={<VisualizerPage />} />
      </Routes>
    </MemoryRouter>,
  );
}

describe("VisualizerPage", () => {
  it("renders a known visualizer end-to-end (title, complexity, code, controls)", () => {
    renderAt("/v/bubble-sort");

    // Title + summary from the definition.
    expect(
      screen.getByRole("heading", { name: "Bubble Sort" }),
    ).toBeInTheDocument();

    // Complexity badges rendered (avg + worst are both O(n²); space is unique).
    expect(screen.getAllByText("O(n²)").length).toBeGreaterThanOrEqual(2);
    expect(screen.getByText("O(1)")).toBeInTheDocument();

    // Code panel rendered a line of source.
    expect(
      screen.getByText(/for \(let i = 0; i < n - 1; i\+\+\)/),
    ).toBeInTheDocument();

    // Player transport present.
    expect(screen.getByTitle(/Play/)).toBeInTheDocument();

    // Narration from the first step.
    expect(screen.getByText(/Start bubble sort/)).toBeInTheDocument();
  });

  it("shows the 404 page for an unknown id", () => {
    renderAt("/v/does-not-exist");
    expect(screen.getByText("404")).toBeInTheDocument();
  });
});
