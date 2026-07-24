import type { RendererProps } from "@/core/types";
import { Legend } from "@/leetcode/shared/viz";
import type { TriangleData } from "./algorithm";

export function TriangleRenderer({ step }: RendererProps<TriangleData>) {
  const { triangle, dp, cur, settledFrom, answer } = step.data;

  const cellRole = (i: number, j: number) => {
    if (cur && cur[0] === i && cur[1] === j) return "border-role-current bg-role-current/25";
    if (i >= settledFrom) return "border-role-visited bg-role-visited/10";
    return "border-border bg-card";
  };

  // for settled rows, show the dp total; otherwise show the raw triangle value
  const cellText = (i: number, j: number) => (i >= settledFrom ? dp[j] : triangle[i][j]);

  return (
    <div className="flex h-full flex-col items-center justify-center gap-6">
      <div className="flex flex-col items-center gap-1.5">
        {triangle.map((row, i) => (
          <div key={i} className="flex gap-1.5">
            {row.map((_, j) => (
              <div key={j} className={`flex size-11 flex-col items-center justify-center rounded-md border-2 text-sm font-medium tabular-nums ${cellRole(i, j)}`}>
                <span>{cellText(i, j)}</span>
                {i >= settledFrom && i < triangle.length - 1 && <span className="text-[9px] text-muted-foreground">Σ</span>}
              </div>
            ))}
          </div>
        ))}
      </div>

      {answer !== null && <div className="text-base font-semibold text-role-current">min path sum = {answer}</div>}

      <Legend items={[{ role: "current", label: "Computing" }, { role: "visited", label: "Best total (dp)" }]} />
    </div>
  );
}
