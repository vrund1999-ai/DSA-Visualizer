import type { RendererProps } from "@/core/types";
import { Legend } from "@/leetcode/shared/viz";
import type { AccountsData } from "./algorithm";

export function AccountsRenderer({ step }: RendererProps<AccountsData>) {
  const { accounts, joining, roots, groups, phase } = step.data;

  return (
    <div className="flex h-full flex-col items-center justify-center gap-5">
      <div className="flex flex-wrap items-center justify-center gap-1.5">
        {accounts.map((a, i) => (
          <span key={i} className="rounded-md border bg-muted/30 px-2 py-1 font-mono text-[11px]">{a[0]}: {a.slice(1).join(", ")}</span>
        ))}
      </div>

      {joining && (
        <div className="text-xs text-muted-foreground">
          union <b className="font-mono text-role-current">{joining[0]}</b> ↔ <b className="font-mono text-role-current">{joining[1]}</b>
        </div>
      )}

      {phase !== "done" ? (
        <div className="flex max-w-2xl flex-wrap items-center justify-center gap-1">
          {roots.map(([e, r]) => (
            <span key={e} className={`rounded border px-1.5 py-0.5 font-mono text-[10px] ${joining && (e === joining[0] || e === joining[1]) ? "border-role-current bg-role-current/20" : "bg-muted/20"}`}>{e}→{r.split("@")[0]}</span>
          ))}
        </div>
      ) : (
        <div className="flex flex-col items-stretch gap-1.5">
          {groups.map((g, i) => (
            <div key={i} className="rounded-md border-2 border-role-visited bg-role-visited/10 px-3 py-1.5 font-mono text-xs">
              <b>{g[0]}</b>: {g.slice(1).join(", ")}
            </div>
          ))}
        </div>
      )}

      <Legend items={[{ role: "current", label: "Unioning" }, { role: "visited", label: "Merged account" }]} />
    </div>
  );
}
