import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { Binary, Moon, Sun } from "lucide-react";
import { Button } from "@/components/ui/button";

function useTheme() {
  const [dark, setDark] = useState(
    () =>
      typeof document !== "undefined" &&
      document.documentElement.classList.contains("dark"),
  );
  useEffect(() => {
    document.documentElement.classList.toggle("dark", dark);
  }, [dark]);
  return { dark, toggle: () => setDark((d) => !d) };
}

export function AppHeader() {
  const { dark, toggle } = useTheme();
  return (
    <header className="sticky top-0 z-20 flex h-14 items-center justify-between border-b bg-background/80 px-4 backdrop-blur">
      <Link to="/" className="flex items-center gap-2 font-semibold">
        <Binary className="size-5 text-primary" />
        <span>DSA Visualizer</span>
      </Link>
      <Button
        variant="ghost"
        size="icon"
        onClick={toggle}
        title="Toggle theme"
        aria-label="Toggle theme"
      >
        {dark ? <Sun className="size-4" /> : <Moon className="size-4" />}
      </Button>
    </header>
  );
}
