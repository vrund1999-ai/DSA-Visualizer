import "@testing-library/jest-dom/vitest";

// jsdom doesn't implement ResizeObserver, which Radix UI primitives (e.g. the
// Slider) rely on. Real browsers provide it; stub it for the test environment.
if (!("ResizeObserver" in globalThis)) {
  class ResizeObserver {
    observe() {}
    unobserve() {}
    disconnect() {}
  }
  globalThis.ResizeObserver =
    ResizeObserver as unknown as typeof globalThis.ResizeObserver;
}
