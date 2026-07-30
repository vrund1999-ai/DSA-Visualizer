import type { RendererProps } from "@/core/types";
import type { HappyData } from "./algorithm";

export function HappyStringRenderer({ step }: RendererProps<HappyData>) {
  const { n, k, generated, latest, answer } = step.data;

  return (
    <div className="flex h-full flex-col items-center justify-center gap-4">
      <span className="text-xs uppercase tracking-wide text-muted-foreground">
        n = {n} · k = {k}
      </span>

      <div className="flex flex-wrap justify-center gap-1.5">
        {generated.map((g, i) => {
          const isK = i === k - 1;
          const isLatest = g === latest && answer === null;
          return (
            <span
              key={i}
              className={`rounded-md border px-2 py-1 font-mono text-sm ${
                answer !== null && isK
                  ? "border-role-sorted bg-role-sorted/20"
                  : isLatest
                    ? "border-role-current bg-role-current text-white"
                    : "border-border text-muted-foreground"
              }`}
            >
              <span className="mr-1 text-[10px] text-muted-foreground">{i + 1}.</span>
              {g}
            </span>
          );
        })}
      </div>

      {answer !== null && (
        <div className="rounded-md border px-3 py-1 text-sm">
          k-th happy string = <b className="font-mono">{answer === "" ? '""' : answer}</b>
        </div>
      )}
    </div>
  );
}
