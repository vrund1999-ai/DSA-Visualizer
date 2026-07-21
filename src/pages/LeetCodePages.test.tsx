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
  it("lists seed problems on the catalog page", () => {
    renderAt("/leetcode");

    expect(
      screen.getByRole("heading", { name: "LeetCode" }),
    ).toBeInTheDocument();
    expect(screen.getByText("1. Two Sum")).toBeInTheDocument();
    expect(screen.getByText("20. Valid Parentheses")).toBeInTheDocument();
    expect(screen.getByText("56. Merge Intervals")).toBeInTheDocument();
  });

  it("renders the Two Sum detail page with header + its real visual", () => {
    renderAt("/leetcode/two-sum");

    // Problem header: title, difficulty, LeetCode link.
    expect(
      screen.getByRole("heading", { name: "Two Sum" }),
    ).toBeInTheDocument();
    expect(screen.getByText("Easy")).toBeInTheDocument();
    const link = screen.getByRole("link", { name: /View on LeetCode/ });
    expect(link).toHaveAttribute(
      "href",
      "https://leetcode.com/problems/two-sum/",
    );

    // Shared player is wired up, and the Two Sum renderer is mounted.
    expect(screen.getByTitle(/Play/)).toBeInTheDocument();
    expect(screen.getByText(/Hash map/)).toBeInTheDocument();
  });

  it("renders a placeholder stage for problems without a visual yet", () => {
    renderAt("/leetcode/valid-parentheses");
    expect(screen.getByText("Visual coming soon")).toBeInTheDocument();
  });

  it("shows the 404 page for an unknown problem id", () => {
    renderAt("/leetcode/does-not-exist");
    expect(screen.getByText("404")).toBeInTheDocument();
  });
});
