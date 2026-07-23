import type { RendererProps } from "@/core/types";
import { ArrayCells, Legend, roleLookup } from "@/leetcode/shared/viz";
import type { ThirdMaxData } from "./algorithm";

const show = (v: number) => (v === -Infinity ? "−∞" : String(v));

export function ThirdMaxRenderer({ step }: RendererProps<ThirdMaxData>) {
  const { nums, i, a, b, c, answer } = step.data;
  const roleFor = roleLookup(step.highlights);

  const slot = (label: string, v: number) => (
    <div className="flex flex-col items-center gap-1">
      <span className="text-xs text-muted-foreground">{label}</span>
      <span className="flex min-w-[3rem] items-center justify-center rounded-md border-2 border-role-active bg-role-active/10 px-2 py-1 font-mono text-sm tabular-nums">{show(v)}</span>
    </div>
  );

  return (
    <div className="flex h-full flex-col gap-5">
      <div className="flex items-center justify-center gap-4">
        {slot("1st (a)", a)}
        {slot("2nd (b)", b)}
        {slot("3rd (c)", c)}
        {answer !== null && (
          <div className="flex flex-col items-center gap-1">
            <span className="text-xs text-muted-foreground">answer</span>
            <span className="flex min-w-[3rem] items-center justify-center rounded-md border-2 border-role-target bg-role-target/10 px-2 py-1 font-mono text-sm font-semibold tabular-nums text-role-target">{answer}</span>
          </div>
        )}
      </div>

      <ArrayCells values={nums} roleFor={(idx) => roleFor(idx)} topLabel={(idx) => (idx === i ? "i" : "")} />

      <Legend
        items={[
          { role: "target", label: "New max" },
          { role: "current", label: "New 2nd/3rd" },
          { role: "visited", label: "Skipped" },
        ]}
      />
    </div>
  );
}
