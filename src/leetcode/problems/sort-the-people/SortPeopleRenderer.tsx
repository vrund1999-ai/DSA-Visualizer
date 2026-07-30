import type { RendererProps } from "@/core/types";
import type { SortPeopleData } from "./algorithm";

export function SortPeopleRenderer({ step }: RendererProps<SortPeopleData>) {
  const { people, phase, answer } = step.data;
  const maxH = Math.max(1, ...people.map((p) => p.height));

  return (
    <div className="flex h-full flex-col items-center justify-center gap-4">
      <div className="flex items-end justify-center gap-3">
        {people.map((p, i) => (
          <div key={p.name} className="flex flex-col items-center gap-1">
            <span className="text-xs tabular-nums text-muted-foreground">{p.height}</span>
            <div
              className={`flex w-12 items-end justify-center rounded-t ${phase === "done" ? "bg-role-sorted" : "bg-role-active/50"}`}
              style={{ height: `${30 + (p.height / maxH) * 90}px` }}
            >
              <span className="pb-1 text-xs font-semibold text-foreground">{i + 1}</span>
            </div>
            <span className="text-sm font-medium">{p.name}</span>
          </div>
        ))}
      </div>

      {answer && (
        <div className="rounded-md border px-3 py-1 text-sm">
          order = <b>[{answer.join(", ")}]</b>
        </div>
      )}
    </div>
  );
}
