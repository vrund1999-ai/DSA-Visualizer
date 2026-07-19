import { useCallback, useEffect, useState } from "react";
import type { AnyVisualizerDefinition } from "./types";

export interface VisualizerInputState<TInput, TOptions> {
  input: TInput;
  options: TOptions;
  setInput: (input: TInput) => void;
  setOptions: (options: TOptions) => void;
  /** Produce a fresh default/random input (e.g. the Randomize button). */
  regenerate: () => void;
}

/**
 * Holds the input + options state for a visualizer. Re-seeds whenever the
 * definition changes (navigating to a different algorithm).
 */
export function useVisualizerInput<TInput, TOptions>(
  def: AnyVisualizerDefinition,
): VisualizerInputState<TInput, TOptions> {
  const [input, setInput] = useState<TInput>(() => def.makeDefaultInput());
  const [options, setOptions] = useState<TOptions>(() => def.defaultOptions);

  // Re-seed when switching algorithms.
  useEffect(() => {
    setInput(def.makeDefaultInput());
    setOptions(def.defaultOptions);
  }, [def]);

  const regenerate = useCallback(() => {
    setInput(def.makeDefaultInput());
  }, [def]);

  return { input, options, setInput, setOptions, regenerate };
}
