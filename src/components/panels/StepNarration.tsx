import { AnimatePresence, motion } from "framer-motion";
import type { BaseStep } from "@/core/types";

export function StepNarration({ step }: { step: BaseStep }) {
  return (
    <div className="rounded-lg border bg-card p-3">
      <div className="min-h-[2.5rem]">
        <AnimatePresence mode="wait">
          <motion.p
            key={step.id}
            initial={{ opacity: 0, y: 4 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -4 }}
            transition={{ duration: 0.15 }}
            className="text-sm leading-relaxed"
          >
            {step.explanation}
          </motion.p>
        </AnimatePresence>
      </div>
      {step.metrics && Object.keys(step.metrics).length > 0 && (
        <div className="mt-2 flex flex-wrap gap-4 border-t pt-2 text-xs tabular-nums text-muted-foreground">
          {Object.entries(step.metrics).map(([k, v]) => (
            <span key={k}>
              <span className="capitalize">{k}</span>:{" "}
              <span className="font-medium text-foreground">{v}</span>
            </span>
          ))}
        </div>
      )}
    </div>
  );
}
