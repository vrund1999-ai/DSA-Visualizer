import type { RendererProps } from "@/core/types";
import { Legend } from "@/leetcode/shared/viz";
import type { RepeatedData } from "./algorithm";

export function RepeatedRenderer({ step }: RendererProps<RepeatedData>) {
  const { s, len, matches, answer } = step.data;
  const chars = s.split("");

  const blockOf = (k: number) => (len ? Math.floor(k / len) : -1);

  return (
    <div className="flex h-full flex-col items-center justify-center gap-6">
      <div className="flex flex-wrap justify-center gap-0.5">
        {chars.map((c, k) => {
          const inPattern = len !== null && k < len;
          const evenBlock = blockOf(k) % 2 === 0;
          const tone = len === null
            ? "border-border bg-muted/30"
            : inPattern
              ? "border-role-current bg-role-current text-white"
              : matches === false
                ? "border-border bg-muted/20"
                : evenBlock ? "border-role-active bg-role-active/20" : "border-role-active/60 bg-role-active/10";
          return <div key={k} className={`flex size-9 items-center justify-center rounded-md border-2 text-sm font-bold ${tone}`}>{c}</div>;
        })}
      </div>

      {len !== null && (
        <div className="rounded-md border px-3 py-1 text-sm">
          pattern = "{s.slice(0, len)}" (length {len}){matches !== null && (matches ? " → tiles s ✓" : " → mismatch ✗")}
        </div>
      )}

      {answer !== null && (
        <div className={`rounded-md px-4 py-1.5 text-sm font-semibold ${answer ? "bg-role-sorted text-white" : "bg-role-compared text-white"}`}>
          {answer ? "Built from a repeated substring" : "No repeating pattern"}
        </div>
      )}

      <Legend items={[{ role: "current", label: "Candidate block" }, { role: "active", label: "Tiled copies" }]} />
    </div>
  );
}
