import type { RendererProps } from "@/core/types";
import { Legend } from "@/leetcode/shared/viz";
import type { BrowserHistoryData } from "./algorithm";

export function BrowserHistoryRenderer({ step }: RendererProps<BrowserHistoryData>) {
  const { stack, cur, liveLength, op, result } = step.data;

  return (
    <div className="flex h-full flex-col items-center justify-center gap-6">
      <div className="rounded-md border bg-muted/30 px-3 py-1.5 font-mono text-sm">{op}</div>

      <div className="flex flex-wrap items-center justify-center gap-1.5">
        {stack.map((url, i) => {
          const isCur = i === cur;
          const isForward = i >= liveLength || i > cur;
          const cls = isCur
            ? "border-role-current bg-role-current/25"
            : isForward
              ? "border-dashed border-border bg-card/40 text-muted-foreground"
              : "border-role-visited bg-role-visited/10";
          return (
            <div key={i} className="flex flex-col items-center gap-1">
              <span className="h-4 text-[10px] font-semibold uppercase text-role-current">{isCur ? "cur" : ""}</span>
              <div className={`rounded-md border-2 px-3 py-1.5 font-mono text-sm ${cls}`}>{url}</div>
            </div>
          );
        })}
      </div>

      {result !== null && <div className="text-sm">returned <b className="font-mono text-role-current">"{result}"</b></div>}

      <Legend items={[{ role: "current", label: "Current page" }, { role: "visited", label: "Back history" }]} />
    </div>
  );
}
