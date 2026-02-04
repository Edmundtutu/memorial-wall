import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
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
          {/* Default memorial route - for now, redirect to eleanor-thompson */}
          <Route path="/" element={<Index slug="eleanor-thompson" />} />
          <Route path="/memorial/:slug" element={<Index />} />
          <Route path="/memorial/:slug/moments" element={<Moments />} />
          <Route path="/memorial/:slug/quotes" element={<Quotes />} />
          <Route path="/memorial/:slug/add" element={<AddMemory />} />
          {/* Legacy routes for backwards compatibility */}
          <Route path="/moments" element={<Moments slug="eleanor-thompson" />} />
          <Route path="/quotes" element={<Quotes slug="eleanor-thompson" />} />
          <Route path="/add" element={<AddMemory slug="eleanor-thompson" />} />
          {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
