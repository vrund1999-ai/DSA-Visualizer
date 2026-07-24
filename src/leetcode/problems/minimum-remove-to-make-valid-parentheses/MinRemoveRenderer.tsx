import type { RendererProps } from "@/core/types";
import { ArrayCells, Legend, roleLookup } from "@/leetcode/shared/viz";
import type { MinRemoveData } from "./algorithm";

export function MinRemoveRenderer({ step }: RendererProps<MinRemoveData>) {
  const { chars, i, stack, removed, phase } = step.data;
  const roleForBase = roleLookup(step.highlights);
  const removedSet = new Set(removed);

  const roleFor = (idx: number) => {
    const r = roleForBase(idx);
    if (r !== "default") return r;
    if (removedSet.has(idx)) return "swapped";
    return "default";
  };

  const result = chars.filter((_, k) => !removedSet.has(k)).join("");

  return (
    <div className="flex h-full flex-col gap-5">
      <ArrayCells values={chars} roleFor={roleFor} topLabel={(idx) => (idx === i ? "i" : "")} showIndex={false} />

      <div className="flex items-center justify-center gap-3 text-sm">
        <span className="text-muted-foreground">Unmatched '(' stack</span>
        <div className="flex min-h-[2rem] flex-wrap items-center gap-1 rounded-lg border bg-card/40 px-2 py-1 font-mono text-xs">
          {stack.length === 0 ? <span className="text-muted-foreground">empty</span> : stack.join(", ")}
        </div>
      </div>

      {phase === "done" && (
        <div className="flex flex-col items-center gap-1">
          <span className="text-xs font-medium uppercase tracking-wide text-muted-foreground">Result</span>
          <div className="rounded-lg border border-role-sorted bg-role-sorted/10 px-4 py-2 font-mono text-lg">{result || "(empty)"}</div>
        </div>
      )}

      <Legend
        items={[
          { role: "active", label: "Unmatched '('" },
          { role: "sorted", label: "Matched pair" },
          { role: "swapped", label: "Removed" },
        ]}
      />
    </div>
  );
}
