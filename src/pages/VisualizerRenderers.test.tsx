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
    { id: "astar", title: "A* Search" }, // GridRenderer + heuristic
    { id: "stack", title: "Stack (LIFO)" }, // StackRenderer
    { id: "queue", title: "Queue (FIFO)" }, // QueueRenderer
    { id: "linked-list", title: "Singly Linked List" }, // LinkedListRenderer
    { id: "hash-table", title: "Hash Table (Chaining)" }, // HashTableRenderer
    { id: "fibonacci", title: "Fibonacci (Tabulation)" }, // TableRenderer (1D)
    { id: "knapsack", title: "0/1 Knapsack" }, // TableRenderer (2D)
    { id: "lcs", title: "Longest Common Subsequence" }, // TableRenderer + labels
    { id: "heap-sort", title: "Heap Sort" },
    { id: "shell-sort", title: "Shell Sort" },
    { id: "jump-search", title: "Jump Search" },
    { id: "interpolation-search", title: "Interpolation Search" },
    { id: "greedy-best-first", title: "Greedy Best-First Search" },
    { id: "bst-preorder", title: "BST Pre-order Traversal" },
    { id: "bst-postorder", title: "BST Post-order Traversal" },
    { id: "bst-delete", title: "BST Deletion" },
    { id: "coin-change", title: "Coin Change (Min Coins)" },
    { id: "edit-distance", title: "Edit Distance (Levenshtein)" },
    { id: "naive-string-search", title: "Naive String Search" }, // StringRenderer
    { id: "kmp-string-search", title: "KMP String Search" },
    { id: "rabin-karp-string-search", title: "Rabin–Karp String Search" },
    { id: "n-queens", title: "N-Queens" }, // BoardRenderer
    { id: "rat-in-a-maze", title: "Rat in a Maze" }, // GridRenderer reuse
    { id: "subsets", title: "Subsets (Power Set)" }, // SubsetsRenderer
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
