import type { RendererProps } from "@/core/types";
import { ArrayCells, Legend } from "@/leetcode/shared/viz";
import type { ThreeSubData } from "./algorithm";

export function ThreeSubRenderer({ step }: RendererProps<ThreeSubData>) {
  const { nums, k, W, l, m, r, best, ans, answer } = step.data;
  const chosen = answer ?? (m !== null ? [l, m, r] : ans);

  // map a window-start index to the k array indices it covers
  const covers = (start: number | null | undefined, role: string) => {
    const map: Record<number, string> = {};
    if (start === null || start === undefined) return map;
    for (let i = start; i < start + k; i++) map[i] = role;
    return map;
  };
  const roleMap = {
    ...covers(chosen[0], "sorted"),
    ...covers(chosen[2], "path"),
    ...covers(chosen[1], "current"),
  };

  return (
    <div className="flex h-full flex-col items-center justify-center gap-6">
      <div className="flex flex-col items-center gap-1">
        <span className="text-xs uppercase tracking-wide text-muted-foreground">nums (k = {k})</span>
        <ArrayCells values={nums} roleFor={(i) => roleMap[i] ?? "default"} showIndex />
      </div>

      <div className="flex flex-col items-center gap-1">
        <span className="text-xs uppercase tracking-wide text-muted-foreground">window sums W</span>
        <ArrayCells values={W} roleFor={(i) => (i === m ? "current" : i === l ? "sorted" : i === r ? "path" : "default")} />
      </div>

      <div className="rounded-md border px-3 py-1 text-sm">
        best starts = [<b className="tabular-nums">{chosen.join(", ")}</b>] · sum {best < 0 ? "…" : best}
      </div>

      <Legend items={[{ role: "sorted", label: "Left window" }, { role: "current", label: "Middle window" }, { role: "path", label: "Right window" }]} />
    </div>
  );
}
