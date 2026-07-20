import type { RendererProps } from "@/core/types";
import { cellRef, type NQueensData } from "./types";

const ROLE_CLASS: Record<string, string> = {
  current: "bg-role-current text-white",
  compared: "bg-role-compared text-white",
  swapped: "bg-role-swapped text-white",
  sorted: "bg-role-sorted text-white",
  target: "bg-role-sorted text-white",
};

/** Chessboard renderer for N-Queens; placed queens show ♛. */
export function BoardRenderer({ step }: RendererProps<NQueensData>) {
  const { n, queens } = step.data;
  const roleFor = (r: number, c: number): string | undefined =>
    step.highlights.find((h) => h.ref === cellRef(r, c))?.role;

  return (
    <div className="flex h-full items-center justify-center overflow-auto p-2">
      <div
        className="grid overflow-hidden rounded-md border-2 border-border"
        style={{ gridTemplateColumns: `repeat(${n}, minmax(0, 2.25rem))` }}
      >
        {Array.from({ length: n }).map((_, r) =>
          Array.from({ length: n }).map((__, c) => {
            const isQueen = r < queens.length && queens[r] === c;
            const role = roleFor(r, c);
            const light = (r + c) % 2 === 0;
            const base = light ? "bg-muted/40" : "bg-muted/70";
            return (
              <div
                key={cellRef(r, c)}
                className={`flex aspect-square items-center justify-center text-lg transition-colors ${
                  role ? ROLE_CLASS[role] : base
                }`}
              >
                {isQueen ? "♛" : role === "current" ? "·" : ""}
              </div>
            );
          }),
        )}
      </div>
    </div>
  );
}
