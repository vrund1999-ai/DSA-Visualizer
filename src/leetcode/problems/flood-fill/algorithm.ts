import type { Step } from "@/core/types";

export interface FloodFillData {
  image: number[][];
  startColor: number;
  color: number;
  cur: [number, number] | null;
  filled: string[];
  done: boolean;
}

export type FloodFillStep = Step<FloodFillData>;

/**
 * Flood fill from (sr, sc): recolor every 4-connected cell that shares the starting
 * color, spreading outward via DFS. `line` indexes CODE.
 */
export function floodFillSteps(input: number[][], sr: number, sc: number, color: number): FloodFillStep[] {
  const steps: FloodFillStep[] = [];
  const image = input.map((r) => [...r]);
  const rows = image.length;
  const cols = image[0].length;
  const startColor = image[sr][sc];
  const filled: string[] = [];

  const snap = (o: Partial<FloodFillData>): FloodFillData => ({ image: image.map((r) => [...r]), startColor, color, cur: null, filled: [...filled], done: false, ...o });
  const push = (line: number, explanation: string, data: FloodFillData) => {
    steps.push({ id: steps.length, line, explanation, data, highlights: [] });
  };

  push(1, `Fill from (${sr}, ${sc}); recolor all connected ${startColor}s to ${color}.`, snap({}));

  if (startColor === color) {
    push(2, "Start already equals the new color — nothing to do.", snap({ done: true }));
    return steps;
  }

  const dfs = (r: number, c: number) => {
    if (r < 0 || c < 0 || r >= rows || c >= cols || image[r][c] !== startColor) return;
    image[r][c] = color;
    filled.push(`${r},${c}`);
    push(5, `Repaint (${r}, ${c}) → ${color}.`, snap({ cur: [r, c] }));
    dfs(r + 1, c);
    dfs(r - 1, c);
    dfs(r, c + 1);
    dfs(r, c - 1);
  };
  dfs(sr, sc);

  push(10, `Filled ${filled.length} cell(s).`, snap({ done: true }));
  return steps;
}
