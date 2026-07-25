import type { RendererProps } from "@/core/types";
import { Legend } from "@/leetcode/shared/viz";
import type { ReorderedData } from "./algorithm";

export function ReorderedRenderer({ step }: RendererProps<ReorderedData>) {
  const { n, target, power, powerSig, matched, answer } = step.data;

  return (
    <div className="flex h-full flex-col items-center justify-center gap-6">
      <div className="flex flex-col items-center gap-1">
        <span className="text-xs font-medium uppercase tracking-wide text-muted-foreground">n = {n} · digit signature</span>
        <div className="rounded-md border-2 border-role-current bg-role-current/15 px-3 py-1.5 font-mono text-lg">{target}</div>
      </div>

      <div className="flex flex-col items-center gap-1">
        <span className="text-xs font-medium uppercase tracking-wide text-muted-foreground">power of 2 candidate</span>
        {power !== null ? (
          <div className="flex items-center gap-2">
            <span className="rounded-md border px-3 py-1.5 font-mono text-sm">{power}</span>
            <span className="text-muted-foreground">→</span>
            <span className={`rounded-md border-2 px-3 py-1.5 font-mono text-lg ${matched ? "border-role-visited bg-role-visited/15" : "border-role-target bg-role-target/10"}`}>{powerSig}</span>
          </div>
        ) : (
          <span className="text-xs text-muted-foreground">—</span>
        )}
      </div>

      {answer !== null && (
        <div className={`text-base font-semibold ${answer ? "text-role-visited" : "text-role-target"}`}>
          {answer ? "can be reordered to a power of 2" : "cannot be reordered to a power of 2"}
        </div>
      )}

      <Legend items={[{ role: "current", label: "Target signature" }, { role: "visited", label: "Match" }, { role: "target", label: "No match" }]} />
    </div>
  );
}
