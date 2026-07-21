import type { RendererProps } from "@/core/types";
import { Legend, roleLookup } from "@/leetcode/shared/viz";
import type { GroupAnagramsData } from "./algorithm";

export function GroupAnagramsRenderer({ step }: RendererProps<GroupAnagramsData>) {
  const { words, groups, currentKey } = step.data;
  const roleFor = roleLookup(step.highlights);

  const chipClass = (role: string) =>
    role === "current"
      ? "border-role-current bg-role-current/15"
      : role === "sorted"
        ? "border-role-sorted bg-role-sorted/15"
        : "border-border bg-muted/30 text-muted-foreground";

  return (
    <div className="flex h-full flex-col gap-5">
      <div className="flex flex-col items-center gap-1.5">
        <span className="text-xs font-medium uppercase tracking-wide text-muted-foreground">
          Words
        </span>
        <div className="flex flex-wrap justify-center gap-1.5">
          {words.map((w, i) => (
            <span
              key={i}
              className={`rounded-md border px-2 py-1 font-mono text-sm transition-colors ${chipClass(roleFor(i))}`}
            >
              {w}
            </span>
          ))}
        </div>
      </div>

      <div className="flex flex-1 flex-col items-center gap-2">
        <span className="text-xs font-medium uppercase tracking-wide text-muted-foreground">
          Buckets (key = sorted letters)
        </span>
        <div className="flex min-h-[3rem] flex-wrap items-start justify-center gap-2">
          {groups.length === 0 ? (
            <span className="text-xs text-muted-foreground">empty</span>
          ) : (
            groups.map((g) => (
              <div
                key={g.key}
                className={`flex flex-col gap-1 rounded-lg border p-2 ${
                  g.key === currentKey ? "border-role-current bg-role-current/5" : "bg-card/40"
                }`}
              >
                <span className="text-center font-mono text-[10px] text-muted-foreground">
                  {g.key}
                </span>
                <div className="flex flex-wrap justify-center gap-1">
                  {g.members.map((m, k) => (
                    <span key={k} className="rounded border bg-muted/40 px-1.5 py-0.5 font-mono text-xs">
                      {m}
                    </span>
                  ))}
                </div>
              </div>
            ))
          )}
        </div>
      </div>

      <Legend
        items={[
          { role: "current", label: "Sorting key" },
          { role: "sorted", label: "Added to bucket" },
        ]}
      />
    </div>
  );
}
