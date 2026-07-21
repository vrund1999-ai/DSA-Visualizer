import { useEffect, useState } from "react";
import { Link, NavLink } from "react-router-dom";
import { Binary, Moon, Sun } from "lucide-react";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

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

const navLinkClass = ({ isActive }: { isActive: boolean }) =>
  cn(
    "text-muted-foreground transition-colors hover:text-foreground",
    isActive && "font-medium text-foreground",
  );

export function AppHeader() {
  const { dark, toggle } = useTheme();
  return (
    <header className="sticky top-0 z-20 flex h-14 items-center justify-between border-b bg-background/80 px-4 backdrop-blur">
      <div className="flex items-center gap-6">
        <Link to="/" className="flex items-center gap-2 font-semibold">
          <Binary className="size-5 text-primary" />
          <span>DSA Visualizer</span>
        </Link>
        <nav className="flex items-center gap-4 text-sm">
          <NavLink to="/" end className={navLinkClass}>
            Visualizers
          </NavLink>
          <NavLink to="/leetcode" className={navLinkClass}>
            LeetCode
          </NavLink>
        </nav>
      </div>
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
