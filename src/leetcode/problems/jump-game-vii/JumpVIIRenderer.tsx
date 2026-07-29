import type { RendererProps } from "@/core/types";
import { Legend } from "@/leetcode/shared/viz";
import type { JumpVIIData } from "./algorithm";

export function JumpVIIRenderer({ step }: RendererProps<JumpVIIData>) {
  const { s, minJump, maxJump, dp, i, window, windowReach, answer } = step.data;

  const cellClass = (k: number) => {
    if (k === i) return dp[k] ? "border-role-sorted bg-role-sorted text-white" : "border-role-compared bg-role-compared/20";
    if (window && k >= window[0] && k <= window[1]) return dp[k] ? "border-role-current bg-role-current/25" : "border-role-current/40 bg-role-current/10";
    if (dp[k]) return "border-role-sorted/50 bg-role-sorted/10";
    return s[k] === "1" ? "border-border bg-muted/50 text-muted-foreground" : "border-border bg-muted/20";
  };

  return (
    <div className="flex h-full flex-col items-center justify-center gap-6">
      <div className="rounded-md border px-3 py-1 text-sm">jump range [{minJump}, {maxJump}]</div>

      <div className="flex flex-wrap justify-center gap-0.5">
        {s.split("").map((c, k) => (
          <div key={k} className="flex flex-col items-center">
            <div className={`flex size-8 items-center justify-center rounded border-2 text-sm font-bold ${cellClass(k)}`}>{c}</div>
            <span className="text-[8px] text-muted-foreground">{k}</span>
          </div>
        ))}
      </div>

      {window && <div className="rounded-md border px-3 py-1 text-sm">source window has {windowReach} reachable spot(s)</div>}

      {answer !== null && (
        <div className={`rounded-md px-4 py-1.5 text-sm font-semibold ${answer ? "bg-role-sorted text-white" : "bg-role-compared text-white"}`}>
          {answer ? "Last index reachable ✓" : "Cannot reach the end ✗"}
        </div>
      )}

      <Legend items={[{ role: "current", label: "Source window" }, { role: "sorted", label: "Reachable" }, { role: "compared", label: "Blocked" }]} />
    </div>
  );
}
