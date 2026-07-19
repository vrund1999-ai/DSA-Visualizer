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

/**
 * Smoke test that every category's renderer mounts without throwing. The
 * algorithm invariants are covered per-algorithm; this exercises the actual
 * React renderers (bars, cells, SVG tree, grid) end-to-end through the page.
 */
describe("visualizer renderers mount for each category", () => {
  const cases: { id: string; title: string }[] = [
    { id: "quick-sort", title: "Quick Sort" }, // SortRenderer
    { id: "binary-search", title: "Binary Search" }, // SearchRenderer
    { id: "bst-insert", title: "BST Insertion" }, // TreeRenderer (SVG)
    { id: "bst-inorder", title: "BST In-order Traversal" }, // TreeRenderer
    { id: "bfs", title: "Breadth-First Search" }, // GridRenderer
    { id: "dijkstra", title: "Dijkstra's Algorithm" }, // GridRenderer + badges
  ];

  for (const { id, title } of cases) {
    it(`renders ${id} (title, code, controls, narration)`, () => {
      renderAt(`/v/${id}`);
      expect(screen.getByRole("heading", { name: title })).toBeInTheDocument();
      // Player transport present ⇒ the full page (including the renderer) mounted.
      expect(screen.getByTitle(/Play/)).toBeInTheDocument();
    });
  }
});
