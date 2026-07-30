import type { RendererProps } from "@/core/types";
import { ArrayCells } from "@/leetcode/shared/viz";
import type { KthProductData } from "./algorithm";

export function KthProductRenderer({ step }: RendererProps<KthProductData>) {
  const { nums1, nums2, k, lo, hi, mid, count, answer } = step.data;

  return (
    <div className="flex h-full flex-col items-center justify-center gap-4">
      <div className="flex flex-col items-center gap-3">
        <div className="flex flex-col items-center gap-1">
          <span className="text-[10px] uppercase tracking-wide text-muted-foreground">nums1</span>
          <ArrayCells values={nums1} roleFor={() => "active"} showIndex={false} cellWidth="w-10" />
        </div>
        <div className="flex flex-col items-center gap-1">
          <span className="text-[10px] uppercase tracking-wide text-muted-foreground">nums2</span>
          <ArrayCells values={nums2} roleFor={() => "compared"} showIndex={false} cellWidth="w-10" />
        </div>
      </div>

      <div className="flex flex-col items-center gap-1 rounded-md border px-4 py-2 text-sm">
        <div className="flex gap-4 tabular-nums">
          <span>lo = {Number.isFinite(lo) ? lo : "−∞"}</span>
          <span className="font-semibold text-role-current">mid = {mid ?? "—"}</span>
          <span>hi = {Number.isFinite(hi) ? hi : "∞"}</span>
        </div>
        <div className="text-xs text-muted-foreground">
          {count === null ? `seeking k = ${k}` : `${count} product(s) ≤ mid  (k = ${k})`}
        </div>
      </div>

      <div className="rounded-md border px-3 py-1 text-sm">
        k-th smallest product = <b className="tabular-nums">{answer ?? "…"}</b>
      </div>
    </div>
  );
}
