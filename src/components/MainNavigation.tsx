
import * as React from "react";
import { Link } from "react-router-dom";
import { Menu } from "lucide-react";
import { useIsMobile } from "@/hooks/use-mobile";

import {
  Sheet,
  SheetContent,
  SheetTrigger,
} from "@/components/ui/sheet";

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const MainNavigation: React.FC = () => {
  const isMobile = useIsMobile();
  const [isSheetOpen, setIsSheetOpen] = React.useState(false);

  // Navigation content sheet for both mobile and desktop
  const NavigationSheet = () => (
    <Sheet open={isSheetOpen} onOpenChange={setIsSheetOpen}>
      <SheetTrigger asChild>
        <button className="p-2" aria-label="Menu">
          <Menu size={24} />
        </button>
      </SheetTrigger>
      <SheetContent side="left" className="w-[280px] bg-background">
        <div className="space-y-4 mt-6">
          <Link 
            to="/sobre-nosotros" 
            className="block px-4 py-2 hover:bg-accent rounded-md"
            onClick={() => setIsSheetOpen(false)}
          >
            Sobre Nosotros
          </Link>
          
          <Accordion type="single" collapsible className="w-full">
            <AccordionItem value="servicios">
              <AccordionTrigger className="px-4">Servicios</AccordionTrigger>
              <AccordionContent className="pl-8 space-y-2">
                <Link 
                  to="/terapias/individual" 
                  className="block py-2 hover:underline"
                  onClick={() => setIsSheetOpen(false)}
                >
                  Terapia Individual
                </Link>
                <Link 
                  to="/terapias/pareja" 
                  className="block py-2 hover:underline"
                  onClick={() => setIsSheetOpen(false)}
                >
                  Terapia de Pareja
                </Link>
                <Link 
                  to="/terapias/adolescentes" 
                  className="block py-2 hover:underline"
                  onClick={() => setIsSheetOpen(false)}
                >
                  Terapia para Adolescentes
                </Link>
                <Link 
                  to="/terapias/online" 
                  className="block py-2 hover:underline"
                  onClick={() => setIsSheetOpen(false)}
                >
                  Terapia Online
                </Link>
                <Link 
                  to="/terapias/evaluacion" 
                  className="block py-2 hover:underline"
                  onClick={() => setIsSheetOpen(false)}
                >
                  Evaluación Psicológica
                </Link>
                <Link 
                  to="/terapias/mindfulness" 
                  className="block py-2 hover:underline"
                  onClick={() => setIsSheetOpen(false)}
                >
                  Mindfulness y Gestión del Estrés
                </Link>
              </AccordionContent>
            </AccordionItem>
          </Accordion>
        </div>
      </SheetContent>
    </Sheet>
  );

  return <NavigationSheet />;
};

export default MainNavigation;
