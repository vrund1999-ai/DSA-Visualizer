import { motion, AnimatePresence } from "framer-motion";
import type { RendererProps } from "@/core/types";
import type { StackData } from "./types";

const ROLE_CLASS: Record<string, string> = {
  swapped: "bg-role-swapped text-white border-role-swapped",
  current: "bg-role-current text-white border-role-current",
  default: "bg-card border-border",
};

/** Vertical stack; the top of the stack is drawn at the top. */
export function StackRenderer({ step }: RendererProps<StackData>) {
  const { items } = step.data;
  const roleFor = (i: number): string =>
    step.highlights.find((h) => h.ref === i)?.role ?? "default";
  const topIndex = items.length - 1;

  return (
    <div className="flex h-full flex-col items-center justify-end gap-3 pb-4">
      <div className="flex flex-col-reverse items-center gap-1.5">
        <AnimatePresence initial={false}>
          {items.map((v, i) => (
            <motion.div
              key={`${i}-${v}`}
              layout
              initial={{ opacity: 0, y: -12 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -12 }}
              transition={{ type: "spring", stiffness: 500, damping: 40 }}
              className="relative flex h-9 w-28 items-center justify-center rounded-md border-2 text-sm font-medium tabular-nums transition-colors"
            >
              <span
                className={`flex h-full w-full items-center justify-center rounded-[4px] border-2 ${
                  ROLE_CLASS[roleFor(i)] ?? ROLE_CLASS.default
                }`}
              >
                {v}
              </span>
              {i === topIndex && (
                <span className="absolute -right-12 text-xs font-semibold text-primary">
                  ← top
                </span>
              )}
            </motion.div>
          ))}
        </AnimatePresence>
        {items.length === 0 && (
          <p className="text-sm text-muted-foreground">empty stack</p>
        )}
      </div>
      <div className="h-1 w-32 rounded-full bg-border" />
    </div>
  );
}
