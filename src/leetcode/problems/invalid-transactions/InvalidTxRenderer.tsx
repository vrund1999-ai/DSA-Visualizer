import type { RendererProps } from "@/core/types";
import { Legend } from "@/leetcode/shared/viz";
import type { InvalidTxData } from "./algorithm";

export function InvalidTxRenderer({ step }: RendererProps<InvalidTxData>) {
  const { txs, i, j, invalid, reason } = step.data;
  const invalidSet = new Set(invalid);

  return (
    <div className="flex h-full flex-col gap-4">
      {reason && <p className="text-center text-sm text-role-swapped">Flag reason: {reason}</p>}

      <div className="flex flex-col gap-1.5">
        {txs.map((t, idx) => (
          <div key={idx} className={`flex items-center justify-between gap-3 rounded-md border-2 px-3 py-1.5 font-mono text-xs transition-colors ${idx === i || idx === j ? "border-role-current bg-role-current/10" : invalidSet.has(idx) ? "border-role-swapped bg-role-swapped/10" : "border-border bg-muted/30"}`}>
            <span className="w-6 text-muted-foreground">{idx}</span>
            <span className="flex-1">{t.name}</span>
            <span className="w-16 text-right">t={t.time}</span>
            <span className="w-16 text-right">${t.amount}</span>
            <span className="w-16 text-right">{t.city}</span>
            {invalidSet.has(idx) && <span className="text-role-swapped">✗</span>}
          </div>
        ))}
      </div>

      <div className="flex items-center justify-center gap-2 text-sm">
        <span className="text-muted-foreground">Invalid count</span>
        <span className="rounded-md border border-role-swapped bg-role-swapped/10 px-2.5 py-1 font-semibold tabular-nums text-role-swapped">{invalid.length}</span>
      </div>

      <Legend
        items={[
          { role: "current", label: "Comparing" },
          { role: "swapped", label: "Invalid" },
        ]}
      />
    </div>
  );
}
