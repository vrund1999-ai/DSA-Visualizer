import type { RendererProps } from "@/core/types";
import { Legend } from "@/leetcode/shared/viz";
import type { HappyData } from "./algorithm";

const COLORS: Record<string, string> = { a: "bg-role-active/50 border-role-active", b: "bg-role-pivot/50 border-role-pivot", c: "bg-role-target/50 border-role-target" };

export function HappyRenderer({ step }: RendererProps<HappyData>) {
  const { cnt, res, pick, answer } = step.data;
  const str = answer ?? res;

  return (
    <div className="flex h-full flex-col items-center justify-center gap-5">
      <div className="flex items-center gap-3">
        {["a", "b", "c"].map((ch) => (
          <div key={ch} className={`flex flex-col items-center rounded-lg border-2 px-4 py-2 ${COLORS[ch]}`}>
            <span className="font-mono text-lg font-bold">{ch}</span>
            <span className="text-xs tabular-nums text-muted-foreground">left: {cnt[ch]}</span>
          </div>
        ))}
      </div>

      <div className="flex min-h-[3rem] max-w-2xl flex-wrap justify-center gap-0.5">
        {str.split("").map((ch, i) => {
          const isLast = i === str.length - 1 && !answer && ch === pick;
          return <span key={i} className={`flex h-9 w-8 items-center justify-center rounded border font-mono text-base ${isLast ? "bg-role-current text-white border-role-current" : COLORS[ch]}`}>{ch}</span>;
        })}
      </div>

      <div className="rounded-md border px-3 py-1 text-sm">length = <b className="tabular-nums">{str.length}</b></div>

      <Legend items={[{ role: "current", label: "Just appended" }, { role: "active", label: "a" }, { role: "pivot", label: "b" }, { role: "target", label: "c" }]} />
    </div>
  );
}
