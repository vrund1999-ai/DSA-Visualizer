import type { RendererProps } from "@/core/types";
import { ArrayCells, Legend } from "@/leetcode/shared/viz";
import type { DecodeWaysData } from "./algorithm";

export function DecodeWaysRenderer({ step }: RendererProps<DecodeWaysData>) {
  const { s, dp, i, twoValue, twoOk, answer } = step.data;
  const chars = s.split("");

  const charRole = (k: number) => {
    if (i === null) return "default";
    if (k === i - 1) return "current";
    if (k === i - 2) return twoOk ? "compared" : "default";
    return "default";
  };

  const dpRole = (k: number) => {
    if (k === i) return "current";
    if (i !== null && (k === i - 1 || k === i - 2)) return "compared";
    return "default";
  };

  return (
    <div className="flex h-full flex-col items-center justify-center gap-6">
      <div className="flex flex-col items-center gap-1">
        <span className="text-xs font-medium uppercase tracking-wide text-muted-foreground">digits</span>
        <ArrayCells values={chars} roleFor={charRole} showIndex cellWidth="w-10" />
      </div>

      <div className="flex flex-col items-center gap-1">
        <span className="text-xs font-medium uppercase tracking-wide text-muted-foreground">dp (decodings of first k chars)</span>
        <ArrayCells values={dp} roleFor={dpRole} showIndex cellWidth="w-10" />
      </div>

      {twoValue !== null && (
        <div className="rounded-md border px-3 py-1 text-sm">two-digit value = <b className="tabular-nums">{twoValue}</b> {twoOk ? "(valid 10-26)" : "(invalid)"}</div>
      )}

      {answer !== null && <div className="rounded-md border px-3 py-1 text-sm font-semibold">decodings = {answer}</div>}

      <Legend items={[{ role: "current", label: "Current dp[i] / digit" }, { role: "compared", label: "Contributing dp / pair" }]} />
    </div>
  );
}
