import type { RendererProps } from "@/core/types";
import { Legend } from "@/leetcode/shared/viz";
import type { ChairData } from "./algorithm";

export function ChairRenderer({ step }: RendererProps<ChairData>) {
  const { times, targetFriend, chairs, time, activeFriend, assigned, answer } = step.data;

  return (
    <div className="flex h-full flex-col items-center justify-center gap-5">
      {time !== null && (
        <div className="rounded-md border border-role-current bg-role-current/10 px-3 py-1 text-sm">
          t = {time} · friend <b>{activeFriend}</b> {activeFriend === targetFriend ? "(target)" : ""}
        </div>
      )}

      <div className="flex flex-wrap justify-center gap-2">
        {chairs.map((occupant, chair) => {
          const isAssigned = chair === assigned;
          const cls = isAssigned ? "bg-role-sorted text-white border-role-sorted" : occupant !== null ? "bg-role-active/30 border-role-active" : "bg-muted/40 border-border text-muted-foreground";
          return (
            <div key={chair} className={`flex h-14 w-14 flex-col items-center justify-center rounded-lg border-2 ${cls}`}>
              <span className="text-[10px] uppercase text-muted-foreground">chair {chair}</span>
              <span className="text-sm font-bold">{occupant === null ? "—" : `F${occupant}`}</span>
            </div>
          );
        })}
      </div>

      <div className="flex flex-wrap justify-center gap-2 text-xs">
        {times.map((t, i) => (
          <span key={i} className={`rounded border px-2 py-0.5 ${i === targetFriend ? "border-role-current font-semibold" : "border-border text-muted-foreground"}`}>
            F{i}: [{t[0]},{t[1]})
          </span>
        ))}
      </div>

      <div className="rounded-md border px-3 py-1 text-sm">target friend's chair = <b className="tabular-nums">{answer ?? "…"}</b></div>

      <Legend items={[{ role: "sorted", label: "Just assigned" }, { role: "active", label: "Occupied" }]} />
    </div>
  );
}
