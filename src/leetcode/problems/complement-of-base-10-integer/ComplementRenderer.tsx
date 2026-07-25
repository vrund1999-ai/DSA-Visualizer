import type { RendererProps } from "@/core/types";
import { Legend } from "@/leetcode/shared/viz";
import type { ComplementData } from "./algorithm";

function BitRow({ label, value, width, flip }: { label: string; value: number; width: number; flip?: boolean }) {
  const bits = value.toString(2).padStart(width, "0").slice(-width);
  return (
    <div className="flex items-center gap-3">
      <span className="w-24 text-right text-xs text-muted-foreground">{label}</span>
      <div className="flex gap-0.5 font-mono text-sm">
        {bits.split("").map((b, i) => (
          <span key={i} className={`flex size-7 items-center justify-center rounded ${flip ? "bg-role-swapped/25 text-role-swapped" : b === "1" ? "bg-role-current/25 text-role-current" : "bg-muted/30 text-muted-foreground"}`}>{b}</span>
        ))}
      </div>
      <span className="w-10 tabular-nums text-xs text-muted-foreground">{value}</span>
    </div>
  );
}

export function ComplementRenderer({ step }: RendererProps<ComplementData>) {
  const { n, width, mask, answer } = step.data;

  return (
    <div className="flex h-full flex-col items-center justify-center gap-6">
      <div className="text-sm text-muted-foreground">complement of {n}</div>

      <div className="flex flex-col gap-1.5">
        <BitRow label="n" value={n} width={width} />
        {mask !== null && <BitRow label="mask (all ones)" value={mask} width={width} />}
        {answer !== null && <BitRow label="n ^ mask" value={answer} width={width} flip />}
      </div>

      {answer !== null && <div className="text-base font-semibold text-role-swapped">complement = {answer}</div>}

      <Legend items={[{ role: "current", label: "Set bit" }, { role: "swapped", label: "Flipped result" }]} />
    </div>
  );
}
