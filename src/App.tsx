import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import NotFound from "./pages/NotFound";
import MenuComida from "./pages/MenuComida";
import MenuBebida from "./pages/MenuBebida";
import { MessageCircleMore as Whatsapp, X as Close } from "lucide-react";
import { useState, useEffect } from "react";

const queryClient = new QueryClient();

const App = () => {
  const [showBubble, setShowBubble] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => setShowBubble(true), 600);
    return () => clearTimeout(timer);
  }, []);

  return (
    <QueryClientProvider client={queryClient}>
      <TooltipProvider>
        <Toaster />
        <Sonner />
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Index />} />
            <Route path="/carta/comida" element={<MenuComida />} />
            <Route path="/carta/bebida" element={<MenuBebida />} />
            {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
            <Route path="*" element={<NotFound />} />
          </Routes>
          {showBubble && (
            <div className="fixed bottom-20 right-5 z-50 bg-white shadow-lg rounded-full px-3 py-2 text-xs text-foreground flex items-center gap-2 animate-fade-in">
              <span>¿Quieres pedir para llevar?</span>
              <button aria-label="Cerrar" onClick={() => setShowBubble(false)} className="text-muted-foreground hover:text-foreground">
                <Close size={14} />
              </button>
            </div>
          )}
          <a
            href="https://wa.me/34643894895"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Contactar por WhatsApp"
            className="fixed bottom-5 right-5 z-50 inline-flex items-center justify-center w-12 h-12 rounded-full bg-green-500 text-white shadow-lg hover:bg-green-600 transition-colors"
          >
            <Whatsapp size={22} />
          </a>
        </BrowserRouter>
      </TooltipProvider>
    </QueryClientProvider>
  );
};

export default App;
