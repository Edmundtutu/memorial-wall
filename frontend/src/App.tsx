import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Index from "./pages/Index";
import Moments from "./pages/Moments";
import Quotes from "./pages/Quotes";
import AddMemory from "./pages/AddMemory";
import NotFound from "./pages/NotFound";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Routes>
          {/* Home page - no slug required */}
          <Route path="/" element={<Home />} />
          {/* Memorial routes - require slug */}
          <Route path="/memorial/:slug" element={<Index />} />
          <Route path="/memorial/:slug/moments" element={<Moments />} />
          <Route path="/memorial/:slug/quotes" element={<Quotes />} />
          <Route path="/memorial/:slug/add" element={<AddMemory />} />
          {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
