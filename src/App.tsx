import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import Tours from "./pages/Tours";
import Melissa from "./pages/Melissa";
import Pallagorio from "./pages/Pallagorio";
import Umbriatico from "./pages/Umbriatico";
import SenatoreVini from "./pages/SenatoreVini";
import TenSteps from "./pages/TenSteps";
import Analytics from "./pages/Analytics";
import NotFound from "./pages/NotFound";
import Blog from "./pages/Blog";
import { LanguageProvider } from "./contexts/LanguageContext";
import SingleBlogPost from "./pages/SingleBlogPost";
import LeCastellaPost from "./pages/LeCastellaPost";
import DogLifePost from "./pages/DogLifePost";
import WaterOrSwampJuicePost from "./pages/WaterOrSwampJuicePost";
import CiroMap from "./pages/CiroMap";
import PucciPanePage from "./pages/places/pucci-pane";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <LanguageProvider>
        <Toaster />
        <Sonner />
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Index />} />
            <Route path="/tours" element={<Tours />} />
            <Route path="/tours/umbriatico" element={<Umbriatico />} />
            <Route path="/tours/melissa" element={<Melissa />} />
            <Route path="/tours/pallagorio" element={<Pallagorio />} />
            <Route path="/tours/senatore-vini" element={<SenatoreVini />} />
            <Route path="/guides/ten-steps" element={<TenSteps />} />
            <Route path="/blog" element={<Blog />} />
            <Route path="/blog/water-or-swamp-juice" element={<WaterOrSwampJuicePost />} />
            <Route path="/blog/hidden-gems-of-italian-wine" element={<SingleBlogPost />} />
            <Route path="/blog/le-castella" element={<LeCastellaPost />} />
            <Route path="/blog/dog-life-in-italy" element={<DogLifePost />} />
            <Route path="/ciro-map" element={<CiroMap />} />
            <Route path="/places/pucci-pane" element={<PucciPanePage />} />
            <Route path="/stat" element={<Analytics />} />
            {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
            <Route path="*" element={<NotFound />} />
          </Routes>
        </BrowserRouter>
      </LanguageProvider>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
