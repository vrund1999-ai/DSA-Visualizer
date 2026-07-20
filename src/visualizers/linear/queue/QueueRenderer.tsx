import { motion, AnimatePresence } from "framer-motion";
import type { RendererProps } from "@/core/types";
import type { QueueData } from "./types";

const ROLE_CLASS: Record<string, string> = {
  swapped: "bg-role-swapped text-white border-role-swapped",
  current: "bg-role-current text-white border-role-current",
  default: "bg-card border-border",
};

/** Horizontal queue; front on the left, rear on the right. */
export function QueueRenderer({ step }: RendererProps<QueueData>) {
  const { items } = step.data;
  const roleFor = (i: number): string =>
    step.highlights.find((h) => h.ref === i)?.role ?? "default";
  const rear = items.length - 1;

  return (
    <div className="flex h-full flex-col items-center justify-center gap-4">
      <div className="flex min-h-[3.5rem] items-center gap-1.5 overflow-x-auto">
        <AnimatePresence initial={false}>
          {items.map((v, i) => (
            <motion.div
              key={`${i}-${v}`}
              layout
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.8 }}
              transition={{ type: "spring", stiffness: 500, damping: 40 }}
              className="flex flex-col items-center gap-1"
            >
              <span className="h-4 text-[10px] font-semibold text-primary">
                {i === 0 ? "front" : i === rear ? "rear" : ""}
              </span>
              <span
                className={`flex h-10 w-12 items-center justify-center rounded-md border-2 text-sm font-medium tabular-nums transition-colors ${
                  ROLE_CLASS[roleFor(i)] ?? ROLE_CLASS.default
                }`}
              >
                {v}
              </span>
            </motion.div>
          ))}
        </AnimatePresence>
        {items.length === 0 && (
          <p className="text-sm text-muted-foreground">empty queue</p>
        )}
      </div>
    </div>
  );
}
