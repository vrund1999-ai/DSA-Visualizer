import type { RendererProps } from "@/core/types";
import { ArrayCells, Legend } from "@/leetcode/shared/viz";
import type { PalinSubseqData } from "./algorithm";

export function PalinSubseqRenderer({ step }: RendererProps<PalinSubseqData>) {
  const { s, letter, first, last, middle, added, total, answer } = step.data;
  const chars = s.split("");

  const roleFor = (i: number) => {
    if (i === first || i === last) return "current";
    if (first !== null && last !== null && i > first && i < last && middle.includes(chars[i])) return "active";
    return "default";
  };

  return (
    <div className="flex h-full flex-col items-center justify-center gap-6">
      <ArrayCells values={chars} roleFor={roleFor} showIndex cellWidth="w-9" />

      <div className="flex items-center gap-3 text-sm">
        {letter !== null && <span className="rounded-md border border-role-current px-3 py-1">outer '{letter}' at [{first}, {last}]</span>}
        {added !== null && <span className="rounded-md border border-role-active px-3 py-1">+{added} centers {"{"}{middle.join(", ")}{"}"}</span>}
      </div>

      <div className="rounded-md border px-3 py-1 text-sm">total = <b className="tabular-nums">{answer ?? total}</b></div>

      <Legend items={[{ role: "current", label: "Outer pair (equal)" }, { role: "active", label: "Distinct centers" }]} />
    </div>
  );
}
