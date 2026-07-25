import { useCallback, useEffect, useRef, useState } from "react";

/** Playback rate at 1x, in steps per second. */
export const BASE_STEPS_PER_SECOND = 5;

/** Selectable playback multipliers, slowest first. */
export const SPEED_OPTIONS = [0.25, 0.5, 1, 1.5, 2] as const;

export const MIN_SPEED = SPEED_OPTIONS[0];
export const MAX_SPEED = SPEED_OPTIONS[SPEED_OPTIONS.length - 1];

export interface PlayerState {
  index: number; // current frame
  count: number; // total frames
  isPlaying: boolean;
  speed: number; // playback multiplier (1 = BASE_STEPS_PER_SECOND)
  atStart: boolean;
  atEnd: boolean;
}

export interface PlayerControls {
  play: () => void;
  pause: () => void;
  toggle: () => void;
  stepForward: () => void;
  stepBack: () => void;
  reset: () => void;
  seek: (i: number) => void;
  setSpeed: (s: number) => void;
}

const clamp = (v: number, lo: number, hi: number) =>
  Math.min(hi, Math.max(lo, v));

/**
 * Drives an index across [0, count). Playback uses a rescheduling timeout so
 * speed changes take effect immediately and tab throttling doesn't drift.
 * Regenerating `count` (new input) auto-resets to frame 0.
 *
 * `speed` is a multiplier over BASE_STEPS_PER_SECOND, not a raw frame rate.
 */
export function usePlayer(
  count: number,
  initialSpeed = 1,
): [PlayerState, PlayerControls] {
  const [index, setIndex] = useState(0);
  const [isPlaying, setIsPlaying] = useState(false);
  const [speed, setSpeed] = useState(initialSpeed);
  const timer = useRef<ReturnType<typeof setTimeout>>();

  // New dataset => reset to the start and stop.
  useEffect(() => {
    setIndex(0);
    setIsPlaying(false);
  }, [count]);

  const lastIndex = Math.max(0, count - 1);
  const atEnd = index >= lastIndex;
  const atStart = index <= 0;

  const stop = useCallback(() => {
    if (timer.current) clearTimeout(timer.current);
    timer.current = undefined;
  }, []);

  // Playback loop: schedule the next tick based on the current speed.
  useEffect(() => {
    if (!isPlaying) return;
    if (index >= lastIndex) {
      setIsPlaying(false);
      return;
    }
    const delay =
      1000 / (BASE_STEPS_PER_SECOND * clamp(speed, MIN_SPEED, MAX_SPEED));
    timer.current = setTimeout(
      () => setIndex((i) => clamp(i + 1, 0, lastIndex)),
      delay,
    );
    return stop;
  }, [isPlaying, index, lastIndex, speed, stop]);

  const controls: PlayerControls = {
    play: () => !atEnd && setIsPlaying(true),
    pause: () => setIsPlaying(false),
    toggle: () => (atEnd ? setIndex(0) : setIsPlaying((p) => !p)),
    stepForward: () => {
      setIsPlaying(false);
      setIndex((i) => clamp(i + 1, 0, lastIndex));
    },
    stepBack: () => {
      setIsPlaying(false);
      setIndex((i) => clamp(i - 1, 0, lastIndex));
    },
    reset: () => {
      setIsPlaying(false);
      setIndex(0);
    },
    seek: (i: number) => {
      setIsPlaying(false);
      setIndex(clamp(i, 0, lastIndex));
    },
    setSpeed,
  };

  return [{ index, count, isPlaying, speed, atStart, atEnd }, controls];
}
