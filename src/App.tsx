import { Routes, Route } from "react-router-dom";
import { AppHeader } from "@/components/layout/AppHeader";
import { CatalogPage } from "@/pages/CatalogPage";
import { VisualizerPage } from "@/pages/VisualizerPage";
import { NotFoundPage } from "@/pages/NotFoundPage";

export default function App() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <AppHeader />
      <Routes>
        <Route path="/" element={<CatalogPage />} />
        {/* One dynamic route serves every visualizer — routing never changes
            when a new algorithm is added. */}
        <Route path="/v/:id" element={<VisualizerPage />} />
        <Route path="*" element={<NotFoundPage />} />
      </Routes>
    </div>
  );
}
