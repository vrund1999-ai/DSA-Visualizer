import type { RendererProps } from "@/core/types";
import { ArrayCells, Legend } from "@/leetcode/shared/viz";
import type { SecretData } from "./algorithm";

export function SecretRenderer({ step }: RendererProps<SecretData>) {
  const { n, delay, forget, dp, i, share, phase, known, answer } = step.data;
  // dp is indexed by day (0 unused)
  const days = dp.slice(1);

  const roleFor = (idx: number) => {
    const day = idx + 1;
    if (day === i) return "current";
    if (phase === "fill" && i !== null && day >= i - forget + 1 && day <= i - delay) return "active";
    if (phase === "count" && day >= n - forget + 1 && day <= n) return "sorted";
    return "default";
  };

  return (
    <div className="flex h-full flex-col items-center justify-center gap-5">
      <div className="text-sm text-muted-foreground">n={n}, delay={delay}, forget={forget} · dp[day] = new learners</div>

      <div className="flex flex-col items-center gap-1">
        <span className="text-xs uppercase tracking-wide text-muted-foreground">day →</span>
        <ArrayCells values={days} roleFor={roleFor} badge={(idx) => `d${idx + 1}`} />
      </div>

      <div className="flex items-center gap-3 text-sm">
        <span className="rounded-md border px-3 py-1">{phase === "fill" ? `sharers today: ${share}` : `still aware: ${known}`}</span>
        <span className="rounded-md border px-3 py-1">answer = <b className="tabular-nums">{answer ?? "…"}</b></span>
      </div>

      <Legend items={[{ role: "current", label: "Current day" }, { role: "active", label: "Sharing window" }, { role: "sorted", label: "Still remembers" }]} />
    </div>
  );
}
