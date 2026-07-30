import type { RendererProps } from "@/core/types";
import { Legend } from "@/leetcode/shared/viz";
import type { FractionData } from "./algorithm";

export function FractionRenderer({ step }: RendererProps<FractionData>) {
  const { num, den, intPart, frac, rem, seen, cycle, answer } = step.data;

  return (
    <div className="flex h-full flex-col items-center justify-center gap-4">
      <div className="text-lg font-mono">{num} ÷ {den}</div>

      <div className="rounded-lg border-2 border-role-current bg-role-current/5 px-6 py-3 font-mono text-2xl">
        {answer ?? (
          <>
            {intPart}
            <span className={cycle ? "text-role-sorted" : ""}>{frac}</span>
            {rem !== null && rem !== 0 && !cycle && <span className="animate-pulse text-role-current">▏</span>}
          </>
        )}
      </div>

      {rem !== null && !answer && <div className="text-sm text-muted-foreground">current remainder: <b className="tabular-nums text-foreground">{rem}</b></div>}

      <div className="flex flex-wrap justify-center gap-1 text-xs">
        <span className="text-muted-foreground">seen remainders:</span>
        {seen.map(([r, pos]) => (
          <span key={r} className={`rounded border px-1.5 py-0.5 tabular-nums ${r === rem ? "border-role-sorted bg-role-sorted/15" : "border-border"}`}>
            {r}@{pos}
          </span>
        ))}
      </div>

      <Legend items={[{ role: "current", label: "Dividing" }, { role: "sorted", label: "Repeating block" }]} />
    </div>
  );
}
