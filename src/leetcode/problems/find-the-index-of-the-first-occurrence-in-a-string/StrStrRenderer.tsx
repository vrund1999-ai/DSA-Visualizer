import type { RendererProps } from "@/core/types";
import { ArrayCells, Legend, roleLookup } from "@/leetcode/shared/viz";
import type { StrStrData } from "./algorithm";

export function StrStrRenderer({ step }: RendererProps<StrStrData>) {
  const { haystack, needle, i, answer } = step.data;
  const roleFor = roleLookup(step.highlights);

  return (
    <div className="flex h-full flex-col gap-5">
      <div className="flex items-center justify-center gap-2 text-sm">
        <span className="text-muted-foreground">Needle</span>
        <span className="rounded-md border border-primary bg-primary/10 px-2.5 py-1 font-mono font-semibold text-primary">{needle}</span>
        {answer !== null && <span className={`ml-2 font-semibold ${answer >= 0 ? "text-role-sorted" : "text-role-swapped"}`}>{answer >= 0 ? `found at ${answer}` : "not found"}</span>}
      </div>

      <ArrayCells values={haystack} roleFor={(idx) => roleFor(idx)} topLabel={(idx) => (idx === i ? "i" : "")} />

      <Legend
        items={[
          { role: "active", label: "Comparing" },
          { role: "sorted", label: "Matched" },
          { role: "swapped", label: "Mismatch" },
        ]}
      />
    </div>
  );
}
