
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

const MainNavigation: React.FC = () => {
  const isMobile = useIsMobile();
  const [isDrawerOpen, setIsDrawerOpen] = React.useState(false);

  // Desktop navigation
  const DesktopNavigation = () => (
    <NavigationMenu className="hidden md:flex">
      <NavigationMenuList>
        <NavigationMenuItem>
          <Link to="/sobre-nosotros">
            <NavigationMenuLink className={navigationMenuTriggerStyle()}>
              Sobre Nosotros
            </NavigationMenuLink>
          </Link>
        </NavigationMenuItem>

        <NavigationMenuItem>
          <NavigationMenuTrigger>Servicios</NavigationMenuTrigger>
          <NavigationMenuContent>
            <div className="grid w-[400px] gap-3 p-4 md:w-[500px] md:grid-cols-2">
              <Link to="/terapias/individual" className="block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground">
                <div className="text-sm font-medium leading-none">Terapia Individual</div>
                <p className="text-sm leading-snug text-muted-foreground">
                  Atención personalizada en un espacio seguro
                </p>
              </Link>
              <Link to="/terapias/pareja" className="block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground">
                <div className="text-sm font-medium leading-none">Terapia de Pareja</div>
                <p className="text-sm leading-snug text-muted-foreground">
                  Mejora la comunicación y resuelve conflictos
                </p>
              </Link>
              <Link to="/terapias/adolescentes" className="block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground">
                <div className="text-sm font-medium leading-none">Terapia para Adolescentes</div>
                <p className="text-sm leading-snug text-muted-foreground">
                  Apoyo especializado para jóvenes
                </p>
              </Link>
              <Link to="/terapias/online" className="block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground">
                <div className="text-sm font-medium leading-none">Terapia Online</div>
                <p className="text-sm leading-snug text-muted-foreground">
                  Atención psicológica desde cualquier lugar
                </p>
              </Link>
              <Link to="/terapias/evaluacion" className="block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground">
                <div className="text-sm font-medium leading-none">Evaluación Psicológica</div>
                <p className="text-sm leading-snug text-muted-foreground">
                  Diagnóstico completo y plan de tratamiento
                </p>
              </Link>
              <Link to="/terapias/mindfulness" className="block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground">
                <div className="text-sm font-medium leading-none">Mindfulness y Gestión del Estrés</div>
                <p className="text-sm leading-snug text-muted-foreground">
                  Aprende técnicas para reducir la ansiedad
                </p>
              </Link>
            </div>
          </NavigationMenuContent>
        </NavigationMenuItem>
      </NavigationMenuList>
    </NavigationMenu>
  );

  // Mobile navigation
  const MobileNavigation = () => (
    <Drawer open={isDrawerOpen} onOpenChange={setIsDrawerOpen}>
      <DrawerTrigger asChild>
        <button className="p-2 md:hidden" aria-label="Menu">
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

  return (
    <>
      {isMobile ? <MobileNavigation /> : <DesktopNavigation />}
    </>
  );
};

export default MainNavigation;
