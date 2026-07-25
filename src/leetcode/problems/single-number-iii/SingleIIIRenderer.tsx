import type { RendererProps } from "@/core/types";
import { ArrayCells, Legend } from "@/leetcode/shared/viz";
import type { SingleIIIData } from "./algorithm";

export function SingleIIIRenderer({ step }: RendererProps<SingleIIIData>) {
  const { nums, idx, phase, xorAll, bit, a, b, answer } = step.data;

  const roleFor = (i: number) => {
    if (i === idx) {
      if (phase === "split") return (nums[i] & bit) ? "current" : "compared";
      return "current";
    }
    return "default";
  };

  return (
    <div className="flex h-full flex-col items-center justify-center gap-6">
      <ArrayCells values={nums} roleFor={roleFor} showIndex={false} cellWidth="w-12" />

      <div className="flex flex-wrap items-center justify-center gap-3 text-sm">
        <span className="rounded-md border px-3 py-1">a ^ b = <b className="tabular-nums">{xorAll}</b></span>
        <span className="rounded-md border px-3 py-1">divider bit = <b className="tabular-nums">{bit || "—"}</b></span>
        <span className="rounded-md border border-role-current px-3 py-1">group A → <b className="tabular-nums">{a}</b></span>
        <span className="rounded-md border border-role-compared px-3 py-1">group B → <b className="tabular-nums">{b}</b></span>
      </div>

      {answer && <div className="rounded-md border px-3 py-1 text-sm font-semibold">answer = [{answer[0]}, {answer[1]}]</div>}

      <Legend items={[{ role: "current", label: "Group A (bit set)" }, { role: "compared", label: "Group B (bit clear)" }]} />
    </div>
  );
}
