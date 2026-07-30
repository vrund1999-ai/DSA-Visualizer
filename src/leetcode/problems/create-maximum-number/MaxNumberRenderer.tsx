import type { RendererProps } from "@/core/types";
import { ArrayCells } from "@/leetcode/shared/viz";
import type { MaxNumberData } from "./algorithm";

export function MaxNumberRenderer({ step }: RendererProps<MaxNumberData>) {
  const { nums1, nums2, k, i, pick1, pick2, candidate, best, answer } = step.data;
  const shown = answer ?? best;

  return (
    <div className="flex h-full flex-col items-center justify-center gap-3">
      <div className="flex flex-col items-center gap-2">
        <div className="flex flex-col items-center gap-1">
          <span className="text-[10px] uppercase tracking-wide text-muted-foreground">nums1</span>
          <ArrayCells values={nums1} roleFor={() => "active"} showIndex={false} cellWidth="w-8" />
        </div>
        <div className="flex flex-col items-center gap-1">
          <span className="text-[10px] uppercase tracking-wide text-muted-foreground">nums2</span>
          <ArrayCells values={nums2} roleFor={() => "compared"} showIndex={false} cellWidth="w-8" />
        </div>
      </div>

      {i !== null && (
        <div className="flex flex-col items-center gap-1 text-sm">
          <span className="text-xs text-muted-foreground">
            split {i} + {k - i}
          </span>
          <div className="flex items-center gap-2 font-mono">
            <span className="rounded bg-role-active/20 px-1.5 py-0.5">{pick1.join("") || "∅"}</span>
            <span className="text-muted-foreground">⊕</span>
            <span className="rounded bg-role-compared/20 px-1.5 py-0.5">{pick2.join("") || "∅"}</span>
            <span className="text-muted-foreground">→</span>
            <span className="rounded bg-role-current/20 px-1.5 py-0.5 font-semibold">{candidate.join("")}</span>
          </div>
        </div>
      )}

      <div className="rounded-md border px-3 py-1 font-mono text-sm">
        best = <b>{shown.join("") || "…"}</b>
      </div>
    </div>
  );
}
