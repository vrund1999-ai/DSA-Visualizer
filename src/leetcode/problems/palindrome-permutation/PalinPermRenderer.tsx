import type { RendererProps } from "@/core/types";
import { ArrayCells, Legend } from "@/leetcode/shared/viz";
import type { PalinPermData } from "./algorithm";

export function PalinPermRenderer({ step }: RendererProps<PalinPermData>) {
  const { s, pos, odd, answer } = step.data;

  const roleFor = (i: number) => {
    if (i === pos) return "current";
    if (pos !== null && i < pos) return "visited";
    return "default";
  };

  return (
    <div className="flex h-full flex-col items-center justify-center gap-6">
      <ArrayCells values={s.split("")} roleFor={roleFor} topLabel={(i) => (i === pos ? "c" : "")} showIndex={false} cellWidth="w-9" />

      <div className="flex flex-col items-center gap-1">
        <span className="text-xs font-medium uppercase tracking-wide text-muted-foreground">characters with odd count</span>
        <div className="flex min-h-[2rem] flex-wrap items-center justify-center gap-1.5">
          {odd.length === 0 ? <span className="text-xs text-muted-foreground">none</span> : odd.map((c) => (
            <span key={c} className={`flex size-9 items-center justify-center rounded-md border-2 font-mono text-sm ${odd.length <= 1 ? "border-role-visited bg-role-visited/15" : "border-role-target bg-role-target/15"}`}>{c}</span>
          ))}
        </div>
      </div>

      {answer !== null && (
        <div className={`text-base font-semibold ${answer ? "text-role-visited" : "text-role-target"}`}>
          {answer ? "can form a palindrome ✓" : "cannot form a palindrome ✗"}
        </div>
      )}

      <Legend items={[{ role: "current", label: "Current char" }, { role: "visited", label: "≤1 odd (ok)" }, { role: "target", label: ">1 odd" }]} />
    </div>
  );
}
