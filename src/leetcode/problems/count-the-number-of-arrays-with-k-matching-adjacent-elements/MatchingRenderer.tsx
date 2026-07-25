import type { RendererProps } from "@/core/types";
import { Legend } from "@/leetcode/shared/viz";
import type { MatchingData } from "./algorithm";

export function MatchingRenderer({ step }: RendererProps<MatchingData>) {
  const { n, m, k, stage, choose, first, diffs, answer } = step.data;

  const Factor = ({ label, value, active }: { label: string; value: number | null; active: boolean }) => (
    <div className={`flex flex-col items-center rounded-md border-2 px-4 py-2 ${active ? "border-role-current bg-role-current/10" : value !== null ? "border-role-sorted/50" : "border-border opacity-50"}`}>
      <span className="text-[11px] uppercase tracking-wide text-muted-foreground">{label}</span>
      <span className="text-lg font-bold tabular-nums">{value ?? "—"}</span>
    </div>
  );

  return (
    <div className="flex h-full flex-col items-center justify-center gap-6">
      <div className="flex items-center gap-3 text-sm">
        <span className="rounded-md border px-3 py-1">n = {n}</span>
        <span className="rounded-md border px-3 py-1">m = {m}</span>
        <span className="rounded-md border px-3 py-1">k = {k}</span>
      </div>

      <div className="flex flex-wrap items-center justify-center gap-2">
        <Factor label={`C(${n - 1}, ${k})`} value={choose} active={stage === "choose"} />
        <span className="text-xl text-muted-foreground">×</span>
        <Factor label="first (m)" value={first} active={stage === "first"} />
        <span className="text-xl text-muted-foreground">×</span>
        <Factor label={`(m−1)^${n - 1 - k}`} value={diffs} active={stage === "diffs"} />
      </div>

      {answer !== null && <div className="rounded-md bg-role-sorted px-4 py-1.5 text-sm font-semibold text-white">answer = {answer}</div>}

      <Legend items={[{ role: "current", label: "Current factor" }, { role: "sorted", label: "Computed" }]} />
    </div>
  );
}
