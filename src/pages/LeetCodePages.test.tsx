import { describe, it, expect } from "vitest";
import { render, screen } from "@testing-library/react";
import { MemoryRouter, Routes, Route } from "react-router-dom";
import { LeetCodeCatalogPage } from "./LeetCodeCatalogPage";
import { LeetCodeProblemPage } from "./LeetCodeProblemPage";

function renderAt(path: string) {
  return render(
    <MemoryRouter initialEntries={[path]}>
      <Routes>
        <Route path="/leetcode" element={<LeetCodeCatalogPage />} />
        <Route path="/leetcode/:id" element={<LeetCodeProblemPage />} />
      </Routes>
    </MemoryRouter>,
  );
}

describe("LeetCode section", () => {
  it("lists problems with search + filter controls on the catalog page", () => {
    renderAt("/leetcode");

    expect(screen.getByRole("heading", { name: "LeetCode" })).toBeInTheDocument();
    // Search + filter UI is present.
    expect(screen.getByLabelText("Search problems by title")).toBeInTheDocument();
    expect(screen.getByLabelText("Filter by difficulty")).toBeInTheDocument();
    expect(screen.getByLabelText("Filter by company")).toBeInTheDocument();
    // The highest-frequency problem (Two Sum) is on the first page.
    expect(screen.getByText("1. Two Sum")).toBeInTheDocument();
  });

  it("renders the Two Sum detail page with header + its real visual", () => {
    renderAt("/leetcode/two-sum");

    expect(screen.getByRole("heading", { name: "Two Sum" })).toBeInTheDocument();
    expect(screen.getByText("Easy")).toBeInTheDocument();
    const link = screen.getByRole("link", { name: /View on LeetCode/ });
    expect(link).toHaveAttribute("href", "https://leetcode.com/problems/two-sum/");

    // Shared player is wired up, and the Two Sum renderer is mounted.
    expect(screen.getByTitle(/Play/)).toBeInTheDocument();
    expect(screen.getByText(/Hash map/)).toBeInTheDocument();
  });

  it("renders a bespoke visual for a built problem (Valid Parentheses)", () => {
    renderAt("/leetcode/valid-parentheses");
    expect(screen.getByRole("heading", { name: "Valid Parentheses" })).toBeInTheDocument();
    // Its stack renderer, not the placeholder.
    expect(screen.getByText(/Stack \(top on the right\)/)).toBeInTheDocument();
  });

  it("renders the enhanced placeholder for a bulk-imported problem", () => {
    renderAt("/leetcode/lru-cache");
    expect(screen.getByText("Interactive visual coming soon")).toBeInTheDocument();
    expect(screen.getByRole("link", { name: /Solve on LeetCode/ })).toBeInTheDocument();
  });

  it("shows the 404 page for an unknown problem id", () => {
    renderAt("/leetcode/does-not-exist");
    expect(screen.getByText("404")).toBeInTheDocument();
  });
});
