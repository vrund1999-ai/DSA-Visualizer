import type { RendererProps } from "@/core/types";
import { ArrayCells, Legend } from "@/leetcode/shared/viz";
import type { MinWindowData } from "./algorithm";

export function MinWindowRenderer({ step }: RendererProps<MinWindowData>) {
  const { s, t, lo, hi, missing, best, valid, answer } = step.data;
  const chars = s.split("");

  const roleFor = (i: number) => {
    if (best && i >= best[0] && i <= best[1] && answer !== null) return "sorted";
    if (i < lo || i > hi || hi < 0) return "default";
    return valid ? "target" : "active";
  };

  const topLabel = (i: number) => {
    const parts: string[] = [];
    if (i === lo) parts.push("L");
    if (i === hi) parts.push("R");
    return parts.join("/");
  };

  return (
    <div className="flex h-full flex-col items-center justify-center gap-6">
      <div className="text-sm text-muted-foreground">target t = <span className="font-mono text-foreground">{t}</span></div>

      <ArrayCells values={chars} roleFor={roleFor} topLabel={topLabel} showIndex={false} cellWidth="w-9" />

      <div className="text-sm text-muted-foreground">
        {answer !== null ? (
          <>minimum window = <b className="font-mono text-role-sorted">{answer || "(none)"}</b></>
        ) : (
          <>still missing <b className="tabular-nums text-foreground">{Math.max(missing, 0)}</b> char(s)</>
        )}
      </div>

      <Legend items={[{ role: "active", label: "Window (incomplete)" }, { role: "target", label: "Window (valid)" }, { role: "sorted", label: "Best window" }]} />
    </div>
  );
}
