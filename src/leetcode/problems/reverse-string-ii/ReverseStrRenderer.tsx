import type { RendererProps } from "@/core/types";
import { ArrayCells, Legend } from "@/leetcode/shared/viz";
import type { ReverseStrData } from "./algorithm";

export function ReverseStrRenderer({ step }: RendererProps<ReverseStrData>) {
  const { chars, block, swap, answer } = step.data;

  const roleFor = (i: number) => {
    if (swap && (i === swap[0] || i === swap[1])) return "swapped";
    if (block && i >= block[0] && i <= block[1]) return "active";
    return "default";
  };

  return (
    <div className="flex h-full flex-col items-center justify-center gap-6">
      <ArrayCells values={chars} roleFor={roleFor} showIndex={true} />

      {answer !== null && <div className="rounded-md border bg-muted/30 px-3 py-1.5 font-mono text-lg">{answer}</div>}

      <Legend items={[{ role: "active", label: "Block being reversed" }, { role: "swapped", label: "Swapping" }]} />
    </div>
  );
}
