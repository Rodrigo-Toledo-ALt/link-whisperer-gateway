
import * as React from "react";
import { Link } from "react-router-dom";
import { Menu } from "lucide-react";
import { useIsMobile } from "@/hooks/use-mobile";
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
  navigationMenuTriggerStyle,
} from "@/components/ui/navigation-menu";
import {
  Drawer,
  DrawerContent,
  DrawerTrigger,
} from "@/components/ui/drawer";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

const MainNavigation: React.FC = () => {
  const isMobile = useIsMobile();
  const [isDrawerOpen, setIsDrawerOpen] = React.useState(false);

  // Navigation content drawer for both mobile and desktop
  const NavigationDrawer = () => (
    <Drawer open={isDrawerOpen} onOpenChange={setIsDrawerOpen}>
      <DrawerTrigger asChild>
        <button className="p-2" aria-label="Menu">
          <Menu size={24} />
        </button>
      </DrawerTrigger>
      <DrawerContent className="p-4">
        <div className="space-y-4">
          <Link 
            to="/sobre-nosotros" 
            className="block px-4 py-2 hover:bg-accent rounded-md"
            onClick={() => setIsDrawerOpen(false)}
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
                  onClick={() => setIsDrawerOpen(false)}
                >
                  Terapia Individual
                </Link>
                <Link 
                  to="/terapias/pareja" 
                  className="block py-2 hover:underline"
                  onClick={() => setIsDrawerOpen(false)}
                >
                  Terapia de Pareja
                </Link>
                <Link 
                  to="/terapias/adolescentes" 
                  className="block py-2 hover:underline"
                  onClick={() => setIsDrawerOpen(false)}
                >
                  Terapia para Adolescentes
                </Link>
                <Link 
                  to="/terapias/online" 
                  className="block py-2 hover:underline"
                  onClick={() => setIsDrawerOpen(false)}
                >
                  Terapia Online
                </Link>
                <Link 
                  to="/terapias/evaluacion" 
                  className="block py-2 hover:underline"
                  onClick={() => setIsDrawerOpen(false)}
                >
                  Evaluación Psicológica
                </Link>
                <Link 
                  to="/terapias/mindfulness" 
                  className="block py-2 hover:underline"
                  onClick={() => setIsDrawerOpen(false)}
                >
                  Mindfulness y Gestión del Estrés
                </Link>
              </AccordionContent>
            </AccordionItem>
          </Accordion>
        </div>
      </DrawerContent>
    </Drawer>
  );

  return <NavigationDrawer />;
};

export default MainNavigation;
