import type { RendererProps } from "@/core/types";
import { ROLE_CLASS } from "@/leetcode/shared/viz";
import type { EggDropData } from "./algorithm";

export function EggDropRenderer({ step }: RendererProps<EggDropData>) {
  const { k, n, dp, cell, answer } = step.data;

  return (
    <div className="flex h-full flex-col items-center justify-center gap-4">
      <span className="text-xs uppercase tracking-wide text-muted-foreground">
        {k} egg(s) · {n} floor(s)
      </span>

      <div className="flex justify-center overflow-x-auto">
        <table className="border-separate border-spacing-1 text-xs">
          <thead>
            <tr>
              <th className="px-2 text-muted-foreground">m\e</th>
              {Array.from({ length: k }).map((_, e) => (
                <th key={e} className="size-8 text-center font-medium text-muted-foreground">{e + 1}</th>
              ))}
            </tr>
          </thead>
          <tbody>
            {dp.map((row, m) =>
              m === 0 ? null : (
                <tr key={m}>
                  <td className="px-2 text-center font-medium text-muted-foreground">{m}</td>
                  {Array.from({ length: k }).map((_, e) => {
                    const isCell = cell && cell[0] === m && cell[1] === e + 1;
                    const covered = (row[e + 1] ?? 0) >= n;
                    const role = isCell ? "current" : covered ? "sorted" : "active";
                    return (
                      <td key={e} className={`size-8 rounded border text-center tabular-nums ${ROLE_CLASS[role] ?? ROLE_CLASS.default}`}>
                        {row[e + 1] ?? 0}
                      </td>
                    );
                  })}
                </tr>
              ),
            )}
          </tbody>
        </table>
      </div>

      <div className="rounded-md border px-3 py-1 text-sm">
        fewest moves = <b className="tabular-nums">{answer ?? "…"}</b>
      </div>
    </div>
  );
}
